import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type NotificationDocument = Notification & mongoose.Document;

@Schema()
export class Notification {
    @Prop({ required: true })
    time: Date;

    @Prop({ required: true })
    message: string;

    @Prop({ required: true })
    displayKind: number;

    @Prop({ required: true })
    gameName: string;

    @Prop({ type: Object, required: true })
    messages: object;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
