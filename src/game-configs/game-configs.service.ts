import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GameConfigs, GameConfigsDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class GameConfigsService {
    constructor(
        @InjectModel(GameConfigs.name) private readonly gameConfigsModel: Model<GameConfigsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getGameConfigs(gameName: string) {
        try {
            return this.gameConfigsModel.findOne({ name: gameName }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async updateExchangeReload(gameName: string, exchangeReload: boolean) {
        try {
            return await this.gameConfigsModel.updateOne({ name: gameName }, { exchangeReload: exchangeReload });
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async updateDisabledround(gameName: string, roundId: number) {
        try {
            return await this.gameConfigsModel.updateOne({ name: gameName }, { disabledround: roundId });
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
