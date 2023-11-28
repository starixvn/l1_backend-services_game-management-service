import { Controller, Get, Query } from '@nestjs/common';
import { PromotionService } from './promotion.service';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly service: PromotionService) {}

    @Get('/')
    async getPromotion(@Query('gameId') gameId: number) {
        return this.service.getPromotion(gameId);
    }
}
