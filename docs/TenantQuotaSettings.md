# TenantQuotaSettings

The tenant quota settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableQuota** | **boolean** | Specifies if the tenant quota is enabled or not. | [optional] [default to undefined]
**quota** | **number** | The tenant quota. | [optional] [default to undefined]
**lastRecalculateDate** | **string** | The date of the last tenant quota recalculation. | [optional] [default to undefined]
**lastModified** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantQuotaSettings } from '@onlyoffice/docspace-api-typescript';

const instance: TenantQuotaSettings = {
    enableQuota,
    quota,
    lastRecalculateDate,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
