import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CurrenciesDocument = Currencies & mongoose.Document;

@Schema()
export class Currencies {
    @Prop({ required: true })
    enabled: boolean;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    multiplier: number;

    @Prop({ required: true })
    isTest: boolean;

    @Prop({ required: true })
    partnerId: string;

    @Prop({ required: true })
    groupId: mongoose.Types.ObjectId;

    @Prop()
    isUncountOnTotal: boolean;
}

export const CurrenciesSchema = SchemaFactory.createForClass(Currencies);
