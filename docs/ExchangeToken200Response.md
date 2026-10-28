# ExchangeToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | The token to send as a Bearer credential when calling the portal on the user behalf. | [optional] [default to undefined]
**token_type** | **string** | How the access token is to be presented. It is always Bearer. | [optional] [default to undefined]
**expires_in** | **number** | How many seconds the access token stays valid, counted from the moment it was issued. | [optional] [default to undefined]
**refresh_token** | **string** | The token that buys a new access token once the current one expires. It is present only when the client is registered for the refresh token grant. | [optional] [default to undefined]

## Example

```typescript
import { ExchangeToken200Response } from '@onlyoffice/docspace-api-sdk';

const instance: ExchangeToken200Response = {
    access_token,
    token_type,
    expires_in,
    refresh_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
