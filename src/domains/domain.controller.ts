import { Controller, Get } from '@nestjs/common';
import { DomainService } from './domain.service';
import { Domains } from './schemas';
import { Result, ResultDecorator } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('domain')
export class DomainController {
    constructor(private readonly service: DomainService) {}

    @Get('')
    @ApiOkResponse({ type: ResultDecorator<Domains>(Domains) })
    async getDomain(): Promise<Result<Domains>> {
        return this.service.getDomains();
    }
}
