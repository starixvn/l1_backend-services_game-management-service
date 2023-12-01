import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type NotificationDocument = Notification & mongoose.Document;

@Schema()
export class Notification {
    @Prop({ required: true })
    @ApiProperty()
    time: Date;

    @ApiProperty()
    @Prop({ required: true })
    message: string;

    @ApiProperty()
    @Prop({ required: true })
    displayKind: number;

    @ApiProperty()
    @Prop({ required: true })
    gameName: string;

    @ApiProperty()
    @Prop({ type: Object, required: true })
    messages: object;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
