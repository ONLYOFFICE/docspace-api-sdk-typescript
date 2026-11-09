# AiModel

AI model metadata. Describes a single model available from a provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Model identifier as used by the provider API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`). | [default to undefined]
**name** | **string** | Human-readable model name for display in the UI. | [default to undefined]
**provider** | [**AiProviderType**](AiProviderType.md) | Provider that offers this model. | [default to undefined]
**reasoning** | **boolean** | Whether this model supports extended thinking / chain-of-thought reasoning. | [optional] [default to undefined]
**reasoningSupport** | [**AiReasoningSupport**](AiReasoningSupport.md) | What the model can do with extended thinking, when the provider\'s catalogue reports it (OpenRouter and the ONLYOFFICE route do). Copied onto the profile when it is saved; when absent, the abilities are taken from the model ID. | [optional] [default to undefined]
**capabilities** | **number** | Bitmask of model capabilities (Chat, Image, Vision, Tools, etc.). Used to filter models per `ActionType`. | [optional] [default to undefined]
**contextWindow** | **number** | Size of the model\'s context window in tokens, when the provider\'s catalogue reports one (OpenRouter and the ONLYOFFICE route carry `context_length`). Copied onto the profile at save time; absent, the widget falls back to the id-based table in `core/providers/context-window`. | [optional] [default to undefined]
**created** | **number** | Release date as a Unix timestamp in **seconds**, when the provider\'s catalogue reports one (OpenAI-shaped `/models` responses and OpenRouter carry `created`; Anthropic carries an ISO `created_at`). The model picker sorts on it so the newest releases come first; entries without it fall back to alphabetical order. | [optional] [default to undefined]

## Example

```typescript
import { AiModel } from '@onlyoffice/docspace-api-sdk';

const instance: AiModel = {
    id,
    name,
    provider,
    reasoning,
    reasoningSupport,
    capabilities,
    contextWindow,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
