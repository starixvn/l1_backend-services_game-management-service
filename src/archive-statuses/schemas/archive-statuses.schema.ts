import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ArchiveStatusesDocument = ArchiveStatuses & mongoose.Document;

@Schema()
export class ArchiveStatuses {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastArcRoundId: number;
}

export const ArchiveStatusesSchema = SchemaFactory.createForClass(ArchiveStatuses);
