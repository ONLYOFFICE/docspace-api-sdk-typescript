# SetParticipantServiceLimitsRequestDto

The personal spending limit on the AI services to set for each of several portal users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userIds** | **Array&lt;string&gt;** | The IDs of the portal users the limit is set for, as returned in `id` by the people operations. | [default to undefined]
**amountValue** | **number** | The most money the AI services may cost each user per period, in their currency, which cannot be chosen. Zero  blocks the AI services completely. | [optional] [default to undefined]
**quantityValue** | **number** | The largest quantity the AI services may consume per period for each user, in their common unit. Zero blocks the  AI services completely. | [optional] [default to undefined]
**period** | [**ServiceLimitPeriod**](ServiceLimitPeriod.md) | The window the thresholds apply to, in UTC. A day, week or month is calendar-aligned rather than rolling - a  daily limit resets at midnight UTC, a weekly one on Monday - while a lifetime limit counts from its creation and  never resets. | [optional] [default to undefined]

## Example

```typescript
import { SetParticipantServiceLimitsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SetParticipantServiceLimitsRequestDto = {
    userIds,
    amountValue,
    quantityValue,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
