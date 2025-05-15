import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BotConfigService } from './bot-config.service';
import { BotConfigs } from './schemas';
import { Result } from '../common/models/result';

@ApiTags('bot-config')
@Controller('bot-config')
export class BotConfigController {
    constructor(private readonly service: BotConfigService) {}

    @Get(':gameId')
    @ApiOperation({ operationId: 'getBotConfig' })
    @ApiOkResponse({ type: BotConfigs })
    async getBotConfig(@Param('gameId') gameId: number): Promise<Result<BotConfigs[]>> {
        return this.service.getBotConfig(gameId);
    }
}
