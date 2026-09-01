# StudioDefaultPageSettings

The settings that define the folder opened by default after sign-in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultFolderType** | [**FolderType**](FolderType.md) | Specifies the type of the default folder associated with the settings. | [optional] [default to undefined]
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]

## Example

```typescript
import { StudioDefaultPageSettings } from '@onlyoffice/docspace-api-sdk';

const instance: StudioDefaultPageSettings = {
    defaultFolderType,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
