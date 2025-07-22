# SignupAccountRequestDto

The request parameters for creating a third-party account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeType** | [**EmployeeType**](EmployeeType.md) |  | [optional] [default to undefined]
**firstName** | **string** | The user first name. | [optional] [default to undefined]
**lastName** | **string** | The user last name. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]
**passwordHash** | **string** | The user password hash. | [optional] [default to undefined]
**key** | **string** | The user link key. | [optional] [default to undefined]
**culture** | **string** | The user culture code. | [optional] [default to undefined]
**serializedProfile** | **string** | Third-party profile in the serialized format | [optional] [default to undefined]

## Example

```typescript
import { SignupAccountRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SignupAccountRequestDto = {
    employeeType,
    firstName,
    lastName,
    email,
    passwordHash,
    key,
    culture,
    serializedProfile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
