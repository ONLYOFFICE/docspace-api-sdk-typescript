# CreateServiceLimitRequestDto

The spending limit to create on the AI services: for the portal as a whole, for every user, or for one user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**ServiceLimitScope**](ServiceLimitScope.md) | Whom the limit applies to. | [optional] [default to undefined]
**userId** | **string** | The ID of the portal user a personal limit is set for, as returned in `id` by the people operations. | [optional] [default to undefined]
**amountValue** | **number** | The most money the AI services may cost per period, in their currency, which cannot be chosen. Zero blocks the  AI services completely. | [optional] [default to undefined]
**quantityValue** | **number** | The largest quantity the AI services may consume per period, in their common unit. Zero blocks the AI services  completely. | [optional] [default to undefined]
**period** | [**ServiceLimitPeriod**](ServiceLimitPeriod.md) | The window the thresholds apply to, in UTC. A day, week or month is calendar-aligned rather than rolling - a  daily limit resets at midnight UTC, a weekly one on Monday - while a lifetime limit counts from its creation and  never resets. | [optional] [default to undefined]

## Example

```typescript
import { CreateServiceLimitRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateServiceLimitRequestDto = {
    scope,
    userId,
    amountValue,
    quantityValue,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
