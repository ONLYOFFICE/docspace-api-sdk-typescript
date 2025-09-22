# OperationDto

Represents an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**service** | **string** | Service related to the operation. | [optional] [default to undefined]
**description** | **string** | Brief description of the operation. | [optional] [default to undefined]
**details** | **string** | Brief details of the operation. | [optional] [default to undefined]
**serviceUnit** | **string** | Unit of the service. | [optional] [default to undefined]
**quantity** | **number** | Quantity of the service used. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the operation. | [optional] [default to undefined]
**credit** | **number** | Credit amount of the operation. | [optional] [default to undefined]
**debit** | **number** | Debit amount of the operation. | [optional] [default to undefined]
**participantName** | **string** | Original name of the participant. | [optional] [default to undefined]
**participantDisplayName** | **string** | Display name of the participant. | [optional] [default to undefined]

## Example

```typescript
import { OperationDto } from '@onlyoffice/docspace-api-sdk';

const instance: OperationDto = {
    date,
    service,
    description,
    details,
    serviceUnit,
    quantity,
    currency,
    credit,
    debit,
    participantName,
    participantDisplayName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
