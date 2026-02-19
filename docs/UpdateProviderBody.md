# UpdateProviderBody

Parameters for updating an AI provider\'s configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The new display title for the AI provider. If null, the title is not changed. | [optional] [default to undefined]
**url** | **string** | The new API endpoint URL for the AI provider. If null, the URL is not changed. | [optional] [default to undefined]
**key** | **string** | The new authentication API key for the AI provider. If null, the key is not changed. | [optional] [default to undefined]

## Example

```typescript
import { UpdateProviderBody } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateProviderBody = {
    title,
    url,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
