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
 * The spending limit to create on the AI services: for the portal as a whole, for every user, or for one user.
 */
export interface CreateServiceLimitRequestDto {
    /**
     * Whom the limit applies to.
     */
    'scope'?: ServiceLimitScope;
    /**
     * The ID of the portal user a personal limit is set for, as returned in `id` by the people operations.
     */
    'userId'?: string | null;
    /**
     * The most money the AI services may cost per period, in their currency, which cannot be chosen. Zero blocks the  AI services completely.
     */
    'amountValue'?: number | null;
    /**
     * The largest quantity the AI services may consume per period, in their common unit. Zero blocks the AI services  completely.
     */
    'quantityValue'?: number | null;
    /**
     * The window the thresholds apply to, in UTC. A day, week or month is calendar-aligned rather than rolling - a  daily limit resets at midnight UTC, a weekly one on Monday - while a lifetime limit counts from its creation and  never resets.
     */
    'period'?: ServiceLimitPeriod;
}



