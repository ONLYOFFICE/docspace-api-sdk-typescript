# ServiceLimitDto

A spending limit on the AI services: for the portal as a whole, for every user, or for one user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The service limit ID, used to read, change, switch off or delete the limit. In the list of the users the same  ID repeats for every user the limit for every user applies to. | [optional] [default to undefined]
**serviceGroupName** | **string** | The limited service group; the AI services are `ai-services`. | [optional] [default to undefined]
**customerAccountNumber** | **number** | The number of the billing account of the portal the limit belongs to. | [optional] [default to undefined]
**scope** | [**ServiceLimitScope**](ServiceLimitScope.md) | Whom the limit applies to. | [optional] [default to undefined]
**userId** | **string** | The ID of the portal user the limit applies to: the user of a personal limit, or, in the list of the users, the  user a limit for every user applies to. Null for a limit of the portal as a whole, and for a limit for every  user read on its own. | [optional] [default to undefined]
**amountValue** | **number** | The most money the AI services may cost per period, in `currency`; null when the limit has no money threshold. | [optional] [default to undefined]
**currency** | **string** | The currency `amountValue` is expressed in; null when the limit has no money threshold. | [optional] [default to undefined]
**quantityValue** | **number** | The largest quantity the AI services may consume per period, in `serviceUnit`; null when the limit has no  quantity threshold. | [optional] [default to undefined]
**serviceUnit** | **string** | The unit `quantityValue` is expressed in; null when the limit has no quantity threshold. | [optional] [default to undefined]
**period** | [**ServiceLimitPeriod**](ServiceLimitPeriod.md) | The window the thresholds apply to. A day, week or month resets at the start of the next one in UTC (a week on  Monday), not a fixed time after the first charge; a lifetime limit never resets. | [optional] [default to undefined]
**periodEnd** | **string** | The last moment of the current period, in UTC, after which the spending starts over from zero; null for a  lifetime limit, which never resets. Filled for every limit, the limit for every user included, whose spending is  counted per user. | [optional] [default to undefined]
**usageFrom** | **string** | The moment a lifetime limit counts from, in UTC; null for the other periods. | [optional] [default to undefined]
**enabled** | **boolean** | Whether the limit is in force. A switched-off limit no longer restricts the AI services and can be switched  back on. | [optional] [default to undefined]
**created** | **string** | The date and time when the limit was created, in UTC. | [optional] [default to undefined]
**modified** | **string** | The date and time when the limit was last changed, in UTC. | [optional] [default to undefined]
**usage** | [**ServiceLimitUsageDto**](ServiceLimitUsageDto.md) | What was spent against the limit in its current period and what is left. Filled for the limit of the portal as  a whole and in the list of the users; null where the spending is not read, such as for a limit read by its ID  or the limit for every user, whose spending is counted per user. | [optional] [default to undefined]

## Example

```typescript
import { ServiceLimitDto } from '@onlyoffice/docspace-api-sdk';

const instance: ServiceLimitDto = {
    id,
    serviceGroupName,
    customerAccountNumber,
    scope,
    userId,
    amountValue,
    currency,
    quantityValue,
    serviceUnit,
    period,
    periodEnd,
    usageFrom,
    enabled,
    created,
    modified,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
