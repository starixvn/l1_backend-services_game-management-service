import { UpdateStakeLevelRequest } from './models/update-stake-level-request';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserInfos, UserInfosDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ErrorCodes, ErrorMessages, Result } from 'src/common/models/result';

Injectable();
export class UsersService {
    constructor(
        @InjectModel(UserInfos.name) private readonly userInfoModel: Model<UserInfosDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getTotalBots(): Promise<Result<number>> {
        try {
            const total = await this.userInfoModel.countDocuments({ type: true, banned: false }).exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, total);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getDisableBots(): Promise<Result<UserInfos[]>> {
        try {
            const disabledBots = await this.userInfoModel.find({ type: true, disabled: true }).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, disabledBots);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getAllBots(): Promise<Result<UserInfos[]>> {
        try {
            const allBots = await this.userInfoModel.find({ type: true, disabled: false, inRoom: false }, 'id name').lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, allBots);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateBotsOutRoom(botIds: string[]): Promise<Result<unknown>> {
        try {
            await this.userInfoModel.updateMany({ id: { $in: botIds } }, { inRoom: false, inGameRoom: '', patternId: 0 }).exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateBotsJoinRoom(botIds: string[], gameName: string): Promise<Result<unknown>> {
        try {
            await this.userInfoModel.updateMany({ id: { $in: botIds } }, { inRoom: true, inGameRoom: gameName }).exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async resetBotsInRoom(gameName: string): Promise<Result<unknown>> {
        try {
            await this.userInfoModel.updateMany({ type: true, inGameRoom: gameName }, { inRoom: false, inGameRoom: '' }).exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getUserInfo(id: string): Promise<Result<UserInfos>> {
        try {
            const info = await this.userInfoModel.findOne({ id: id }, { _id: 0, __v: 0 }).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, info);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getScoins(id: string): Promise<Result<number>> {
        try {
            const userInfo = await this.userInfoModel.findOne({ id: id }, 'scoins').lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, userInfo.scoins ?? 0);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async updateStakeLevel(request: UpdateStakeLevelRequest): Promise<Result<unknown>> {
        try {
            await this.userInfoModel
                .updateOne({ id: request.id }, { minBet: request.minBet, maxBet: request.maxBet, betLimitModifiedDate: new Date() })
                .exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
