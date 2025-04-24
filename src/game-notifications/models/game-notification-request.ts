import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class GameNotificationRequest {
    @IsString()
    @ApiProperty()
    readonly uid: string;

    @IsNumber()
    @ApiProperty()
    readonly gameId: number;

    @IsObject()
    @ApiProperty()
    readonly gameInfo: object;
}
