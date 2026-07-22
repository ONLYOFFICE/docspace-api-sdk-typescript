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
 * The information about the current subscription and its unused balance.
 */
export interface SubscriptionBalanceInfo {
    /**
     * The total cost of the current billing period (the sum across all subscription items).
     */
    'totalCost'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the subscription.
     */
    'currency'?: string | null;
    /**
     * The start of the current billing period.
     */
    'periodStart'?: string;
    /**
     * The end of the current billing period.
     */
    'periodEnd'?: string;
    /**
     * The boundary of the used part of the period (the moment of the request).
     */
    'periodUsedUntil'?: string;
    /**
     * The number of days elapsed since the start of the period (inclusive).
     */
    'daysElapsed'?: number;
    /**
     * The unused balance of the subscription, in the subscription currency.
     */
    'remainingBalance'?: number;
    /**
     * The unused balance of the subscription, converted to the wallet currency.
     */
    'remainingBalanceInWalletCurrency'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the wallet.
     */
    'walletCurrency'?: string | null;
}

