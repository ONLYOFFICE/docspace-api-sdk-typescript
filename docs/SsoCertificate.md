# SsoCertificate

The SSO certificate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selfSigned** | **boolean** | Specifies if a certificate is self-signed or not. | [optional] [default to undefined]
**crt** | **string** | The CRT certificate file. | [optional] [default to undefined]
**key** | **string** | The certificate key. | [optional] [default to undefined]
**action** | **string** | The certificate action. | [optional] [default to undefined]
**domainName** | **string** | The certificate domain name. | [optional] [default to undefined]
**startDate** | **string** | The certificate start date. | [optional] [default to undefined]
**expiredDate** | **string** | The certificate expiration date. | [optional] [default to undefined]

## Example

```typescript
import { SsoCertificate } from '@onlyoffice/docspace-api-typescript';

const instance: SsoCertificate = {
    selfSigned,
    crt,
    key,
    action,
    domainName,
    startDate,
    expiredDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
