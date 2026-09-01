# SubscriptionBalanceInfo

The information about the current subscription and its unused balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCost** | **number** | The total cost of the current billing period (the sum across all subscription items). | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the subscription. | [optional] [default to undefined]
**periodStart** | **string** | The start of the current billing period. | [optional] [default to undefined]
**periodEnd** | **string** | The end of the current billing period. | [optional] [default to undefined]
**periodUsedUntil** | **string** | The boundary of the used part of the period (the moment of the request). | [optional] [default to undefined]
**daysElapsed** | **number** | The number of days elapsed since the start of the period (inclusive). | [optional] [default to undefined]
**remainingBalance** | **number** | The unused balance of the subscription, in the subscription currency. | [optional] [default to undefined]
**remainingBalanceInWalletCurrency** | **number** | The unused balance of the subscription, converted to the wallet currency. | [optional] [default to undefined]
**walletCurrency** | **string** | The three-character ISO 4217 currency symbol of the wallet. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionBalanceInfo } from '@onlyoffice/docspace-api-sdk';

const instance: SubscriptionBalanceInfo = {
    totalCost,
    currency,
    periodStart,
    periodEnd,
    periodUsedUntil,
    daysElapsed,
    remainingBalance,
    remainingBalanceInWalletCurrency,
    walletCurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
