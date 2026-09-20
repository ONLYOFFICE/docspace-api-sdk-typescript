# CheckUploadRequest

The names to test against the files the folder already holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filesTitle** | **Array&lt;string&gt;** | The names to test, extensions included, spelled as they would be sent to the upload. Matching ignores case,  and a name repeated in the list is answered once. | [optional] [default to undefined]

## Example

```typescript
import { CheckUploadRequest } from '@onlyoffice/docspace-api-sdk';

const instance: CheckUploadRequest = {
    filesTitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
