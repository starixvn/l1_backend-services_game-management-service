import { Controller, Get, Query } from '@nestjs/common';
import { GameConfigsService } from './game-configs.service';

@Controller('game-configs')
export class GameConfigsController {
    constructor(private readonly service: GameConfigsService){}

    @Get('get-game-configs')
    async getGameConfigs(@Query('gameName') gameName: string){
        return this.service.getGameConfigs(gameName);
    }
}