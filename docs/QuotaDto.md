# QuotaDto

The quota information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota ID. | [optional] [default to undefined]
**title** | **string** | The quota title. | [optional] [default to undefined]
**price** | [**PriceDto**](PriceDto.md) |  | [optional] [default to undefined]
**nonProfit** | **boolean** | Specifies if the quota is nonprofit or not. | [optional] [default to undefined]
**free** | **boolean** | Specifies if the quota is free or not. | [optional] [default to undefined]
**trial** | **boolean** | Specifies if the quota is trial or not. | [optional] [default to undefined]
**features** | [**Array&lt;TenantQuotaFeatureDto&gt;**](TenantQuotaFeatureDto.md) | The list of tenant quota features. | [optional] [default to undefined]
**usersQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] [default to undefined]
**roomsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] [default to undefined]
**tenantCustomQuota** | [**TenantQuotaSettings**](TenantQuotaSettings.md) |  | [optional] [default to undefined]
**dueDate** | **string** | The due date. | [optional] [default to undefined]

## Example

```typescript
import { QuotaDto } from '@onlyoffice/docspace-api-typescript';

const instance: QuotaDto = {
    id,
    title,
    price,
    nonProfit,
    free,
    trial,
    features,
    usersQuota,
    roomsQuota,
    tenantCustomQuota,
    dueDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
