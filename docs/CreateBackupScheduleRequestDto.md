# CreateBackupScheduleRequestDto

The request parameters for setting the backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) | The storage the scheduled archives are written to. It defaults to `Documents`, and it decides which  keys `storageParams` has to carry. | [optional] [default to undefined]
**storageParams** | [**Array&lt;ItemKeyValuePairObjectObject&gt;**](ItemKeyValuePairObjectObject.md) | The settings of the chosen storage, as an array of key and value pairs. `Documents` and  `ThridpartyDocuments` need `folderId`, `Local` needs `filePath`, `ThirdPartyConsumer` needs `module`  plus the settings of that consumer, and `DataStore` needs none. | [optional] [default to undefined]
**backupsStored** | **number** | The number of scheduled copies to keep, from 1 to 30. It defaults to 1, and only the copies this  schedule creates are counted and removed - archives started by hand are left alone. | [optional] [default to undefined]
**cronParams** | [**BackupCronRequest**](BackupCronRequest.md) | When the backup runs. It is required: a request without it fails rather than falling back to a  default. | [optional] [default to undefined]
**dump** | **boolean** | Schedules a backup of the whole server rather than of this one portal. It requires the space access  permission and works on a standalone installation only. | [optional] [default to undefined]

## Example

```typescript
import { CreateBackupScheduleRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateBackupScheduleRequestDto = {
    storageType,
    storageParams,
    backupsStored,
    cronParams,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
