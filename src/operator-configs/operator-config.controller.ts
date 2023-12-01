import { Controller, Get } from '@nestjs/common';
import { OperatorConfigService } from './operator-config.service';
import { Result } from '../common/models/result';
import { OperatorConfig } from './schemas';
import { OperatorConfigsViewModel } from './models/operator-configs-viewmodel';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('operator-config')
export class OperatorConfigController {
    constructor(private readonly service: OperatorConfigService) {}

    @Get('game-site-exclusions')
    @ApiOkResponse({ type: OperatorConfigsViewModel })
    async getGameSiteExclusions(): Promise<Result<OperatorConfig[]>> {
        return this.service.getGameSiteExclusions();
    }
}
