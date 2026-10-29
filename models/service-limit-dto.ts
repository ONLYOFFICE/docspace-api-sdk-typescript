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
// May contain unused imports in some cases
// @ts-ignore
import type { ServiceLimitUsageDto } from './service-limit-usage-dto';

/**
 * A spending limit on the AI services: for the portal as a whole, for every user, or for one user.
 */
export interface ServiceLimitDto {
    /**
     * The service limit ID, used to read, change, switch off or delete the limit. In the list of the users the same  ID repeats for every user the limit for every user applies to.
     */
    'id'?: number;
    /**
     * The limited service group; the AI services are `ai-services`.
     */
    'serviceGroupName'?: string | null;
    /**
     * The number of the billing account of the portal the limit belongs to.
     */
    'customerAccountNumber'?: number;
    /**
     * Whom the limit applies to.
     */
    'scope'?: ServiceLimitScope;
    /**
     * The ID of the portal user the limit applies to: the user of a personal limit, or, in the list of the users, the  user a limit for every user applies to. Null for a limit of the portal as a whole, and for a limit for every  user read on its own.
     */
    'userId'?: string | null;
    /**
     * The most money the AI services may cost per period, in `currency`; null when the limit has no money threshold.
     */
    'amountValue'?: number | null;
    /**
     * The currency `amountValue` is expressed in; null when the limit has no money threshold.
     */
    'currency'?: string | null;
    /**
     * The largest quantity the AI services may consume per period, in `serviceUnit`; null when the limit has no  quantity threshold.
     */
    'quantityValue'?: number | null;
    /**
     * The unit `quantityValue` is expressed in; null when the limit has no quantity threshold.
     */
    'serviceUnit'?: string | null;
    /**
     * The window the thresholds apply to. A day, week or month resets at the start of the next one in UTC (a week on  Monday), not a fixed time after the first charge; a lifetime limit never resets.
     */
    'period'?: ServiceLimitPeriod;
    /**
     * The last moment of the current period, in UTC, after which the spending starts over from zero; null for a  lifetime limit, which never resets. Filled for every limit, the limit for every user included, whose spending is  counted per user.
     */
    'periodEnd'?: string | null;
    /**
     * The moment a lifetime limit counts from, in UTC; null for the other periods.
     */
    'usageFrom'?: string | null;
    /**
     * Whether the limit is in force. A switched-off limit no longer restricts the AI services and can be switched  back on.
     */
    'enabled'?: boolean;
    /**
     * The date and time when the limit was created, in UTC.
     */
    'created'?: string;
    /**
     * The date and time when the limit was last changed, in UTC.
     */
    'modified'?: string;
    /**
     * What was spent against the limit in its current period and what is left. Filled for the limit of the portal as  a whole and in the list of the users; null where the spending is not read, such as for a limit read by its ID  or the limit for every user, whose spending is counted per user.
     */
    'usage'?: ServiceLimitUsageDto;
}



