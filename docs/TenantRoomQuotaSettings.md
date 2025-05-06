# TenantRoomQuotaSettings

The room quota settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableQuota** | **boolean** | Specifies if the quota is enabled for the tenant entity or not. | [optional] [default to undefined]
**defaultQuota** | **number** | The default quota of the tenant entity. | [optional] [default to undefined]
**lastRecalculateDate** | **string** | The date of the last quota recalculation. | [optional] [default to undefined]
**lastModified** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantRoomQuotaSettings } from '@onlyoffice/docspace-api-typescript';

const instance: TenantRoomQuotaSettings = {
    enableQuota,
    defaultQuota,
    lastRecalculateDate,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
