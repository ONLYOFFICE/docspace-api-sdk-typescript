# FormRoleRequest

One role of a form and the account that fills it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomId** | **number** | The ID of the room the form is in. It is stored with the role as sent, so pass the room the form lives in. | [optional] [default to undefined]
**roleName** | **string** | The name of a role the form defines, such as the one the form author gave a group of fields. | [optional] [default to undefined]
**roleColor** | **string** | The color the editor marks the fields of this role with, as a hex code. | [optional] [default to undefined]
**userId** | **string** | The account that fills this role. It is notified once filling starts, unless it is the caller. | [optional] [default to undefined]
**sequence** | **number** | Accepted for compatibility and ignored: the position of the role in the list sets the filling order. | [optional] [default to undefined]
**submitted** | **boolean** | Whether this role counts as already submitted. It is stored as sent; send false when filling starts. | [optional] [default to undefined]
**openedAt** | **string** | Accepted for compatibility and ignored: the portal records when the role is opened. | [optional] [default to undefined]
**submissionDate** | **string** | Accepted for compatibility and ignored: the portal records when the role is submitted. | [optional] [default to undefined]

## Example

```typescript
import { FormRoleRequest } from '@onlyoffice/docspace-api-sdk';

const instance: FormRoleRequest = {
    roomId,
    roleName,
    roleColor,
    userId,
    sequence,
    submitted,
    openedAt,
    submissionDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
