# CreateThirdPartyRoom

The parameters for creating a third-party room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createAsNewFolder** | **boolean** | Specifies whether to create a third-party room as a new folder or not. | [optional] [default to undefined]
**title** | **string** | The third-party room name to be created. | [default to undefined]
**roomType** | [**RoomType**](RoomType.md) |  | [default to undefined]
**_private** | **boolean** | Specifies whether to create the private third-party room or not. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies whether to create the third-party room with indexing. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies whether to deny downloads from the third-party room. | [optional] [default to undefined]
**color** | **string** | The color of the third-party room. | [optional] [default to undefined]
**cover** | **string** | The cover of the third-party room. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags of the third-party room. | [optional] [default to undefined]
**logo** | [**LogoRequest**](LogoRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateThirdPartyRoom } from '@onlyoffice/docspace-api-typescript';

const instance: CreateThirdPartyRoom = {
    createAsNewFolder,
    title,
    roomType,
    _private,
    indexing,
    denyDownload,
    color,
    cover,
    tags,
    logo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
