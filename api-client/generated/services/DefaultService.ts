/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArchiveStatusesResponse } from '../models/ArchiveStatusesResponse';
import type { ContributeJackpotRequest } from '../models/ContributeJackpotRequest';
import type { CreatePoolRequest } from '../models/CreatePoolRequest';
import type { DomainResponse } from '../models/DomainResponse';
import type { ExchangeRateResponse } from '../models/ExchangeRateResponse';
import type { HitJackpotRequest } from '../models/HitJackpotRequest';
import type { IncreaseIdCounterRequest } from '../models/IncreaseIdCounterRequest';
import type { OperatorConfigsResponse } from '../models/OperatorConfigsResponse';
import type { PromotionResponse } from '../models/PromotionResponse';
import type { ResetBotInRoomRequest } from '../models/ResetBotInRoomRequest';
import type { UmMessageResponse } from '../models/UmMessageResponse';
import type { UpdateBotsJoinRoomRequest } from '../models/UpdateBotsJoinRoomRequest';
import type { UpdateBotsOutRoomRequest } from '../models/UpdateBotsOutRoomRequest';
import type { UpdateLatestIdCounterRequest } from '../models/UpdateLatestIdCounterRequest';
import type { UpdateStakeLevelRequest } from '../models/UpdateStakeLevelRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any 
     * @throws ApiError
     */
    public appControllerGetHello(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public currenciesControllerGetCurrencies(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/currencies',
        });
    }

    /**
     * @param gameId 
     * @returns any 
     * @throws ApiError
     */
    public currencyGroupGamesControllerGetCurrencyGroupGamesByGameId(
gameId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/currency-group-games',
            query: {
                'gameId': gameId,
            },
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public currencyGroupsControllerGetCurrencyGroups(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/currency-groups',
        });
    }

    /**
     * @param gameName 
     * @returns ArchiveStatusesResponse 
     * @throws ApiError
     */
    public archiveStatusControllerGetArchiveStatus(
gameName: string,
): CancelablePromise<ArchiveStatusesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/archive-status',
            query: {
                'gameName': gameName,
            },
        });
    }

    /**
     * @param gameId 
     * @returns PromotionResponse 
     * @throws ApiError
     */
    public promotionControllerGetPromotion(
gameId: number,
): CancelablePromise<PromotionResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/promotion',
            query: {
                'gameId': gameId,
            },
        });
    }

    /**
     * @returns OperatorConfigsResponse 
     * @throws ApiError
     */
    public operatorConfigControllerGetGameSiteExclusions(): CancelablePromise<OperatorConfigsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/operator-config/game-site-exclusions',
        });
    }

    /**
     * @returns DomainResponse 
     * @throws ApiError
     */
    public domainControllerGetDomain(): CancelablePromise<DomainResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/domain',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public usersControllerGetAllBots(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/bots',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public usersControllerGetTotalBots(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/bots/total',
        });
    }

    /**
     * @returns any 
     * @throws ApiError
     */
    public usersControllerGetDisableBots(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/bots/disabled-bots',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerUpdateBotsOutRoom(
requestBody: UpdateBotsOutRoomRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/bots/out-room',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerUpdateBotsJoinRoom(
requestBody: UpdateBotsJoinRoomRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/bots/join-room',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerResetBotsInRoom(
requestBody: ResetBotInRoomRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/bots/reset-in-room',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerGetUserInfo(
id: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/info',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerGetUserScoins(
id: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/scoins',
            query: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public usersControllerUpdateUserStakeLevel(
requestBody: UpdateStakeLevelRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/update-stake-level',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param configName 
     * @returns UmMessageResponse 
     * @throws ApiError
     */
    public notificationControllerGetUmMessages(
configName: string,
): CancelablePromise<UmMessageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification/um-messages',
            query: {
                'configName': configName,
            },
        });
    }

    /**
     * @param gameId 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerGetPools(
gameId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jackpots/pools',
            query: {
                'gameId': gameId,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerCreatePool(
requestBody: CreatePoolRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/jackpots/pools',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param gameId 
     * @param pool 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerGetTotalExistingPools(
gameId: number,
pool: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jackpots/pools/total-existing-pools',
            query: {
                'gameId': gameId,
                'pool': pool,
            },
        });
    }

    /**
     * @param gameId 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerGetLatestPool(
gameId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jackpots/latest-roundid',
            query: {
                'gameId': gameId,
            },
        });
    }

    /**
     * @param gameId 
     * @param page 
     * @param pageSize 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerGetJackpotWinners(
gameId: number,
page: number,
pageSize: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jackpots/winners',
            query: {
                'gameId': gameId,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerContributeJackpot(
requestBody: ContributeJackpotRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/jackpots/contribute',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public jackpotsControllerHitJackpot(
requestBody: HitJackpotRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/jackpots/hit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ExchangeRateResponse 
     * @throws ApiError
     */
    public exchangeRateControllerGetExchangeRates(): CancelablePromise<ExchangeRateResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/exchange-rates',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public idCountersControllerIncreaseIdCounter(
requestBody: IncreaseIdCounterRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/id-counters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param gameName 
     * @param modelName 
     * @returns any 
     * @throws ApiError
     */
    public idCountersControllerGetLatestId(
gameName: string,
modelName: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/id-counters/latest-id',
            query: {
                'gameName': gameName,
                'modelName': modelName,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public idCountersControllerUpdateLatestId(
requestBody: UpdateLatestIdCounterRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/id-counters/latest-id',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
