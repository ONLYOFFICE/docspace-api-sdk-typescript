# FileEntryDtoString

The generic file entry information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The file entry title. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**shared** | **boolean** | Specifies if the file entry is shared via link or not. | [optional] [default to undefined]
**sharedForUser** | **boolean** | Specifies if the file entry is shared for user or not. | [optional] [default to undefined]
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
**availableShareRights** | [**FileEntryDtoIntegerAllOfAvailableShareRights**](FileEntryDtoIntegerAllOfAvailableShareRights.md) |  | [optional] [default to undefined]
**requestToken** | **string** | The request token of the file entry. | [optional] [default to undefined]
**external** | **boolean** | Specifies if the folder can be accessed via an external link or not. | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileEntryDtoString } from '@onlyoffice/docspace-api-sdk';

const instance: FileEntryDtoString = {
    title,
    access,
    shared,
    sharedForUser,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
