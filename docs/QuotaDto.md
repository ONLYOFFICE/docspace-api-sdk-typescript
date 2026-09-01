# QuotaDto

The quota information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota ID. | [default to undefined]
**title** | **string** | The quota title. | [optional] [default to undefined]
**price** | [**PriceDto**](PriceDto.md) | The price parameters. | [default to undefined]
**nonProfit** | **boolean** | Specifies if the quota is nonprofit or not. | [default to undefined]
**free** | **boolean** | Specifies if the quota is free or not. | [default to undefined]
**trial** | **boolean** | Specifies if the quota is trial or not. | [default to undefined]
**features** | [**Array&lt;TenantQuotaFeatureDto&gt;**](TenantQuotaFeatureDto.md) | The list of tenant quota features. | [default to undefined]
**usersQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) | The user quota. | [optional] [default to undefined]
**roomsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) | The room quota. | [optional] [default to undefined]
**aiAgentsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) | The ai agent quota. | [optional] [default to undefined]
**tenantCustomQuota** | [**TenantQuotaSettings**](TenantQuotaSettings.md) | The tenant custom quota. | [optional] [default to undefined]
**dueDate** | **string** | The due date. | [optional] [default to undefined]

## Example

```typescript
import { QuotaDto } from '@onlyoffice/docspace-api-sdk';

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
    aiAgentsQuota,
    tenantCustomQuota,
    dueDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
