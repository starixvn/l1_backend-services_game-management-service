import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Result } from 'src/common/models/result';
import { GameNotificationService } from './game-notification.service';
import { CreateGameNotificationRequest } from './models/create-game-notification-request';
import { GameNotification } from './schemas';

@ApiTags('game-notifications')
@Controller('game-notifications')
export class GameNotificationController {
    constructor(private readonly service: GameNotificationService) {}

    @Post('create')
    @ApiOperation({ operationId: 'create' })
    @ApiOkResponse({ type: Result<GameNotification> })
    async createPool(@Body() body: CreateGameNotificationRequest) {
        return this.service.create(body.userId, body.gameId, body.gameInfo);
    }
}
