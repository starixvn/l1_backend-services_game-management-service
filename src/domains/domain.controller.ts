import { Controller, Get } from '@nestjs/common';
import { DomainService } from './domain.service';
import { Domains } from './schemas';
import { Result } from '../common/models/result';

@Controller('domain')
export class DomainController {
    constructor(private readonly service: DomainService) {}

    @Get('')
    async getDomain(): Promise<Result<Domains>> {
        return this.service.getDomains();
    }
}
