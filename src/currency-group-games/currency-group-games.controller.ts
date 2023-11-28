import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CurrencyGroupGamesService } from './currency-group-games.service';

@Controller('currency-group-games')
export class CurrencyGroupGamesController {
    constructor(private readonly service: CurrencyGroupGamesService) {}

    @Get()
    async getCurrencyGroupGamesByGameId(@Query('gameId', ParseIntPipe) gameId: number) {
        return this.service.getCurrencyGroupGamesByGameId(gameId);
    }
}
