import { Controller, Get } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRates } from './schemas';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { ExchangeRateResponse } from './models/exchange-rate-response';

@Controller('exchange-rates')
export class ExchangeRateController {
    constructor(private readonly service: ExchangeRateService) {}

    @Get('')
    @ApiOkResponse({ type: ExchangeRateResponse })
    async getExchangeRates(): Promise<Result<ExchangeRates>> {
        return this.service.getExchangeRates();
    }
}
