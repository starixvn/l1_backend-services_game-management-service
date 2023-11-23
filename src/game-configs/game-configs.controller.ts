import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { GameConfigsService } from './game-configs.service';

@Controller('game-configs')
export class GameConfigsController {
    constructor(private readonly service: GameConfigsService) {}

    @Get('get-game-configs')
    async getGameConfigs(@Query('gameName') gameName: string) {
        return this.service.getGameConfigs(gameName);
    }

    @Post('update-exchange-reload')
    async updateExchangeReload(@Body() body) {
        return this.service.updateExchangeReload(body.gameName, body.exchangeReload);
    }

    @Post('update-disabled-round')
    async updateDisabledround(@Body() body) {
        return this.service.updateDisabledround(body.gameName, body.roundId);
    }
}
