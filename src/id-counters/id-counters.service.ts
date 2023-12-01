import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IdCounters, IdCountersDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from '../common/models/result';

@Injectable()
export class IdCountersService {
    constructor(
        @InjectModel(IdCounters.name) private readonly IdCountersModel: Model<IdCountersDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async increaseIdCounter(gameName: string, modelNamePostFix: string): Promise<Result<number>> {
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
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, latestCounter?.c);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getLatestId(gameName: string, modelNamePostFix: string): Promise<Result<number>> {
        try {
            const latestCounter = await this.IdCountersModel.findOne({ m: `${gameName}_${modelNamePostFix}` }, 'c')
                .lean()
                .exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, latestCounter?.c ?? 0);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateLatestId(gameName: string, modelNamePostFix: string, id: number): Promise<Result<IdCounters>> {
        try {
            const filter = { m: `${gameName}_${modelNamePostFix}`, f: 'id' };
            const updates = { $set: { c: id } };
            const updateOptions = { setDefaultsOnInsert: true, upsert: true };
            const latestIdCounter = await this.IdCountersModel.updateOne(filter, updates, updateOptions).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, latestIdCounter);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
