# OAuth20Token

The OAuth 2.0 token issued by a third-party provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | The token sent to the provider with every request made on behalf of the account. | [optional] [default to undefined]
**refresh_token** | **string** | The token used to obtain a new access token when the current one expires. A provider that issues no refresh  token leaves it empty, and the account then has to be connected again to keep working. | [optional] [default to undefined]
**expires_in** | **number** | How long the access token stays usable, in seconds counted from `timestamp`. Zero means the provider did not  say, and the token is then treated as expired. | [optional] [default to undefined]
**client_id** | **string** | The OAuth 2.0 client ID of the application the token was issued to. | [optional] [default to undefined]
**client_secret** | **string** | The client secret of the application the token was issued to, needed when the token is refreshed. | [optional] [default to undefined]
**redirect_uri** | **string** | The redirect URL the authorization code behind this token was obtained with; providers require the same value  again when the token is refreshed. | [optional] [default to undefined]
**timestamp** | **string** | When the token was issued, in UTC. This is the point `expires_in` is counted from. | [optional] [default to undefined]
**isExpired** | **boolean** | Whether the access token can no longer be used and has to be refreshed. It is also true when the provider did  not say how long the token lives. | [optional] [readonly] [default to undefined]

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
