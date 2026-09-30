# BackupDto

The request parameters for starting a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) | The storage the archive is written to. It defaults to `Documents`, and it decides which keys  `storageParams` has to carry. | [optional] [default to undefined]
**storageParams** | [**Array&lt;ItemKeyValuePairObjectObject&gt;**](ItemKeyValuePairObjectObject.md) | The settings of the chosen storage, as an array of key and value pairs. `Documents` needs an integer  `folderId`, `ThridpartyDocuments` a provider-specific non-integer `folderId`, `Local` a `filePath`,  `ThirdPartyConsumer` a `module` plus the settings of that consumer, and `DataStore` none. The  `subdir` key is added by the operation itself and must not be sent. | [optional] [default to undefined]
**dump** | **boolean** | Backs up the whole server rather than this one portal. It requires the space access permission and  works on a standalone installation only. | [optional] [default to undefined]

## Example

```typescript
import { BackupDto } from '@onlyoffice/docspace-api-sdk';

const instance: BackupDto = {
    storageType,
    storageParams,
    dump,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
