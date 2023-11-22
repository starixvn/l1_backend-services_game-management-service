import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { GameConfigsModule } from './game-configs/game-configs.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log('env', process.env.DATABASE_URI, process.env.DATABASE_NAME);
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
        CommonModule,
        GameConfigsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
