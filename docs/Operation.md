# Operation

Represents an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the operation. | [optional] [default to undefined]
**service** | **string** | Service related to the operation. | [optional] [default to undefined]
**description** | **string** | Brief description of the operation. | [optional] [default to undefined]
**serviceUnit** | **string** | Unit of the service. | [optional] [default to undefined]
**quantity** | **number** | Quantity of the service used. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the operation. | [optional] [default to undefined]
**credit** | **number** | Credit amount of the operation. | [optional] [default to undefined]
**withdrawal** | **number** | Withdrawal amount of the operation. | [optional] [default to undefined]

## Example

```typescript
import { Operation } from '@onlyoffice/docspace-api-typescript';

const instance: Operation = {
    date,
    service,
    description,
    serviceUnit,
    quantity,
    currency,
    credit,
    withdrawal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
