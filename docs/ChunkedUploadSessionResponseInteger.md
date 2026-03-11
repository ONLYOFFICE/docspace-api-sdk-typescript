# ChunkedUploadSessionResponseInteger

Represents the response returned from a chunked upload session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the entity. | [optional] [default to undefined]
**path** | **Array&lt;number&gt;** | Represents the hierarchical path of folders associated with a chunked upload session. | [optional] [default to undefined]
**created** | **string** | The timestamp indicating when the chunked upload session was created. | [optional] [default to undefined]
**expired** | **string** | The date and time when the chunked upload session is set to expire. | [optional] [default to undefined]
**location** | **string** | Represents the URI or path of the chunked upload session\&#39;s current location. | [optional] [default to undefined]
**bytes_total** | **number** | The total size, in bytes, of the file being uploaded in the chunked upload session. | [optional] [default to undefined]

## Example

```typescript
import { ChunkedUploadSessionResponseInteger } from '@onlyoffice/docspace-api-sdk';

const instance: ChunkedUploadSessionResponseInteger = {
    id,
    path,
    created,
    expired,
    location,
    bytes_total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
