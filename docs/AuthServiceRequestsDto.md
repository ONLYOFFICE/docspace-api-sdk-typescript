# AuthServiceRequestsDto

The request parameters for handling the authorization service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the authorization service. | [optional] [default to undefined]
**title** | **string** | The user-friendly display title of the authorization service. | [optional] [default to undefined]
**description** | **string** | The brief description of the authorization service. | [optional] [default to undefined]
**instruction** | **string** | The detailed instructions for configuring or using the authorization service. | [optional] [default to undefined]
**canSet** | **boolean** | Specifies whether the authorization service can be configured by the user. | [optional] [default to undefined]
**props** | [**Array&lt;AuthKey&gt;**](AuthKey.md) | The collection of authorization keys associated with the authorization service. | [optional] [default to undefined]

## Example

```typescript
import { AuthServiceRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuthServiceRequestsDto = {
    name,
    title,
    description,
    instruction,
    canSet,
    props,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
