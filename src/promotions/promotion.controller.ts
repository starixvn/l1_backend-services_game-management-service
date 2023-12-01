import { Controller, Get, Query } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { Promotion } from './schemas';
import { Result } from '../common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';
import { PromotionResponse } from './models/promotion-response';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly service: PromotionService) {}

    @Get('/')
    @ApiOkResponse({ type: PromotionResponse })
    async getPromotion(@Query('gameId') gameId: number): Promise<Result<Promotion>> {
        return this.service.getPromotion(gameId);
    }
}
