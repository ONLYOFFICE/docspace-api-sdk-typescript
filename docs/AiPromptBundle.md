# AiPromptBundle

Versioned, self-contained bundle of every saved prompt and folder. Stable wire format — `version` lets the import path migrate older shapes if the schema ever changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [default to undefined]
**folders** | [**Array&lt;AiPromptFolder&gt;**](AiPromptFolder.md) |  | [default to undefined]
**prompts** | [**Array&lt;AiPrompt&gt;**](AiPrompt.md) |  | [default to undefined]

## Example

```typescript
import { AiPromptBundle } from '@onlyoffice/docspace-api-sdk';

const instance: AiPromptBundle = {
    version,
    folders,
    prompts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
