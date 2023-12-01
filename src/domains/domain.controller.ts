import { Controller, Get } from '@nestjs/common';
import { DomainService } from './domain.service';
import { Domains } from './schemas';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { DomainViewModel } from './models/domain-viewmodel';

@Controller('domain')
export class DomainController {
    constructor(private readonly service: DomainService) {}

    @Get('')
    @ApiOkResponse({ type: DomainViewModel })
    async getDomain(): Promise<Result<Domains>> {
        return this.service.getDomains();
    }
}
