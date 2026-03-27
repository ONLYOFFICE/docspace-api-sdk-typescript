# TenantAiAccessSettingsDto

The request parameters for managing the tenant-level AI access settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies whether AI functionality is enabled for the tenant.  Set to `true` to enable all AI features or `false` to disable them tenant-wide. | [optional] [default to undefined]

## Example

```typescript
import { TenantAiAccessSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantAiAccessSettingsDto = {
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
