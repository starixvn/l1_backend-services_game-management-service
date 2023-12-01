import { Controller, Get, Query } from '@nestjs/common';
import { ArchiveStatusService } from './archive-status.service';
import { ArchiveStatuses } from './schemas';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { ArchiveStatusesResponse } from './models/archive-statuses-response';

@Controller('archive-status')
export class ArchiveStatusController {
    constructor(private readonly service: ArchiveStatusService) {}

    @Get('')
    @ApiOkResponse({ type: ArchiveStatusesResponse })
    async getArchiveStatus(@Query('gameName') gameName: string): Promise<Result<ArchiveStatuses>> {
        return this.service.getArchiveStatus(gameName);
    }
}
