import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from '../common/models/result';
import { DataHandler } from '../common/providers';
import { JackpotConfig, JackpotConfigDocument } from './schemas';

@Injectable()
export class JackpotConfigService {
    constructor(
        @InjectModel(JackpotConfig.name) private readonly jackpotConfigModel: Model<JackpotConfigDocument>,
        @Inject(DataHandler) private readonly dataHandler: DataHandler,
    ) {}

    async getJackpotConfig(gameId: number): Promise<Result<JackpotConfig[]>> {
        const execution = this.jackpotConfigModel.find({ gameId, enabled: true }).lean().exec();

        const result = await this.dataHandler.getData<JackpotConfig[]>(execution);
        if (!result.data) {
            throw new NotFoundException('Jackpot configuration not found');
        }
        return result;
    }

    async getAll(): Promise<Result<JackpotConfig[]>> {
        const execution = this.jackpotConfigModel.find({ enabled: true }).lean().exec();
        return this.dataHandler.getData<JackpotConfig[]>(execution);
    }
}
