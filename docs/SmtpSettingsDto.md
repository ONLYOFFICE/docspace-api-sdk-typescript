# SmtpSettingsDto

The SMTP settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** | The SMTP host. | [optional] [default to undefined]
**port** | **number** | The SMTP port. | [optional] [default to undefined]
**senderAddress** | **string** | The sender address. | [optional] [default to undefined]
**senderDisplayName** | **string** | The sender display name. | [optional] [default to undefined]
**credentialsUserName** | **string** | The credentials username. | [optional] [default to undefined]
**credentialsUserPassword** | **string** | The credentials user password. | [optional] [default to undefined]
**enableSSL** | **boolean** | Specifies whether the SSL is enabled or not. | [optional] [default to undefined]
**enableAuth** | **boolean** | Specifies whether the authentication is enabled or not. | [optional] [default to undefined]
**useNtlm** | **boolean** | Specifies whether to use NTLM or not. | [optional] [default to undefined]
**isDefaultSettings** | **boolean** | Specifies if the current settings are default or not. | [optional] [default to undefined]

## Example

```typescript
import { SmtpSettingsDto } from '@onlyoffice/docspace-api-typescript';

const instance: SmtpSettingsDto = {
    host,
    port,
    senderAddress,
    senderDisplayName,
    credentialsUserName,
    credentialsUserPassword,
    enableSSL,
    enableAuth,
    useNtlm,
    isDefaultSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
