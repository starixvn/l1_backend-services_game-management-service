import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ErrorCodes, ErrorMessages, Result } from '../common/models/result';
import { SentryLogger } from '../common/providers';
import { ExchangeRates, ExchangeRatesDocument } from './schemas';

@Injectable()
export class ExchangeRateService {
    constructor(
        @InjectModel(ExchangeRates.name) private readonly model: Model<ExchangeRatesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getExchangeRates(): Promise<Result<ExchangeRates>> {
        try {
            const data = (await this.model
                .findOne({}, 'exId code', { sort: { exId: -1 } })
                .lean()
                .exec()) as ExchangeRates;

            Object.keys(data.code).forEach((key) => {
                data.code[key] = +data.code[key].toString();
            });

            return new Result(ErrorCodes.Success, ErrorMessages.Empty, data);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getExchangeRatesByExId(exId: number): Promise<Result<ExchangeRates>> {
        try {
            const data = (await this.model
                .findOne({ exId }, 'exId code', { sort: { exId: -1 } })
                .lean()
                .exec()) as ExchangeRates;

            Object.keys(data.code).forEach((key) => {
                data.code[key] = +data.code[key].toString();
            });

            return new Result(ErrorCodes.Success, ErrorMessages.Empty, data);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getExchangeRatesByExIds(exIds: number[]): Promise<Result<ExchangeRates[]>> {
        try {
            const data = (await this.model
                .find({ exId: { $in: exIds } }, 'exId code', { sort: { exId: -1 } })
                .lean()
                .exec()) as ExchangeRates[];

            data.forEach((item) => {
                Object.keys(item.code).forEach((key) => {
                    item.code[key] = +item.code[key].toString();
                });
            });

            return new Result(ErrorCodes.Success, ErrorMessages.Empty, data);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
