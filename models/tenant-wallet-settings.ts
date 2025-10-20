/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
 * The tenant wallet settings.
 * @export
 * @interface TenantWalletSettings
 */
export interface TenantWalletSettings {
    /**
     * Specifies whether automatic top-up for the tenant wallet is enabled.
     * @type {boolean}
     * @memberof TenantWalletSettings
     */
    'enabled'?: boolean;
    /**
     * The minimum wallet balance at which automatic top-up will be triggered. Must be between 5 and 1000.
     * @type {number}
     * @memberof TenantWalletSettings
     */
    'minBalance'?: number;
    /**
     * The maximum wallet balance at which automatic top-up will be triggered. Must be between 6 and 5000.
     * @type {number}
     * @memberof TenantWalletSettings
     */
    'upToBalance'?: number;
    /**
     * The three-character ISO 4217 currency symbol.
     * @type {string}
     * @memberof TenantWalletSettings
     */
    'currency'?: string | null;
    /**
     * The date and time when the tenant wallet settings were last modified.
     * @type {string}
     * @memberof TenantWalletSettings
     */
    'lastModified'?: string;
}

