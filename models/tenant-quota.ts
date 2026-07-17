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
 * The current tenant quota.
 */
export interface TenantQuota {
    /**
     * The tenant ID.
     */
    'tenantId'?: number;
    /**
     * The tenant name.
     */
    'name'?: string | null;
    /**
     * The tenant price.
     */
    'price'?: number;
    /**
     * The tenant price currency symbol.
     */
    'priceCurrencySymbol'?: string | null;
    /**
     * The tenant price three-character ISO 4217 currency symbol.
     */
    'priceISOCurrencySymbol'?: string | null;
    /**
     * The tenant product ID.
     */
    'productId'?: string | null;
    /**
     * The service name.
     */
    'serviceName'?: string | null;
    /**
     * The service group.
     */
    'serviceGroup'?: string | null;
    /**
     * Specifies if the tenant quota is visible or not.
     */
    'visible'?: boolean;
    /**
     * Specifies if the tenant quota applies to the wallet or not
     */
    'wallet'?: boolean;
    /**
     * The quota due date.
     */
    'dueDate'?: string | null;
    /**
     * The tenant quota features.
     */
    'features'?: string | null;
    /**
     * The tenant maximum file size.
     */
    'maxFileSize'?: number;
    /**
     * The tenant maximum total size.
     */
    'maxTotalSize'?: number;
    /**
     * The number of portal users.
     */
    'countUser'?: number;
    /**
     * The number of portal room administrators.
     */
    'countRoomAdmin'?: number;
    /**
     * The number of room users.
     */
    'usersInRoom'?: number;
    /**
     * The number of rooms.
     */
    'countRoom'?: number;
    /**
     * Specifies if the tenant quota is nonprofit or not.
     */
    'nonProfit'?: boolean;
    /**
     * Specifies if the tenant quota is trial or not.
     */
    'trial'?: boolean;
    /**
     * Specifies if the tenant quota is free or not.
     */
    'free'?: boolean;
    /**
     * Specifies if the tenant quota is updated or not.
     */
    'update'?: boolean;
    /**
     * Specifies if the audit trail is available or not.
     */
    'audit'?: boolean;
    /**
     * Specifies if ONLYOFFICE Docs is included in the tenant quota or not.
     */
    'docsEdition'?: boolean;
    /**
     * Specifies if the LDAP settings are available or not.
     */
    'ldap'?: boolean;
    /**
     * Specifies if the SSO settings are available or not.
     */
    'sso'?: boolean;
    /**
     * Specifies if the statistics settings are available or not.
     */
    'statistic'?: boolean;
    /**
     * Specifies if the branding settings are available or not.
     */
    'branding'?: boolean;
    /**
     * Specifies if the customization settings are available or not.
     */
    'customization'?: boolean;
    /**
     * Specifies if the license has the lifetime settings or not.
     */
    'lifetime'?: boolean;
    /**
     * Specifies if the Automation API is available or not.
     */
    'automationApi'?: boolean;
    /**
     * Specifies if the custom domain URL is available or not.
     */
    'custom'?: boolean;
    /**
     * Specifies if the restore is enabled or not.
     */
    'restore'?: boolean;
    /**
     * Specifies if Oauth is available or not.
     */
    'oauth'?: boolean;
    /**
     * Specifies if the content search is available or not.
     */
    'contentSearch'?: boolean;
    /**
     * Specifies if the third-party accounts linking is available or not.
     */
    'thirdParty'?: boolean;
    /**
     * Specifies if the tenant quota is yearly subscription or not.
     */
    'year'?: boolean;
    /**
     * The number of free backups within a month.
     */
    'countFreeBackup'?: number;
    /**
     * Specifies if the backup enabled as a wallet service or not.
     */
    'backup'?: boolean;
    /**
     * The number of AI agents.
     */
    'countAIAgent'?: number;
    /**
     * Specifies if the AI tools enabled as a wallet service or not.
     */
    'aiTools'?: boolean;
}

