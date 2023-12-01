import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { IsNumber, IsString } from 'class-validator';

export type ArchiveStatusesDocument = ArchiveStatuses & mongoose.Document;

@Schema()
export class ArchiveStatuses {
    @IsString()
    @Prop({ required: true })
    @ApiProperty()
    name: string;

    @IsNumber()
    @Prop({ required: true })
    @ApiProperty()
    lastArcRoundId: number;
}

export const ArchiveStatusesSchema = SchemaFactory.createForClass(ArchiveStatuses);
