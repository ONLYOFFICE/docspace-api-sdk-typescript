# StorageEncryptionRequestDto

Whether the users are warned before the portals go down for the storage encryption pass.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifyUsers** | **boolean** | Whether every user of every portal on the server is mailed before the encryption or decryption pass starts.  The pass runs either way; the flag only decides whether people are told that their portal is about to become  unavailable. | [optional] [default to undefined]

## Example

```typescript
import { StorageEncryptionRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: StorageEncryptionRequestDto = {
    notifyUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
