import { Controller, Get, Query } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { Promotion } from './schemas';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { PromotionViewModel } from './models/promotion-viewmodel';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly service: PromotionService) {}

    @Get('/')
    @ApiOkResponse({ type: PromotionViewModel })
    async getPromotion(@Query('gameId') gameId: number): Promise<Result<Promotion>> {
        return this.service.getPromotion(gameId);
    }
}
