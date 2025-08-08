# FileEntryDtoString

The generic file entry information.

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
**fileEntryType** | [**FileEntryType**](FileEntryType.md) |  | [optional] [default to undefined]
**id** | **string** | The file entry ID. | [optional] [default to undefined]
**rootFolderId** | **string** | The root folder ID of the file entry. | [optional] [default to undefined]
**originId** | **string** | The origin ID of the file entry. | [optional] [default to undefined]
**originRoomId** | **string** | The origin room ID of the file entry. | [optional] [default to undefined]
**originTitle** | **string** | The origin title of the file entry. | [optional] [default to undefined]
**originRoomTitle** | **string** | The origin room title of the file entry. | [optional] [default to undefined]
**canShare** | **boolean** | Specifies if the file entry can be shared or not. | [optional] [default to undefined]
**security** | [**FileEntryDtoIntegerAllOfSecurity**](FileEntryDtoIntegerAllOfSecurity.md) |  | [optional] [default to undefined]
**requestToken** | **string** | The request token of the file entry. | [optional] [default to undefined]

## Example

```typescript
import { FileEntryDtoString } from '@onlyoffice/docspace-api-sdk';

const instance: FileEntryDtoString = {
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
    fileEntryType,
    id,
    rootFolderId,
    originId,
    originRoomId,
    originTitle,
    originRoomTitle,
    canShare,
    security,
    requestToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
