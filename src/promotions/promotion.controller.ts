import { Controller, Get, Query } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { Promotion } from './schemas';
import { Result } from '../common/models/result';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly service: PromotionService) {}

    @Get('/')
    async getPromotion(@Query('gameId') gameId: number): Promise<Result<Promotion>> {
        return this.service.getPromotion(gameId);
    }
}
