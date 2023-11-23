import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CurrencyGroups, CurrencyGroupsDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class CurrencyGroupsService {
    constructor(
        @InjectModel(CurrencyGroups.name) private readonly CurrencyGroupsModel: Model<CurrencyGroupsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getCurrencyGroups() {
        try {
            return this.CurrencyGroupsModel.find({ enabled: true }, { _id: 0 }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
