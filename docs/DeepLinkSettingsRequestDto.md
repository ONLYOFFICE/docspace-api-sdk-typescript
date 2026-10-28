# DeepLinkSettingsRequestDto

The deep link handling the portal applies on mobile devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**handlingMode** | [**DeepLinkHandlingMode**](DeepLinkHandlingMode.md) | Whether a link always opens in the browser, always in the native application, or asks the user each time. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { DeepLinkSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DeepLinkSettingsRequestDto = {
    handlingMode,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
