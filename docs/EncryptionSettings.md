# EncryptionSettings

The encryption settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **string** | The encryption password. | [optional] [default to undefined]
**status** | [**EncryprtionStatus**](EncryprtionStatus.md) |  | [optional] [default to undefined]
**notifyUsers** | **boolean** | Specifies if the users will be notified about the encryption operation or not. | [optional] [default to undefined]

## Example

```typescript
import { EncryptionSettings } from '@onlyoffice/docspace-api-typescript';

const instance: EncryptionSettings = {
    password,
    status,
    notifyUsers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
