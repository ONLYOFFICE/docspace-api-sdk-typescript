# UpdateGroupRequest

The request for updating a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membersToAdd** | **Array&lt;string&gt;** | The list of user IDs to add to the group. | [optional] [default to undefined]
**membersToRemove** | **Array&lt;string&gt;** | The list of user IDs to remove from the group. | [optional] [default to undefined]
**groupManager** | **string** | The group manager ID. | [optional] [default to undefined]
**groupName** | **string** | The group name. | [optional] [default to undefined]

## Example

```typescript
import { UpdateGroupRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateGroupRequest = {
    membersToAdd,
    membersToRemove,
    groupManager,
    groupName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
