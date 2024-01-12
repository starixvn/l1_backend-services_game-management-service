import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateGameNotificationRequest {
    @IsString()
    @ApiProperty()
    readonly userId: string;

    @IsNumber()
    @ApiProperty()
    readonly gameId: number;

    @IsObject()
    @ApiProperty()
    readonly gameInfo: object;
}
