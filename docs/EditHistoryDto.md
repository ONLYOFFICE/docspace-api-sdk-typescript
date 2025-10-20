# EditHistoryDto

The file editing history parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The document ID. | [optional] [default to undefined]
**key** | **string** | The document identifier used to unambiguously identify the document file. | [optional] [default to undefined]
**version** | **number** | The document version number. | [optional] [default to undefined]
**versionGroup** | **number** | The document version group. | [optional] [default to undefined]
**user** | [**EditHistoryAuthor**](EditHistoryAuthor.md) |  | [optional] [default to undefined]
**created** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**changesHistory** | **string** | The file history changes in the string format. | [optional] [default to undefined]
**changes** | [**Array&lt;EditHistoryChangesWrapper&gt;**](EditHistoryChangesWrapper.md) | The list of file history changes. | [optional] [default to undefined]
**serverVersion** | **string** | The current server version number. | [optional] [default to undefined]

## Example

```typescript
import { EditHistoryDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditHistoryDto = {
    id,
    key,
    version,
    versionGroup,
    user,
    created,
    changesHistory,
    changes,
    serverVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
