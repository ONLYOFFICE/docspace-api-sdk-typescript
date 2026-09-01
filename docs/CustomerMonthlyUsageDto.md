# CustomerMonthlyUsageDto

Aggregated customer spending for a single calendar month.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**year** | **number** | The calendar year. | [optional] [default to undefined]
**month** | **number** | The calendar month (1-12). | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the amounts. | [optional] [default to undefined]
**totalAmount** | **number** | The total amount charged across all services in this month. | [optional] [default to undefined]
**operationCount** | **number** | The number of individual purchase operations in this month. | [optional] [default to undefined]

## Example

```typescript
import { CustomerMonthlyUsageDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerMonthlyUsageDto = {
    year,
    month,
    currency,
    totalAmount,
    operationCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
