# PasswordHasher

The password hash parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | The password hash size. | [optional] [readonly] [default to undefined]
**iterations** | **number** | The number of iterations to generate the ppassword hash. | [optional] [readonly] [default to undefined]
**salt** | **string** | The salt to generate the ppassword hash. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PasswordHasher } from '@onlyoffice/docspace-api-sdk';

const instance: PasswordHasher = {
    size,
    iterations,
    salt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
