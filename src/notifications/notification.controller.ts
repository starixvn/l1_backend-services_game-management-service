import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { UmMessageResponse } from './models/um-message-response';

@Controller('notification')
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Get('um-messages')
    @ApiOkResponse({ type: UmMessageResponse })
    async getUmMessages(@Query('configName') configName: string): Promise<Result<object>> {
        return this.service.getUMMessage(configName);
    }
}
