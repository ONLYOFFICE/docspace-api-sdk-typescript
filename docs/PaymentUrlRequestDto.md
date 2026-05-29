# PaymentUrlRequestDto

The request parameters for the payment URL configuration with quantity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backUrl** | **string** | The URL where the user will be redirected after payment cancellation. | [default to undefined]
**successUrl** | **string** | The URL where the user will be redirected after successful payment. | [default to undefined]
**quantity** | **{ [key: string]: number; }** | The payment quantity. | [optional] [default to undefined]

## Example

```typescript
import { PaymentUrlRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: PaymentUrlRequestDto = {
    backUrl,
    successUrl,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
