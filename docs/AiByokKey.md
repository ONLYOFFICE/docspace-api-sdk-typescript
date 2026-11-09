# AiByokKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Model revision id the key is set for, used in the path when replacing or deleting it. | [default to undefined]
**name** | **string** | Model display name; absent when the model is no longer in the gateway catalogue. | [optional] [default to undefined]
**provider** | **string** | BYOK provider id the key belongs to, e.g. `anthropic`. | [default to undefined]
**image** | **string** | SVG markup of the logo of the model\'s owner. | [optional] [default to undefined]

## Example

```typescript
import { AiByokKey } from '@onlyoffice/docspace-api-sdk';

const instance: AiByokKey = {
    id,
    name,
    provider,
    image,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
