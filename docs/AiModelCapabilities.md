# AiModelCapabilities

The AI model capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vision** | **boolean** | Indicates whether the model supports image and vision input. | [optional] [default to undefined]
**toolCalling** | **boolean** | Indicates whether the model supports tool (function) calling. | [optional] [default to undefined]
**thinking** | **boolean** | Indicates whether the model supports extended thinking and reasoning. | [optional] [default to undefined]

## Example

```typescript
import { AiModelCapabilities } from '@onlyoffice/docspace-api-sdk';

const instance: AiModelCapabilities = {
    vision,
    toolCalling,
    thinking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
