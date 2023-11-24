import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PromotionDocument = Promotion & mongoose.Document;

@Schema()
export class Promotion {
    @Prop({ required: true })
    gameId: number;

    @Prop({ type: Object, required: true })
    odds: object;

    @Prop({ required: true })
    startDateTime: Date;

    @Prop({ required: true })
    endDateTime: Date;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    isDaily: boolean;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
