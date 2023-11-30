import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PromotionDocument = Promotion & mongoose.Document;

@Schema()
export class Promotion {
    @ApiProperty()
    @Prop({ required: true })
    gameId: number;

    @ApiProperty()
    @Prop({ type: Object, required: true })
    odds: object;

    @ApiProperty()
    @Prop({ required: true })
    startDateTime: Date;

    @ApiProperty()
    @Prop({ required: true })
    endDateTime: Date;

    @ApiProperty()
    @Prop({ required: true })
    status: string;

    @ApiProperty()
    @Prop({ required: true })
    isDaily: boolean;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
