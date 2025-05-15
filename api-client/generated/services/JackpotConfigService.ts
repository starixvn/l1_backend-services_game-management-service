/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JackpotConfig } from '../models/JackpotConfig';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class JackpotConfigService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param gameId 
     * @returns JackpotConfig 
     * @throws ApiError
     */
    public getJackpotConfig(
gameId: number,
): CancelablePromise<JackpotConfig> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jackpot-config/{gameId}',
            path: {
                'gameId': gameId,
            },
        });
    }

}
