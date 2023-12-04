import { Result } from 'src/common/models/result';
import { Currencies } from '../schemas';
import { ApiProperty } from '@nestjs/swagger';

export class CurrenciesResponse extends Result<Currencies[]> {
    @ApiProperty({ type: [Currencies] })
    data: Currencies[];
}
