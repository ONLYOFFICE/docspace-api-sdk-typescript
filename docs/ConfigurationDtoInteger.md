# ConfigurationDtoInteger

The configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentConfigDto**](DocumentConfigDto.md) | The document configuration. | [default to undefined]
**documentType** | **string** | The document type. | [default to undefined]
**editorConfig** | [**EditorConfigurationDto**](EditorConfigurationDto.md) | The editor configuration. | [default to undefined]
**editorType** | [**EditorType**](EditorType.md) | The editor type. | [default to undefined]
**editorUrl** | **string** | The editor URL. | [default to undefined]
**token** | **string** | The token of the file configuration. | [optional] [default to undefined]
**type** | **string** | The platform type. | [optional] [default to undefined]
**file** | [**FileDtoInteger**](FileDtoInteger.md) | The file parameters. | [default to undefined]
**errorMessage** | **string** | The error message. | [optional] [default to undefined]
**startFilling** | **boolean** | Specifies if the file filling has started or not. | [optional] [default to undefined]
**fillingStatus** | **boolean** | The file filling status. | [optional] [default to undefined]
**startFillingMode** | [**StartFillingMode**](StartFillingMode.md) | The start filling mode. | [optional] [default to undefined]
**fillingSessionId** | **string** | The file filling session ID. | [optional] [default to undefined]
**quotaExceededScope** | [**QuotaScope**](QuotaScope.md) | Indicates which quota scope has been exceeded. | [optional] [default to undefined]
**generationToolCallState** | [**EditorToolCallStateDto**](EditorToolCallStateDto.md) | The generation tool call state. Used to run the agent flow in the editor. | [optional] [default to undefined]

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
    quotaExceededScope,
    generationToolCallState,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
