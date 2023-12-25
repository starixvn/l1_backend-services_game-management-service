import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import * as jwksClient from 'jwks-rsa';
import { SentryLogger } from '../common/providers';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
    @Inject(ConfigService) private readonly config: ConfigService;
    @Inject(SentryLogger) private readonly logger: SentryLogger;
    @Inject(JwtService) private readonly jwtService: JwtService;

    private readonly tokenType = 'Bearer';
    private readonly UnauthorizedCode = 401;

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('auth-------');
            const token = this.getBearerToken(req);
            if (token == null) {
                this.sendError(res, this.UnauthorizedCode);
                return;
            }

            const publicKey = await this.getPublicKey(token);
            const isValid = await this.verifyToken(token, publicKey);

            if (isValid) {
                next();
            } else {
                console.log('invalid', token);
                this.sendError(res, this.UnauthorizedCode);
            }
        } catch (ex) {
            console.log(`AuthenticateMiddleware ${ex.message} ${this.getBearerToken(req)}`);
            this.logger.error(`AuthenticateMiddleware ${ex.message} ${this.getBearerToken(req)}`);
            this.logger.error(ex);
            this.sendError(res, this.UnauthorizedCode);
        }
    }

    getBearerToken(req: Request): string {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return null;
        }

        const parts = authorization.split(' ');
        if (parts[0] === this.tokenType) {
            return parts[1];
        }

        return null;
    }

    async verifyToken(token: string, publicKey: string): Promise<any> {
        const verifyOptions: JwtVerifyOptions = {
            ignoreNotBefore: true,
            audience: this.config.get('auth.audiences'),
            publicKey,
            issuer: this.config.get('auth.validIssuers'),
        };

        return this.jwtService.verifyAsync(token, verifyOptions);
    }

    async getPublicKey(token: string): Promise<string> {
        const pKey = `-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtLXXilbe/4Vybt89ufTJ
        I6isY4unm4xO6ickNa/p6ftC9Zh1kx0C8dVk+sYnn/5NlUSJj5tGFhjHBHfSRrbL
        TNULvJiPrIQ3UjauXgt9sDBKCiZq26BFijBtkeOBAS4Og7SCFkAKkkSR2anFMfsV
        q5xZZYcsjVWA/OzCkXTkHZygUi6nR8Hy8sZE9S5QHvFCG6oCjxiX4Nx2vLFw12W7
        37PREO8I7XY9Rcucoa5YcRsY4irT/5I8vcN/WCzd6vVeVndDOB96nmZ0IKAL5plS
        kf43km6DZcn0mequcGgsRhIAs+ilCoc4sACLe2CvYBHmrJAiC252ieMv+LsGi+Bb
        GwIDAQAB
        -----END PUBLIC KEY-----`;

        return pKey;
    }

    sendError(res: Response, code: number): void {
        res.writeHead(code, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ errorCode: code }));
    }
}
