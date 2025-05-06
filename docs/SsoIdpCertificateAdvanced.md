# SsoIdpCertificateAdvanced

The IdP advanced certificate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verifyAlgorithm** | **string** | The certificate verification algorithm. | [optional] [default to undefined]
**verifyAuthResponsesSign** | **boolean** | Specifies if the signatures of the SAML authentication responses sent to SP will be verified or not. | [optional] [default to undefined]
**verifyLogoutRequestsSign** | **boolean** | Specifies if the signatures of the SAML logout requests sent to SP will be verified or not. | [optional] [default to undefined]
**verifyLogoutResponsesSign** | **boolean** | Specifies if the signatures of the SAML logout responses sent to SP will be verified or not. | [optional] [default to undefined]
**decryptAlgorithm** | **string** | The certificate decryption algorithm. | [optional] [default to undefined]
**decryptAssertions** | **boolean** | Specifies if the assertions will be decrypted or not. | [optional] [default to undefined]

## Example

```typescript
import { SsoIdpCertificateAdvanced } from '@onlyoffice/docspace-api-typescript';

const instance: SsoIdpCertificateAdvanced = {
    verifyAlgorithm,
    verifyAuthResponsesSign,
    verifyLogoutRequestsSign,
    verifyLogoutResponsesSign,
    decryptAlgorithm,
    decryptAssertions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
