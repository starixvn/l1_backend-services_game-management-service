import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CurrencyGroupGames, CurrencyGroupGamesDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from 'src/common/models/result';

@Injectable()
export class CurrencyGroupGamesService {
    constructor(
        @InjectModel(CurrencyGroupGames.name) private readonly CurrencyGroupGamesModel: Model<CurrencyGroupGamesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencyGroupGamesByGameId(gameId: number): Promise<Result<CurrencyGroupGames[]>> {
        try {
            const currencyGroupGames = await this.CurrencyGroupGamesModel.find({ gameId, enabled: true }, { _id: 0 }).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, currencyGroupGames);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
