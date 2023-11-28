import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { GameConfigsService } from './game-configs.service';

@Controller('game-configs')
export class GameConfigsController {
    constructor(private readonly service: GameConfigsService) {}

    @Get('')
    async getGameConfigs(@Query('gameName') gameName: string) {
        return this.service.getGameConfigs(gameName);
    }

    @Post('exchange-reload')
    @ApiParam({ name: 'gameName', type: 'string' })
    @ApiParam({ name: 'exchangeReload', type: 'boolean' })
    async updateExchangeReload(@Body() body) {
        return this.service.updateExchangeReload(body.gameName, body.exchangeReload);
    }

    @Post('disabled-round')
    @ApiParam({ name: 'gameName', type: 'string' })
    @ApiParam({ name: 'roundId', type: 'number' })
    async updateDisabledround(@Body() body) {
        return this.service.updateDisabledround(body.gameName, body.roundId);
    }
}
