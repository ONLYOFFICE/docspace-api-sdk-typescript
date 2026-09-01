# UpcomingPaymentDto

The upcoming payment parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota ID. | [optional] [default to undefined]
**name** | **string** | The quota name. | [optional] [default to undefined]
**title** | **string** | The quota title. | [optional] [default to undefined]
**unitOfMeasure** | **string** | The quota unit of measure. | [optional] [default to undefined]
**quantity** | **number** | The quantity that will be charged (the next quantity if set, otherwise the current quantity). | [optional] [default to undefined]
**wallet** | **boolean** | The quota applies to the wallet or not. | [optional] [default to undefined]
**dueDate** | **string** | The due date of the upcoming payment in the portal time zone. | [optional] [default to undefined]
**amount** | **number** | The amount that will be charged (unit price multiplied by the quantity). | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the amount. | [optional] [default to undefined]

## Example

```typescript
import { UpcomingPaymentDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpcomingPaymentDto = {
    id,
    name,
    title,
    unitOfMeasure,
    quantity,
    wallet,
    dueDate,
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
