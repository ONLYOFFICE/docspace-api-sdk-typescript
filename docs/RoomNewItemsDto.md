# RoomNewItemsDto

The unseen entries of one room inside a day group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room** | [**FileEntryBaseDto**](FileEntryBaseDto.md) | The room the entries were found in, in its short form: only the identifier, the title, the room type and the  logo are filled in. | [optional] [default to undefined]
**items** | [**Array&lt;FileEntryBaseDto&gt;**](FileEntryBaseDto.md) | The files of that room the caller has not opened yet, the most recently changed first. Reading them here does  not clear the badges; opening the room itself does. | [optional] [default to undefined]

## Example

```typescript
import { RoomNewItemsDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomNewItemsDto = {
    room,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
