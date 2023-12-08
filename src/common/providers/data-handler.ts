import { Inject, Injectable } from '@nestjs/common';
import { FilterQuery, Model, QueryOptions, UpdateQuery, Document } from 'mongoose';
import { ErrorCodes, ErrorMessages, Result } from '../models/result';
import { SentryLogger } from './logger.service';

@Injectable()
export class DataHandler {
    private readonly logger: SentryLogger;

    constructor(@Inject(SentryLogger) logger: SentryLogger) {
        this.logger = logger;
    }

    async getData<T>(promise: Promise<T>): Promise<Result<T>> {
        try {
            const result = await promise;
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, result);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateData<T>(
        model: Model<any>,
        filter: FilterQuery<Document>,
        updates: UpdateQuery<Document>,
        options?: QueryOptions,
    ): Promise<Result<T>> {
        try {
            const result = await model.updateOne(filter, updates, options).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, result);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
