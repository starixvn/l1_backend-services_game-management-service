import { CacheModule } from '@nestjs/cache-manager';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AggregationModule } from './aggregation/aggregation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchiveStatusModule } from './archive-statuses/archive-status.module';
import { CommonModule } from './common/common.module';
import configuration from './config/configuration';
import { CurrenciesModule } from './currencies/currencies.module';
import { CurrencyGroupGamesModule } from './currency-group-games/currency-group-games.module';
import { CurrencyGroupsModule } from './currency-groups/currency-groups.module';
import { DomainModule } from './domains/domain.module';
import { ExchangeRateModule } from './exchange-rates/exchange-rate.module';
import { GameConfigsModule } from './game-configs/game-configs.module';
import { GameNotificationModule } from './game-notifications/game-notification.module';
import { IdCountersModule } from './id-counters/id-counters.module';
import { JackpotsModule } from './jackpots/jackpots.module';
import { AuthenticateMiddleware } from './middlewares/authenticate.middleware';
import { BotConfigModule } from './bot-configs/bot-config.module';
import { JackpotConfigModule } from './jackpot-configs/jackpot-config.module';
import { NotificationModule } from './notifications/notification.module';
import { OperatorConfigModule } from './operator-configs/operator-config.module';
import { PromotionModule } from './promotions/promotion.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                ...configService.get('database'),
            }),
            inject: [ConfigService],
        }),
        JwtModule.register({}),
        CommonModule,
        CurrenciesModule,
        CurrencyGroupGamesModule,
        CurrencyGroupsModule,
        GameConfigsModule,
        ArchiveStatusModule,
        PromotionModule,
        OperatorConfigModule,
        DomainModule,
        UsersModule,
        NotificationModule,
        JackpotsModule,
        ExchangeRateModule,
        IdCountersModule,
        AggregationModule,
        BotConfigModule,
        JackpotConfigModule,
        CacheModule.register(),
        GameNotificationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthenticateMiddleware).exclude('/', 'api(.*)').forRoutes('*');
    }
}
