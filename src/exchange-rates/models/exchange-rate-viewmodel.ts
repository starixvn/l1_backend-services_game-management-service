import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';
import { ExchangeRates } from '../schemas';

export class ExchangeRateViewModel extends Result<ExchangeRates> {
    @ApiProperty()
    data: ExchangeRates;
}
