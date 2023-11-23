import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CurrencyGroupGames, CurrencyGroupGamesDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class CurrencyGroupGamesService {
    constructor(
        @InjectModel(CurrencyGroupGames.name) private readonly CurrencyGroupGamesModel: Model<CurrencyGroupGamesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencyGroupGamesByGameId(gameId: number) {
        try {
            return this.CurrencyGroupGamesModel.find({ gameId, enabled: true }, { _id: 0 }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
