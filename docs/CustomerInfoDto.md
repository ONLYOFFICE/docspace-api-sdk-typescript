# CustomerInfoDto

The billing customer behind the portal, and which portal member pays for it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**portalId** | **string** | The portal\'s identifier in the billing system, which is what support and invoices refer to. It is not the  portal alias. | [optional] [readonly] [default to undefined]
**paymentMethodStatus** | [**PaymentMethodStatus**](PaymentMethodStatus.md) | Whether a payment method is stored for the account and usable. Without one the portal can hold a wallet  balance but cannot be charged automatically. | [optional] [default to undefined]
**paymentMethodType** | **string** | The customer\'s payment method type. | [optional] [readonly] [default to undefined]
**isDelayedPaymentMethod** | **boolean** | Indicates whether the customer\'s payment method is delayed, i.e. the money reaches the wallet only after  the transfer settles rather than immediately. | [optional] [readonly] [default to undefined]
**email** | **string** | The address the billing account is registered to, lower-cased. It need not belong to a portal member,  which is exactly when `payer` stays empty. | [optional] [readonly] [default to undefined]
**payer** | [**EmployeeDto**](EmployeeDto.md) | The portal member whose account is behind the billing address. It is empty when `email` matches no member  of this portal, and while it is empty every operation of this group that only the payer may call is out  of reach for everybody. | [optional] [default to undefined]

## Example

```typescript
import { CustomerInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomerInfoDto = {
    portalId,
    paymentMethodStatus,
    paymentMethodType,
    isDelayedPaymentMethod,
    email,
    payer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
