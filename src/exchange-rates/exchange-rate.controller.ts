import { Controller, Get } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRates } from './schemas';
import { Result } from '../common/models/result';

@Controller('exchange-rates')
export class ExchangeRateController {
    constructor(private readonly service: ExchangeRateService) {}

    @Get('')
    async getExchangeRates(): Promise<Result<ExchangeRates>> {
        return this.service.getExchangeRates();
    }
}
