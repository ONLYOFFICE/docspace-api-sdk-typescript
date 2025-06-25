# TenantQuotaFeatureDto

The tenant quota feature parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the tenant quota feature. | [optional] [default to undefined]
**title** | **string** | The title of the tenant quota feature. | [optional] [default to undefined]
**image** | **string** | The image URL of the tenant quota feature. | [optional] [default to undefined]
**value** | **any** | The value of the tenant quota feature. | [optional] [default to undefined]
**type** | **string** | The type of the tenant quota feature. | [optional] [default to undefined]
**used** | [**FeatureUsedDto**](FeatureUsedDto.md) |  | [optional] [default to undefined]
**priceTitle** | **string** | The price title of the tenant quota feature. | [optional] [default to undefined]

## Example

```typescript
import { TenantQuotaFeatureDto } from '@onlyoffice/docspace-api-typescript';

const instance: TenantQuotaFeatureDto = {
    id,
    title,
    image,
    value,
    type,
    used,
    priceTitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
