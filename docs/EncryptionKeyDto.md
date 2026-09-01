# EncryptionKeyDto

The encryption key pair of a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the key pair. | [optional] [default to undefined]
**userId** | **string** | The identifier of the user the key pair belongs to. | [optional] [default to undefined]
**date** | **string** | The date and time when the key pair was created. | [optional] [default to undefined]
**publicKey** | **string** | The public key of the pair, used to encrypt the file keys. | [optional] [default to undefined]
**privateKeyEnc** | **string** | The private key of the pair, encrypted with the user password. | [optional] [default to undefined]
**cryptoEngineId** | **string** | The identifier of the crypto engine the key pair was issued for. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionKeyDto } from '@onlyoffice/docspace-api-sdk';

const instance: EncryptionKeyDto = {
    id,
    userId,
    date,
    publicKey,
    privateKeyEnc,
    cryptoEngineId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
