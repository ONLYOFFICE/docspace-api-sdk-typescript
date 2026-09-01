# GroupMemberSecurityRequestDto

The group member security information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**EmployeeFullDto**](EmployeeFullDto.md) | The group member parameters. | [default to undefined]
**groupAccess** | [**FileShare**](FileShare.md) | The group access rights to the files. | [default to undefined]
**userAccess** | [**FileShare**](FileShare.md) | The group member access rights to the files. | [optional] [default to undefined]
**overridden** | **boolean** | Specifies if the group access rights are overridden or not. | [default to undefined]
**canEditAccess** | **boolean** | Specifies if the group member can edit the group access rights or not. | [default to undefined]
**owner** | **boolean** | Specifies if the group member is a group owner or not. | [default to undefined]

## Example

```typescript
import { GroupMemberSecurityRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: GroupMemberSecurityRequestDto = {
    user,
    groupAccess,
    userAccess,
    overridden,
    canEditAccess,
    owner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
