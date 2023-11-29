import { Controller, Get, Query } from '@nestjs/common';
import { ArchiveStatusService } from './archive-status.service';
import { ArchiveStatuses } from './schemas';
import { Result } from '../common/models/result';

@Controller('archive-status')
export class ArchiveStatusController {
    constructor(private readonly service: ArchiveStatusService) {}

    @Get('')
    async getArchiveStatus(@Query('gameName') gameName: string): Promise<Result<ArchiveStatuses>> {
        return this.service.getArchiveStatus(gameName);
    }
}
