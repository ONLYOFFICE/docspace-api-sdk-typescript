# EncryptionKeysConfig

The encryption keys of the editor configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cryptoEngineId** | **string** | The crypto engine ID of the encryption key. | [optional] [readonly] [default to undefined]
**privateKeyEnc** | **string** | The private key. | [optional] [default to undefined]
**publicKey** | **string** | The public key. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionKeysConfig } from '@onlyoffice/docspace-api-sdk';

const instance: EncryptionKeysConfig = {
    cryptoEngineId,
    privateKeyEnc,
    publicKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
