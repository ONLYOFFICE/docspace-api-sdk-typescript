# CustomerInfoDto

The customer information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portalId** | **string** | The portal ID. | [optional] [readonly] [default to undefined]
**paymentMethodStatus** | [**PaymentMethodStatus**](PaymentMethodStatus.md) |  | [optional] [default to undefined]
**email** | **string** | The customer email address. | [optional] [readonly] [default to undefined]
**payer** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerInfoDto = {
    portalId,
    paymentMethodStatus,
    email,
    payer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
