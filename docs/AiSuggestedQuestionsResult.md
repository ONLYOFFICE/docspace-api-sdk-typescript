# AiSuggestedQuestionsResult

The starter questions of an attached form, and whether they are ready.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | `ready` - the questions are there; `pending` - they are being generated and arrive over the socket, ask again later; `unavailable` - the attachment is not a form that can have any. | [default to undefined]
**questions** | [**Array&lt;AiSuggestedQuestion&gt;**](AiSuggestedQuestion.md) | The questions; empty unless `status` is `ready`. | [default to undefined]

## Example

```typescript
import { AiSuggestedQuestionsResult } from '@onlyoffice/docspace-api-sdk';

const instance: AiSuggestedQuestionsResult = {
    status,
    questions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
