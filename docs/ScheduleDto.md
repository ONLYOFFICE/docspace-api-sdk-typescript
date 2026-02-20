# ScheduleDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [default to undefined]
**storageParams** | **{ [key: string]: string | null; }** |  | [default to undefined]
**cronParams** | [**CronParams**](CronParams.md) |  | [default to undefined]
**backupsStored** | **number** |  | [optional] [default to undefined]
**lastBackupTime** | **string** |  | [default to undefined]
**dump** | **boolean** |  | [default to undefined]

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
