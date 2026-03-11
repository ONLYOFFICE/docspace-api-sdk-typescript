# ChatSettings

The chat settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **number** | The provider ID. | [optional] [default to undefined]
**modelId** | **string** | The model ID. | [optional] [default to undefined]
**prompt** | **string** | The prompt. | [optional] [default to undefined]
**internal** | **boolean** | Specifies whether the provider is internal or not. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ChatSettings } from '@onlyoffice/docspace-api-sdk';

const instance: ChatSettings = {
    providerId,
    modelId,
    prompt,
    internal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
