# UpdateMemberRequestDto

The request parameters for updating the user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The user ID. | [optional] [default to undefined]
**disable** | **boolean** | Specifies whether to disable a user or not. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]
**isUser** | **boolean** | Specifies if this is a guest or a user. | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**department** | **Array&lt;string&gt;** | The list of the user departments. | [optional] [default to undefined]
**title** | **string** | The user title. | [optional] [default to undefined]
**location** | **string** | The user location. | [optional] [default to undefined]
**sex** | [**SexEnum**](SexEnum.md) |  | [optional] [default to undefined]
**birthday** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**worksfrom** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**comment** | **string** | The user comment. | [optional] [default to undefined]
**contacts** | [**Array&lt;Contact&gt;**](Contact.md) | The list of the user contacts. | [optional] [default to undefined]
**files** | **string** | The user avatar photo URL. | [optional] [default to undefined]
**spam** | **boolean** | Specifies if tips, updates and offers are allowed to be sent to the user or not. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMemberRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateMemberRequestDto = {
    userId,
    disable,
    email,
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
    spam,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
