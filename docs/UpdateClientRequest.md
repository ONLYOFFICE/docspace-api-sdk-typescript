# UpdateClientRequest

The request for updating client details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The client name. | [optional] [default to undefined]
**description** | **string** | The client description | [optional] [default to undefined]
**logo** | **string** | The client logo in base64 format. | [optional] [default to undefined]
**allow_pkce** | **boolean** | Indicates whether PKCE is allowed for the client. | [optional] [default to undefined]
**is_public** | **boolean** | Indicates whether the client is accessible by third-party tenants. | [optional] [default to undefined]
**allowed_origins** | **Set&lt;string&gt;** | The allowed origins for the client. | [optional] [default to undefined]

## Example

```typescript
import { UpdateClientRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateClientRequest = {
    name,
    description,
    logo,
    allow_pkce,
    is_public,
    allowed_origins,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
