import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Result } from '../common/models/result';
import { DataHandler } from '../common/providers';
import { ClearGameNotificationRequest } from './models/clear-game-notification-request';
import { GameNotificationRequest } from './models/game-notification-request';
import { GameNotification, GameNotificationDocument } from './schemas';
@Injectable()
export class GameNotificationService {
    constructor(
        @InjectModel(GameNotification.name) private readonly model: Model<GameNotificationDocument>,
        @Inject(DataHandler) private readonly dataHandler: DataHandler,
    ) {}

    async update(request: GameNotificationRequest): Promise<Result<unknown>> {
        const filter = { uid: request.uid, gameId: request.gameId };
        const updates = { gameInfo: request.gameInfo };
        return this.dataHandler.updateData(this.model, filter, updates, { upsert: true });
    }

    async delete(request: GameNotificationRequest): Promise<Result<unknown>> {
        const filter = { uid: request.uid, gameId: request.gameId };
        return this.dataHandler.deleteData(this.model, filter);
    }

    async deleteMany(request: ClearGameNotificationRequest): Promise<Result<unknown>> {
        const filter = { uid: { $nin: request.excludingUIDs }, gameId: request.gameId };
        return this.dataHandler.deleteManyData(this.model, filter);
    }
}
