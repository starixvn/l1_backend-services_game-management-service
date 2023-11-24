import { Controller, Get, Query } from '@nestjs/common';
import { OperatorConfigService } from './operator-config.service';

@Controller('operator-config')
export class OperatorConfigController {
    constructor(private readonly service: OperatorConfigService) {}

    @Get('get-game-site-exclusions')
    async getGameSiteExclusions() {
        return this.service.getGameSiteExclusions();
    }
}
