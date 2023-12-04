import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IdCountersService } from './id-counters.service';
import { IdCounterResponse, IncreaseIdCounterRequest, UpdateLatestIdCounterRequest } from './models';
import { ApiOkResponse } from '@nestjs/swagger';
import { NumericalResult } from 'src/common/models/result';

@Controller('id-counters')
export class IdCountersController {
    constructor(private readonly service: IdCountersService) {}

    @Post()
    @ApiOkResponse({ type: NumericalResult })
    async increaseIdCounter(@Body() body: IncreaseIdCounterRequest) {
        return this.service.increaseIdCounter(body.gameName, body.modelName);
    }

    @Get('latest-id')
    @ApiOkResponse({ type: NumericalResult })
    async getLatestId(@Query('gameName') gameName: string, @Query('modelName') modelName: string) {
        return this.service.getLatestId(gameName, modelName);
    }

    @Post('latest-id')
    @ApiOkResponse({ type: IdCounterResponse })
    async updateLatestId(@Body() body: UpdateLatestIdCounterRequest) {
        return this.service.updateLatestId(body.gameName, body.modelName, body.id);
    }
}
