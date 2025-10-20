# MemberRequestDto

The user request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **string** | The user password. | [optional] [default to undefined]
**passwordHash** | **string** | The user password hash. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]
**type** | [**EmployeeType**](EmployeeType.md) |  | [optional] [default to undefined]
**isUser** | **boolean** | Specifies if this is a guest or a user. | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**department** | **Array&lt;string&gt;** | The list of the user departments IDs. | [optional] [default to undefined]
**title** | **string** | The user title. | [optional] [default to undefined]
**location** | **string** | The user location. | [optional] [default to undefined]
**sex** | [**SexEnum**](SexEnum.md) |  | [optional] [default to undefined]
**birthday** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**worksfrom** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**comment** | **string** | The user comment. | [optional] [default to undefined]
**contacts** | [**Array&lt;Contact&gt;**](Contact.md) | The list of the user contacts. | [optional] [default to undefined]
**files** | **string** | The avatar photo URL. | [optional] [default to undefined]
**fromInviteLink** | **boolean** | Specifies if the user is added via the invitation link or not. | [optional] [default to undefined]
**key** | **string** | The user key. | [optional] [default to undefined]
**cultureName** | **string** | The user culture code. | [optional] [default to undefined]
**target** | **string** | The user target ID. | [optional] [default to undefined]
**spam** | **boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] [default to undefined]

## Example

```typescript
import { MemberRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: MemberRequestDto = {
    password,
    passwordHash,
    email,
    type,
    isUser,
    firstName,
    lastName,
    department,
    title,
    location,
    sex,
    birthday,
    worksfrom,
    comment,
    contacts,
    files,
    fromInviteLink,
    key,
    cultureName,
    target,
    spam,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
