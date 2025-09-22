# FolderDtoString

The folder parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared or not. | [optional] [default to undefined]
**parentShared** | **boolean** | Indicates whether the parent entity is shared. | [optional] [default to undefined]
**shortWebUrl** | **string** | The short Web URL. | [optional] [default to undefined]
**created** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**updated** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**autoDelete** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**rootFolderType** | [**FolderType**](FolderType.md) |  | [optional] [default to undefined]
**parentRoomType** | [**FolderType**](FolderType.md) |  | [optional] [default to undefined]
**updatedBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**providerItem** | **boolean** | Specifies if the file entry provider is specified or not. | [optional] [default to undefined]
**providerKey** | **string** | The provider key of the file entry. | [optional] [default to undefined]
**providerId** | **number** | The provider ID of the file entry. | [optional] [default to undefined]
**order** | **string** | The order of the file entry. | [optional] [default to undefined]
**isFavorite** | **boolean** | Specifies if the file is a favorite or not. | [optional] [default to undefined]
**fileEntryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] [default to undefined]
**id** | **string** | The file entry ID. | [optional] [default to undefined]
**rootFolderId** | **string** | The root folder ID of the file entry. | [optional] [default to undefined]
**originId** | **string** | The origin ID of the file entry. | [optional] [default to undefined]
**originRoomId** | **string** | The origin room ID of the file entry. | [optional] [default to undefined]
**originTitle** | **string** | The origin title of the file entry. | [optional] [default to undefined]
**originRoomTitle** | **string** | The origin room title of the file entry. | [optional] [default to undefined]
**canShare** | **boolean** | Specifies if the file entry can be shared or not. | [optional] [default to undefined]
**shareSettings** | [**FileEntryDtoIntegerAllOfShareSettings**](FileEntryDtoIntegerAllOfShareSettings.md) |  | [optional] [default to undefined]
**security** | [**FileEntryDtoIntegerAllOfSecurity**](FileEntryDtoIntegerAllOfSecurity.md) |  | [optional] [default to undefined]
**availableExternalRights** | **{ [key: string]: boolean; }** | The available external rights of the file entry. | [optional] [default to undefined]
**requestToken** | **string** | The request token of the file entry. | [optional] [default to undefined]
**parentId** | **string** | The parent folder ID of the folder. | [optional] [default to undefined]
**filesCount** | **number** | The number of files that the folder contains. | [optional] [default to undefined]
**foldersCount** | **number** | The number of folders that the folder contains. | [optional] [default to undefined]
**isShareable** | **boolean** | Specifies if the folder can be shared or not. | [optional] [default to undefined]
**_new** | **number** | The new element index in the folder. | [optional] [default to undefined]
**mute** | **boolean** | Specifies if the folder notifications are enabled or not. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags of the folder. | [optional] [default to undefined]
**logo** | [**Logo**](Logo.md) |  | [optional] [default to undefined]
**pinned** | **boolean** | Specifies if the folder is pinned or not. | [optional] [default to undefined]
**roomType** | [**RoomType**](RoomType.md) |  | [optional] [default to undefined]
**_private** | **boolean** | Specifies if the folder is private or not. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies if the folder is indexed or not. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies if the folder can be downloaded or not. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) |  | [optional] [default to undefined]
**watermark** | [**WatermarkDto**](WatermarkDto.md) |  | [optional] [default to undefined]
**type** | [**FolderType**](FolderType.md) |  | [optional] [default to undefined]
**inRoom** | **boolean** | Specifies if the folder is placed in the room or not. | [optional] [default to undefined]
**quotaLimit** | **number** | The folder quota limit. | [optional] [default to undefined]
**isCustomQuota** | **boolean** | Specifies if the folder room has a custom quota or not. | [optional] [default to undefined]
**usedSpace** | **number** | How much folder space is used (counter). | [optional] [default to undefined]
**external** | **boolean** | Specifies if the folder can be accessed via an external link or not. | [optional] [default to undefined]
**passwordProtected** | **boolean** | Specifies if the folder is password protected or not. | [optional] [default to undefined]
**expired** | **boolean** | Specifies if an external link to the folder is expired or not. | [optional] [default to undefined]

## Example

```typescript
import { FolderDtoString } from '@onlyoffice/docspace-api-sdk';

const instance: FolderDtoString = {
    title,
    access,
    shared,
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
    id,
    rootFolderId,
    originId,
    originRoomId,
    originTitle,
    originRoomTitle,
    canShare,
    shareSettings,
    security,
    availableExternalRights,
    requestToken,
    parentId,
    filesCount,
    foldersCount,
    isShareable,
    _new,
    mute,
    tags,
    logo,
    pinned,
    roomType,
    _private,
    indexing,
    denyDownload,
    lifetime,
    watermark,
    type,
    inRoom,
    quotaLimit,
    isCustomQuota,
    usedSpace,
    external,
    passwordProtected,
    expired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
