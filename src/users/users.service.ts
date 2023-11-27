import { UpdateStakeLevelRequest } from './models/update-stake-level-request';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserInfos, UserInfosDocument } from './schemas';
import { SentryLogger } from '../common/providers';

Injectable();
export class UsersService {
    constructor(
        @InjectModel(UserInfos.name) private readonly userInfoModel: Model<UserInfosDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getTotalBots() {
        try {
            return this.userInfoModel.countDocuments({ type: true, banned: false }).exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async getDisableBots(): Promise<UserInfos[]> {
        try {
            return this.userInfoModel.find({ type: true, disabled: true }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async getAllBots(): Promise<UserInfos[]> {
        try {
            return this.userInfoModel.find({ type: true, disabled: false, inRoom: false }, 'id name').lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async updateBotOutRoom(botId: string) {
        try {
            return this.userInfoModel.updateOne({ id: botId }, { inRoom: false, inGameRoom: '', patternId: 0 }).exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async updateBotJoinRoom(botId: string, gameName: string) {
        try {
            return this.userInfoModel.updateOne({ id: botId }, { inRoom: true, inGameRoom: gameName }).exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async resetBotsInRoom(gameName: string) {
        try {
            return this.userInfoModel.updateMany({ type: true, inGameRoom: gameName }, { inRoom: false, inGameRoom: '' }).exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async getUserInfo(id: string): Promise<UserInfos> {
        try {
            return this.userInfoModel.findOne({ id: id }, { _id: 0, __v: 0 }).lean().exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }

    async getScoins(id: string) {
        try {
            const userInfo = await this.userInfoModel.findOne({ id: id }, 'scoins').lean().exec();
            return userInfo.scoins ?? 0;
        } catch (error) {
            this.logger.error(error);
            return 0;
        }
    }

    async updateStakeLevel(request: UpdateStakeLevelRequest) {
        try {
            return this.userInfoModel
                .updateOne({ id: request.id }, { minBet: request.minBet, maxBet: request.maxBet, betLimitModifiedDate: new Date() })
                .exec();
        } catch (error) {
            this.logger.error(error);
            return null;
        }
    }
}
