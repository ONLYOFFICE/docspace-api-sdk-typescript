# EncryptionSettingsDto

The state of the portal\'s storage encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **string** | Always an empty string: the encryption password is never returned. | [optional] [default to undefined]
**status** | [**EncryptionStatus**](EncryptionStatus.md) | Whether the storage is encrypted, decrypted, or on its way to either. | [optional] [default to undefined]
**notifyUsers** | **boolean** | Whether the users are notified when the operation starts and ends. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: EncryptionSettingsDto = {
    password,
    status,
    notifyUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
