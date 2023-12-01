import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';
import { Domains } from '../schemas';

export class DomainViewModel extends Result<Domains> {
    @ApiProperty()
    data: Domains;
}
