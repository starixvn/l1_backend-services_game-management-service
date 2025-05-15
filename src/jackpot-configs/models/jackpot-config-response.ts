import { Result } from '../../common/models/result';
import { JackpotConfig } from '../schemas';
import { ApiProperty } from '@nestjs/swagger';

export class JackpotConfigResponse extends Result<JackpotConfig[]> {
    @ApiProperty({ type: [JackpotConfig] })
    data: JackpotConfig[];
}
