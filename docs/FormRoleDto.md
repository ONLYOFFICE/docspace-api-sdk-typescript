# FormRoleDto

The form role parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleName** | **string** | The role name. | [default to undefined]
**roleColor** | **string** | The role color. | [optional] [default to undefined]
**user** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] [default to undefined]
**sequence** | **number** | The role sequence. | [default to undefined]
**submitted** | **boolean** | Specifies if the role is submitted. | [default to undefined]
**stopedBy** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] [default to undefined]
**history** | **{ [key: string]: string; }** | The role history. | [optional] [default to undefined]
**roleStatus** | [**FormFillingStatus**](FormFillingStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FormRoleDto } from '@onlyoffice/docspace-api-sdk';

const instance: FormRoleDto = {
    roleName,
    roleColor,
    user,
    sequence,
    submitted,
    stopedBy,
    history,
    roleStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
