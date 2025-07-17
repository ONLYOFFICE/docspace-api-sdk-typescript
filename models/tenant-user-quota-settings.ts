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
 * The user quota settings.
 * @export
 * @interface TenantUserQuotaSettings
 */
export interface TenantUserQuotaSettings {
    /**
     * Specifies if the quota is enabled for the tenant entity or not.
     * @type {boolean}
     * @memberof TenantUserQuotaSettings
     */
    'enableQuota'?: boolean;
    /**
     * The default quota of the tenant entity.
     * @type {number}
     * @memberof TenantUserQuotaSettings
     */
    'defaultQuota'?: number;
    /**
     * The date of the last quota recalculation.
     * @type {string}
     * @memberof TenantUserQuotaSettings
     */
    'lastRecalculateDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantUserQuotaSettings
     */
    'lastModified'?: string;
}

