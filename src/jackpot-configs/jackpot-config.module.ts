import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JackpotConfigController } from './jackpot-config.controller';
import { JackpotConfigService } from './jackpot-config.service';
import { JackpotConfig, JackpotConfigSchema } from './schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: JackpotConfig.name, schema: JackpotConfigSchema, collection: 'jackpot_configs' }])],
    controllers: [JackpotConfigController],
    providers: [JackpotConfigService],
    exports: [JackpotConfigService],
})
export class JackpotConfigModule {}
