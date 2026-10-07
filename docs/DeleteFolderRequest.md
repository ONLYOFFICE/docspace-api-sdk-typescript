# DeleteFolderRequest

How a folder is to be deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | Whether the deletion waits for the editing sessions on the contents to end: with true a folder somebody is  working in is removed once they are done, with false the deletion starts at once. | [optional] [default to undefined]
**immediately** | **boolean** | Whether the folder is discarded for good instead of being moved to the Trash section: with false it can be  restored from Trash, with true it cannot be recovered. Inside a room there is no Trash and the deletion is  final either way. | [optional] [default to undefined]

## Example

```typescript
import { DeleteFolderRequest } from '@onlyoffice/docspace-api-sdk';

const instance: DeleteFolderRequest = {
    deleteAfter,
    immediately,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
