import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type DomainsDocument = Domains & mongoose.Document;

@Schema()
export class Domains {
    @ApiProperty()
    @Prop({ required: true })
    value: string;
}

export const DomainsSchema = SchemaFactory.createForClass(Domains);
