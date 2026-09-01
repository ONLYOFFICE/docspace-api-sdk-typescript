# OAuth20Token

The OAuth 2.0 token issued by a third-party provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | Access token | [optional] [default to undefined]
**refresh_token** | **string** | Refresh token | [optional] [default to undefined]
**expires_in** | **number** | Expires in | [optional] [default to undefined]
**client_id** | **string** | Client id | [optional] [default to undefined]
**client_secret** | **string** | Client secret | [optional] [default to undefined]
**redirect_uri** | **string** | Redirect uri | [optional] [default to undefined]
**timestamp** | **string** | Timestamp | [optional] [default to undefined]
**isExpired** | **boolean** | Is expired | [optional] [readonly] [default to undefined]

## Example

```typescript
import { OAuth20Token } from '@onlyoffice/docspace-api-sdk';

const instance: OAuth20Token = {
    access_token,
    refresh_token,
    expires_in,
    client_id,
    client_secret,
    redirect_uri,
    timestamp,
    isExpired,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
