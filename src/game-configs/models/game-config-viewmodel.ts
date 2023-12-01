import { ApiProperty } from '@nestjs/swagger';
import { Result } from '../../common/models/result';
import { GameConfigs } from '../schemas';

export class GameConfigViewModel extends Result<GameConfigs> {
    @ApiProperty()
    data: GameConfigs;
}
