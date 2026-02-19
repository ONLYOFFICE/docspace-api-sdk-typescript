# TenantQuota

The current tenant quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**name** | **string** | The tenant name. | [optional] [default to undefined]
**price** | **number** | The tenant price. | [optional] [default to undefined]
**priceCurrencySymbol** | **string** | The tenant price currency symbol. | [optional] [default to undefined]
**priceISOCurrencySymbol** | **string** | The tenant price three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**productId** | **string** | The tenant product ID. | [optional] [default to undefined]
**serviceName** | **string** | The service name. | [optional] [default to undefined]
**serviceGroup** | **string** | The service group. | [optional] [default to undefined]
**visible** | **boolean** | Specifies if the tenant quota is visible or not. | [optional] [default to undefined]
**wallet** | **boolean** | Specifies if the tenant quota applies to the wallet or not | [optional] [default to undefined]
**dueDate** | **string** | The quota due date. | [optional] [default to undefined]
**features** | **string** | The tenant quota features. | [optional] [default to undefined]
**maxFileSize** | **number** | The tenant maximum file size. | [optional] [default to undefined]
**maxTotalSize** | **number** | The tenant maximum total size. | [optional] [default to undefined]
**countUser** | **number** | The number of portal users. | [optional] [default to undefined]
**countRoomAdmin** | **number** | The number of portal room administrators. | [optional] [default to undefined]
**usersInRoom** | **number** | The number of room users. | [optional] [default to undefined]
**countRoom** | **number** | The number of rooms. | [optional] [default to undefined]
**nonProfit** | **boolean** | Specifies if the tenant quota is nonprofit or not. | [optional] [default to undefined]
**trial** | **boolean** | Specifies if the tenant quota is trial or not. | [optional] [default to undefined]
**free** | **boolean** | Specifies if the tenant quota is free or not. | [optional] [default to undefined]
**update** | **boolean** | Specifies if the tenant quota is updated or not. | [optional] [default to undefined]
**audit** | **boolean** | Specifies if the audit trail is available or not. | [optional] [default to undefined]
**docsEdition** | **boolean** | Specifies if ONLYOFFICE Docs is included in the tenant quota or not. | [optional] [default to undefined]
**ldap** | **boolean** | Specifies if the LDAP settings are available or not. | [optional] [default to undefined]
**sso** | **boolean** | Specifies if the SSO settings are available or not. | [optional] [default to undefined]
**statistic** | **boolean** | Specifies if the statistics settings are available or not. | [optional] [default to undefined]
**branding** | **boolean** | Specifies if the branding settings are available or not. | [optional] [default to undefined]
**customization** | **boolean** | Specifies if the customization settings are available or not. | [optional] [default to undefined]
**lifetime** | **boolean** | Specifies if the license has the lifetime settings or not. | [optional] [default to undefined]
**automationApi** | **boolean** | Specifies if the Automation API is available or not. | [optional] [default to undefined]
**custom** | **boolean** | Specifies if the custom domain URL is available or not. | [optional] [default to undefined]
**restore** | **boolean** | Specifies if the restore is enabled or not. | [optional] [default to undefined]
**oauth** | **boolean** | Specifies if Oauth is available or not. | [optional] [default to undefined]
**contentSearch** | **boolean** | Specifies if the content search is available or not. | [optional] [default to undefined]
**thirdParty** | **boolean** | Specifies if the third-party accounts linking is available or not. | [optional] [default to undefined]
**year** | **boolean** | Specifies if the tenant quota is yearly subscription or not. | [optional] [default to undefined]
**countFreeBackup** | **number** | The number of free backups within a month. | [optional] [default to undefined]
**backup** | **boolean** | Specifies if the backup anabled as a wallet service or not. | [optional] [default to undefined]
**countAIAgent** | **number** | The number of AI agents. | [optional] [default to undefined]
**aiTools** | **boolean** | Specifies if the AI tools anabled as a wallet service or not. | [optional] [default to undefined]
**aiToolsWebSearch** | **boolean** | Specifies whether the web search is enabled as a subservice of AI tools. | [optional] [default to undefined]
**aiToolsWebFetch** | **boolean** | Specifies whether the web fetch is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsEmbedding** | **boolean** | Specifies whether the embedding is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsDeepseek31Input** | **boolean** | Specifies whether the Deepseek 3.1 input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsDeepseek31Output** | **boolean** | Specifies whether the Deepseek 3.1 output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsClaude45Input** | **boolean** | Specifies whether the Claude 4.5 input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsClaude45Output** | **boolean** | Specifies whether the Claude 4.5 output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGPT5Input** | **boolean** | Specifies whether the GPT 5 input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGPT5Output** | **boolean** | Specifies whether the GPT 5 output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsDeepseek32Input** | **boolean** | Specifies whether the Deepseek 3.2 input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsDeepseek32Output** | **boolean** | Specifies whether the Deepseek 3.2 output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGPT52Input** | **boolean** | Specifies whether the GPT 5.2 input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGPT52Output** | **boolean** | Specifies whether the GPT 5.2 output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGemini3ProInput** | **boolean** | Specifies whether the Gemini 3 Pro input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGemini3ProOutput** | **boolean** | Specifies whether the Gemini 3 Pro output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGemini3FlashInput** | **boolean** | Specifies whether the Gemini 3 Flash input tokens is enabled as a subservice of AI tools | [optional] [default to undefined]
**aiToolsGemini3FlashOutput** | **boolean** | Specifies whether the Gemini 3 Flash output tokens is enabled as a subservice of AI tools | [optional] [default to undefined]

## Example

```typescript
import { TenantQuota } from '@onlyoffice/docspace-api-sdk';

const instance: TenantQuota = {
    tenantId,
    name,
    price,
    priceCurrencySymbol,
    priceISOCurrencySymbol,
    productId,
    serviceName,
    serviceGroup,
    visible,
    wallet,
    dueDate,
    features,
    maxFileSize,
    maxTotalSize,
    countUser,
    countRoomAdmin,
    usersInRoom,
    countRoom,
    nonProfit,
    trial,
    free,
    update,
    audit,
    docsEdition,
    ldap,
    sso,
    statistic,
    branding,
    customization,
    lifetime,
    automationApi,
    custom,
    restore,
    oauth,
    contentSearch,
    thirdParty,
    year,
    countFreeBackup,
    backup,
    countAIAgent,
    aiTools,
    aiToolsWebSearch,
    aiToolsWebFetch,
    aiToolsEmbedding,
    aiToolsDeepseek31Input,
    aiToolsDeepseek31Output,
    aiToolsClaude45Input,
    aiToolsClaude45Output,
    aiToolsGPT5Input,
    aiToolsGPT5Output,
    aiToolsDeepseek32Input,
    aiToolsDeepseek32Output,
    aiToolsGPT52Input,
    aiToolsGPT52Output,
    aiToolsGemini3ProInput,
    aiToolsGemini3ProOutput,
    aiToolsGemini3FlashInput,
    aiToolsGemini3FlashOutput,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
