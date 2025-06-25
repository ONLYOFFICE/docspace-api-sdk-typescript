# SsoSpCertificateAdvanced

The SP advanced certificate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signingAlgorithm** | **string** | The certificate signing algorithm. | [optional] [default to undefined]
**signAuthRequests** | **boolean** | Specifies if SP will sign the SAML authentication requests sent to IdP or not. | [optional] [default to undefined]
**signLogoutRequests** | **boolean** | Specifies if SP will sign the SAML logout requests sent to IdP or not. | [optional] [default to undefined]
**signLogoutResponses** | **boolean** | Specifies if SP will sign the SAML logout responses sent to IdP or not. | [optional] [default to undefined]
**encryptAlgorithm** | **string** | The certificate encryption algorithm. | [optional] [default to undefined]
**decryptAlgorithm** | **string** | The certificate decryption algorithm. | [optional] [default to undefined]
**encryptAssertions** | **boolean** | Specifies if the assertions will be encrypted or not. | [optional] [default to undefined]

## Example

```typescript
import { SsoSpCertificateAdvanced } from '@onlyoffice/docspace-api-typescript';

const instance: SsoSpCertificateAdvanced = {
    signingAlgorithm,
    signAuthRequests,
    signLogoutRequests,
    signLogoutResponses,
    encryptAlgorithm,
    decryptAlgorithm,
    encryptAssertions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
