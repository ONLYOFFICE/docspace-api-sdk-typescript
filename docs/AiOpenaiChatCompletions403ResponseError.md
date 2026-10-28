# AiOpenaiChatCompletions403ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Human-readable description of the failure. | [default to undefined]
**type** | **string** | OpenAI error class, for example `invalid_request_error`. | [default to undefined]
**code** | **string** | Machine-readable code, when the provider supplies one. | [optional] [default to undefined]
**param** | **string** | The request parameter at fault, when the failure names one. | [optional] [default to undefined]

## Example

```typescript
import { AiOpenaiChatCompletions403ResponseError } from '@onlyoffice/docspace-api-sdk';

const instance: AiOpenaiChatCompletions403ResponseError = {
    message,
    type,
    code,
    param,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
