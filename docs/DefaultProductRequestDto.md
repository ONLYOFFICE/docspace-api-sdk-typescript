# DefaultProductRequestDto

The section the calling user\'s account opens into after signing in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultFolderType** | [**FolderType**](FolderType.md) | The section to land on. Only the folder types the client offers as a landing page are accepted - the rooms  list, My documents, shared with me, favorites, recent, forms and the AI agents folder - and anything else is  refused. My documents is refused for a guest as well, since a guest has no personal storage. | [default to undefined]

## Example

```typescript
import { DefaultProductRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultProductRequestDto = {
    defaultFolderType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
