/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ServiceLimitPeriod } from './service-limit-period';
// May contain unused imports in some cases
// @ts-ignore
import type { ServiceLimitScope } from './service-limit-scope';

/**
 * The spending limit on the AI services in force for one user: the user\'s personal limit, or else the limit for every  user, together with the money the user spent against it in the current period.
 */
export interface UserServiceLimitDto {
    /**
     * The service limit ID, used to read, change, switch off or delete the limit through the  `api/2.0/portal/payment/servicelimit` operations. For the limit for every user it is the same for all users.
     */
    'id'?: number;
    /**
     * Whether the limit is the user\'s own (`Custom`) or the limit for every user (`Global`) the user falls back to.
     */
    'scope'?: ServiceLimitScope;
    /**
     * The most money the AI services may cost the user per period, in `currency`. It is the only threshold a limit on  the AI services has: their services count in different units, so a threshold on a quantity is refused for them.
     */
    'amountValue'?: number | null;
    /**
     * The money the AI services cost the user in the current period, in `currency`; 0 when nothing was spent yet,  including a user who has never used the AI services.
     */
    'amountConsumed'?: number;
    /**
     * The currency `amountValue` and `amountConsumed` are expressed in; null when the limit has no money threshold.
     */
    'currency'?: string | null;
    /**
     * The window the threshold applies to. It resets at the start of the next day, week or month in UTC (a week on  Monday), not a fixed time after the first charge; a lifetime limit never resets.
     */
    'period'?: ServiceLimitPeriod;
    /**
     * The moment the current period ends and the spending starts over from zero, in UTC. Null for a lifetime limit,  which never resets.
     */
    'periodEnd'?: string | null;
}



