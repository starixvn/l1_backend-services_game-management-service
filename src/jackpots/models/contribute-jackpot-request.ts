import { IsNumber } from 'class-validator';

export class ContributeJackpotRequest {
    @IsNumber()
    readonly gameId: string;

    @IsNumber()
    readonly pool: number;

    @IsNumber()
    readonly roundId: number;

    @IsNumber()
    readonly amount: number;

    @IsNumber()
    readonly byBots: number;

    @IsNumber()
    readonly byMembers: number;
}
