import { IsString } from 'class-validator';

export class ResetBotInRoomRequest {
    @IsString()
    readonly gameName: string;
}
