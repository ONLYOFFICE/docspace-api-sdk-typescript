# MigrationApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancel**](#cancel) | **POST** /api/2.0/migration/cancel | Cancel migration|
|[**clear**](#clear) | **POST** /api/2.0/migration/clear | Clear migration|
|[**finish**](#finish) | **POST** /api/2.0/migration/finish | Finish migration|
|[**list**](#list) | **GET** /api/2.0/migration/list | Get migrations|
|[**logs**](#logs) | **GET** /api/2.0/migration/logs | Get migration logs|
|[**migrate**](#migrate) | **POST** /api/2.0/migration/migrate | Start migration|
|[**status**](#status) | **GET** /api/2.0/migration/status | Get migration status|
|[**uploadAndInit**](#uploadandinit) | **POST** /api/2.0/migration/init/{migratorName} | Upload and initialize migration|

# **cancel**
> cancel()

Cancels the migration.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

const { status, data } = await apiInstance.cancel();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clear**
> clear()

Clears the migration.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

const { status, data } = await apiInstance.clear();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finish**
> finish()

Finishes the migration process.

### Example

```typescript
import {
    MigrationApi,
    Configuration,
    FinishDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

let finishDto: FinishDto; // (optional)

const { status, data } = await apiInstance.finish(
    finishDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **finishDto** | **FinishDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> STRINGArrayWrapper list()

Returns a list of available migrations.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

const { status, data } = await apiInstance.list();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**STRINGArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs**
> logs()

Returns the migration logs.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

const { status, data } = await apiInstance.logs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **migrate**
> migrate()

Starts the migration process.

### Example

```typescript
import {
    MigrationApi,
    Configuration,
    MigrationApiInfo
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

let migrationApiInfo: MigrationApiInfo; // (optional)

const { status, data } = await apiInstance.migrate(
    migrationApiInfo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **migrationApiInfo** | **MigrationApiInfo**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **status**
> MigrationStatusWrapper status()

Returns the migration status.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

const { status, data } = await apiInstance.status();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MigrationStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadAndInit**
> uploadAndInit()

Uploads and initializes a migration with a migrator name specified in the request.

### Example

```typescript
import {
    MigrationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new MigrationApi(configuration);

let migratorName: string; //The migrator name extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.uploadAndInit(
    migratorName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **migratorName** | [**string**] | The migrator name extracted from the route parameters. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

