# TenantDevToolsAccessSettingsDto

The request parameters for managing the Developer Tools access settings for the current tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitedAccessForUsers** | **boolean** | Determines if users have restricted access to the Developer Tools. | [optional] [default to undefined]

## Example

```typescript
import { TenantDevToolsAccessSettingsDto } from '@onlyoffice/docspace-api-typescript';

const instance: TenantDevToolsAccessSettingsDto = {
    limitedAccessForUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
