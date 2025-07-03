import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type CurrencyGroupGameConfigsDocument = CurrencyGroupGameConfigs & mongoose.Document;

@Schema()
export class CurrencyGroupGameConfigs {
    @ApiProperty()
    @Prop({ required: true })
    gameId: number;

    @ApiProperty()
    @Prop({ required: true })
    groupId: string;

    @ApiProperty()
    @Prop({ required: true })
    type: string;

    @ApiProperty()
    @Prop({ type: Object })
    value: object;
}

export const CurrencyGroupGameConfigsSchema = SchemaFactory.createForClass(CurrencyGroupGameConfigs);
