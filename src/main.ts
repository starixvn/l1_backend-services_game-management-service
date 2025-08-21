import * as dotenv from 'dotenv';
dotenv.config();

import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { AppModule } from './app.module';
import { SentryLogger } from './common/providers/logger.service';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ caseSensitive: false }));

    app.useLogger(app.get(SentryLogger));
    app.register(helmet, { contentSecurityPolicy: false, frameguard: false });
    app.useStaticAssets({
        root: join(__dirname, '..', 'public'),
    });

    await app.init();
    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('Game Management Service')
        .setDescription('The Game Management Service description')
        .setVersion('1.0')
        .addTag('game-management-service')
        .build();

    if (process.env.NODE_ENV !== 'PROD') {
        const document = SwaggerModule.createDocument(app, config);
        const apiDirectoryPath = './api-client';
        if (!existsSync(apiDirectoryPath)) {
            mkdirSync(apiDirectoryPath);
        }
        writeFileSync(`${apiDirectoryPath}/api-spec.json`, JSON.stringify(document));
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(process.env.PORT || 3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
