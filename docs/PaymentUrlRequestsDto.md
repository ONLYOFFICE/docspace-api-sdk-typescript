# PaymentUrlRequestsDto

The request parameters for the payment URL configuration with quantity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backUrl** | **string** | The URL where the user will be redirected after payment processing. | [optional] [default to undefined]
**quantity** | **{ [key: string]: number; }** | The quantity of payment | [optional] [default to undefined]

## Example

```typescript
import { PaymentUrlRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PaymentUrlRequestsDto = {
    backUrl,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
