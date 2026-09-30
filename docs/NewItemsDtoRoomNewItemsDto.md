# NewItemsDtoRoomNewItemsDto

One day of the entries the caller has not opened yet, the groups running from the most recent day backwards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**ApiDateTime**](ApiDateTime.md) | The day the grouped entries were last changed, written with the offset of the portal time zone. The time part  is the moment of the newest entry of the group. | [default to undefined]
**items** | [**Array&lt;RoomNewItemsDto&gt;**](RoomNewItemsDto.md) | What changed on that day, the most recent first. Folders are left out of it, so an entry here is always a file  or a room that holds them. | [default to undefined]

## Example

```typescript
import { NewItemsDtoRoomNewItemsDto } from '@onlyoffice/docspace-api-sdk';

const instance: NewItemsDtoRoomNewItemsDto = {
    date,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
