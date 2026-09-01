# ErrorApiResponseError

What went wrong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The human-readable error message. | [optional] [default to undefined]
**type** | **string** | The .NET type of the underlying exception. Only sent when stack traces are enabled. | [optional] [default to undefined]
**stack** | **string** | The stack trace of the underlying exception. Only sent when stack traces are enabled. | [optional] [default to undefined]
**hresult** | **number** | The HRESULT of the underlying exception. Only sent when stack traces are enabled. | [optional] [default to undefined]

## Example

```typescript
import { ErrorApiResponseError } from '@onlyoffice/docspace-api-sdk';

const instance: ErrorApiResponseError = {
    message,
    type,
    stack,
    hresult,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
