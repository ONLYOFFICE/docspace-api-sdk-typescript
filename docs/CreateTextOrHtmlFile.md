# CreateTextOrHtmlFile

The parameters for creating an HTML or text file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file title for text or HTML file. | [default to undefined]
**content** | **string** | The text or HTML file contents. | [optional] [default to undefined]
**createNewIfExist** | **boolean** | Specifies whether to create a new text or HTML file if it exists or not. | [optional] [default to undefined]

## Example

```typescript
import { CreateTextOrHtmlFile } from '@onlyoffice/docspace-api-typescript';

const instance: CreateTextOrHtmlFile = {
    title,
    content,
    createNewIfExist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
