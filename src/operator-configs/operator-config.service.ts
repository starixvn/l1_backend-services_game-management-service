import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { OperatorConfig, OperatorConfigDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class OperatorConfigService {
    constructor(
        @InjectModel(OperatorConfig.name) private readonly model: Model<OperatorConfigDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getGameSiteExclusions() {
        try {
            return await this.model.find({ type: 'game_site_exclusions' }, 'partnerId type value').lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
