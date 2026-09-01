# EncryptionKeyRequestDto

The request parameters for storing the encryption key pair of a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the key pair. | [optional] [default to undefined]
**publicKey** | **string** | The public key of the pair, used to encrypt the file keys. | [optional] [default to undefined]
**privateKeyEnc** | **string** | The private key of the pair, encrypted with the user password. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionKeyRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: EncryptionKeyRequestDto = {
    id,
    publicKey,
    privateKeyEnc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
