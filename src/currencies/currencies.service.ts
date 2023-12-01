import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Currencies, CurrenciesDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from '../common/models/result';

@Injectable()
export class CurrenciesService {
    constructor(
        @InjectModel(Currencies.name) private readonly CurrenciesModel: Model<CurrenciesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencies(): Promise<Result<Currencies[]>> {
        try {
            const currencies = await this.CurrenciesModel.find({ enabled: true }, { _id: 0 }).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, currencies);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
