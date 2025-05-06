# FileShareDto

The file sharing information and access rights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**sharedTo** | **any** | The user who has the access to the specified file. | [optional] [default to undefined]
**isLocked** | **boolean** | Specifies if the access right is locked or not. | [optional] [default to undefined]
**isOwner** | **boolean** | Specifies if the user is an owner of the specified file or not. | [optional] [default to undefined]
**canEditAccess** | **boolean** | Specifies if the user can edit the access to the specified file or not. | [optional] [default to undefined]
**subjectType** | [**SubjectType**](SubjectType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileShareDto } from '@onlyoffice/docspace-api-typescript';

const instance: FileShareDto = {
    access,
    sharedTo,
    isLocked,
    isOwner,
    canEditAccess,
    subjectType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
