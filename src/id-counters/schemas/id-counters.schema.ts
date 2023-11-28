import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type IdCountersDocument = IdCounters & mongoose.Document;

@Schema()
export class IdCounters {
    @Prop({ required: true, default: 0 })
    c: number;

    @Prop({ required: true })
    f: string;

    @Prop({ required: true })
    m: string;
}

export const IdCountersSchema = SchemaFactory.createForClass(IdCounters);
