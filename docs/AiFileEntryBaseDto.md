# AiFileEntryBaseDto

The file entry information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**AiFileShare**](AiFileShare.md) | The access rights to the file entry. | [optional] [default to undefined]
**sharedBy** | [**AiEmployeeDto**](AiEmployeeDto.md) | Provides information about the employee who shared the file or folder. | [optional] [default to undefined]
**ownedBy** | [**AiEmployeeDto**](AiEmployeeDto.md) | The information about the employee who owns the file entry. | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared via link or not. | [optional] [default to undefined]
**sharedForUser** | **boolean** | Specifies if the file entry is shared for user or not. | [optional] [default to undefined]
**sharedExternal** | **boolean** | Specifies if the file entry is shared via a public (non-internal) external link. | [optional] [default to undefined]
**parentShared** | **boolean** | Indicates whether the parent entity is shared. | [optional] [default to undefined]
**shortWebUrl** | **string** | The short Web URL. | [optional] [default to undefined]
**created** | **string** | The creation date and time of the file entry. | [optional] [default to undefined]
**createdBy** | [**AiEmployeeDto**](AiEmployeeDto.md) | The file entry author. | [optional] [default to undefined]
**updated** | **string** | The last date and time when the file entry was updated. | [optional] [default to undefined]
**autoDelete** | **string** | The date and time when the file entry will be automatically deleted. | [optional] [default to undefined]
**rootFolderType** | [**AiFolderType**](AiFolderType.md) | The root folder type of the file entry. | [optional] [default to undefined]
**parentRoomType** | [**AiFolderType**](AiFolderType.md) | The parent room type of the file entry. | [optional] [default to undefined]
**updatedBy** | [**AiEmployeeDto**](AiEmployeeDto.md) | The user who updated the file entry. | [optional] [default to undefined]
**providerItem** | **boolean** | Specifies if the file entry provider is specified or not. | [optional] [default to undefined]
**providerKey** | **string** | The provider key of the file entry. | [optional] [default to undefined]
**providerId** | **number** | The provider ID of the file entry. | [optional] [default to undefined]
**order** | **string** | The order of the file entry. | [optional] [default to undefined]
**isFavorite** | **boolean** | Specifies if the file is a favorite or not. | [optional] [default to undefined]
**fileEntryType** | [**AiFileEntryType**](AiFileEntryType.md) | The file entry type. | [optional] [default to undefined]

## Example

```typescript
import { AiFileEntryBaseDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiFileEntryBaseDto = {
    title,
    access,
    sharedBy,
    ownedBy,
    shared,
    sharedForUser,
    sharedExternal,
    parentShared,
    shortWebUrl,
    created,
    createdBy,
    updated,
    autoDelete,
    rootFolderType,
    parentRoomType,
    updatedBy,
    providerItem,
    providerKey,
    providerId,
    order,
    isFavorite,
    fileEntryType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
