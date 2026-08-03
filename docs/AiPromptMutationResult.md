# AiPromptMutationResult

Outcome of `create` / `update` / `move` on a prompt — either the persisted prompt or a field-scoped error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**prompt** | [**AiPrompt**](AiPrompt.md) |  | [optional] [default to undefined]
**error** | [**AiTErrorData**](AiTErrorData.md) |  | [optional] [default to undefined]

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
