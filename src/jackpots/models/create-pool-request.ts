import { IsNumber, IsString } from 'class-validator';

export class CreatePoolRequest {
    @IsNumber()
    readonly gameId: number;

    @IsString()
    readonly gameName: string;

    @IsNumber()
    readonly pool: number;

    @IsNumber()
    readonly roundId: number;

    @IsNumber()
    readonly amount: number;

    @IsNumber()
    readonly initAmount: number;
}
