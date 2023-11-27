import { IsString } from 'class-validator';
import { UpdateBotsOutRoomRequest } from './update-bot-request';

export class UpdateBotsJoinRoomRequest extends UpdateBotsOutRoomRequest {
    @IsString()
    readonly gameName: string;
}
