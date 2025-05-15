/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BotConfigs } from '../models/BotConfigs';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BotConfigService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param gameId 
     * @returns BotConfigs 
     * @throws ApiError
     */
    public getBotConfig(
gameId: number,
): CancelablePromise<BotConfigs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/bot-config/{gameId}',
            path: {
                'gameId': gameId,
            },
        });
    }

}
