import { Controller, Get } from '@nestjs/common';
import { CurrencyGroupsService } from './currency-groups.service';

@Controller('currency-groups')
export class CurrencyGroupsController {
    constructor(private readonly service: CurrencyGroupsService) {}

    @Get()
    async getCurrencyGroups() {
        return this.service.getCurrencyGroups();
    }
}
