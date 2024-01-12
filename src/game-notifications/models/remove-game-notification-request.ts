import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RemoveGameNotificationRequest {
    @IsString()
    @ApiProperty()
    readonly userId: string;

    @IsNumber()
    @ApiProperty()
    readonly gameId: number;
}
