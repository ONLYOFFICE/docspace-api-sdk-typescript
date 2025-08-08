# BackupApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBackupSchedule**](#createbackupschedule) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule|
|[**deleteBackup**](#deletebackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Delete the backup|
|[**deleteBackupHistory**](#deletebackuphistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history|
|[**deleteBackupSchedule**](#deletebackupschedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule|
|[**getBackupHistory**](#getbackuphistory) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history|
|[**getBackupProgress**](#getbackupprogress) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress|
|[**getBackupSchedule**](#getbackupschedule) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule|
|[**getRestoreProgress**](#getrestoreprogress) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress|
|[**startBackup**](#startbackup) | **POST** /api/2.0/backup/startbackup | Start the backup|
|[**startBackupRestore**](#startbackuprestore) | **POST** /api/2.0/backup/startrestore | Start the restoring process|

# **createBackupSchedule**
> BooleanWrapper createBackupSchedule()

Creates the backup schedule of the current portal with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-backup-schedule/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backupScheduleDto** | **BackupScheduleDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration,
    BackupScheduleDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let backupScheduleDto: BackupScheduleDto; // (optional)

const { status, data } = await apiInstance.createBackupSchedule(
    backupScheduleDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**400** | BackupStored must be 1 - 30 or backup can not start as dump |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBackup**
> BooleanWrapper deleteBackup()

Deletes the backup with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The backup ID. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let id: string; //The backup ID. (default to undefined)

const { status, data } = await apiInstance.deleteBackup(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBackupHistory**
> BooleanWrapper deleteBackupHistory()

Deletes the backup history from the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteBackupHistory(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBackupSchedule**
> BooleanWrapper deleteBackupSchedule()

Deletes the backup schedule of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-schedule/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteBackupSchedule(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBackupHistory**
> BackupHistoryRecordArrayWrapper getBackupHistory()

Returns the history of the started backup.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**BackupHistoryRecordArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getBackupHistory(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of backup history records |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBackupProgress**
> BackupProgressWrapper getBackupProgress()

Returns the progress of the started backup.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-progress/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**BackupProgressWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getBackupProgress(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup progress: completed or not, progress percentage, error, tenant ID, backup progress item (Backup, Restore, Transfer), link |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBackupSchedule**
> ScheduleWrapper getBackupSchedule()

Returns the backup schedule of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-schedule/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**ScheduleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getBackupSchedule(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup schedule |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRestoreProgress**
> BackupProgressWrapper getRestoreProgress()

Returns the progress of the started restoring process.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restore-progress/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] | Specifies if a dump will be created or not. | (optional) defaults to undefined|


### Return type

**BackupProgressWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    BackupApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let dump: boolean; //Specifies if a dump will be created or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getRestoreProgress(
    dump
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup progress: completed or not, progress percentage, error, tenant ID, backup progress item (Backup, Restore, Transfer), link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startBackup**
> BackupProgressWrapper startBackup()

Starts the backup of the current portal with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backupDto** | **BackupDto**|  | |


### Return type

**BackupProgressWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration,
    BackupDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let backupDto: BackupDto; // (optional)

const { status, data } = await apiInstance.startBackup(
    backupDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup progress: completed or not, progress percentage, error, tenant ID, backup progress item (Backup, Restore, Transfer), link |  -  |
|**400** | Wrong folder type or backup can&#x60;t start as dump |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startBackupRestore**
> BackupProgressWrapper startBackupRestore()

Starts the data restoring process of the current portal with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup-restore/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backupRestoreDto** | **BackupRestoreDto**|  | |


### Return type

**BackupProgressWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    BackupApi,
    Configuration,
    BackupRestoreDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new BackupApi(configuration);

let backupRestoreDto: BackupRestoreDto; // (optional)

const { status, data } = await apiInstance.startBackupRestore(
    backupRestoreDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup progress: completed or not, progress percentage, error, tenant ID, backup progress item (Backup, Restore, Transfer), link |  -  |
|**400** | Backup can not start as dump |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | The required file or folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

