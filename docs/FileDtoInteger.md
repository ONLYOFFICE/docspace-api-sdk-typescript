# FileDtoInteger

The file parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared or not. | [optional] [default to undefined]
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
**id** | **number** | The file entry ID. | [optional] [default to undefined]
**rootFolderId** | **number** | The root folder ID of the file entry. | [optional] [default to undefined]
**originId** | **number** | The origin ID of the file entry. | [optional] [default to undefined]
**originRoomId** | **number** | The origin room ID of the file entry. | [optional] [default to undefined]
**originTitle** | **string** | The origin title of the file entry. | [optional] [default to undefined]
**originRoomTitle** | **string** | The origin room title of the file entry. | [optional] [default to undefined]
**canShare** | **boolean** | Specifies if the file entry can be shared or not. | [optional] [default to undefined]
**security** | [**FileDtoIntegerSecurity**](FileDtoIntegerSecurity.md) |  | [optional] [default to undefined]
**requestToken** | **string** | The request token of the file entry. | [optional] [default to undefined]
**folderId** | **number** | The folder ID where the file is located. | [optional] [default to undefined]
**version** | **number** | The file version. | [optional] [default to undefined]
**versionGroup** | **number** | The version group of the file. | [optional] [default to undefined]
**contentLength** | **string** | The content length of the file. | [optional] [default to undefined]
**pureContentLength** | **number** | The pure content length of the file. | [optional] [default to undefined]
**fileStatus** | [**FileStatus**](FileStatus.md) |  | [optional] [default to undefined]
**mute** | **boolean** | Specifies if the file is muted or not. | [optional] [default to undefined]
**viewUrl** | **string** | The URL link to view the file. | [optional] [default to undefined]
**webUrl** | **string** | The Web URL link to the file. | [optional] [default to undefined]
**shortWebUrl** | **string** | The short Web URL. | [optional] [default to undefined]
**fileType** | [**FileType**](FileType.md) |  | [optional] [default to undefined]
**fileExst** | **string** | The file extension. | [optional] [default to undefined]
**comment** | **string** | The comment to the file. | [optional] [default to undefined]
**encrypted** | **boolean** | Specifies if the file is encrypted or not. | [optional] [default to undefined]
**thumbnailUrl** | **string** | The thumbnail URL of the file. | [optional] [default to undefined]
**thumbnailStatus** | [**Thumbnail**](Thumbnail.md) |  | [optional] [default to undefined]
**locked** | **boolean** | Specifies if the file is locked or not. | [optional] [default to undefined]
**lockedBy** | **string** | The user ID of the person who locked the file. | [optional] [default to undefined]
**hasDraft** | **boolean** | Specifies if the file has a draft or not. | [optional] [default to undefined]
**formFillingStatus** | [**FormFillingStatus**](FormFillingStatus.md) |  | [optional] [default to undefined]
**isForm** | **boolean** | Specifies if the file is a form or not. | [optional] [default to undefined]
**customFilterEnabled** | **boolean** | Specifies if the Custom Filter editing mode is enabled for a file or not. | [optional] [default to undefined]
**customFilterEnabledBy** | **string** | The name of the user who enabled a Custom Filter editing mode for a file. | [optional] [default to undefined]
**startFilling** | **boolean** | Specifies if the filling has started or not. | [optional] [default to undefined]
**inProcessFolderId** | **number** | The InProcess folder ID of the file. | [optional] [default to undefined]
**inProcessFolderTitle** | **string** | The InProcess folder title of the file. | [optional] [default to undefined]
**draftLocation** | [**DraftLocationInteger**](DraftLocationInteger.md) |  | [optional] [default to undefined]
**viewAccessibility** | [**FileDtoIntegerViewAccessibility**](FileDtoIntegerViewAccessibility.md) |  | [optional] [default to undefined]
**availableExternalRights** | **{ [key: string]: boolean; }** | The available external rights of the file. | [optional] [default to undefined]
**lastOpened** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**expired** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**fileEntryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileDtoInteger } from '@onlyoffice/docspace-api-typescript';

const instance: FileDtoInteger = {
    title,
    access,
    shared,
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
    id,
    rootFolderId,
    originId,
    originRoomId,
    originTitle,
    originRoomTitle,
    canShare,
    security,
    requestToken,
    folderId,
    version,
    versionGroup,
    contentLength,
    pureContentLength,
    fileStatus,
    mute,
    viewUrl,
    webUrl,
    shortWebUrl,
    fileType,
    fileExst,
    comment,
    encrypted,
    thumbnailUrl,
    thumbnailStatus,
    locked,
    lockedBy,
    hasDraft,
    formFillingStatus,
    isForm,
    customFilterEnabled,
    customFilterEnabledBy,
    startFilling,
    inProcessFolderId,
    inProcessFolderTitle,
    draftLocation,
    viewAccessibility,
    availableExternalRights,
    lastOpened,
    expired,
    fileEntryType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
