# MigrationApiInfo

The migration API information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migratorName** | **string** | The migrator name. | [optional] [default to undefined]
**operation** | **string** | The migration operation. | [optional] [default to undefined]
**failedArchives** | **Array&lt;string&gt;** | The list of failed archives. | [optional] [default to undefined]
**users** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) | The list of migrating users. | [optional] [default to undefined]
**withoutEmailUsers** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) | The list of migrating users without email. | [optional] [default to undefined]
**existUsers** | [**Array&lt;MigratingApiUser&gt;**](MigratingApiUser.md) | The list of existing migrating users. | [optional] [default to undefined]
**groups** | [**Array&lt;MigratingApiGroup&gt;**](MigratingApiGroup.md) | The list of migrating groups. | [optional] [default to undefined]
**importPersonalFiles** | **boolean** | Specifies whether to import personal files or not. | [optional] [default to undefined]
**importSharedFiles** | **boolean** | Specifies whether to import shared files or not. | [optional] [default to undefined]
**importSharedFolders** | **boolean** | Specifies whether to import shared folders or not. | [optional] [default to undefined]
**importCommonFiles** | **boolean** | Specifies whether to import common files or not. | [optional] [default to undefined]
**importProjectFiles** | **boolean** | Specifies whether to import project files or not. | [optional] [default to undefined]
**importGroups** | **boolean** | Specifies whether to import groups or not. | [optional] [default to undefined]
**successedUsers** | **number** | The number of successfully migrated users. | [optional] [default to undefined]
**failedUsers** | **number** | The number of unsuccessfully migrated users. | [optional] [default to undefined]
**files** | **Array&lt;string&gt;** | The list of migrated files. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | The list of migration errors. | [optional] [default to undefined]

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
