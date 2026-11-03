# AiExportTextToDocxRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Document title (also the file name). | [default to undefined]
**content** | **string** | Markdown content to convert. | [default to undefined]
**folderId** | [**AiExportTextToDocxRequestFolderId**](AiExportTextToDocxRequestFolderId.md) |  | [default to undefined]
**format** | **string** | Output format: `Docx` (the default when omitted), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. | [optional] [default to undefined]

## Example

```typescript
import { AiExportTextToDocxRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiExportTextToDocxRequest = {
    title,
    content,
    folderId,
    format,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
