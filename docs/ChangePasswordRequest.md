# ChangePasswordRequest

The request parameters for updating a user password.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **string** | The user password. | [optional] [default to undefined]
**passwordHash** | **string** | The user password hash. | [optional] [default to undefined]

## Example

```typescript
import { ChangePasswordRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ChangePasswordRequest = {
    password,
    passwordHash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
