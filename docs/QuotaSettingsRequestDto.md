# QuotaSettingsRequestDto

The default storage limit given to newly created users, rooms or AI agents, and whether it is enforced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableQuota** | **boolean** | Whether the limit is enforced at all. While it is false the size is ignored and nothing created afterwards  carries a limit; objects that already have one keep it either way. | [optional] [default to undefined]
**defaultQuota** | [**QuotaSettingsRequestDtoDefaultQuota**](QuotaSettingsRequestDtoDefaultQuota.md) |  | [default to undefined]

## Example

```typescript
import { QuotaSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: QuotaSettingsRequestDto = {
    enableQuota,
    defaultQuota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
