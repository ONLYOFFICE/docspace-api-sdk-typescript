# TenantDevToolsAccessSettingsDto

Whether the developer tools are closed to the portal\'s users with the `User` role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitedAccessForUsers** | **boolean** | Specifies if the Developer Tools access are limited for users or not. | [optional] [default to undefined]
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { TenantDevToolsAccessSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantDevToolsAccessSettingsDto = {
    limitedAccessForUsers,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
