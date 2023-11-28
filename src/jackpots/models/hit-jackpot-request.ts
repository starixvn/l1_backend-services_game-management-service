import { IsNumber, IsString } from 'class-validator';

export class HitJackpotRequest {
    @IsNumber()
    readonly gameId: number;

    @IsNumber()
    readonly pool: number;

    @IsNumber()
    readonly roundId: number;

    @IsNumber()
    readonly winningRatio: number;

    @IsString()
    readonly winnerName: string;

    @IsNumber()
    readonly winnerId: number;

    @IsNumber()
    readonly rate: number;

    @IsNumber()
    readonly exchangeRateId: number;

    @IsString()
    readonly operatorId: string;

    @IsString()
    readonly currency: string;
}
