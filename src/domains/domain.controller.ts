import { Controller, Get } from '@nestjs/common';
import { DomainService } from './domain.service';

@Controller('domain')
export class DomainController {
    constructor(private readonly service: DomainService) {}

    @Get('')
    async getDomain() {
        return this.service.getDomains();
    }
}
