# AiFileOperationDto

One background file operation of the caller, as it stood when the answer was built.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the operation, the one to pass to `PUT api/2.0/files/fileops/terminate/{id}` to stop it.  Operations belong to the account that started them, so an identifier of somebody else is never listed here. | [default to undefined]
**Operation** | [**AiFileOperationType**](AiFileOperationType.md) | What the operation does with the entries, which also decides what else is reported: only a download fills  `url`, and a deletion leaves `files` and `folders` empty. | [default to undefined]
**progress** | **number** | How far the operation has come, from 0 to 100. Reaching 100 only means it stopped; whether it did what it was  asked for is told by `error`. | [default to undefined]
**error** | **string** | The reason the operation could not finish its work, in the language of the request. Empty when nothing went  wrong, which is the only way to tell a successful operation from a failed one. | [default to undefined]
**processed** | **string** | How many entries the operation has handled so far, written as a decimal number in a string. It counts items,  not percent, and stays behind `progress` on operations that walk into subfolders. | [default to undefined]
**finished** | **boolean** | Whether the operation has stopped running. A finished operation is reported once and then dropped, so the next  read of the operation list no longer contains it. | [default to undefined]
**url** | **string** | The address the packed archive can be downloaded from once a bulk download has finished. Empty for every other  kind of operation. | [optional] [default to undefined]
**files** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The files the operation produced or moved, in the order it wrote them down. Empty while nothing has been  written yet and for a deletion, which reports no entries at all. | [optional] [default to undefined]
**folders** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The folders the operation produced or moved, in the order it wrote them down. Empty while nothing has been  written yet and for a deletion. | [optional] [default to undefined]
**status** | [**AiDistributedTaskStatus**](AiDistributedTaskStatus.md) | The state of the background task behind the operation, which tells a task that was cancelled or that crashed  from one that ran to its end. | [optional] [default to undefined]

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
