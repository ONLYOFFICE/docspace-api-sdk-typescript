# SsoSettingsV2

The SSO portal settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastModified** | **string** |  | [optional] [default to undefined]
**enableSso** | **boolean** | Specifies if the SSO settings are enabled or not. | [optional] [default to undefined]
**idpSettings** | [**SsoIdpSettings**](SsoIdpSettings.md) |  | [optional] [default to undefined]
**idpCertificates** | [**Array&lt;SsoCertificate&gt;**](SsoCertificate.md) | The list of the IdP certificates. | [optional] [default to undefined]
**idpCertificateAdvanced** | [**SsoIdpCertificateAdvanced**](SsoIdpCertificateAdvanced.md) |  | [optional] [default to undefined]
**spLoginLabel** | **string** | The SP login label. | [optional] [default to undefined]
**spCertificates** | [**Array&lt;SsoCertificate&gt;**](SsoCertificate.md) | The list of the SP certificates. | [optional] [default to undefined]
**spCertificateAdvanced** | [**SsoSpCertificateAdvanced**](SsoSpCertificateAdvanced.md) |  | [optional] [default to undefined]
**fieldMapping** | [**SsoFieldMapping**](SsoFieldMapping.md) |  | [optional] [default to undefined]
**hideAuthPage** | **boolean** | Specifies if the authentication page will be hidden or not. | [optional] [default to undefined]
**usersType** | **number** | The user type. | [optional] [default to undefined]
**disableEmailVerification** | **boolean** | Specifies if the email verification is disabled or not. | [optional] [default to undefined]

## Example

```typescript
import { SsoSettingsV2 } from '@onlyoffice/docspace-api-typescript';

const instance: SsoSettingsV2 = {
    lastModified,
    enableSso,
    idpSettings,
    idpCertificates,
    idpCertificateAdvanced,
    spLoginLabel,
    spCertificates,
    spCertificateAdvanced,
    fieldMapping,
    hideAuthPage,
    usersType,
    disableEmailVerification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
