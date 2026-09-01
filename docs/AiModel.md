# AiModel

AI model metadata. Describes a single model available from a provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Model identifier as used by the provider API (e.g. `gpt-4o`, `claude-sonnet-4-20250514`). | [default to undefined]
**name** | **string** | Human-readable model name for display in the UI. | [default to undefined]
**provider** | [**AiProviderType**](AiProviderType.md) | Provider that offers this model. | [default to undefined]
**reasoning** | **boolean** | Whether this model supports extended thinking / chain-of-thought reasoning. | [optional] [default to undefined]
**capabilities** | **number** | Bitmask of model capabilities (Chat, Image, Vision, Tools, etc.). Used to filter models per `ActionType`. | [optional] [default to undefined]

## Example

```typescript
import { AiModel } from '@onlyoffice/docspace-api-sdk';

const instance: AiModel = {
    id,
    name,
    provider,
    reasoning,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
