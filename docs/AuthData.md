# AuthData

The authentication data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login** | **string** | The authentication login. | [optional] [default to undefined]
**password** | **string** | The authentication password. | [optional] [default to undefined]
**rawToken** | **string** | The authentication raw token. | [optional] [default to undefined]
**url** | **string** | The authentication URL. | [optional] [default to undefined]
**provider** | **string** | The authentication provider. | [optional] [default to undefined]
**token** | [**OAuth20Token**](OAuth20Token.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthData } from '@onlyoffice/docspace-api-sdk';

const instance: AuthData = {
    login,
    password,
    rawToken,
    url,
    provider,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
