# TenantWalletSettings

The tenant wallet settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies whether automatic top-up for the tenant wallet is enabled. | [optional] [default to undefined]
**minBalance** | **number** | The minimum wallet balance at which automatic top-up will be triggered. Must be between 5 and 1000. | [optional] [default to undefined]
**upToBalance** | **number** | The maximum wallet balance at which automatic top-up will be triggered. Must be between 6 and 5000. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the tenant wallet settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { TenantWalletSettings } from '@onlyoffice/docspace-api-sdk';

const instance: TenantWalletSettings = {
    enabled,
    minBalance,
    upToBalance,
    currency,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
