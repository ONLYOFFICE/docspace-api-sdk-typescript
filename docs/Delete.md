# Delete

The parameters of a single file deletion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | When to delete: `true` waits until the editing session on the file has ended, `false` deletes at once, pulling  the file away from whoever is working on it. | [optional] [default to undefined]
**immediately** | **boolean** | Where the file goes: `false` moves it to Trash, from where it can be restored, `true` deletes it for good.  Inside a room, where there is no Trash, deletion is always final. | [optional] [default to undefined]

## Example

```typescript
import { Delete } from '@onlyoffice/docspace-api-sdk';

const instance: Delete = {
    deleteAfter,
    immediately,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
