# UpdateRoomGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomsToAdd** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of room IDs to add to the group. | [optional] [default to undefined]
**roomsToRemove** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of room IDs to remove from the group. | [optional] [default to undefined]
**groupName** | **string** | The group name. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomGroupRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateRoomGroupRequest = {
    roomsToAdd,
    roomsToRemove,
    groupName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
