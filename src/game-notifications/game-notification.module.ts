import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameNotificationController } from './game-notification.controller';
import { GameNotificationService } from './game-notification.service';
import { GameNotification, GameNotificationSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: GameNotification.name, schema: GameNotificationSchema, collection: 'gamenotifications' }]),
    ],
    providers: [GameNotificationService],
    exports: [GameNotificationService],
    controllers: [GameNotificationController],
})
export class GameNotificationModule {}
