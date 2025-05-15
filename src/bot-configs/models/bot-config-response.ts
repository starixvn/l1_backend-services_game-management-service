import { Result } from '../../common/models/result';
import { BotConfigs } from '../schemas';
import { ApiProperty } from '@nestjs/swagger';

export class BotConfigResponse extends Result<BotConfigs[]> {
    @ApiProperty({ type: [BotConfigs] })
    data: BotConfigs[];
}
