# ServicePriceInfo

Represents a price of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The price unique identifier. | [optional] [default to undefined]
**accountNumber** | **number** | The account number. | [optional] [default to undefined]
**serviceId** | **number** | The service ID. | [optional] [default to undefined]
**timeUnit** | [**PriceTimeUnit**](PriceTimeUnit.md) | The time unit the price is bound to. | [optional] [default to undefined]
**costPrice** | **number** | The cost price. | [optional] [default to undefined]
**extraCharge** | **number** | The extra charge added to the cost price. | [optional] [default to undefined]
**servicePrice** | **number** | The resulting service price. | [optional] [default to undefined]
**quota** | **number** | The quota the price is set for. | [optional] [default to undefined]
**timeBound** | [**TimeBound**](TimeBound.md) | The period the price is effective in. | [optional] [default to undefined]
**status** | [**PriceStatus**](PriceStatus.md) | The price status. | [optional] [default to undefined]
**created** | **string** | The date and time when the price was created. | [optional] [default to undefined]
**discountCategoryId** | **number** | The discount category ID. | [optional] [default to undefined]
**discountCategory** | [**DiscountCategory**](DiscountCategory.md) | The discount category. | [optional] [default to undefined]

## Example

```typescript
import { ServicePriceInfo } from '@onlyoffice/docspace-api-sdk';

const instance: ServicePriceInfo = {
    id,
    accountNumber,
    serviceId,
    timeUnit,
    costPrice,
    extraCharge,
    servicePrice,
    quota,
    timeBound,
    status,
    created,
    discountCategoryId,
    discountCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
