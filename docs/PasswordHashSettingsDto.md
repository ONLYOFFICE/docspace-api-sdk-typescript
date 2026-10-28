# PasswordHashSettingsDto

The parameters a client hashes a password with before sending it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | The length of the hash, in bytes. | [optional] [default to undefined]
**iterations** | **number** | The number of PBKDF2 iterations. | [optional] [default to undefined]
**salt** | **string** | The salt the installation hashes passwords with. | [optional] [default to undefined]

## Example

```typescript
import { PasswordHashSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PasswordHashSettingsDto = {
    size,
    iterations,
    salt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
