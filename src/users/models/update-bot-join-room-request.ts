import { IsString } from 'class-validator';
import { UpdateBotOutRoomRequest } from './update-bot-request';

export class UpdateBotJoinRoomRequest extends UpdateBotOutRoomRequest {
    @IsString()
    readonly gameName: string;
}
