# RoomTemplateDto

The room template parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomId** | **number** | The room template ID. | [default to undefined]
**title** | **string** | The room template title. | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]
**copyLogo** | **boolean** | Specifies whether to copy room logo or not. | [optional] [default to undefined]
**share** | **Array&lt;string&gt;** | The collection of email addresses of users with whom to share a room. | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | The collection of groups with whom to share a room. | [optional] [default to undefined]
**_public** | **boolean** | Specifies whether the room template is public or not. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The collection of tags. | [optional] [default to undefined]
**color** | **string** | The color of the room template. | [optional] [default to undefined]
**cover** | **string** | The cover of the room template. | [optional] [default to undefined]
**quota** | **number** | Room quota | [optional] [default to undefined]

## Example

```typescript
import { RoomTemplateDto } from '@onlyoffice/docspace-api-typescript';

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
