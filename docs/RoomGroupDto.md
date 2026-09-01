# RoomGroupDto

The room security parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The group ID. | [optional] [default to undefined]
**name** | **string** | Group name | [optional] [default to undefined]
**icon** | [**MultiSizeLogoCover**](MultiSizeLogoCover.md) | Group icon | [optional] [default to undefined]
**userId** | **string** | The user ID. | [optional] [default to undefined]
**rooms** | [**Array&lt;FileEntryBaseDto&gt;**](FileEntryBaseDto.md) | The list of rooms in the group. | [optional] [default to undefined]
**totalRooms** | **number** | Total number of rooms in the group. | [optional] [default to undefined]

## Example

```typescript
import { RoomGroupDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomGroupDto = {
    id,
    name,
    icon,
    userId,
    rooms,
    totalRooms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
