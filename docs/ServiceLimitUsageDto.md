# ServiceLimitUsageDto

What has been spent against a spending limit in its current period, and what is left.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periodStart** | **string** | The start of the current period, in UTC. | [optional] [default to undefined]
**periodEnd** | **string** | The end of the current period, in UTC: the moment the spending starts again from zero. Null for a lifetime  limit, which never resets. | [optional] [default to undefined]
**amountConsumed** | **number** | The money charged in the current period, in the currency of the limit. | [optional] [default to undefined]
**amountAvailable** | **number** | The money still available in the current period: the threshold less what was charged and what is reserved for  operations in progress, never below zero. Null when the limit has no money threshold. | [optional] [default to undefined]
**quantityConsumed** | **number** | The quantity consumed in the current period, in the unit of the limit. | [optional] [default to undefined]
**quantityAvailable** | **number** | The quantity still available in the current period, never below zero; null when the limit has no quantity  threshold. | [optional] [default to undefined]

## Example

```typescript
import { ServiceLimitUsageDto } from '@onlyoffice/docspace-api-sdk';

const instance: ServiceLimitUsageDto = {
    periodStart,
    periodEnd,
    amountConsumed,
    amountAvailable,
    quantityConsumed,
    quantityAvailable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
