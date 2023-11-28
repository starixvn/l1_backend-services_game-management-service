import { IsNumber, IsString } from 'class-validator';

export class UpdateStakeLevelRequest {
    @IsString()
    readonly id: string;

    @IsNumber()
    readonly minBet: number;

    @IsNumber()
    readonly maxBet: number;
}
