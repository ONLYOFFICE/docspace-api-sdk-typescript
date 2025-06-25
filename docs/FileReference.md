# FileReference

The file reference parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceData** | [**FileReferenceData**](FileReferenceData.md) |  | [optional] [default to undefined]
**error** | **string** | The error message text. | [optional] [default to undefined]
**path** | **string** | The file name or relative path for the formula editor. | [optional] [default to undefined]
**url** | **string** | The URL address to download the current file. | [optional] [default to undefined]
**fileType** | **string** | An extension of the document specified with the url parameter. | [optional] [default to undefined]
**key** | **string** | The unique document identifier used by the service to take the data from the co-editing session. | [optional] [default to undefined]
**link** | **string** | The file URL. | [optional] [default to undefined]
**token** | **string** | The encrypted signature added to the parameter in the form of a token. | [optional] [default to undefined]

## Example

```typescript
import { FileReference } from '@onlyoffice/docspace-api-typescript';

const instance: FileReference = {
    referenceData,
    error,
    path,
    url,
    fileType,
    key,
    link,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
