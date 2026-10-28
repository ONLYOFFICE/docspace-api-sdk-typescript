# ProviderDto

One storage service this portal can connect, with the values a connection form needs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The display name of the service, and the only thing that tells the WebDAV presets apart: `kDrive`, `Yandex`,  `WebDav`, `Nextcloud` and `ownCloud` all report the same key. | [optional] [default to undefined]
**key** | **string** | The value to send as `providerKey` when an account of this service is connected. | [optional] [default to undefined]
**connected** | **boolean** | Whether the service can be used on this portal: it is enabled in the configuration and, for an OAuth service,  its application is registered. It says nothing about whether an account of it is connected. | [optional] [default to undefined]
**oauth** | **boolean** | Whether an account of this service is connected with an OAuth 2.0 authorization code in `token`; when false,  it is connected with `login` and `password`. | [optional] [default to undefined]
**redirectUrl** | **string** | The redirect URL this portal is registered with at the service, to build the consent screen URL from. It comes  back as null for the services that do not use OAuth. | [optional] [default to undefined]
**requiredConnectionUrl** | **boolean** | Whether an account of this service cannot be connected without `url`, which is the case for the WebDAV servers  whose address is not known in advance. The presets with a fixed address and the OAuth services do not need it. | [optional] [default to undefined]
**clientId** | **string** | The OAuth 2.0 client ID this portal is registered with at the service, to build the consent screen URL from.  It comes back as null for the services that do not use OAuth. | [optional] [default to undefined]

## Example

```typescript
import { ProviderDto } from '@onlyoffice/docspace-api-sdk';

const instance: ProviderDto = {
    name,
    key,
    connected,
    oauth,
    redirectUrl,
    requiredConnectionUrl,
    clientId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
