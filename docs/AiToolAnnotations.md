# AiToolAnnotations

MCP tool annotations (`Tool.annotations` in the protocol). All hints are advisory and optional; the protocol\'s defaults are `readOnlyHint: false` and `destructiveHint: true`, which is why an unannotated tool is treated as one that may destroy state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**readOnlyHint** | **boolean** |  | [optional] [default to undefined]
**destructiveHint** | **boolean** |  | [optional] [default to undefined]
**idempotentHint** | **boolean** |  | [optional] [default to undefined]
**openWorldHint** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { AiToolAnnotations } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolAnnotations = {
    title,
    readOnlyHint,
    destructiveHint,
    idempotentHint,
    openWorldHint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
