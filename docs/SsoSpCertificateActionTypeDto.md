# SsoSpCertificateActionTypeDto

What the portal\'s own key pair may be used for, as the `action` of a service provider certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signing** | **string** | The key pair signs the requests the portal sends and nothing else. | [optional] [readonly] [default to undefined]
**encrypt** | **string** | The key pair encrypts what the portal sends and decrypts what comes back, but signs nothing. | [optional] [readonly] [default to undefined]
**signingAndEncrypt** | **string** | The key pair does both, which is what one pair configured on its own has to be set to. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SsoSpCertificateActionTypeDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoSpCertificateActionTypeDto = {
    signing,
    encrypt,
    signingAndEncrypt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
