# RoomTemplateDto

The parameters of a room template built from an existing room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomId** | **number** | The identifier of the room the template is built from. Take it from the room listing of  `GET api/2.0/files/rooms`; a folder identifier is not accepted. | [default to undefined]
**title** | **string** | The title the template is saved under in the Templates section. Characters that a folder name cannot contain  are replaced with an underscore on save, and two templates may share a title. | [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) | A picture of the caller\'s own for the template, cropped out of an image already placed in the temporary  storage. | [optional] [default to undefined]
**copyLogo** | **boolean** | Whether the template takes over the picture already set on the source room. When false the template gets no  picture from that room. | [optional] [default to undefined]
**share** | **Array&lt;string&gt;** | The email addresses of the portal members who are granted read access to the finished template. | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | The identifiers of the portal groups whose members are granted read access to the finished template. | [optional] [default to undefined]
**_public** | **boolean** | Whether the finished template is shared with everyone allowed to create rooms. When false it stays reachable  only for the recipients named for it. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The labels attached to the template and shown next to it in listings. | [optional] [default to undefined]
**color** | **string** | The accent colour of the generated cover, written as six hexadecimal digits with no leading hash sign. When it  is left empty a colour is picked at random. | [optional] [default to undefined]
**cover** | **string** | The identifier of a built-in cover picture, as listed by `GET api/2.0/files/rooms/covers`. When it is left  empty the template gets no cover. | [optional] [default to undefined]
**quota** | **number** | The storage limit assigned to the template, in bytes. When it is not set the template keeps the limit of the  source room. | [optional] [default to undefined]

## Example

```typescript
import { RoomTemplateDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomTemplateDto = {
    roomId,
    title,
    logo,
    copyLogo,
    share,
    groups,
    _public,
    tags,
    color,
    cover,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
