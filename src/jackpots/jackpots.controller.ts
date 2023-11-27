import { Body, Controller, Get, Post, ParseIntPipe, Query } from '@nestjs/common';
import { JackpotsService } from './jackpots.service';
import { ContributeJackpotRequest, CreatePoolRequest, HitJackpotRequest } from './models';

@Controller('jackpots')
export class JackpotsController {
    constructor(private readonly service: JackpotsService) {}

    @Get('pools')
    async getPools(@Query('gameId', ParseIntPipe) gameId: number) {
        return this.service.getPools(gameId);
    }

    @Post('pools')
    async createPool(@Body() body: CreatePoolRequest) {
        return this.service.createNewPool(body);
    }

    @Get('pools/total-existing-pools')
    async getTotalExistingPools(@Query('gameId', ParseIntPipe) gameId: number, @Query('pool', ParseIntPipe) pool: number) {
        return this.service.getTotalExistingPools(gameId, pool);
    }

    @Get('latest-roundid')
    async getLatestPool(@Query('gameId', ParseIntPipe) gameId: number) {
        return this.service.getLatestRoundId(gameId);
    }

    @Get('winners')
    async getJackpotWinners(
        @Query('gameId', ParseIntPipe) gameId: number,
        @Query('page', ParseIntPipe) page: number,
        @Query('pageSize', ParseIntPipe) pageSize: number,
    ) {
        return this.service.getJackpotWinners(gameId, page, pageSize);
    }

    @Post('contribute')
    async contributeJackpot(@Body() body: ContributeJackpotRequest) {
        return this.service.contributeJackpot(body);
    }

    @Post('hit')
    async hitJackpot(@Body() body: HitJackpotRequest) {
        return this.service.hitJackpot(body);
    }
}
