# CustomerServiceUsageDto

Aggregated customer usage statistics for a service over a period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **string** | The name of the service. | [optional] [default to undefined]
**title** | **string** | The title of the service. | [optional] [default to undefined]
**serviceUnit** | **string** | The unit of measurement for the service. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the amounts. | [optional] [default to undefined]
**totalQuantity** | **number** | The total number of units consumed. | [optional] [default to undefined]
**totalAmount** | **number** | The total amount charged for the service. | [optional] [default to undefined]
**operationCount** | **number** | The number of individual purchase operations. | [optional] [default to undefined]

## Example

```typescript
import { CustomerServiceUsageDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerServiceUsageDto = {
    service,
    title,
    serviceUnit,
    currency,
    totalQuantity,
    totalAmount,
    operationCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
