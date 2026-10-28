# SsoEncryptAlgorithmTypeDto

The encryption algorithms the SSO settings accept.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aes128** | **string** | The AES-128-CBC encryption algorithm, which the built-in configuration uses. | [optional] [readonly] [default to undefined]
**aes256** | **string** | The AES-256-CBC encryption algorithm, the strongest of the three. | [optional] [readonly] [default to undefined]
**triDec** | **string** | The Triple DES CBC encryption algorithm, kept for identity providers that support nothing newer. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SsoEncryptAlgorithmTypeDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoEncryptAlgorithmTypeDto = {
    aes128,
    aes256,
    triDec,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
