# TenantWalletSettingsDto

The automatic wallet top-up settings of the portal, together with the low-balance warning state the portal keeps  for them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the payment method on file is charged automatically when the wallet balance runs low. | [optional] [default to undefined]
**minBalance** | **number** | The balance below which a top-up is charged, in `currency`; 0 while top-up has never been configured. | [optional] [default to undefined]
**upToBalance** | **number** | The balance a top-up brings the wallet up to, in `currency`; 0 while top-up has never been configured. | [optional] [default to undefined]
**currency** | **string** | The three-letter ISO 4217 code both amounts are expressed in, or `null` while top-up has never been configured. | [optional] [default to undefined]
**lowBalanceThreshold** | **number** | The wallet balance below which the portal sends its low-balance warning. The portal maintains it; it cannot be  set by a request. | [optional] [default to undefined]
**lowBalanceNotified** | **boolean** | Whether the low-balance warning has already been sent for the current dip below `lowBalanceThreshold`. The  portal maintains it, and switching top-up on re-arms it. | [optional] [default to undefined]
**lastModified** | **string** | When the settings were last stored; when they were never stored, the moment they were read instead. | [optional] [default to undefined]

## Example

```typescript
import { TenantWalletSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantWalletSettingsDto = {
    enabled,
    minBalance,
    upToBalance,
    currency,
    lowBalanceThreshold,
    lowBalanceNotified,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
