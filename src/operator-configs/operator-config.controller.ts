import { Controller, Get } from '@nestjs/common';
import { OperatorConfigService } from './operator-config.service';
import { Result } from '../common/models/result';
import { OperatorConfig } from './schemas';

@Controller('operator-config')
export class OperatorConfigController {
    constructor(private readonly service: OperatorConfigService) {}

    @Get('game-site-exclusions')
    async getGameSiteExclusions(): Promise<Result<OperatorConfig[]>> {
        return this.service.getGameSiteExclusions();
    }
}
