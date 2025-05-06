# Schedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [optional] [default to undefined]
**storageParams** | **{ [key: string]: string | null; }** |  | [optional] [default to undefined]
**cronParams** | [**CronParams**](CronParams.md) |  | [optional] [default to undefined]
**backupsStored** | **number** |  | [optional] [default to undefined]
**lastBackupTime** | **string** |  | [optional] [default to undefined]
**dump** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Schedule } from '@onlyoffice/docspace-api-typescript';

const instance: Schedule = {
    storageType,
    storageParams,
    cronParams,
    backupsStored,
    lastBackupTime,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
