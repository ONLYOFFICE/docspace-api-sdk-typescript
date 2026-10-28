# AiErrorData

A field-scoped validation error: which form field was rejected, and why.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **string** | The rejected field. | [default to undefined]
**message** | **string** | The human-readable reason the field was rejected. | [default to undefined]
**code** | [**AiErrorCode**](AiErrorCode.md) | Optional: producers that know the reason set it (the prompts engine does). | [optional] [default to undefined]

## Example

```typescript
import { AiErrorData } from '@onlyoffice/docspace-api-sdk';

const instance: AiErrorData = {
    field,
    message,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
