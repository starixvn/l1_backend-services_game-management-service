import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class ClearGameNotificationRequest {
    @IsArray()
    @ApiProperty()
    readonly excludingUIDs: string[];

    @IsNumber()
    @ApiProperty()
    readonly gameId: number;
}
