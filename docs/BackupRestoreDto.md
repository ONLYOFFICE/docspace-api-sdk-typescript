# BackupRestoreDto

The backup restoring parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backupId** | **string** | The backup ID. | [default to undefined]
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [optional] [default to undefined]
**storageParams** | [**Array&lt;ItemKeyValuePairObjectObject&gt;**](ItemKeyValuePairObjectObject.md) | The backup storage parameters. | [optional] [default to undefined]
**notify** | **boolean** | Notifies users about the portal restoring process or not. | [optional] [default to undefined]
**dump** | **boolean** | Specifies if a dump will be created or not. | [optional] [default to undefined]

## Example

```typescript
import { BackupRestoreDto } from '@onlyoffice/docspace-api-sdk';

const instance: BackupRestoreDto = {
    backupId,
    storageType,
    storageParams,
    notify,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
