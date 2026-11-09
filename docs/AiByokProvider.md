# AiByokProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | BYOK provider id, passed as `provider` when setting a BYOK key. | [default to undefined]
**name** | **string** | Provider display name. | [default to undefined]
**image** | **string** | SVG markup of the logo of the provider\'s models\' owner. | [optional] [default to undefined]
**models** | [**Array&lt;AiByokModel&gt;**](AiByokModel.md) | Models that can be called through this provider with the portal\'s own key. | [default to undefined]

## Example

```typescript
import { AiByokProvider } from '@onlyoffice/docspace-api-sdk';

const instance: AiByokProvider = {
    id,
    name,
    image,
    models,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
