# MemberBaseRequestDto

The request parameters for the user generic information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **string** | The user password. | [optional] [default to undefined]
**passwordHash** | **string** | The user password hash. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]

## Example

```typescript
import { MemberBaseRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: MemberBaseRequestDto = {
    password,
    passwordHash,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
