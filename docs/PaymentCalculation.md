# PaymentCalculation

The payment calculation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationId** | **number** | Unique identifier of the operation. | [optional] [default to undefined]
**amount** | **number** | The amount of the payment calculation. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the payment calculation. | [optional] [default to undefined]
**quantity** | **number** | The quantity associated with the payment calculation. | [optional] [default to undefined]

## Example

```typescript
import { PaymentCalculation } from '@onlyoffice/docspace-api-typescript';

const instance: PaymentCalculation = {
    operationId,
    amount,
    currency,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
