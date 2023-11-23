import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CurrencyGroupsDocument = CurrencyGroups & mongoose.Document;

@Schema()
export class CurrencyGroups {
    @Prop({ required: true })
    enabled: boolean;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    partnerId: string;

    @Prop()
    fractionalOddsFormat: boolean;
}

export const CurrencyGroupsSchema = SchemaFactory.createForClass(CurrencyGroups);
