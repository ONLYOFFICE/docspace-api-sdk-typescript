# QuotaSettingsRequestsDto

The request parameters for managing the user storage quota configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableQuota** | **boolean** | Specifies whether the storage quota restrictions are enabled. | [optional] [default to undefined]
**defaultQuota** | [**QuotaSettingsRequestsDtoDefaultQuota**](QuotaSettingsRequestsDtoDefaultQuota.md) |  | [default to undefined]

## Example

```typescript
import { QuotaSettingsRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: QuotaSettingsRequestsDto = {
    enableQuota,
    defaultQuota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
