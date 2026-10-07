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
 * The part of the automatic top-up settings a payer chooses. The low-balance warning state is kept by the portal  itself and cannot be set here.
 */
export interface SetWalletTopUpSettingsRequest {
    /**
     * Whether the payment method on file is charged automatically when the wallet balance runs low.
     */
    'enabled'?: boolean;
    /**
     * The balance below which a top-up is charged, in `currency`.
     */
    'minBalance'?: number;
    /**
     * The balance a top-up brings the wallet up to, in `currency`.
     */
    'upToBalance'?: number;
    /**
     * The three-letter ISO 4217 code both amounts are expressed in; it has to be the currency of the wallet.
     */
    'currency'?: string | null;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'lowBalanceThreshold'?: number;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'lowBalanceNotified'?: boolean;
    /**
     * Accepted for compatibility with earlier clients and not read: the server keeps its own value.
     */
    'lastModified'?: string;
}

