# FileShareDto

One access entry on a file, a folder or a room: who holds it, at which level, and what the caller may change about  it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**FileShare**](FileShare.md) | The level the subject holds on the entry. On a link entry it is the level the link hands to whoever opens it,  and in a batch answer `Varies` means the subject holds different levels on the listed entries. | [optional] [default to undefined]
**sharedTo** | **any** |  | [optional] [default to undefined]
**sharedToUser** | [**EmployeeFullDto**](EmployeeFullDto.md) | The account the entry belongs to. It is filled in only when `subjectType` says an account, and is null for a  group entry and for a link. | [optional] [default to undefined]
**sharedToGroup** | [**GroupSummaryDto**](GroupSummaryDto.md) | The portal group the entry belongs to, which hands the level to everybody in it. It is filled in only for a  group entry, and is null otherwise. | [optional] [default to undefined]
**sharedLink** | [**FileShareLink**](FileShareLink.md) | The sharing link the entry stands for, together with everything set on it. It is filled in only for a link  entry, and is null for an account or a group. | [optional] [default to undefined]
**isLocked** | **boolean** | Whether this entry is the caller\'s own, which is why they cannot change its level. Link entries never report  it. | [default to undefined]
**isOwner** | **boolean** | Whether the subject created the entry the access is given on, and so cannot be removed from it. | [default to undefined]
**canEditAccess** | **boolean** | Whether the caller may change the level of this entry. It is false on the caller\'s own entry, on every link,  and whenever the caller may not hand out access at all. | [default to undefined]
**canEditInternal** | **boolean** | Whether the caller may switch this link between being open to anybody and asking the visitor to sign in to the  portal first. | [default to undefined]
**canEditDenyDownload** | **boolean** | Whether the caller may forbid downloading through this link. Only a link of a virtual data room reports true,  and only while the room itself still allows downloads. | [default to undefined]
**canEditExpirationDate** | **boolean** | Whether the caller may move the moment this link stops working. | [default to undefined]
**canRevoke** | **boolean** | Whether the caller may take this entry away altogether, which for a link means deleting the link. | [default to undefined]
**subjectType** | [**SubjectType**](SubjectType.md) | What the entry was given to, which tells which of the three subject fields is filled in: an account, a group,  or one of the kinds of link. | [default to undefined]

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
    canRevoke,
    subjectType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
