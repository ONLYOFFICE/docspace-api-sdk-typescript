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
**custom** | **boolean** | Specifies if the custom domain URL is available or not. | [optional] [default to undefined]
**autoBackupRestore** | **boolean** | Specifies if the automatic backup option is enabled or not. | [optional] [default to undefined]
**oauth** | **boolean** | Specifies if Oauth is available or not. | [optional] [default to undefined]
**contentSearch** | **boolean** | Specifies if the content search is available or not. | [optional] [default to undefined]
**thirdParty** | **boolean** | Specifies if the third-party accounts linking is available or not. | [optional] [default to undefined]
**year** | **boolean** | Specifies if the tenant quota is yearly subscription or not. | [optional] [default to undefined]

## Example

```typescript
import { TenantQuota } from '@onlyoffice/docspace-api-typescript';

const instance: TenantQuota = {
    tenantId,
    name,
    price,
    priceCurrencySymbol,
    priceISOCurrencySymbol,
    productId,
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
    custom,
    autoBackupRestore,
    oauth,
    contentSearch,
    thirdParty,
    year,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
