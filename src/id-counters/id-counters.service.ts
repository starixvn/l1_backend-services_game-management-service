import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IdCounters, IdCountersDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class IdCountersService {
    constructor(
        @InjectModel(IdCounters.name) private readonly IdCountersModel: Model<IdCountersDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async increaseIdCounter(gameName: string, modelNamePostFix: string) {
        try {
            const filter = { m: `${gameName}_${modelNamePostFix}`, f: 'id' };
            const increment = { $inc: { c: 1 } };
            const updateOptions = {
                new: true,
                lean: true,
                setDefaultsOnInsert: true,
                upsert: true,
                fields: { c: 1 },
            };
            const latestCounter = await this.IdCountersModel.findOneAndUpdate(filter, increment, updateOptions).lean().exec();
            return latestCounter?.c;
        } catch (error) {
            this.logger.error(error);
            return 0;
        }
    }

    async getLatestId(gameName: string, modelNamePostFix: string) {
        try {
            const latestCounter = await this.IdCountersModel.findOne({ m: `${gameName}_${modelNamePostFix}` }, 'c')
                .lean()
                .exec();
            return latestCounter?.c ?? 0;
        } catch (error) {
            this.logger.error(error);
            return 0;
        }
    }

    async updateLatestId(gameName: string, modelNamePostFix: string, id: number) {
        try {
            const filter = { m: `${gameName}_${modelNamePostFix}`, f: 'id' };
            const updates = { $set: { c: id } };
            const updateOptions = { setDefaultsOnInsert: true, upsert: true };
            return this.IdCountersModel.updateOne(filter, updates, updateOptions).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
