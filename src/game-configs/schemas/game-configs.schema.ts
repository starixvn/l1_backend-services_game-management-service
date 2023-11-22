import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type GameConfigsDocument = GameConfigs & mongoose.Document;

@Schema()
export class GameConfigs {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    enabled: boolean;

    @Prop({ required: true })
    minbet: number;

    @Prop({ required: true })
    maxbet: number;

    @Prop()
    disabledround: number;

    @Prop({ default: false })
    botenabled: boolean;

    @Prop({ required: true })
    maxbot: number;

    @Prop()
    bot_maxbet: number;

    @Prop()
    bot_minbet: number;

    @Prop()
    hour_maxbot: Array<any>;

    @Prop()
    disabled_message: string;

    @Prop({ type: Object })
    choices_maxbet: object;

    @Prop({ type: Object })
    odds: object;

    @Prop()
    delayStartTime: number;

    @Prop({ default: false })
    enableFreeBet: boolean;

    @Prop({ type: Object })
    slotsConfig: object;

    @Prop()
    siteExclusions: Array<any>;

    @Prop({ default: false })
    smartBotEnabled: boolean;

    @Prop({ default: 0 })
    smartBotGroupRatio: number;

    @Prop({ default: false })
    exchangeReload: boolean;

    @Prop()
    randomMode: number;

    @Prop({ type: Object })
    cascadingSlotsConfig: object;

    @Prop({ type: Object })
    slotRNGConfig: object;

    @Prop()
    gameId: number;

    @Prop()
    displayName: string;
}

export const GameConfigsSchema = SchemaFactory.createForClass(GameConfigs);
