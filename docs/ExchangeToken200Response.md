# ExchangeToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | The access token issued by the authorization server. | [optional] [default to undefined]
**token_type** | **string** | The type of token issued, typically \&#39;Bearer\&#39;. | [optional] [default to undefined]
**expires_in** | **number** | The number of seconds until the access token expires. | [optional] [default to undefined]
**refresh_token** | **string** | The token used to obtain a new access token when the current one expires. | [optional] [default to undefined]

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
