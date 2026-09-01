# SignupAccountRequestDto

The request parameters for creating a third-party account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeType** | [**EmployeeType**](EmployeeType.md) | The user type. | [optional] [default to undefined]
**key** | **string** | The user link key. | [default to undefined]
**culture** | **string** | The user culture code. | [optional] [default to undefined]
**serializedProfile** | **string** | The third-party profile in the serialized format | [default to undefined]

## Example

```typescript
import { SignupAccountRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SignupAccountRequestDto = {
    employeeType,
    key,
    culture,
    serializedProfile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
