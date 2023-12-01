import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type ExchangeRatesDocument = ExchangeRates & mongoose.Document;

@Schema()
export class ExchangeRates {
    @ApiProperty()
    @Prop({ required: true })
    exId: number;

    @ApiProperty()
    @Prop({ required: true })
    time: Date;

    @ApiProperty()
    @Prop({ required: true })
    source: string;

    @ApiProperty()
    @Prop({ type: Object, required: true })
    code: object;
}

export const ExchangeRatesSchema = SchemaFactory.createForClass(ExchangeRates);
