# DiscountCategory

Represents a discount category applied to the price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The discount category unique identifier. | [optional] [default to undefined]
**valueDiscount** | **number** | The discount value. | [optional] [default to undefined]
**description** | **string** | The discount category description. | [optional] [default to undefined]
**created** | **string** | The date and time when the discount category was created. | [optional] [default to undefined]

## Example

```typescript
import { DiscountCategory } from '@onlyoffice/docspace-api-sdk';

const instance: DiscountCategory = {
    id,
    valueDiscount,
    description,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
