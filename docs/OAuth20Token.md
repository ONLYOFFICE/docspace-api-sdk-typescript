# OAuth20Token


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** |  | [optional] [default to undefined]
**refresh_token** | **string** |  | [optional] [default to undefined]
**expires_in** | **number** |  | [optional] [default to undefined]
**client_id** | **string** |  | [optional] [default to undefined]
**client_secret** | **string** |  | [optional] [default to undefined]
**redirect_uri** | **string** |  | [optional] [default to undefined]
**timestamp** | **string** |  | [optional] [default to undefined]
**isExpired** | **boolean** |  | [optional] [readonly] [default to undefined]

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
