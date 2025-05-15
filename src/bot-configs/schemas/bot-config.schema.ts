import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type BotConfigDocument = BotConfigs & mongoose.Document;

@Schema()
export class BotConfigs {
    @ApiProperty()
    @Prop({ required: true })
    gameId: number;

    @ApiProperty({ type: [String] })
    @Prop({ required: true })
    siteName: string[];

    @ApiProperty()
    @Prop({ required: true, default: '' })
    operatorId: string;

    @ApiProperty()
    @Prop({ required: true })
    enabled: boolean;

    @ApiProperty()
    @Prop({ required: true })
    bot_maxBet: number;

    @ApiProperty()
    @Prop({ required: true })
    bot_minBet: number;

    @ApiProperty({ type: [Number] })
    @Prop({ required: true, default: [] })
    hour_maxBot: number[];
}

export const BotConfigSchema = SchemaFactory.createForClass(BotConfigs);
