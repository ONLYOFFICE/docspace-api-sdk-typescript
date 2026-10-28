# DeleteRoomRequest

The body of a room deletion request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | Carried by the contract but not acted upon: the deletion behaves the same either way, and the record of the  finished job is kept until it is read once. | [optional] [default to undefined]

## Example

```typescript
import { DeleteRoomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: DeleteRoomRequest = {
    deleteAfter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
