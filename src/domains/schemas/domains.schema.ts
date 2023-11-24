import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type DomainsDocument = Domains & mongoose.Document;

@Schema()
export class Domains {
    @Prop({ required: true })
    value: string;
}

export const DomainsSchema = SchemaFactory.createForClass(Domains);
