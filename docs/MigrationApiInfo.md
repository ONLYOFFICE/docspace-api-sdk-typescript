# MigrationApiInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migratorName** | **string** |  | [optional] [default to undefined]
**operation** | **string** |  | [optional] [default to undefined]
**failedArchives** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**users** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) |  | [optional] [default to undefined]
**withoutEmailUsers** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) |  | [optional] [default to undefined]
**existUsers** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) |  | [optional] [default to undefined]
**groups** | [**Array&lt;MigratingApiGroup&gt;**](MigratingApiGroup.md) |  | [optional] [default to undefined]
**importPersonalFiles** | **boolean** |  | [optional] [default to undefined]
**importSharedFiles** | **boolean** |  | [optional] [default to undefined]
**importSharedFolders** | **boolean** |  | [optional] [default to undefined]
**importCommonFiles** | **boolean** |  | [optional] [default to undefined]
**importProjectFiles** | **boolean** |  | [optional] [default to undefined]
**importGroups** | **boolean** |  | [optional] [default to undefined]
**successedUsers** | **number** |  | [optional] [default to undefined]
**failedUsers** | **number** |  | [optional] [default to undefined]
**files** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { MigrationApiInfo } from '@onlyoffice/docspace-api-sdk';

const instance: MigrationApiInfo = {
    migratorName,
    operation,
    failedArchives,
    users,
    withoutEmailUsers,
    existUsers,
    groups,
    importPersonalFiles,
    importSharedFiles,
    importSharedFolders,
    importCommonFiles,
    importProjectFiles,
    importGroups,
    successedUsers,
    failedUsers,
    files,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
