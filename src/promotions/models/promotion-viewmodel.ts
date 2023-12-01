import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';
import { Promotion } from '../schemas';

export class PromotionViewModel extends Result<Promotion> {
    @ApiProperty()
    data: Promotion;
}
