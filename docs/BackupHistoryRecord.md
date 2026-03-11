# BackupHistoryRecord

The backup history parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The backup ID. | [default to undefined]
**fileName** | **string** | The backup file name. | [default to undefined]
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [default to undefined]
**createdOn** | **string** | The backup creation date. | [default to undefined]
**expiresOn** | **string** | The backup expiration date. | [default to undefined]

## Example

```typescript
import { BackupHistoryRecord } from '@onlyoffice/docspace-api-sdk';

const instance: BackupHistoryRecord = {
    id,
    fileName,
    storageType,
    createdOn,
    expiresOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
