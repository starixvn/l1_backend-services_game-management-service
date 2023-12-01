import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';

export class UmMessageViewModel extends Result<object> {
    @ApiProperty()
    data: object;
}
