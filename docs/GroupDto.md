# GroupDto

The group parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The group name. | [optional] [default to undefined]
**parent** | **string** | The parent group ID. | [optional] [default to undefined]
**category** | **string** | The group category ID. | [optional] [default to undefined]
**id** | **string** | The group ID. | [optional] [default to undefined]
**isLDAP** | **boolean** | Specifies if the LDAP settings are enabled for the group or not. | [optional] [default to undefined]
**manager** | [**EmployeeFullDto**](EmployeeFullDto.md) |  | [optional] [default to undefined]
**members** | [**Array&lt;EmployeeFullDto&gt;**](EmployeeFullDto.md) | The list of group members. | [optional] [default to undefined]
**shared** | **boolean** | Specifies whether the group can be shared or not. | [optional] [default to undefined]
**membersCount** | **number** | The number of group members. | [optional] [default to undefined]

## Example

```typescript
import { GroupDto } from '@onlyoffice/docspace-api-typescript';

const instance: GroupDto = {
    name,
    parent,
    category,
    id,
    isLDAP,
    manager,
    members,
    shared,
    membersCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
