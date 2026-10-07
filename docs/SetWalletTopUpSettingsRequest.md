# SetWalletTopUpSettingsRequest

The part of the automatic top-up settings a payer chooses. The low-balance warning state is kept by the portal  itself and cannot be set here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the payment method on file is charged automatically when the wallet balance runs low. | [optional] [default to undefined]
**minBalance** | **number** | The balance below which a top-up is charged, in `currency`. | [optional] [default to undefined]
**upToBalance** | **number** | The balance a top-up brings the wallet up to, in `currency`. | [optional] [default to undefined]
**currency** | **string** | The three-letter ISO 4217 code both amounts are expressed in; it has to be the currency of the wallet. | [optional] [default to undefined]
**lowBalanceThreshold** | **number** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**lowBalanceNotified** | **boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { SetWalletTopUpSettingsRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SetWalletTopUpSettingsRequest = {
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
