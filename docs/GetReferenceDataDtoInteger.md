# GetReferenceDataDtoInteger

The request parameters for getting reference data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileKey** | **string** | The unique document identifier used by the service to get a link to the file. | [default to undefined]
**instanceId** | **string** | The unique system identifier. | [default to undefined]
**sourceFileId** | **number** | The source file ID. | [optional] [default to undefined]
**path** | **string** | The file name or relative path for the formula editor. | [optional] [default to undefined]
**link** | **string** | The file link. | [optional] [default to undefined]

## Example

```typescript
import { GetReferenceDataDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: GetReferenceDataDtoInteger = {
    fileKey,
    instanceId,
    sourceFileId,
    path,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
