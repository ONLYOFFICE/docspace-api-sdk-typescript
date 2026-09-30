# ArchiveRoomRequest

The body of a room archiving request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteAfter** | **boolean** | Whether the record of the finished job may be dropped without being read. With it off the record waits for the  first poll, which is what lets the caller learn how the move ended; it has no effect on the room itself. | [optional] [default to undefined]

## Example

```typescript
import { ArchiveRoomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ArchiveRoomRequest = {
    deleteAfter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
