import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ExchangeRatesDocument = ExchangeRates & mongoose.Document;

@Schema()
export class ExchangeRates {
    @Prop({ required: true })
    exId: number;

    @Prop({ required: true })
    time: Date;

    @Prop({ required: true })
    source: string;

    @Prop({ type: Object, required: true })
    code: object;
}

export const ExchangeRatesSchema = SchemaFactory.createForClass(ExchangeRates);
