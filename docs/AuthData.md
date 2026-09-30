# AuthData

The credentials of a third-party storage account. The portal takes them when an account is connected and does not  give them back afterwards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login** | **string** | The account name at the storage service. | [optional] [default to undefined]
**password** | **string** | The password of the account at the storage service. | [optional] [default to undefined]
**rawToken** | **string** | The token of the account, kept as the raw JSON document the storage service issued it in. | [optional] [default to undefined]
**url** | **string** | The address of the storage server the account lives on. | [optional] [default to undefined]
**provider** | **string** | The storage service the credentials belong to, as the provider key the account was connected with. | [optional] [default to undefined]
**token** | [**OAuth20Token**](OAuth20Token.md) | The same token as in `rawToken`, parsed into its OAuth 2.0 fields. | [optional] [default to undefined]

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
