# ConvertDocumentRendererRequest

How the text of a pdf, xps or oxps source is read back when converting from it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**textAssociation** | **string** | The rendering mode: blockChar reads the text by single characters, blockLine by separate lines, plainLine as  plain text with a paragraph per line, plainParagraph as plain text with lines combined into paragraphs. | [optional] [default to undefined]

## Example

```typescript
import { ConvertDocumentRendererRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertDocumentRendererRequest = {
    textAssociation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
