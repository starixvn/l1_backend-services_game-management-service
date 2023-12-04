import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CurrencyGroupGamesService } from './currency-group-games.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CurrencyGroupGamesResponse } from './models/currency-group-games-response';

@Controller('currency-group-games')
export class CurrencyGroupGamesController {
    constructor(private readonly service: CurrencyGroupGamesService) {}

    @Get()
    @ApiOkResponse({ type: CurrencyGroupGamesResponse })
    async getCurrencyGroupGamesByGameId(@Query('gameId', ParseIntPipe) gameId: number) {
        return this.service.getCurrencyGroupGamesByGameId(gameId);
    }
}
