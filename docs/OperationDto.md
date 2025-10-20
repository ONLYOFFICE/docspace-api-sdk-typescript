# OperationDto

Represents an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**service** | **string** | The service related to the operation. | [optional] [default to undefined]
**description** | **string** | The brief operation description. | [optional] [default to undefined]
**details** | **string** | The detailed information about the operation. | [optional] [default to undefined]
**serviceUnit** | **string** | The service unit. | [optional] [default to undefined]
**quantity** | **number** | The quantity of the service used. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the operation. | [optional] [default to undefined]
**credit** | **number** | The credit amount of the operation. | [optional] [default to undefined]
**debit** | **number** | The debit amount of the operation. | [optional] [default to undefined]
**participantName** | **string** | The participant original name. | [optional] [default to undefined]
**participantDisplayName** | **string** | The participant display name. | [optional] [default to undefined]

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
