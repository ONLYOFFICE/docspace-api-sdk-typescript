# CapabilitiesDto

The capabilities parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ldapEnabled** | **boolean** | Specifies if the LDAP settings are enabled or not. | [optional] [default to undefined]
**ldapDomain** | **string** | The LDAP domain. | [optional] [default to undefined]
**providers** | **Array&lt;string&gt;** | The list of providers. | [optional] [default to undefined]
**ssoLabel** | **string** | The SP login label. | [optional] [default to undefined]
**oauthEnabled** | **boolean** | Specifies if OAuth is enabled or not. | [optional] [default to undefined]
**ssoUrl** | **string** | The SSO URL. If this parameter is empty, then the SSO settings are disabled. | [optional] [default to undefined]
**identityServerEnabled** | **boolean** | Specifies if identity server is enabled or not | [optional] [default to undefined]

## Example

```typescript
import { CapabilitiesDto } from '@onlyoffice/docspace-api-typescript';

const instance: CapabilitiesDto = {
    ldapEnabled,
    ldapDomain,
    providers,
    ssoLabel,
    oauthEnabled,
    ssoUrl,
    identityServerEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
