import { Controller, Get, Query } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';

@Controller('exchange-rates')
export class ExchangeRateController {
    constructor(private readonly service: ExchangeRateService) {}

    @Get('get-exchange-rates')
    async getPromotion() {
        return this.service.getExchangeRates();
    }
}
