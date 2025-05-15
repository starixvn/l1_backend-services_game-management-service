/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BotConfig } from './BotConfig';
import type { Pool } from './Pool';

export type JackpotConfig = {
    gameId: number;
    siteName: Array<string>;
    operatorId: string;
    enabled: boolean;
    pools: Pool;
    botConfig: BotConfig;
};
