# AiPromptMutationResult

Outcome of `create` / `update` / `move` on a prompt — either the persisted prompt or a field-scoped error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | True when the prompt was persisted. | [default to undefined]
**prompt** | [**AiPrompt**](AiPrompt.md) | The persisted prompt. Present on success. | [optional] [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) | Why the prompt was rejected. Present on failure. | [optional] [default to undefined]

## Example

```typescript
import { AiPromptMutationResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiPromptMutationResult = {
    success,
    prompt,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
