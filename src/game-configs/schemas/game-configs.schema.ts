import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type GameConfigsDocument = GameConfigs & mongoose.Document;

@Schema()
export class GameConfigs {
    @ApiProperty()
    @Prop({ required: true })
    name: string;

    @ApiProperty()
    @Prop({ required: true })
    enabled: boolean;

    @ApiProperty()
    @Prop({ required: true })
    minbet: number;

    @ApiProperty()
    @Prop({ required: true })
    maxbet: number;

    @ApiProperty()
    @Prop()
    disabledround: number;

    @ApiProperty()
    @Prop({ default: false })
    botenabled: boolean;

    @ApiProperty()
    @Prop({ required: true })
    maxbot: number;

    @ApiProperty()
    @Prop()
    bot_maxbet: number; // NOSONAR

    @ApiProperty()
    @Prop()
    bot_minbet: number; // NOSONAR

    @ApiProperty()
    @Prop()
    hour_maxbot: Array<any>; // NOSONAR

    @ApiProperty()
    @Prop()
    disabled_message: string; // NOSONAR

    @ApiProperty()
    @Prop({ type: Object })
    choices_maxbet: object; // NOSONAR

    @ApiProperty()
    @Prop({ type: Object })
    odds: object;

    @ApiProperty()
    @Prop()
    delayStartTime: number;

    @ApiProperty()
    @Prop({ default: false })
    enableFreeBet: boolean;

    @ApiProperty()
    @Prop({ type: Object })
    slotsConfig: object;

    @ApiProperty()
    @Prop()
    siteExclusions: Array<any>;

    @ApiProperty()
    @Prop({ default: false })
    smartBotEnabled: boolean;

    @ApiProperty()
    @Prop({ default: 0 })
    smartBotGroupRatio: number;

    @ApiProperty()
    @Prop({ default: false })
    exchangeReload: boolean;

    @ApiProperty()
    @Prop()
    randomMode: number;

    @ApiProperty()
    @Prop({ type: Object })
    cascadingSlotsConfig: object;

    @ApiProperty()
    @Prop({ type: Object })
    slotRNGConfig: object;

    @ApiProperty()
    @Prop()
    gameId: number;

    @ApiProperty()
    @Prop()
    displayName: string;
}

export const GameConfigsSchema = SchemaFactory.createForClass(GameConfigs);
