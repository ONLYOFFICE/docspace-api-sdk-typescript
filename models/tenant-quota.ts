/* tslint:disable */
/* eslint-disable */
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
 */
export interface TenantQuota {
    /**
     * The tenant ID.
     */
    'tenantId'?: number;
    /**
     * The tenant name.
     */
    'name'?: string;
    /**
     * The tenant price.
     */
    'price'?: number;
    /**
     * The tenant price currency symbol.
     */
    'priceCurrencySymbol'?: string;
    /**
     * The tenant price three-character ISO 4217 currency symbol.
     */
    'priceISOCurrencySymbol'?: string;
    /**
     * The tenant product ID.
     */
    'productId'?: string;
    /**
     * The service name.
     */
    'serviceName'?: string;
    /**
     * The service group.
     */
    'serviceGroup'?: string;
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
    'dueDate'?: string;
    /**
     * The tenant quota features.
     */
    'features'?: string;
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
     * Specifies if the backup anabled as a wallet service or not.
     */
    'backup'?: boolean;
    /**
     * The number of AI agents.
     */
    'countAIAgent'?: number;
    /**
     * Specifies if the AI tools anabled as a wallet service or not.
     */
    'aiTools'?: boolean;
    /**
     * Specifies whether the web search is enabled as a subservice of AI tools.
     */
    'aiToolsWebSearch'?: boolean;
    /**
     * Specifies whether the web fetch is enabled as a subservice of AI tools
     */
    'aiToolsWebFetch'?: boolean;
    /**
     * Specifies whether the embedding is enabled as a subservice of AI tools
     */
    'aiToolsEmbedding'?: boolean;
    /**
     * Specifies whether the Deepseek 3.1 input tokens is enabled as a subservice of AI tools
     */
    'aiToolsDeepseek31Input'?: boolean;
    /**
     * Specifies whether the Deepseek 3.1 output tokens is enabled as a subservice of AI tools
     */
    'aiToolsDeepseek31Output'?: boolean;
    /**
     * Specifies whether the Claude 4.5 input tokens is enabled as a subservice of AI tools
     */
    'aiToolsClaude45Input'?: boolean;
    /**
     * Specifies whether the Claude 4.5 output tokens is enabled as a subservice of AI tools
     */
    'aiToolsClaude45Output'?: boolean;
    /**
     * Specifies whether the GPT 5 input tokens is enabled as a subservice of AI tools
     */
    'aiToolsGPT5Input'?: boolean;
    /**
     * Specifies whether the GPT 5 output tokens is enabled as a subservice of AI tools
     */
    'aiToolsGPT5Output'?: boolean;
    /**
     * Specifies whether the Deepseek 3.2 input tokens is enabled as a subservice of AI tools
     */
    'aiToolsDeepseek32Input'?: boolean;
    /**
     * Specifies whether the Deepseek 3.2 output tokens is enabled as a subservice of AI tools
     */
    'aiToolsDeepseek32Output'?: boolean;
    /**
     * Specifies whether the GPT 5.2 input tokens is enabled as a subservice of AI tools
     */
    'aiToolsGPT52Input'?: boolean;
    /**
     * Specifies whether the GPT 5.2 output tokens is enabled as a subservice of AI tools
     */
    'aiToolsGPT52Output'?: boolean;
    /**
     * Specifies whether the Gemini 3 Pro input tokens is enabled as a subservice of AI tools
     */
    'aiToolsGemini3ProInput'?: boolean;
    /**
     * Specifies whether the Gemini 3 Pro output tokens is enabled as a subservice of AI tools
     */
    'aiToolsGemini3ProOutput'?: boolean;
    /**
     * Specifies whether the Gemini 3 Flash input tokens is enabled as a subservice of AI tools
     */
    'aiToolsGemini3FlashInput'?: boolean;
    /**
     * Specifies whether the Gemini 3 Flash output tokens is enabled as a subservice of AI tools
     */
    'aiToolsGemini3FlashOutput'?: boolean;
}

