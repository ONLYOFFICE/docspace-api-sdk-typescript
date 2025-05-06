# CreateRoomRequestDto

The request parameters for creating a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The room name. | [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create a room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the room. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) |  | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags. | [optional] [default to undefined]
**color** | **string** | The room color. | [optional] [default to undefined]
**cover** | **string** | The room cover. | [optional] [default to undefined]
**roomType** | [**RoomType**](RoomType.md) |  | [default to undefined]
**_private** | **boolean** | Specifies whether the room to be created is private or not. | [optional] [default to undefined]
**share** | [**Array&lt;FileShareParams&gt;**](FileShareParams.md) | The collection of sharing parameters. | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: CreateRoomRequestDto = {
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
    roomType,
    _private,
    share,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
