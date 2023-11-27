import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type JackpotsDocument = Jackpots & mongoose.Document;

@Schema()
export class Jackpots {
    @Prop({ required: true })
    gameId: number;

    @Prop({ required: true })
    gameName: string;

    @Prop({ required: true })
    pool: number;

    @Prop({ required: true })
    initAmount: number;

    @Prop({ default: 0 })
    amount: number;

    @Prop()
    winningRatio: number;

    @Prop()
    winnerName: string;

    @Prop()
    winnerId: number;

    @Prop({ default: 0 })
    byBots: number;

    @Prop({ default: 0 })
    byMembers: number;

    @Prop({ required: true })
    createdAt: number;

    @Prop()
    hitAt: number;

    @Prop({ required: true })
    createdTime: Date;

    @Prop()
    hitTime: Date;

    @Prop()
    rate: number;

    @Prop()
    exchangeRateId: number;

    @Prop()
    operatorId: string;

    @Prop()
    currency: string;
}

export const JackpotsSchema = SchemaFactory.createForClass(Jackpots);
