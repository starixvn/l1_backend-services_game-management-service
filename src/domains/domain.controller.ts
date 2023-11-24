import { Controller, Get, Query } from '@nestjs/common';
import { DomainService } from './domain.service';

@Controller('domain')
export class DomainController {
    constructor(private readonly service: DomainService) {}

    @Get('get-domains')
    async getDomain() {
        return this.service.getDomains();
    }
}
