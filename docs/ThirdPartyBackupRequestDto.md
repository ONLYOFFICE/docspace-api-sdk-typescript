# ThirdPartyBackupRequestDto

The third-party backup request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The connection URL for the sharepoint. | [optional] [default to undefined]
**login** | **string** | The login. | [optional] [default to undefined]
**password** | **string** | The password. | [optional] [default to undefined]
**token** | **string** | The authentication token. | [optional] [default to undefined]
**customerTitle** | **string** | The customer title. | [optional] [default to undefined]
**providerKey** | **string** | The provider key. | [optional] [default to undefined]

## Example

```typescript
import { ThirdPartyBackupRequestDto } from '@onlyoffice/docspace-api-typescript';

const instance: ThirdPartyBackupRequestDto = {
    url,
    login,
    password,
    token,
    customerTitle,
    providerKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
