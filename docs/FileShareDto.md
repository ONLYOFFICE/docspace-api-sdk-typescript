# FileShareDto

The file sharing information and access rights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**sharedTo** | **any** | The user who has the access to the specified file. | [optional] [default to undefined]
**sharedToUser** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] [default to undefined]
**sharedToGroup** | [**GroupSummaryDto**](GroupSummaryDto.md) |  | [optional] [default to undefined]
**sharedLink** | [**FileShareLink**](FileShareLink.md) |  | [optional] [default to undefined]
**isLocked** | **boolean** | Specifies if the access right is locked or not. | [default to undefined]
**isOwner** | **boolean** | Specifies if the user is an owner of the specified file or not. | [default to undefined]
**canEditAccess** | **boolean** | Specifies if the user can edit the access to the specified file or not. | [default to undefined]
**canEditInternal** | **boolean** | Indicates whether internal editing permissions are granted. | [default to undefined]
**canEditDenyDownload** | **boolean** | Determines whether the user has permission to modify the deny download setting for the file share. | [default to undefined]
**canEditExpirationDate** | **boolean** | Indicates whether the expiration date of access permissions can be edited. | [default to undefined]
**subjectType** | [**SubjectType**](SubjectType.md) |  | [default to undefined]

## Example

```typescript
import { FileShareDto } from '@onlyoffice/docspace-api-sdk';

const instance: FileShareDto = {
    access,
    sharedTo,
    sharedToUser,
    sharedToGroup,
    sharedLink,
    isLocked,
    isOwner,
    canEditAccess,
    canEditInternal,
    canEditDenyDownload,
    canEditExpirationDate,
    subjectType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
