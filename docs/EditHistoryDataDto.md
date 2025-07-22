# EditHistoryDataDto

The file editing history data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changesUrl** | **string** | The URL address of the file with the document changes data. | [optional] [default to undefined]
**key** | **string** | The document identifier used to unambiguously identify the document file. | [optional] [default to undefined]
**previous** | [**EditHistoryUrl**](EditHistoryUrl.md) |  | [optional] [default to undefined]
**token** | **string** | The encrypted signature added to the parameter in the form of a token. | [optional] [default to undefined]
**url** | **string** | The URL address of the current document version. | [optional] [default to undefined]
**version** | **number** | The document version number. | [optional] [default to undefined]
**fileType** | **string** | The document extension. | [optional] [default to undefined]

## Example

```typescript
import { EditHistoryDataDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditHistoryDataDto = {
    changesUrl,
    key,
    previous,
    token,
    url,
    version,
    fileType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
