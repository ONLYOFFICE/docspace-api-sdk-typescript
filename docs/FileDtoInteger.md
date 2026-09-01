# FileDtoInteger

The file parameters.

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
**folderId** | **number** | The folder ID where the file is located. | [optional] [default to undefined]
**version** | **number** | The file version. | [optional] [default to undefined]
**versionGroup** | **number** | The version group of the file. | [optional] [default to undefined]
**contentLength** | **string** | The content length of the file. | [optional] [default to undefined]
**pureContentLength** | **number** | The pure content length of the file. | [optional] [default to undefined]
**fileStatus** | [**FileStatus**](FileStatus.md) | The current status of the file. | [optional] [default to undefined]
**editingBy** | **{ [key: string]: string | null; }** | The list of users editing the file. | [optional] [default to undefined]
**mute** | **boolean** | Specifies if the file is muted or not. | [optional] [default to undefined]
**viewUrl** | **string** | The URL link to view the file. | [optional] [default to undefined]
**webUrl** | **string** | The Web URL link to the file. | [optional] [default to undefined]
**fileType** | [**FileType**](FileType.md) | The file type. | [optional] [default to undefined]
**fileExst** | **string** | The file extension. | [optional] [default to undefined]
**comment** | **string** | The comment to the file. | [optional] [default to undefined]
**encrypted** | **boolean** | Specifies if the file is encrypted or not. | [optional] [default to undefined]
**thumbnailUrl** | **string** | The thumbnail URL of the file. | [optional] [default to undefined]
**thumbnailStatus** | [**Thumbnail**](Thumbnail.md) | The current thumbnail status of the file. | [optional] [default to undefined]
**locked** | **boolean** | Specifies if the file is locked or not. | [optional] [default to undefined]
**lockedBy** | **string** | The user ID of the person who locked the file. | [optional] [default to undefined]
**hasDraft** | **boolean** | Specifies if the file has a draft or not. | [optional] [default to undefined]
**formFillingStatus** | [**FormFillingStatus**](FormFillingStatus.md) | The status of the form filling process. | [optional] [default to undefined]
**isForm** | **boolean** | Specifies if the file is a form or not. | [optional] [default to undefined]
**customFilterEnabled** | **boolean** | Specifies if the Custom Filter editing mode is enabled for a file or not. | [optional] [default to undefined]
**customFilterEnabledBy** | **string** | The name of the user who enabled a Custom Filter editing mode for a file. | [optional] [default to undefined]
**startFilling** | **boolean** | Specifies if the filling has started or not. | [optional] [default to undefined]
**isFillingPreparing** | **boolean** | Specifies if the form filling has started but the file is still being saved by the document editor. Filling and editing are not allowed. | [optional] [default to undefined]
**inProcessFolderId** | **number** | The InProcess folder ID of the file. | [optional] [default to undefined]
**inProcessFolderTitle** | **string** | The InProcess folder title of the file. | [optional] [default to undefined]
**resultsFolderId** | **number** | The ID of the FormFillingFolderDone folder that corresponds to this original form. | [optional] [default to undefined]
**draftLocation** | [**DraftLocationInteger**](DraftLocationInteger.md) | The file draft information with its location. | [optional] [default to undefined]
**viewAccessibility** | [**FileDtoIntegerAllOfViewAccessibility**](FileDtoIntegerAllOfViewAccessibility.md) |  | [optional] [default to undefined]
**lastOpened** | **string** | The time when the file was last opened. | [optional] [default to undefined]
**expired** | **string** | The date when the file will be expired. | [optional] [default to undefined]
**vectorizationStatus** | [**VectorizationStatus**](VectorizationStatus.md) | The vectorization status of the file. | [optional] [default to undefined]
**externalDbTableName** | **string** | The name of the table in the external database that corresponds to this form. | [optional] [default to undefined]
**dimensions** | [**Size**](Size.md) | The dimensions (width and height) of the image file in pixels.  This property is populated only for image files that can be viewed (supported formats like PNG, JPEG, GIF, BMP, etc.).  For non-image files, this property remains null. | [optional] [default to undefined]

## Example

```typescript
import { FileDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: FileDtoInteger = {
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
    folderId,
    version,
    versionGroup,
    contentLength,
    pureContentLength,
    fileStatus,
    editingBy,
    mute,
    viewUrl,
    webUrl,
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
    isFillingPreparing,
    inProcessFolderId,
    inProcessFolderTitle,
    resultsFolderId,
    draftLocation,
    viewAccessibility,
    lastOpened,
    expired,
    vectorizationStatus,
    externalDbTableName,
    dimensions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
