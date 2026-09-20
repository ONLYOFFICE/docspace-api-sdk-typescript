# ThirdPartySaveAsPdf

The place and the name the PDF copy of a file is stored under.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderId** | **string** | The folder the PDF is created in; the caller has to be allowed to create files there. | [default to undefined]
**title** | **string** | The name of the PDF, without an extension - `.pdf` is appended. Left empty, the name of the source file is  reused with its extension replaced. | [default to undefined]

## Example

```typescript
import { ThirdPartySaveAsPdf } from '@onlyoffice/docspace-api-sdk';

const instance: ThirdPartySaveAsPdf = {
    folderId,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
