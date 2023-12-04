import { Controller, Get } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CurrenciesResponse } from './models/currencies-response';

@Controller('currencies')
export class CurrenciesController {
    constructor(private readonly service: CurrenciesService) {}

    @Get()
    @ApiOkResponse({ type: CurrenciesResponse })
    async getCurrencies() {
        return this.service.getCurrencies();
    }
}
