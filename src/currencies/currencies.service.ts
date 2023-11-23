import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Currencies, CurrenciesDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class CurrenciesService {
    constructor(
        @InjectModel(Currencies.name) private readonly CurrenciesModel: Model<CurrenciesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencies() {
        try {
            return this.CurrenciesModel.find({ enabled: true }, { _id: 0 }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
