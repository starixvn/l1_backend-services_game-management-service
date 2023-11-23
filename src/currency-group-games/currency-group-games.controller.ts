import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CurrencyGroupGamesService } from './currency-group-games.service';

@Controller('currency-group-games')
export class CurrencyGroupGamesController {
    constructor(private readonly service: CurrencyGroupGamesService) {}

    @Get(':id')
    async getCurrencyGroupGamesByGameId(@Param('id', ParseIntPipe) gameId: number) {
        return this.service.getCurrencyGroupGamesByGameId(gameId);
    }
}
