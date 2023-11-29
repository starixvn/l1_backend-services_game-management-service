import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GameConfigs, GameConfigsDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from '../common/models/result';

@Injectable()
export class GameConfigsService {
    constructor(
        @InjectModel(GameConfigs.name) private readonly gameConfigsModel: Model<GameConfigsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getGameConfigs(gameName: string): Promise<Result<GameConfigs>> {
        try {
            const data = (await this.gameConfigsModel.findOne({ name: gameName }).lean().exec()) as GameConfigs;
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, data);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateExchangeReload(gameName: string, exchangeReload: boolean): Promise<Result<any>> {
        try {
            await this.gameConfigsModel.updateOne({ name: gameName }, { exchangeReload: exchangeReload });
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateDisabledround(gameName: string, roundId: number): Promise<Result<any>> {
        try {
            await this.gameConfigsModel.updateOne({ name: gameName }, { disabledround: roundId });
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
