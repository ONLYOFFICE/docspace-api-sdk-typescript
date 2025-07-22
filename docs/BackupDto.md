# BackupDto

The backup parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageType** | [**BackupStorageType**](BackupStorageType.md) |  | [optional] [default to undefined]
**storageParams** | [**Array&lt;ItemKeyValuePairObjectObject&gt;**](ItemKeyValuePairObjectObject.md) | The backup storage parameters. | [optional] [default to undefined]
**dump** | **boolean** | Specifies if a dump will be created or not. | [optional] [default to undefined]

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
