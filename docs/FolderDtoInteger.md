# FolderDtoInteger

The folder parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) | The access rights to the file entry. | [optional] [default to undefined]
**sharedBy** | [**EmployeeDto**](EmployeeDto.md) | Provides information about the employee who shared the file or folder. | [optional] [default to undefined]
**ownedBy** | [**EmployeeDto**](EmployeeDto.md) | The information about the employee who owns the file entry. | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared via link or not. | [optional] [default to undefined]
**sharedForUser** | **boolean** | Specifies if the file entry is shared for user or not. | [optional] [default to undefined]
**sharedExternal** | **boolean** | Specifies if the file entry is shared via a public (non-internal) external link. | [optional] [default to undefined]
**parentShared** | **boolean** | Indicates whether the parent entity is shared. | [optional] [default to undefined]
**shortWebUrl** | **string** | The short Web URL. | [optional] [default to undefined]
**created** | **string** | The creation date and time of the file entry. | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) | The file entry author. | [optional] [default to undefined]
**updated** | **string** | The last date and time when the file entry was updated. | [optional] [default to undefined]
**autoDelete** | **string** | The date and time when the file entry will be automatically deleted. | [optional] [default to undefined]
**rootFolderType** | [**FolderType**](FolderType.md) | The root folder type of the file entry. | [optional] [default to undefined]
**parentRoomType** | [**FolderType**](FolderType.md) | The parent room type of the file entry. | [optional] [default to undefined]
**updatedBy** | [**EmployeeDto**](EmployeeDto.md) | The user who updated the file entry. | [optional] [default to undefined]
**providerItem** | **boolean** | Specifies if the file entry provider is specified or not. | [optional] [default to undefined]
**providerKey** | **string** | The provider key of the file entry. | [optional] [default to undefined]
**providerId** | **number** | The provider ID of the file entry. | [optional] [default to undefined]
**order** | **string** | The order of the file entry. | [optional] [default to undefined]
**isFavorite** | **boolean** | Specifies if the file is a favorite or not. | [optional] [default to undefined]
**fileEntryType** | [**FileEntryType**](FileEntryType.md) | The file entry type. | [optional] [default to undefined]
**id** | **number** | The file entry ID. | [optional] [default to undefined]
**rootFolderId** | **number** | The root folder ID of the file entry. | [optional] [default to undefined]
**originId** | **number** | The origin ID of the file entry. | [optional] [default to undefined]
**originRoomId** | **number** | The origin room ID of the file entry. | [optional] [default to undefined]
**originTitle** | **string** | The origin title of the file entry. | [optional] [default to undefined]
**originRoomTitle** | **string** | The origin room title of the file entry. | [optional] [default to undefined]
**canShare** | **boolean** | Specifies if the file entry can be shared or not. | [optional] [default to undefined]
**shareSettings** | [**FileEntryDtoIntegerAllOfShareSettings**](FileEntryDtoIntegerAllOfShareSettings.md) |  | [optional] [default to undefined]
**security** | [**FileEntryDtoIntegerAllOfSecurity**](FileEntryDtoIntegerAllOfSecurity.md) |  | [optional] [default to undefined]
**availableShareRights** | [**FileEntryDtoIntegerAllOfAvailableShareRights**](FileEntryDtoIntegerAllOfAvailableShareRights.md) |  | [optional] [default to undefined]
**requestToken** | **string** | The request token of the file entry. | [optional] [default to undefined]
**external** | **boolean** | Specifies if the folder can be accessed via an external link or not. | [optional] [default to undefined]
**expirationDate** | **string** | Represents the expiration date of the file entry. | [optional] [default to undefined]
**isLinkExpired** | **boolean** | Indicates whether the shareable link associated with the file or folder has expired. | [optional] [default to undefined]
**parentId** | **number** | The parent folder ID of the folder. | [optional] [default to undefined]
**filesCount** | **number** | The number of files that the folder contains. | [optional] [default to undefined]
**foldersCount** | **number** | The number of folders that the folder contains. | [optional] [default to undefined]
**isShareable** | **boolean** | Specifies if the folder can be shared or not. | [optional] [default to undefined]
**_new** | **number** | The new element index in the folder. | [optional] [default to undefined]
**mute** | **boolean** | Specifies if the folder notifications are enabled or not. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tags of the folder. | [optional] [default to undefined]
**logo** | [**Logo**](Logo.md) | The folder logo. | [optional] [default to undefined]
**pinned** | **boolean** | Specifies if the folder is pinned or not. | [optional] [default to undefined]
**roomType** | [**RoomType**](RoomType.md) | The room type of the folder. | [optional] [default to undefined]
**_private** | **boolean** | Specifies if the folder is private or not. | [optional] [default to undefined]
**indexing** | **boolean** | Specifies if the folder is indexed or not. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies if the folder can be downloaded or not. | [optional] [default to undefined]
**lifetime** | [**RoomDataLifetimeDto**](RoomDataLifetimeDto.md) | The room data lifetime settings of the folder. | [optional] [default to undefined]
**watermark** | [**WatermarkDto**](WatermarkDto.md) | The watermark settings of the folder. | [optional] [default to undefined]
**type** | [**FolderType**](FolderType.md) | The folder type. | [optional] [default to undefined]
**inRoom** | **boolean** | Specifies if the folder is placed in the room or not. | [optional] [default to undefined]
**quotaLimit** | **number** | The folder quota limit. | [optional] [default to undefined]
**isCustomQuota** | **boolean** | Specifies if the folder room has a custom quota or not. | [optional] [default to undefined]
**usedSpace** | **number** | How much folder space is used (counter). | [optional] [default to undefined]
**passwordProtected** | **boolean** | Specifies if the folder is password protected or not. | [optional] [default to undefined]
**expired** | **boolean** | Specifies if an external link to the folder is expired or not. | [optional] [default to undefined]
**chatSettings** | [**ChatSettingsDto**](ChatSettingsDto.md) | The AI chat settings for the folder room. Contains configuration for AI provider, model selection, and custom prompts.  Only applicable to rooms with AI chat functionality enabled. Null if the room does not have chat settings configured. | [optional] [default to undefined]
**rootRoomType** | [**RoomType**](RoomType.md) | The room type of the root folder. Indicates the type of the parent room if the current folder is nested within a room hierarchy.  This property helps identify the context in which a nested folder exists. | [optional] [default to undefined]
**saveFormAsXLSX** | **boolean** | Specifies whether to save form data as XLSX file. | [optional] [default to undefined]
**sendFormToExternalDB** | **boolean** | Specifies whether to send form data to external database. | [optional] [default to undefined]
**originalFormId** | **number** | The original form ID that corresponds to this FormFillingFolderDone folder. | [optional] [default to undefined]

## Example

```typescript
import { FolderDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: FolderDtoInteger = {
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
    id,
    rootFolderId,
    originId,
    originRoomId,
    originTitle,
    originRoomTitle,
    canShare,
    shareSettings,
    security,
    availableShareRights,
    requestToken,
    external,
    expirationDate,
    isLinkExpired,
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
    passwordProtected,
    expired,
    chatSettings,
    rootRoomType,
    saveFormAsXLSX,
    sendFormToExternalDB,
    originalFormId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
