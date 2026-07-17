# ServicePayment

Represents service payment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationId** | **number** | The payment operation ID. | [optional] [default to undefined]
**amount** | **number** | The balance of the sub-account in the specified currency. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol. | [optional] [default to undefined]
**quantity** | **number** | Total quantity of operations. | [optional] [default to undefined]
**subscriptionId** | **number** | The subscription ID | [optional] [default to undefined]
**startDate** | **string** | The subscription start date. | [optional] [default to undefined]
**endDate** | **string** | The subscription end date. | [optional] [default to undefined]

## Example

```typescript
import { ServicePayment } from '@onlyoffice/docspace-api-sdk';

const instance: ServicePayment = {
    operationId,
    amount,
    currency,
    quantity,
    subscriptionId,
    startDate,
    endDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
