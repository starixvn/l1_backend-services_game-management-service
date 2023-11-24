import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Domains, DomainsDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class DomainService {
    constructor(
        @InjectModel(Domains.name) private readonly model: Model<DomainsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getDomains() {
        try {
            return this.model.findOne({}).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
