import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import mongoose from 'mongoose';

export type GameNotificationDocument = GameNotification & mongoose.Document;

@Schema()
export class GameNotification {
    @IsString()
    @ApiProperty()
    @Prop({ required: true })
    uid: string;

    @IsNumber()
    @ApiProperty()
    @Prop({ required: true })
    gameId: number;

    @IsObject()
    @ApiProperty()
    @Prop({ type: Object })
    gameInfo: object;
}

export const GameNotificationSchema = SchemaFactory.createForClass(GameNotification);
