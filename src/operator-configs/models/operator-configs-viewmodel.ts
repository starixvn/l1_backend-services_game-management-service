import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';
import { OperatorConfig } from '../schemas';

export class OperatorConfigsViewModel extends Result<OperatorConfig[]> {
    @ApiProperty({ type: [OperatorConfig] })
    data: OperatorConfig[];
}
