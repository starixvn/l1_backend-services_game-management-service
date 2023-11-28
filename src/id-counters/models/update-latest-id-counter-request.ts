import { IsNumber } from 'class-validator';
import { IncreaseIdCounterRequest } from './increase-id-counter-request';

export class UpdateLatestIdCounterRequest extends IncreaseIdCounterRequest {
    @IsNumber()
    readonly id: number;
}
