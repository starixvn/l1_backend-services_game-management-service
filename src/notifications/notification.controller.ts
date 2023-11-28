import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly service: NotificationService) {}

    @Get('um-messages')
    async getPromotion(@Query('configName') configName: string) {
        return this.service.getUMMessage(configName);
    }
}
