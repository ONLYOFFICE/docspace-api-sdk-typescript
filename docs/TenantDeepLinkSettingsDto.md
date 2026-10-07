# TenantDeepLinkSettingsDto

How the portal opens its links on a mobile device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**handlingMode** | [**DeepLinkHandlingMode**](DeepLinkHandlingMode.md) | The deep link handling mode. | [optional] [default to undefined]
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { TenantDeepLinkSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TenantDeepLinkSettingsDto = {
    handlingMode,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
