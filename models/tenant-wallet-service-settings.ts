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
 * 
 * @export
 * @interface TenantWalletServiceSettings
 */
export interface TenantWalletServiceSettings {
    /**
     * Enabled services
     * @type {Array<number>}
     * @memberof TenantWalletServiceSettings
     */
    'enabledServices'?: Array<TenantWalletServiceSettingsEnabledServicesEnum> | null;
    /**
     * 
     * @type {string}
     * @memberof TenantWalletServiceSettings
     */
    'lastModified'?: string;
}

export const TenantWalletServiceSettingsEnabledServicesEnum = {
    /**
    * Backup
    */
    Backup: -12,
    /**
    * Storage
    */
    Storage: -11
} as const;

export type TenantWalletServiceSettingsEnabledServicesEnum = typeof TenantWalletServiceSettingsEnabledServicesEnum[keyof typeof TenantWalletServiceSettingsEnabledServicesEnum];


