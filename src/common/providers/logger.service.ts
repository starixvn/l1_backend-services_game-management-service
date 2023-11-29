import { Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';
import { SeverityLevel } from '@sentry/node';

interface SentryConfig {
    dsn: string;
    env: string;
    release: string;
    logIdentifier: string;
}

const Severity = {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Log: 'log',
    Info: 'info',
    Debug: 'debug',
};

@Injectable()
export class SentryLogger implements LoggerService {
    private readonly config: SentryConfig;

    constructor(private readonly configService: ConfigService) {
        this.config = this.configService.get<SentryConfig>('sentry');
        Sentry.init({
            dsn: this.config.dsn,
            environment: this.config.env,
            maxValueLength: 5000,
            release: this.config.release ? `game-management-service@${this.config.release}` : '',
        });

        Sentry.captureMessage(`Logger started at ${new Date()}`);
    }

    log(message: string, context = Severity.Info as SeverityLevel) {
        Sentry.captureMessage(message, context);
    }

    error(exception: any) {
        if (
            typeof exception === 'string' ||
            exception instanceof String ||
            (exception && exception.message == null && exception.stack == null)
        ) {
            this.log(`${this.config.logIdentifier} ${exception}`, Severity.Error as SeverityLevel);
        } else {
            if (!exception) {
                exception = `Exception is null at ${new Date()}`;
            }

            Sentry.captureException(exception);
        }
    }

    warn(message: string) {
        Sentry.captureMessage(`${this.config.logIdentifier} ${message}`, Severity.Warning as SeverityLevel);
    }

    debug?(message: string) {
        Sentry.captureMessage(`${this.config.logIdentifier} ${message}`, Severity.Debug as SeverityLevel);
    }

    verbose?(message: string) {
        Sentry.captureMessage(`${this.config.logIdentifier} ${message}`, Severity.Log as SeverityLevel);
    }

    composeBeforeCallMessage(session, params) {
        const characterName = session && session.characterName ? `\n\tCharacter: ${session.characterName} ` : '';
        return `Before Action at ${new Date()}: \n\tSession: ${JSON.stringify(session)} ${characterName}\n\tParams:${JSON.stringify(
            params,
        )}`;
    }

    logAfterSendToApi(action, params, result, beforeMessage: string, logLevel) {
        const messages = [
            `Account ${params.SiteId}_${params.PlayerId} performs ${action} at ${new Date()}`,
            '',
            beforeMessage,
            `\nAction Result: ${JSON.stringify(result)}`,
        ];

        const joinedMessages = messages.join('\n');
        Sentry.captureMessage(joinedMessages, logLevel);
    }
}
