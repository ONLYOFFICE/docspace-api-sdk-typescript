# AiMetaGenerate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Array&lt;AiMetaGenerate200ResponseFieldsInner&gt;**](AiMetaGenerate200ResponseFieldsInner.md) | The proposed custom metadata fields with the values the text supports. | [default to undefined]
**sources** | [**Array&lt;AiMetaGenerate200ResponseSourcesInner&gt;**](AiMetaGenerate200ResponseSourcesInner.md) | The documents the proposal was read from. | [default to undefined]
**skipped** | [**Array&lt;AiMetaGenerate200ResponseSkippedInner&gt;**](AiMetaGenerate200ResponseSkippedInner.md) | The entries that were left out, with the reason for each. | [default to undefined]

## Example

```typescript
import { AiMetaGenerate200Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetaGenerate200Response = {
    fields,
    sources,
    skipped,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
