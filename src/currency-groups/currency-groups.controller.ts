import { Controller, Get } from '@nestjs/common';
import { CurrencyGroupsService } from './currency-groups.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CurrencyGroupsResponse } from './models/currency-groups-response';

@Controller('currency-groups')
export class CurrencyGroupsController {
    constructor(private readonly service: CurrencyGroupsService) {}

    @Get()
    @ApiOkResponse({ type: CurrencyGroupsResponse })
    async getCurrencyGroups() {
        return this.service.getCurrencyGroups();
    }
}
