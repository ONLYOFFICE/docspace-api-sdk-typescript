# TenantDevToolsAccessSettingsRequestDto

Whether the `User` role is barred from the portal developer tools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitedAccessForUsers** | **boolean** | Whether members holding the `User` role are barred from the developer tools - API keys, OAuth applications  and webhooks. Room administrators and DocSpace administrators keep their access either way. | [optional] [default to undefined]

## Example

```typescript
import { TenantDevToolsAccessSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantDevToolsAccessSettingsRequestDto = {
    limitedAccessForUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
