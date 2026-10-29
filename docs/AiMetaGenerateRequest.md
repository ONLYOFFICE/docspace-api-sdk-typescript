# AiMetaGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The entry\'s table. Only `file` for now: a folder or a room answers 400. | [default to undefined]
**id** | [**AiMetaGenerateRequestId**](AiMetaGenerateRequestId.md) |  | [default to undefined]
**prompt** | **string** | What kind of metadata fields the caller is interested in; a hint for the model. | [optional] [default to undefined]

## Example

```typescript
import { AiMetaGenerateRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetaGenerateRequest = {
    kind,
    id,
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
