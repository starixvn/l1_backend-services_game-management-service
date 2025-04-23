/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExchangeRateResponse } from "../models/ExchangeRateResponse";

import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";

export class ExchangeRatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns ExchangeRateResponse
     * @throws ApiError
     */
    public getExchangeRates(): CancelablePromise<ExchangeRateResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/exchange-rates",
        });
    }

    /**
     * @param exId
     * @returns ExchangeRateResponse
     * @throws ApiError
     */
    public getExchangeRatesByExId(exId: number): CancelablePromise<ExchangeRateResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/exchange-rates/{exId}",
            path: {
                exId: exId,
            },
        });
    }

    /**
     * @param exIds
     * @returns ExchangeRateResponse
     * @throws ApiError
     */
    public getExchangeRatesByExIds(exIds: Array<string>): CancelablePromise<ExchangeRateResponse> {
        return this.httpRequest.request({
            method: "GET",
            url: "/exchange-rates/rates",
            query: {
                exIds: exIds,
            },
        });
    }
}
