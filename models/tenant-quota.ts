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
 * The current tenant quota.
 * @export
 * @interface TenantQuota
 */
export interface TenantQuota {
    /**
     * The tenant ID.
     * @type {number}
     * @memberof TenantQuota
     */
    'tenantId'?: number;
    /**
     * The tenant name.
     * @type {string}
     * @memberof TenantQuota
     */
    'name'?: string | null;
    /**
     * The tenant price.
     * @type {number}
     * @memberof TenantQuota
     */
    'price'?: number;
    /**
     * The tenant price currency symbol.
     * @type {string}
     * @memberof TenantQuota
     */
    'priceCurrencySymbol'?: string | null;
    /**
     * The tenant price three-character ISO 4217 currency symbol.
     * @type {string}
     * @memberof TenantQuota
     */
    'priceISOCurrencySymbol'?: string | null;
    /**
     * The tenant product ID.
     * @type {string}
     * @memberof TenantQuota
     */
    'productId'?: string | null;
    /**
     * Specifies if the tenant quota is visible or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'visible'?: boolean;
    /**
     * Specifies if the tenant quota applies to the wallet or not
     * @type {boolean}
     * @memberof TenantQuota
     */
    'wallet'?: boolean;
    /**
     * The quota due date.
     * @type {string}
     * @memberof TenantQuota
     */
    'dueDate'?: string | null;
    /**
     * The tenant quota features.
     * @type {string}
     * @memberof TenantQuota
     */
    'features'?: string | null;
    /**
     * The tenant maximum file size.
     * @type {number}
     * @memberof TenantQuota
     */
    'maxFileSize'?: number;
    /**
     * The tenant maximum total size.
     * @type {number}
     * @memberof TenantQuota
     */
    'maxTotalSize'?: number;
    /**
     * The number of portal users.
     * @type {number}
     * @memberof TenantQuota
     */
    'countUser'?: number;
    /**
     * The number of portal room administrators.
     * @type {number}
     * @memberof TenantQuota
     */
    'countRoomAdmin'?: number;
    /**
     * The number of room users.
     * @type {number}
     * @memberof TenantQuota
     */
    'usersInRoom'?: number;
    /**
     * The number of rooms.
     * @type {number}
     * @memberof TenantQuota
     */
    'countRoom'?: number;
    /**
     * Specifies if the tenant quota is nonprofit or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'nonProfit'?: boolean;
    /**
     * Specifies if the tenant quota is trial or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'trial'?: boolean;
    /**
     * Specifies if the tenant quota is free or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'free'?: boolean;
    /**
     * Specifies if the tenant quota is updated or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'update'?: boolean;
    /**
     * Specifies if the audit trail is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'audit'?: boolean;
    /**
     * Specifies if ONLYOFFICE Docs is included in the tenant quota or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'docsEdition'?: boolean;
    /**
     * Specifies if the LDAP settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'ldap'?: boolean;
    /**
     * Specifies if the SSO settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'sso'?: boolean;
    /**
     * Specifies if the statistics settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'statistic'?: boolean;
    /**
     * Specifies if the branding settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'branding'?: boolean;
    /**
     * Specifies if the customization settings are available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'customization'?: boolean;
    /**
     * Specifies if the license has the lifetime settings or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'lifetime'?: boolean;
    /**
     * Specifies if the custom domain URL is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'custom'?: boolean;
    /**
     * Specifies if the restore is enabled or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'restore'?: boolean;
    /**
     * Specifies if Oauth is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'oauth'?: boolean;
    /**
     * Specifies if the content search is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'contentSearch'?: boolean;
    /**
     * Specifies if the third-party accounts linking is available or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'thirdParty'?: boolean;
    /**
     * Specifies if the tenant quota is yearly subscription or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'year'?: boolean;
    /**
     * The number of free backups within a month.
     * @type {number}
     * @memberof TenantQuota
     */
    'countFreeBackup'?: number;
    /**
     * Specifies if the backup anabled as a wallet service or not.
     * @type {boolean}
     * @memberof TenantQuota
     */
    'backup'?: boolean;
}

