# UpdateRoomRequest

The fields of a room that a partial update changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The new name of the room. It is trimmed and sanitised the way a room title is at creation, and a blank or  missing value leaves the current name alone rather than clearing it. | [optional] [default to undefined]
**quota** | **number** | The new storage limit of the room, in bytes. A value of -1 leaves the room with no limit of its own, any other  negative value puts it back on the portal default, and a positive one is accepted only while the per-room  quota feature is on. | [optional] [default to undefined]
**indexing** | **boolean** | Whether the room keeps a manual order of its contents. With it on every file and folder carries a position  that listings follow and that `PUT api/2.0/files/rooms/{id}/reorder` compacts; with it off the contents are  ordered by the sorting of the request. Turning it on renumbers the existing contents at once. | [optional] [default to undefined]
**denyDownload** | **boolean** | Whether members without editing rights are stopped from downloading and printing the contents of the room.  They can still open the documents in the editor. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) | How long files may stay in the room before they are deleted automatically. The countdown starts when the  setting is saved, and leaving the field out keeps the files forever. Sending it with the switch off stops the  automatic deletion. | [optional] [default to undefined]
**watermark** | [**WatermarkRequestDto**](WatermarkRequestDto.md) | The watermark drawn over documents opened in the room. Leaving the field out adds no watermark, and sending it  with the switch turned off removes the one the room has. | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) | The picture to use as the room logo, named by the path that `POST api/2.0/files/logos` returned for an image  uploaded beforehand, plus the crop to take from it. Leaving the field out keeps the room on its cover and  colour. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The labels the room is to carry from now on. The list replaces the whole tag set rather than adding to it, an  empty list clears it, and names the portal catalogue does not hold yet are added to it. | [optional] [default to undefined]
**color** | **string** | The background colour the room is drawn with while it has no logo, as six hexadecimal digits with no leading  number sign. An empty value restores the default colour of the room type. | [optional] [default to undefined]
**cover** | **string** | The picture drawn on the room while it has no logo, named by an identifier from  `GET api/2.0/files/rooms/covers`. Any other value is rejected, and an empty value leaves the room without a  cover. | [optional] [default to undefined]
**chatSettings** | [**ChatSettings**](ChatSettings.md) | The model and the prompt an AI room answers with. It belongs to AI rooms only and is rejected for a room of  any other kind. | [optional] [default to undefined]
**sendFormToExternalDB** | **boolean** | For a form filling room, whether the data of every completed submission is also pushed to the external  database configured for the portal. It is what `POST api/2.0/files/rooms/{id}/externaldbsync` re-runs for the  forms already collected. | [optional] [default to undefined]
**saveFormAsXLSX** | **boolean** | For a form filling room, whether the collected submissions are also gathered into a spreadsheet stored next to  the completed forms. With it off the submissions are kept only as the filled documents themselves. | [optional] [default to undefined]

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
    chatSettings,
    sendFormToExternalDB,
    saveFormAsXLSX,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
