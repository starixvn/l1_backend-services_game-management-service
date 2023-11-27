import { IsString, IsArray } from 'class-validator';

export class UpdateBotsOutRoomRequest {
    @IsArray()
    @IsString({ each: true })
    readonly botIds: string[];
}
