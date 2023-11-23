import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ArchiveStatuses, ArchiveStatusesDocument } from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class ArchiveStatusService {
    constructor(
        @InjectModel(ArchiveStatuses.name) private readonly model: Model<ArchiveStatusesDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getArchiveStatus(gameName: string) {
        try {
            return this.model.findOne({ name: gameName }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
