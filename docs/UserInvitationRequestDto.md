# UserInvitationRequestDto

The user invitation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The address of somebody who has no portal account yet. An invitation is sent to it and an account is created  once it is accepted, so this is the field to use instead of an account identifier when the person is new to  the portal. | [optional] [default to undefined]
**type** | [**EmployeeType**](EmployeeType.md) | The user type. | [optional] [default to undefined]

## Example

```typescript
import { UserInvitationRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UserInvitationRequestDto = {
    email,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
