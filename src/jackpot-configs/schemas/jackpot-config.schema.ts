import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

@Schema()
class ContribSetting {
    @ApiProperty()
    @Prop({ required: true })
    contrib: number;

    @ApiProperty()
    @Prop({ required: true })
    alloc: number;
}

@Schema()
class PoolConfig {
    @ApiProperty()
    @Prop({ required: true })
    init: number;

    @ApiProperty()
    @Prop({ required: true })
    contribute: number;

    @ApiProperty()
    @Prop({ required: true })
    bot: number;

    @ApiProperty()
    @Prop({ required: true })
    w: number;

    @ApiProperty()
    @Prop({ required: true, type: ContribSetting })
    playerSettings: ContribSetting;

    @ApiProperty()
    @Prop({ required: true, type: ContribSetting })
    botSettings: ContribSetting;
}

@Schema()
class Pool {
    @ApiProperty()
    @Prop({ required: true, type: PoolConfig })
    minor: PoolConfig;

    @ApiProperty()
    @Prop({ required: true, type: PoolConfig })
    major: PoolConfig;

    @ApiProperty()
    @Prop({ required: true, type: PoolConfig })
    grand: PoolConfig;
}

@Schema()
class BotConfig {
    @ApiProperty()
    @Prop({ required: true })
    enabled: boolean;

    @ApiProperty({ type: [Number] })
    @Prop({ required: true })
    botRatio: number[];
}

export type JackpotConfigDocument = JackpotConfig & mongoose.Document;

@Schema()
export class JackpotConfig {
    @ApiProperty()
    @Prop({ required: true })
    _id: string;

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
    @Prop({ required: true, type: Pool })
    pools: Pool;

    @ApiProperty()
    @Prop({ required: true, type: BotConfig })
    botConfig: BotConfig;
}

export const JackpotConfigSchema = SchemaFactory.createForClass(JackpotConfig);
