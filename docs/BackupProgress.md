# BackupProgress

The backup progress parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isCompleted** | **boolean** | Specifies if the backup is completed or not. | [optional] [default to undefined]
**progress** | **number** | The backup progress in percentage. | [optional] [default to undefined]
**error** | **string** | The backup error message. | [optional] [default to undefined]
**warning** | **string** | The backup warning message. | [optional] [default to undefined]
**link** | **string** | The backup link. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**backupProgressEnum** | [**BackupProgressEnum**](BackupProgressEnum.md) | The backup progress type. | [optional] [default to undefined]
**status** | [**DistributedTaskStatus**](DistributedTaskStatus.md) | The backup progress status. | [optional] [default to undefined]
**taskId** | **string** | The task ID. | [optional] [default to undefined]

## Example

```typescript
import { BackupProgress } from '@onlyoffice/docspace-api-sdk';

const instance: BackupProgress = {
    isCompleted,
    progress,
    error,
    warning,
    link,
    tenantId,
    backupProgressEnum,
    status,
    taskId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
