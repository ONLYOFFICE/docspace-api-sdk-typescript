# WalletServiceDto

The wallet service information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The quota ID. | [default to undefined]
**title** | **string** | The quota title. | [optional] [default to undefined]
**price** | [**PriceDto**](PriceDto.md) |  | [default to undefined]
**nonProfit** | **boolean** | Specifies if the quota is nonprofit or not. | [default to undefined]
**free** | **boolean** | Specifies if the quota is free or not. | [default to undefined]
**trial** | **boolean** | Specifies if the quota is trial or not. | [default to undefined]
**features** | [**Array&lt;TenantQuotaFeatureDto&gt;**](TenantQuotaFeatureDto.md) | The list of tenant quota features. | [default to undefined]
**usersQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] [default to undefined]
**roomsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] [default to undefined]
**aiAgentsQuota** | [**TenantEntityQuotaSettings**](TenantEntityQuotaSettings.md) |  | [optional] [default to undefined]
**tenantCustomQuota** | [**TenantQuotaSettings**](TenantQuotaSettings.md) |  | [optional] [default to undefined]
**dueDate** | **string** | The due date. | [optional] [default to undefined]
**innerServices** | [**Array&lt;WalletServiceDto&gt;**](WalletServiceDto.md) | The list of inner services. | [optional] [default to undefined]
**serviceName** | **string** | The service name. | [optional] [default to undefined]

## Example

```typescript
import { WalletServiceDto } from '@onlyoffice/docspace-api-sdk';

const instance: WalletServiceDto = {
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
    innerServices,
    serviceName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
