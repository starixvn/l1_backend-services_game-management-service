import { Controller, Get } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';

@Controller('currencies')
export class CurrenciesController {
    constructor(private readonly service: CurrenciesService) {}

    @Get()
    async getCurrencies() {
        return this.service.getCurrencies();
    }
}
