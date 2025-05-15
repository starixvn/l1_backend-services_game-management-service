import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BotConfigs, BotConfigDocument } from './schemas';
import { DataHandler } from '../common/providers';
import { Result } from '../common/models/result';

@Injectable()
export class BotConfigService {
    constructor(
        @InjectModel(BotConfigs.name) private readonly botConfigModel: Model<BotConfigDocument>,
        @Inject(DataHandler) private readonly dataHandler: DataHandler,
    ) {}

    async getBotConfig(gameId: number): Promise<Result<BotConfigs[]>> {
        const execution = this.botConfigModel.find({ gameId, enabled: true }, { _id: 0 }).lean().exec();

        const result = await this.dataHandler.getData(execution);
        if (!result.data) {
            throw new NotFoundException('Bot configuration not found');
        }
        return result;
    }
}
