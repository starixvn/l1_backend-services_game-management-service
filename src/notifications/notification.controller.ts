import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Result } from '../common/models/result';

@Controller('notification')
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Get('um-messages')
    async getPromotion(@Query('configName') configName: string): Promise<Result<object>> {
        return this.service.getUMMessage(configName);
    }
}
