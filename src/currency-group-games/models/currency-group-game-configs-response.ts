import { Result } from '../../common/models/result';
import { CurrencyGroupGameConfigs } from '../schemas';
import { ApiProperty } from '@nestjs/swagger';

export class CurrencyGroupGameConfigsResponse extends Result<CurrencyGroupGameConfigs[]> {
    @ApiProperty({ type: [CurrencyGroupGameConfigs] })
    data: CurrencyGroupGameConfigs[];
}
