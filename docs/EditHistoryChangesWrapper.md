# EditHistoryChangesWrapper

One single change inside a saved revision of a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**EditHistoryAuthor**](EditHistoryAuthor.md) | The account that made this change, as the editing service reported it; an account it could not name is  reported as a guest. | [optional] [default to undefined]
**created** | [**ApiDateTime**](ApiDateTime.md) | When this change was made, written with the offset of the portal\'s time zone rather than as plain UTC. | [optional] [default to undefined]
**documentSha256** | **string** | The SHA-256 hash of the document as it stood after this change, where the editing service recorded one, so  that a client can check a stored copy against the change it claims to hold. Empty when the change record  carries no hash. | [optional] [default to undefined]

## Example

```typescript
import { EditHistoryChangesWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: EditHistoryChangesWrapper = {
    user,
    created,
    documentSha256,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
