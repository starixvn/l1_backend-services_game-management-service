import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type OperatorConfigDocument = OperatorConfig & mongoose.Document;

@Schema()
export class OperatorConfig {
    @ApiProperty()
    @Prop({ required: true })
    type: string;

    @ApiProperty()
    @Prop({ required: true })
    partnerId: string;

    @ApiProperty()
    @Prop({ type: Object })
    value: object;

    @ApiProperty()
    @Prop({ required: true })
    operatorId: string;
}

export const OperatorConfigSchema = SchemaFactory.createForClass(OperatorConfig);
