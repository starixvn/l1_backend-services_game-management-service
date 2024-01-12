import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from '../common/models/result';
import { DataHandler } from '../common/providers';
import { GameNotification, GameNotificationDocument } from './schemas';

@Injectable()
export class GameNotificationService {
    constructor(
        @InjectModel(GameNotification.name) private readonly model: Model<GameNotificationDocument>,
        @Inject(DataHandler) private readonly dataHandler: DataHandler,
    ) {}

    async create(userId: string, gameId: number, gameInfo: object): Promise<Result<GameNotification>> {
        return this.dataHandler.createData<GameNotification>(this.model, { uid: userId, gameId, gameInfo });
    }
}
