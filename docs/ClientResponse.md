# ClientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The client name. | [optional] [default to undefined]
**description** | **string** | The client description. | [optional] [default to undefined]
**tenant** | **number** | The tenant ID associated with the client. | [optional] [default to undefined]
**scopes** | **Set&lt;string&gt;** | The client scopes. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies if the client is currently enabled or not. | [optional] [default to undefined]
**client_id** | **string** | The client identifier issued to the client during registration. | [optional] [default to undefined]
**client_secret** | **string** | The client secret issued to the client during registration. | [optional] [default to undefined]
**website_url** | **string** | The URL to the client\&#39;s website. | [optional] [default to undefined]
**terms_url** | **string** | The URL to the client\&#39;s terms of service. | [optional] [default to undefined]
**policy_url** | **string** | The URL to the client\&#39;s privacy policy. | [optional] [default to undefined]
**logo** | **string** | The URL to the client\&#39;s logo. | [optional] [default to undefined]
**authentication_methods** | **Set&lt;string&gt;** | The authentication methods supported by the client. | [optional] [default to undefined]
**redirect_uris** | **Set&lt;string&gt;** | The list of allowed redirect URIs. | [optional] [default to undefined]
**allowed_origins** | **Set&lt;string&gt;** | The list of allowed CORS origins. | [optional] [default to undefined]
**logout_redirect_uris** | **Set&lt;string&gt;** | The list of allowed logout redirect URIs. | [optional] [default to undefined]
**created_on** | **string** | The date and time when the client was created. | [optional] [default to undefined]
**created_by** | **string** | The user who created the client. | [optional] [default to undefined]
**modified_on** | **string** | The date and time when the client was last modified. | [optional] [default to undefined]
**modified_by** | **string** | The user who last modified the client. | [optional] [default to undefined]
**is_public** | **boolean** | Indicates whether the client is accessible by third-party tenants. | [optional] [default to undefined]

## Example

```typescript
import { ClientResponse } from '@onlyoffice/docspace-api-typescript';

const instance: ClientResponse = {
    name,
    description,
    tenant,
    scopes,
    enabled,
    client_id,
    client_secret,
    website_url,
    terms_url,
    policy_url,
    logo,
    authentication_methods,
    redirect_uris,
    allowed_origins,
    logout_redirect_uris,
    created_on,
    created_by,
    modified_on,
    modified_by,
    is_public,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
