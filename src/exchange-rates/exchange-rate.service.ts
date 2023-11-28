import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ExchangeRates, ExchangeRatesDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class ExchangeRateService {
    constructor(
        @InjectModel(ExchangeRates.name) private readonly model: Model<ExchangeRatesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getExchangeRates() {
        try {
            return this.model
                .findOne({}, 'exId code', { sort: { exId: -1 } })
                .lean()
                .exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
