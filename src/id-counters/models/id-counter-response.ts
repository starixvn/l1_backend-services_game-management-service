import { Result } from 'src/common/models/result';
import { IdCounters } from '../schemas';
import { ApiProperty } from '@nestjs/swagger';

export class IdCounterResponse extends Result<IdCounters> {
    @ApiProperty()
    data: IdCounters;
}
