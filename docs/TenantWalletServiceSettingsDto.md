# TenantWalletServiceSettingsDto

The wallet services an administrator switched on for the portal by hand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabledServices** | **Array&lt;number&gt;** | The list of the enabled wallet services. | [optional] [default to undefined]
**lastModified** | **string** | The date and time when the wallet services settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { TenantWalletServiceSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantWalletServiceSettingsDto = {
    enabledServices,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
