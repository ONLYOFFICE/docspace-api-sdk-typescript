# CreateClientRequest

The request parameters for creating a client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The client name. | [optional] [default to undefined]
**description** | **string** | The client description. | [optional] [default to undefined]
**logo** | **string** | The client logo in base64 format. | [optional] [default to undefined]
**scopes** | **Set&lt;string&gt;** | The client scopes. | [optional] [default to undefined]
**allow_pkce** | **boolean** | Indicates whether PKCE is allowed for the client. | [optional] [default to undefined]
**is_public** | **boolean** | Indicates whether the client is accessible by third-party tenants. | [optional] [default to undefined]
**website_url** | **string** | The URL to the client\&#39;s website. | [optional] [default to undefined]
**terms_url** | **string** | The URL to the client\&#39;s terms of service. | [optional] [default to undefined]
**policy_url** | **string** | The URL to the client\&#39;s privacy policy. | [optional] [default to undefined]
**redirect_uris** | **Set&lt;string&gt;** | The list of allowed redirect URIs. | [default to undefined]
**allowed_origins** | **Set&lt;string&gt;** | The list of allowed CORS origins. | [default to undefined]
**logout_redirect_uri** | **string** | The list of allowed logout redirect URIs. | [optional] [default to undefined]

## Example

```typescript
import { CreateClientRequest } from '@onlyoffice/docspace-api-sdk';

const instance: CreateClientRequest = {
    name,
    description,
    logo,
    scopes,
    allow_pkce,
    is_public,
    website_url,
    terms_url,
    policy_url,
    redirect_uris,
    allowed_origins,
    logout_redirect_uri,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
