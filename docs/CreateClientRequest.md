# CreateClientRequest

Client creation request containing client details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The client name. | [optional] [default to undefined]
**description** | **string** | The description of the client | [optional] [default to undefined]
**logo** | **string** | The logo of the client in base64 format | [optional] [default to undefined]
**scopes** | **Set&lt;string&gt;** | The scopes for the client | [optional] [default to undefined]
**_public** | **boolean** |  | [optional] [default to undefined]
**allow_pkce** | **boolean** | Indicates whether PKCE is allowed for the client | [optional] [default to undefined]
**is_public** | **boolean** | Indicates if the client is public | [optional] [default to undefined]
**website_url** | **string** | The website URL of the client | [optional] [default to undefined]
**terms_url** | **string** | The terms URL of the client | [optional] [default to undefined]
**policy_url** | **string** | The policy URL of the client | [optional] [default to undefined]
**redirect_uris** | **Set&lt;string&gt;** | The redirect URIs for the client | [default to undefined]
**allowed_origins** | **Set&lt;string&gt;** | The allowed origins for the client | [default to undefined]
**logout_redirect_uri** | **string** | The logout redirect URI for the client | [optional] [default to undefined]

## Example

```typescript
import { CreateClientRequest } from '@onlyoffice/docspace-api-sdk';

const instance: CreateClientRequest = {
    name,
    description,
    logo,
    scopes,
    _public,
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
