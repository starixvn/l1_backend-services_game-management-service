import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Jackpots, JackpotsDocument } from './schemas';
import { SentryLogger } from '../common/providers';
import { ContributeJackpotRequest, CreatePoolRequest, HitJackpotRequest } from './models';
import { ErrorCodes, ErrorMessages, Result } from 'src/common/models/result';

@Injectable()
export class JackpotsService {
    constructor(
        @InjectModel(Jackpots.name) private readonly JackpotsModel: Model<JackpotsDocument>,
        private readonly logger: SentryLogger,
    ) {}

    async getPools(gameId: number): Promise<Result<Jackpots[]>> {
        try {
            const runningPoolsFilter = {
                gameId,
                winnerName: { $exists: false },
            };
            const projection = {
                _id: false,
                pool: true,
                amount: true,
            };
            const pools = await this.JackpotsModel.find(runningPoolsFilter, projection).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, pools);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async contributeJackpot(request: ContributeJackpotRequest): Promise<Result<Jackpots>> {
        try {
            const { gameId, pool, roundId, amount, byBots, byMembers } = request;
            const runningPoolFilter = {
                gameId,
                pool,
                winnerName: { $exists: false },
                createdAt: { $lte: roundId },
            };
            const nearestPoolOrder = { createdAt: -1 };
            const poolAdjustment = { amount, byBots, byMembers };
            const jackpot = await this.JackpotsModel.findOneAndUpdate(
                runningPoolFilter,
                {
                    gameId,
                    $inc: poolAdjustment,
                },
                {
                    new: true,
                    lean: true,
                    fields: { _id: false, amount: true },
                    sort: nearestPoolOrder,
                },
            )
                .lean()
                .exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, jackpot);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async hitJackpot(request: HitJackpotRequest): Promise<Result<Jackpots>> {
        try {
            const { gameId, pool, roundId, winningRatio, winnerName, winnerId, exchangeRateId, rate, currency, operatorId } = request;
            const runningPoolFilter = {
                gameId,
                pool,
                winnerName: { $exists: false },
                createdAt: { $lte: roundId },
            };
            const nearestRunningPoolOrder = { createdAt: -1 };
            const winnerAdjustment = {
                winningRatio,
                winnerName,
                winnerId,
                hitAt: roundId,
                hitTime: new Date(),
                exchangeRateId,
                rate,
                currency,
                operatorId,
            };
            const winnerProjection = {
                _id: false,
                pool: true,
                winnerName: true,
                amount: true,
            };
            const jackpot = await this.JackpotsModel.findOneAndUpdate(
                runningPoolFilter,
                {
                    $set: winnerAdjustment,
                },
                {
                    new: true,
                    lean: true,
                    fields: winnerProjection,
                    sort: nearestRunningPoolOrder,
                },
            )
                .lean()
                .exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, jackpot);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getTotalExistingPools(gameId: number, pool: number): Promise<Result<number>> {
        try {
            const runningPoolsFilter = {
                gameId,
                pool,
                winnerName: { $exists: false },
            };
            const total = await this.JackpotsModel.countDocuments(runningPoolsFilter).lean().exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, total);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async createNewPool(request: CreatePoolRequest): Promise<Result<Jackpots>> {
        try {
            const { gameId, gameName, pool, initAmount, amount, roundId } = request;
            const jackpot = await this.JackpotsModel.create({
                gameId,
                gameName,
                pool,
                initAmount,
                amount,
                createdAt: roundId,
                createdTime: new Date(),
            });
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, jackpot);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getLatestRoundId(gameId: number): Promise<Result<number>> {
        try {
            const runningPoolFilter = { gameId, winnerName: { $exists: false } };
            const pool = await this.JackpotsModel.findOne(runningPoolFilter, 'createdAt', {
                sort: {
                    createdAt: -1,
                },
            })
                .lean()
                .exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, pool?.createdAt ?? 0);
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }

    async getJackpotWinners(gameId: number, page: number, pageSize: number): Promise<Result<{ winners: Jackpots[]; total: number }>> {
        try {
            const filter = {
                gameId,
                winnerName: { $exists: true },
            };
            const projection = {
                _id: false,
                hitTime: true,
                winnerName: true,
                pool: true,
                amount: true,
                winningRatio: true,
                exchangeRateId: true,
            };
            const numberOfSkippedWinners = (page - 1) * pageSize;
            const winners = await this.JackpotsModel.find(filter, projection, {
                sort: { hitTime: -1 },
                skip: numberOfSkippedWinners,
                limit: pageSize,
            })
                .lean()
                .exec();
            const total = await this.JackpotsModel.countDocuments(filter).exec();
            return new Result(ErrorCodes.Success, ErrorMessages.Empty, { winners, total });
        } catch (error) {
            this.logger.error(error);
            return new Result(ErrorCodes.Failed, error.message);
        }
    }
}
