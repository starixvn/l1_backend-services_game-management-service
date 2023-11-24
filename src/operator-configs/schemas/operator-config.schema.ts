import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type OperatorConfigDocument = OperatorConfig & mongoose.Document;

@Schema()
export class OperatorConfig {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    partnerId: string;

    @Prop({ type: Object })
    value: object;

    @Prop({ required: true })
    operatorId: string;
}

export const OperatorConfigSchema = SchemaFactory.createForClass(OperatorConfig);
