# ThirdPartyRequestDto

The third-party request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The connection URL for the sharepoint. | [optional] [default to undefined]
**login** | **string** | The third-party request login. | [optional] [default to undefined]
**password** | **string** | The third-party request password. | [optional] [default to undefined]
**token** | **string** | The authentication token. | [optional] [default to undefined]
**customerTitle** | **string** | The customer title. | [optional] [default to undefined]
**providerKey** | **string** | The provider key. | [optional] [default to undefined]
**providerId** | **number** | The provider ID. | [optional] [default to undefined]

## Example

```typescript
import { ThirdPartyRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: ThirdPartyRequestDto = {
    url,
    login,
    password,
    token,
    customerTitle,
    providerKey,
    providerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
