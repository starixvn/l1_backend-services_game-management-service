import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CurrencyGroupGamesDocument = CurrencyGroupGames & mongoose.Document;

@Schema()
export class CurrencyGroupGames {
    @Prop({ required: true })
    gameId: number;

    @Prop({ required: true })
    gameName: string;

    @Prop({ required: true })
    groupId: mongoose.Types.ObjectId;

    @Prop({ required: true })
    enabled: boolean;

    @Prop({ required: true })
    minBet: number;

    @Prop({ required: true })
    maxBet: number;

    @Prop({ type: Object })
    maxBetPerChoice: object;

    @Prop({ type: [Number] })
    chips: number[];

    @Prop({ type: [Object] })
    stakeLevels: object[];
}

export const CurrencyGroupGamesSchema = SchemaFactory.createForClass(CurrencyGroupGames);
