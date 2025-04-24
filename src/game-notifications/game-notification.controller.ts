import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Result } from '../common/models/result';
import { GameNotificationService } from './game-notification.service';
import { ClearGameNotificationRequest } from './models/clear-game-notification-request';
import { GameNotificationRequest } from './models/game-notification-request';

@ApiTags('game-notifications')
@Controller('game-notifications')
export class GameNotificationController {
    constructor(private readonly service: GameNotificationService) {}

    @Post('update')
    @ApiOperation({ operationId: 'updateGameNotification' })
    @ApiOkResponse({ type: Result })
    async update(@Body() request: GameNotificationRequest): Promise<Result<unknown>> {
        return this.service.update(request);
    }

    @Post('clear')
    @ApiOperation({ operationId: 'clearGameNotification' })
    @ApiOkResponse({ type: Result })
    async clear(@Body() request: ClearGameNotificationRequest): Promise<Result<unknown>> {
        return this.service.deleteMany(request);
    }

    @Post('delete')
    @ApiOperation({ operationId: 'deleteGameNotification' })
    @ApiOkResponse({ type: Result })
    async delete(@Body() request: GameNotificationRequest): Promise<Result<unknown>> {
        return this.service.delete(request);
    }
}
