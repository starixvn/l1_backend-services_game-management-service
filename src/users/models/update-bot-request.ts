import { IsString } from 'class-validator';

export class UpdateBotOutRoomRequest {
    @IsString()
    readonly botId: string;
}
