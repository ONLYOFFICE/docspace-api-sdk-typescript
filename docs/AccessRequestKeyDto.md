# AccessRequestKeyDto

The encryption key granting one user access to a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User ID | [optional] [default to undefined]
**publicKeyId** | **string** | Public key ID | [optional] [default to undefined]
**privateKeyEnc** | **string** | Encrypted private key | [optional] [default to undefined]

## Example

```typescript
import { AccessRequestKeyDto } from '@onlyoffice/docspace-api-sdk';

const instance: AccessRequestKeyDto = {
    userId,
    publicKeyId,
    privateKeyEnc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
