# AccountInfoDto

The account information parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** | The account provider. | [optional] [default to undefined]
**url** | **string** | The account URL. | [optional] [default to undefined]
**linked** | **boolean** | Specifies if an account is linked with other profiles or not. | [optional] [default to undefined]

## Example

```typescript
import { AccountInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: AccountInfoDto = {
    provider,
    url,
    linked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
