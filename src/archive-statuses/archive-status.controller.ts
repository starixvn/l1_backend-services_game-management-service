import { Controller, Get, Query } from '@nestjs/common';
import { ArchiveStatusService } from './archive-status.service';

@Controller('archive-status')
export class ArchiveStatusController {
    constructor(private readonly service: ArchiveStatusService) {}

    @Get('get-archive-status')
    async getArchiveStatus(@Query('gameName') gameName: string) {
        return this.service.getArchiveStatus(gameName);
    }
}
