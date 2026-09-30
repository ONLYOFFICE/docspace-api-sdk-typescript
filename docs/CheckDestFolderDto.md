# CheckDestFolderDto

The verdict on placing the requested files in the destination folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CheckDestFolderResult**](CheckDestFolderResult.md) | Whether the destination folder accepts all of the requested files, only some of them or none at all. | [optional] [default to undefined]
**files** | [**Array&lt;FileEntryBaseDto&gt;**](FileEntryBaseDto.md) | The requested files the destination accepts, each with the information it was listed under. The files it  rejects are absent, so an empty list means that none of them is accepted. | [optional] [default to undefined]

## Example

```typescript
import { CheckDestFolderDto } from '@onlyoffice/docspace-api-sdk';

const instance: CheckDestFolderDto = {
    result,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
