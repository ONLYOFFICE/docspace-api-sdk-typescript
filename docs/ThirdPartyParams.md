# ThirdPartyParams

The third-party account parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_data** | [**AuthData**](AuthData.md) |  | [optional] [default to undefined]
**corporate** | **boolean** | Specifies if this is a corporate account or not. | [optional] [default to undefined]
**roomsStorage** | **boolean** | Specifies if this is a room storage or not. | [optional] [default to undefined]
**customer_title** | **string** | The customer title. | [optional] [default to undefined]
**provider_id** | **number** | The provider ID. | [optional] [default to undefined]
**provider_key** | **string** | The provider key. | [optional] [default to undefined]

## Example

```typescript
import { ThirdPartyParams } from '@onlyoffice/docspace-api-sdk';

const instance: ThirdPartyParams = {
    auth_data,
    corporate,
    roomsStorage,
    customer_title,
    provider_id,
    provider_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
