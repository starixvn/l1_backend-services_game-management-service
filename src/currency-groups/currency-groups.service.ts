import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CurrencyGroups, CurrencyGroupsDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from '../common/models/result';

@Injectable()
export class CurrencyGroupsService {
    constructor(
        @InjectModel(CurrencyGroups.name) private readonly CurrencyGroupsModel: Model<CurrencyGroupsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencyGroups(): Promise<Result<CurrencyGroups[]>> {
        try {
            const currencyGroups = await this.CurrencyGroupsModel.find({ enabled: true }, { _id: 0 }).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, currencyGroups);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
