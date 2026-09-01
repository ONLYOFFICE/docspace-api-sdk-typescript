# DocsCloudPayment

Represents the payment information of a DocsCloud tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cartId** | **string** | The cart ID. | [optional] [default to undefined]
**productId** | **number** | The product ID. | [optional] [default to undefined]
**status** | **number** | The payment status. | [optional] [default to undefined]
**intervalUnit** | **number** | The interval unit. | [optional] [default to undefined]
**isYear** | **boolean** | Whether the payment interval is yearly. | [optional] [default to undefined]
**isPrepaid** | **boolean** | Whether the payment is prepaid. | [optional] [default to undefined]
**quantity** | **number** | The quantity. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the payment. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudPayment } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudPayment = {
    cartId,
    productId,
    status,
    intervalUnit,
    isYear,
    isPrepaid,
    quantity,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
