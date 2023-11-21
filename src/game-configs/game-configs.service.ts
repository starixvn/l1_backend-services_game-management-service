import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import {GameConfigs, GameConfigsDocument} from './schemas';
import { SentryLogger } from '../common/providers';

@Injectable()
export class GameConfigsService {
    constructor(
        @InjectModel(GameConfigs.name) private readonly gameConfigsModel: Model<GameConfigsDocument>,
        private readonly logger: SentryLogger,
    ){}

    async getGameConfigs(gameName: string){
        try{
            return this.gameConfigsModel.findOne({name: gameName}).lean().exec();
        }
        catch(error){
            this.logger.error(error);
            return null;
        }
    }
}