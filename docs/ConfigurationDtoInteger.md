# ConfigurationDtoInteger

The configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentConfigDto**](DocumentConfigDto.md) |  | [default to undefined]
**documentType** | **string** | The document type. | [default to undefined]
**editorConfig** | [**EditorConfigurationDto**](EditorConfigurationDto.md) |  | [default to undefined]
**editorType** | [**EditorType**](EditorType.md) |  | [default to undefined]
**editorUrl** | **string** | The editor URL. | [default to undefined]
**token** | **string** | The token of the file configuration. | [optional] [default to undefined]
**type** | **string** | The platform type. | [optional] [default to undefined]
**file** | [**FileDtoInteger**](FileDtoInteger.md) |  | [optional] [default to undefined]
**errorMessage** | **string** | The error message. | [optional] [default to undefined]
**startFilling** | **boolean** | Specifies if the file filling has started or not. | [optional] [default to undefined]
**fillingStatus** | **boolean** | The file filling status. | [optional] [default to undefined]
**startFillingMode** | [**StartFillingMode**](StartFillingMode.md) |  | [optional] [default to undefined]
**fillingSessionId** | **string** | The file filling session ID. | [optional] [default to undefined]

## Example

```typescript
import { ConfigurationDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: ConfigurationDtoInteger = {
    document,
    documentType,
    editorConfig,
    editorType,
    editorUrl,
    token,
    type,
    file,
    errorMessage,
    startFilling,
    fillingStatus,
    startFillingMode,
    fillingSessionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
