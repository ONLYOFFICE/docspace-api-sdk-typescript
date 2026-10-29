# AiMetaFill200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dryRun** | **boolean** | Whether the values were only proposed (`true`) or written as well. | [default to undefined]
**metadata** | [**AiEntryMetadata**](AiEntryMetadata.md) | The entry\'s metadata after the write (or as it stands, with `dryRun`), as `GET api/2.0/files/metadata/{kind}/{id}` returns it. | [default to undefined]
**filled** | [**Array&lt;AiMetaFill200ResponseFilledInner&gt;**](AiMetaFill200ResponseFilledInner.md) | The values written, or proposed with `dryRun`: a typed value for a template field, a string for a custom field. | [default to undefined]
**unresolved** | [**Array&lt;AiMetaFill200ResponseUnresolvedInner&gt;**](AiMetaFill200ResponseUnresolvedInner.md) | The fields left as they were, with the reason for each. | [default to undefined]
**sources** | [**Array&lt;AiMetaFill200ResponseSourcesInner&gt;**](AiMetaFill200ResponseSourcesInner.md) | The documents the values were read from. | [default to undefined]
**skipped** | [**Array&lt;AiMetaGenerate200ResponseSkippedInner&gt;**](AiMetaGenerate200ResponseSkippedInner.md) | The entries that were left out, with the reason for each. | [default to undefined]

## Example

```typescript
import { AiMetaFill200Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetaFill200Response = {
    dryRun,
    metadata,
    filled,
    unresolved,
    sources,
    skipped,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
