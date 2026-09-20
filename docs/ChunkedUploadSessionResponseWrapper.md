# ChunkedUploadSessionResponseWrapper

The reserved chunked upload wrapped in the envelope the two older session operations answer with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Always true in a body that reaches the caller, because a call that does not succeed answers with an error  status and no body at all. It cannot be used to tell a refusal from a success. | [optional] [default to undefined]
**data** | [**ChunkedUploadSessionResponse**](ChunkedUploadSessionResponse.md) | The reserved upload itself, in the same shape the newer session operations answer with directly. | [optional] [default to undefined]

## Example

```typescript
import { ChunkedUploadSessionResponseWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: ChunkedUploadSessionResponseWrapper = {
    success,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
