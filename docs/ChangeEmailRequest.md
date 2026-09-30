# ChangeEmailRequest

The request parameters for updating a user email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The new address in plain text, up to 255 characters. It is stored in lowercase, and one of this field and  `encEmail` is required. | [optional] [default to undefined]
**encEmail** | **string** | The new address in the encrypted form the confirmation link carries. Pass the value from the link unchanged;  it is used only when `email` is empty. | [optional] [default to undefined]

## Example

```typescript
import { ChangeEmailRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ChangeEmailRequest = {
    email,
    encEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
