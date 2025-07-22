# BackupScheduleDto

The backup schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [optional] [default to undefined]
**storageParams** | [**Array&lt;ItemKeyValuePairObjectObject&gt;**](ItemKeyValuePairObjectObject.md) | The backup storage parameters. | [optional] [default to undefined]
**backupsStored** | **number** | The maximum number of the stored backup copies. | [optional] [default to undefined]
**cronParams** | [**Cron**](Cron.md) |  | [optional] [default to undefined]
**dump** | **boolean** | Specifies if a dump will be created or not. | [optional] [default to undefined]

## Example

```typescript
import { BackupScheduleDto } from '@onlyoffice/docspace-api-sdk';

const instance: BackupScheduleDto = {
    storageType,
    storageParams,
    backupsStored,
    cronParams,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
