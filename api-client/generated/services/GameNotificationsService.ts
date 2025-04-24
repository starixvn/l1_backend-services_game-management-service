/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClearGameNotificationRequest } from '../models/ClearGameNotificationRequest';
import type { GameNotificationRequest } from '../models/GameNotificationRequest';
import type { Result } from '../models/Result';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameNotificationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody 
     * @returns Result 
     * @throws ApiError
     */
    public updateGameNotification(
requestBody: GameNotificationRequest,
): CancelablePromise<Result> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game-notifications/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns Result 
     * @throws ApiError
     */
    public clearGameNotification(
requestBody: ClearGameNotificationRequest,
): CancelablePromise<Result> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game-notifications/clear',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns Result 
     * @throws ApiError
     */
    public deleteGameNotification(
requestBody: GameNotificationRequest,
): CancelablePromise<Result> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game-notifications/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
