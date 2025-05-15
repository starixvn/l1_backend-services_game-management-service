import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotConfigController } from './bot-config.controller';
import { BotConfigService } from './bot-config.service';
import { BotConfigs, BotConfigSchema } from './schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: BotConfigs.name, schema: BotConfigSchema, collection: 'bot_configs' }])],
    controllers: [BotConfigController],
    providers: [BotConfigService],
    exports: [BotConfigService],
})
export class BotConfigModule {}
