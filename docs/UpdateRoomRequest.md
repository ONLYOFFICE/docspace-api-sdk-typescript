# UpdateRoomRequest

The request parameters for updating a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The room title. | [optional] [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create a third-party room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the third-party room. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags. | [optional] [default to undefined]
**color** | **string** | The room color. | [optional] [default to undefined]
**cover** | **string** | The room cover. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateRoomRequest = {
    title,
    quota,
    indexing,
    denyDownload,
    lifetime,
    watermark,
    logo,
    tags,
    color,
    cover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
