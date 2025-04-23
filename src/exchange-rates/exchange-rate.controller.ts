import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Result } from '../common/models/result';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateResponse } from './models/exchange-rate-response';
import { ExchangeRates } from './schemas';

@ApiTags('exchange-rates')
@Controller('exchange-rates')
export class ExchangeRateController {
    constructor(private readonly service: ExchangeRateService) {}

    @Get('')
    @ApiOperation({ operationId: 'getExchangeRates' })
    @ApiOkResponse({ type: ExchangeRateResponse })
    async getExchangeRates(): Promise<Result<ExchangeRates>> {
        return this.service.getExchangeRates();
    }

    @Get(':exId')
    @ApiOperation({ operationId: 'getExchangeRatesByExId' })
    @ApiOkResponse({ type: ExchangeRateResponse })
    async getExchangeRatesByExId(@Param('exId') exId: number): Promise<Result<ExchangeRates>> {
        return this.service.getExchangeRatesByExId(exId);
    }

    @Get('rates')
    @ApiOperation({ operationId: 'getExchangeRatesByExIds' })
    @ApiOkResponse({ type: ExchangeRateResponse })
    async getExchangeRatesByExIds(@Query('exIds') exIds: number[]): Promise<Result<ExchangeRates[]>> {
        return this.service.getExchangeRatesByExIds(exIds);
    }
}
