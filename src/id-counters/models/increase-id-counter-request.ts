import { IsString } from 'class-validator';

export class IncreaseIdCounterRequest {
    @IsString()
    readonly gameName: string;

    @IsString()
    readonly modelName: string;
}
