# AiMetaFillRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The entry\'s table. Only `file` for now: a folder or a room answers 400. | [default to undefined]
**id** | [**AiMetaGenerateRequestId**](AiMetaGenerateRequestId.md) |  | [default to undefined]
**prompt** | **string** | What to pay attention to; a hint for the model. | [optional] [default to undefined]
**overwrite** | **boolean** | Also replace the fields that already carry a value. Default false. | [optional] [default to undefined]
**dryRun** | **boolean** | Resolve the values but write nothing; the caller writes what the user confirms. Default true: a write needs an explicit false. | [optional] [default to undefined]

## Example

```typescript
import { AiMetaFillRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetaFillRequest = {
    kind,
    id,
    prompt,
    overwrite,
    dryRun,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
