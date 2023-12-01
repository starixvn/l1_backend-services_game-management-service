import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type ArchiveStatusesDocument = ArchiveStatuses & mongoose.Document;

@Schema()
export class ArchiveStatuses {
    @Prop({ required: true })
    @ApiProperty()
    name: string;

    @Prop({ required: true })
    @ApiProperty()
    lastArcRoundId: number;
}

export const ArchiveStatusesSchema = SchemaFactory.createForClass(ArchiveStatuses);
