import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Promotion, PromotionDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class PromotionService {
    constructor(
        @InjectModel(Promotion.name) private readonly model: Model<PromotionDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getPromotion(gameId: number) {
        try {
            return this.model.findOne({ gameId, status: 'enabled' }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
