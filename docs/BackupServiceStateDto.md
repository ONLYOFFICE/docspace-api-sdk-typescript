# BackupServiceStateDto

Whether the paid backup service is switched on for a portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies whether the paid backup service is switched on for this portal, which is a setting of its  wallet rather than the health of the backup service. While it is true, backups beyond the free  monthly allowance are charged to the wallet. | [optional] [default to undefined]

## Example

```typescript
import { BackupServiceStateDto } from '@onlyoffice/docspace-api-sdk';

const instance: BackupServiceStateDto = {
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
