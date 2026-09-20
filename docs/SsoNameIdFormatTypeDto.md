# SsoNameIdFormatTypeDto

The SAML name ID formats the SSO settings accept.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**saml11Unspecified** | **string** | The SAML 1.1 unspecified name ID format. | [optional] [readonly] [default to undefined]
**saml11EmailAddress** | **string** | The SAML 1.1 email address name ID format. | [optional] [readonly] [default to undefined]
**saml20Entity** | **string** | The SAML 2.0 entity name ID format. | [optional] [readonly] [default to undefined]
**saml20Transient** | **string** | The SAML 2.0 transient name ID format, whose identifier differs from one session to the next. It is what  the built-in configuration uses. | [optional] [readonly] [default to undefined]
**saml20Persistent** | **string** | The SAML 2.0 persistent name ID format, whose identifier stays the same for one person across sessions. | [optional] [readonly] [default to undefined]
**saml20Encrypted** | **string** | The SAML 2.0 encrypted name ID format. | [optional] [readonly] [default to undefined]
**saml20Unspecified** | **string** | The SAML 2.0 unspecified name ID format. | [optional] [readonly] [default to undefined]
**saml11X509SubjectName** | **string** | The SAML 1.1 X.509 subject name name ID format. | [optional] [readonly] [default to undefined]
**saml11WindowsDomainQualifiedName** | **string** | The SAML 1.1 Windows domain qualified name name ID format. | [optional] [readonly] [default to undefined]
**saml20Kerberos** | **string** | The SAML 2.0 Kerberos name ID format. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SsoNameIdFormatTypeDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoNameIdFormatTypeDto = {
    saml11Unspecified,
    saml11EmailAddress,
    saml20Entity,
    saml20Transient,
    saml20Persistent,
    saml20Encrypted,
    saml20Unspecified,
    saml11X509SubjectName,
    saml11WindowsDomainQualifiedName,
    saml20Kerberos,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
