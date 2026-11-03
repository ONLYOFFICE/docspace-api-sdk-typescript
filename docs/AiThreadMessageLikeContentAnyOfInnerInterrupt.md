# AiThreadMessageLikeContentAnyOfInnerInterrupt

A `tool-call` part\'s pending request for human input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Interrupt kind; always `human`. | [default to undefined]
**payload** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { AiThreadMessageLikeContentAnyOfInnerInterrupt } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadMessageLikeContentAnyOfInnerInterrupt = {
    type,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
