import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IdCountersService } from './id-counters.service';
import { IncreaseIdCounterRequest, UpdateLatestIdCounterRequest } from './models';

@Controller('id-counters')
export class IdCountersController {
    constructor(private readonly service: IdCountersService) {}

    @Post()
    async increaseIdCounter(@Body() body: IncreaseIdCounterRequest) {
        return this.service.increaseIdCounter(body.gameName, body.modelName);
    }

    @Get('latest-id')
    async getLatestId(@Query('gameName') gameName: string, @Query('modelName') modelName: string) {
        return this.service.getLatestId(gameName, modelName);
    }

    @Post('latest-id')
    async updateLatestId(@Body() body: UpdateLatestIdCounterRequest) {
        return this.service.updateLatestId(body.gameName, body.modelName, body.id);
    }
}
