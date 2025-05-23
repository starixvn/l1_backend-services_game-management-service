import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Result } from '../common/models/result';
import { JackpotConfigService } from './jackpot-config.service';
import { JackpotConfig } from './schemas';

@ApiTags('jackpot-config')
@Controller('jackpot-config')
export class JackpotConfigController {
    constructor(private readonly service: JackpotConfigService) {}

    @Get(':gameId')
    @ApiOperation({ operationId: 'getJackpotConfig' })
    @ApiOkResponse({ type: JackpotConfig })
    async getJackpotConfig(@Param('gameId') gameId: number): Promise<Result<JackpotConfig[]>> {
        return this.service.getJackpotConfig(gameId);
    }

    @Get('')
    @ApiOperation({ operationId: 'getAll' })
    @ApiOkResponse({ type: Result })
    async getAll(): Promise<Result<JackpotConfig[]>> {
        return this.service.getAll();
    }
}
