# SsoSettingsDto

The SAML single sign-on configuration of the portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastModified** | **string** | The timestamp indicating when the settings were last modified. | [optional] [default to undefined]
**enableSso** | **boolean** | Specifies if the SSO settings are enabled or not. | [optional] [default to undefined]
**idpSettings** | [**SsoIdpSettingsDto**](SsoIdpSettingsDto.md) | The SSO IdP settings. | [optional] [default to undefined]
**idpCertificates** | [**Array&lt;SsoCertificateDto&gt;**](SsoCertificateDto.md) | The list of the IdP certificates. | [optional] [default to undefined]
**idpCertificateAdvanced** | [**SsoIdpCertificateAdvancedDto**](SsoIdpCertificateAdvancedDto.md) | The IdP advanced certificate. | [optional] [default to undefined]
**spLoginLabel** | **string** | The SP login label. | [optional] [default to undefined]
**spCertificates** | [**Array&lt;SsoCertificateDto&gt;**](SsoCertificateDto.md) | The list of the SP certificates. | [optional] [default to undefined]
**spCertificateAdvanced** | [**SsoSpCertificateAdvancedDto**](SsoSpCertificateAdvancedDto.md) | The SP advanced certificate. | [optional] [default to undefined]
**fieldMapping** | [**SsoFieldMappingDto**](SsoFieldMappingDto.md) | The SSO field mapping. | [optional] [default to undefined]
**hideAuthPage** | **boolean** | Specifies if the authentication page will be hidden or not. | [optional] [default to undefined]
**usersType** | **number** | The user type. | [optional] [default to undefined]
**disableEmailVerification** | **boolean** | Specifies if the email verification is disabled or not. | [optional] [default to undefined]

## Example

```typescript
import { SsoSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoSettingsDto = {
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
