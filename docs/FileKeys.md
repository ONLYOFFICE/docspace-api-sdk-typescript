# FileKeys

The encrypted file key issued to one user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The identifier of the user the file key was issued to. | [optional] [default to undefined]
**publicKeyId** | **string** | The identifier of the key pair the file key is encrypted for. | [optional] [default to undefined]
**privateKeyEnc** | **string** | The file key, encrypted with the public key of the pair. | [optional] [default to undefined]
**tenantId** | **number** | The identifier of the portal the file belongs to. | [optional] [default to undefined]
**fileId** | **number** | The identifier of the file the key unlocks. | [optional] [default to undefined]
**createOn** | **string** | The date and time when the file key was issued. | [optional] [default to undefined]

## Example

```typescript
import { FileKeys } from '@onlyoffice/docspace-api-sdk';

const instance: FileKeys = {
    userId,
    publicKeyId,
    privateKeyEnc,
    tenantId,
    fileId,
    createOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
