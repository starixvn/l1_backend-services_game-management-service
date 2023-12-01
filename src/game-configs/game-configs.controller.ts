import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { GameConfigsService } from './game-configs.service';
import { Result } from '../common/models/result';
import { GameConfigs } from './schemas';
import { GameConfigViewModel } from './models/game-config-viewmodel';

@Controller('game-configs')
export class GameConfigsController {
    constructor(private readonly service: GameConfigsService) {}

    @Get('')
    @ApiOkResponse({ type: GameConfigViewModel })
    async getGameConfigs(@Query('gameName') gameName: string): Promise<Result<GameConfigs>> {
        return this.service.getGameConfigs(gameName);
    }

    @Post('exchange-reload')
    @ApiParam({ name: 'gameName', type: 'string' })
    @ApiParam({ name: 'exchangeReload', type: 'boolean' })
    @ApiOkResponse({ type: Result })
    async updateExchangeReload(@Body() body): Promise<Result<any>> {
        return this.service.updateExchangeReload(body.gameName, body.exchangeReload);
    }

    @Post('disabled-round')
    @ApiParam({ name: 'gameName', type: 'string' })
    @ApiParam({ name: 'roundId', type: 'number' })
    @ApiOkResponse({ type: Result })
    async updateDisabledround(@Body() body): Promise<Result<any>> {
        return this.service.updateDisabledround(body.gameName, body.roundId);
    }
}
