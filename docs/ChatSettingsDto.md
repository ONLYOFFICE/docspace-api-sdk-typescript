# ChatSettingsDto

The chat settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerId** | **number** | The AI provider ID. | [optional] [default to undefined]
**modelId** | **string** | The AI model ID used for chat completions. | [optional] [default to undefined]
**modelAlias** | **string** | The AI model display alias. | [optional] [default to undefined]
**prompt** | **string** | The system prompt for the chat. | [optional] [default to undefined]
**multimodal** | [**ChatMultimodalSettingsDto**](ChatMultimodalSettingsDto.md) |  | [optional] [default to undefined]
**thinking** | **boolean** | Indicates whether the model supports extended thinking mode. | [optional] [default to undefined]
**internal** | **boolean** | Indicates whether this is an internal AI gateway provider. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ChatSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: ChatSettingsDto = {
    providerId,
    modelId,
    modelAlias,
    prompt,
    multimodal,
    thinking,
    internal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
