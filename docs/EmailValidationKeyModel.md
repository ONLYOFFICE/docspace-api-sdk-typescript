# EmailValidationKeyModel

The confirmation email parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The email validation key. | [optional] [default to undefined]
**emplType** | [**EmployeeType**](EmployeeType.md) |  | [optional] [default to undefined]
**email** | **string** | The email address. | [optional] [default to undefined]
**uiD** | **string** | The user ID. | [optional] [default to undefined]
**type** | [**ConfirmType**](ConfirmType.md) |  | [optional] [default to undefined]
**first** | **string** | Specifies whether it is the first time account access or not. | [optional] [default to undefined]
**roomId** | **string** | The room ID. | [optional] [default to undefined]

## Example

```typescript
import { EmailValidationKeyModel } from '@onlyoffice/docspace-api-sdk';

const instance: EmailValidationKeyModel = {
    key,
    emplType,
    email,
    uiD,
    type,
    first,
    roomId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
