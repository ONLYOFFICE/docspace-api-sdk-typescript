# ExportChatRequestBody

Parameters for exporting an AI chat session to a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderId** | [**ExportChatRequestBodyFolderId**](ExportChatRequestBodyFolderId.md) |  | [default to undefined]
**title** | **string** | The file name (without extension) to use for the exported document. | [default to undefined]

## Example

```typescript
import { ExportChatRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: ExportChatRequestBody = {
    folderId,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
