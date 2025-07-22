# Delete

The parameters for deleting a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | Specifies whether to delete a file after the editing session is finished or not. | [optional] [default to undefined]
**immediately** | **boolean** | Specifies whether to move a file to the \\\&quot;Trash\\\&quot; folder or delete it immediately. | [optional] [default to undefined]

## Example

```typescript
import { Delete } from '@onlyoffice/docspace-api-sdk';

const instance: Delete = {
    deleteAfter,
    immediately,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
