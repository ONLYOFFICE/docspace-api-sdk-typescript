# AiFileOperationDto

The file operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The file operation ID. | [default to undefined]
**Operation** | [**AiFileOperationType**](AiFileOperationType.md) | The file operation type. | [default to undefined]
**progress** | **number** | The file operation progress in percentage. | [default to undefined]
**error** | **string** | The file operation error message. | [default to undefined]
**processed** | **string** | The file operation processing status. | [default to undefined]
**finished** | **boolean** | Specifies if the file operation is finished or not. | [default to undefined]
**url** | **string** | The file operation URL. | [optional] [default to undefined]
**files** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The list of files of the file operation. | [optional] [default to undefined]
**folders** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The list of folders of the file operation. | [optional] [default to undefined]
**status** | [**AiDistributedTaskStatus**](AiDistributedTaskStatus.md) | The status of the distributed task related to the file operation. | [optional] [default to undefined]

## Example

```typescript
import { AiFileOperationDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiFileOperationDto = {
    id,
    Operation,
    progress,
    error,
    processed,
    finished,
    url,
    files,
    folders,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
