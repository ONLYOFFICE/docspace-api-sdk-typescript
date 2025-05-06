# FileOperationDto

The file operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The file operation ID. | [optional] [default to undefined]
**Operation** | [**FileOperationType**](FileOperationType.md) |  | [optional] [default to undefined]
**progress** | **number** | The file operation progress in percentage. | [optional] [default to undefined]
**error** | **string** | The file operation error message. | [optional] [default to undefined]
**processed** | **string** | The file operation processing status. | [optional] [default to undefined]
**finished** | **boolean** | Specifies if the file operation is finished or not. | [optional] [default to undefined]
**url** | **string** | The file operation URL. | [optional] [default to undefined]
**files** | [**Array&lt;FileEntryDto&gt;**](FileEntryDto.md) | The list of files of the file operation. | [optional] [default to undefined]
**folders** | [**Array&lt;FileEntryDto&gt;**](FileEntryDto.md) | The list of folders of the file operation. | [optional] [default to undefined]

## Example

```typescript
import { FileOperationDto } from '@onlyoffice/docspace-api-typescript';

const instance: FileOperationDto = {
    id,
    Operation,
    progress,
    error,
    processed,
    finished,
    url,
    files,
    folders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
