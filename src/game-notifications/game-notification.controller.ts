import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Result } from 'src/common/models/result';
import { GameNotificationService } from './game-notification.service';
import { CreateGameNotificationRequest } from './models/create-game-notification-request';
import { RemoveGameNotificationRequest } from './models/remove-game-notification-request';
import { GameNotification } from './schemas';

@ApiTags('game-notifications')
@Controller('game-notifications')
export class GameNotificationController {
    constructor(private readonly service: GameNotificationService) {}

    @Post('create')
    @ApiOperation({ operationId: 'create' })
    @ApiOkResponse({ type: Result<GameNotification> })
    async create(@Body() body: CreateGameNotificationRequest) {
        return this.service.create(body.userId, body.gameId, body.gameInfo);
    }

    @Post('remove')
    @ApiOperation({ operationId: 'remove' })
    @ApiOkResponse({ type: Result<GameNotification> })
    async remove(@Body() body: RemoveGameNotificationRequest) {
        return this.service.remove(body.userId, body.gameId);
    }
}
