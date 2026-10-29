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


/**
 * What has been spent against a spending limit in its current period, and what is left.
 */
export interface ServiceLimitUsageDto {
    /**
     * The start of the current period, in UTC.
     */
    'periodStart'?: string;
    /**
     * The end of the current period, in UTC: the moment the spending starts again from zero. Null for a lifetime  limit, which never resets.
     */
    'periodEnd'?: string | null;
    /**
     * The money charged in the current period, in the currency of the limit.
     */
    'amountConsumed'?: number;
    /**
     * The money still available in the current period: the threshold less what was charged and what is reserved for  operations in progress, never below zero. Null when the limit has no money threshold.
     */
    'amountAvailable'?: number | null;
    /**
     * The quantity consumed in the current period, in the unit of the limit.
     */
    'quantityConsumed'?: number;
    /**
     * The quantity still available in the current period, never below zero; null when the limit has no quantity  threshold.
     */
    'quantityAvailable'?: number | null;
}

