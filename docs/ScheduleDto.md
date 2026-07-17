# ScheduleDto

The backup schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [default to undefined]
**storageParams** | **{ [key: string]: string | null; }** | The backup storage parameters. | [default to undefined]
**cronParams** | [**CronParams**](CronParams.md) |  | [default to undefined]
**backupsStored** | **number** | The maximum number of the stored backup copies. | [optional] [default to undefined]
**lastBackupTime** | **string** | The date and time when the last backup was reated. | [default to undefined]
**dump** | **boolean** | Specifies if a dump will be created or not. | [default to undefined]

## Example

```typescript
import { ScheduleDto } from '@onlyoffice/docspace-api-sdk';

const instance: ScheduleDto = {
    storageType,
    storageParams,
    cronParams,
    backupsStored,
    lastBackupTime,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
