# SettingsStorageApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllBackupStorages**](#getallbackupstorages) | **GET** /api/2.0/settings/storage/backup | Get the backup storages|
|[**getAllCdnStorages**](#getallcdnstorages) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages|
|[**getAllStorages**](#getallstorages) | **GET** /api/2.0/settings/storage | Get storages|
|[**getAmazonS3Regions**](#getamazons3regions) | **GET** /api/2.0/settings/storage/s3/regions | Get Amazon regions|
|[**getStorageProgress**](#getstorageprogress) | **GET** /api/2.0/settings/storage/progress | Get the storage progress|
|[**resetCdnToDefault**](#resetcdntodefault) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings|
|[**resetStorageToDefault**](#resetstoragetodefault) | **DELETE** /api/2.0/settings/storage | Reset the storage settings|
|[**updateCdn**](#updatecdn) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage|
|[**updateStorage**](#updatestorage) | **PUT** /api/2.0/settings/storage | Update a storage|

# **getAllBackupStorages**
> StorageArrayWrapper getAllBackupStorages()

Returns a list of all the backup storages.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

let dump: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllBackupStorages(
    dump
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dump** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**StorageArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of the backup storages with the following parameters |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllCdnStorages**
> StorageArrayWrapper getAllCdnStorages()

Returns a list of all the CDN storages.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.getAllCdnStorages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StorageArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of the CDN storages with the following parameters |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllStorages**
> StorageArrayWrapper getAllStorages()

Returns a list of all the portal storages.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.getAllStorages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StorageArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of storages with the following parameters |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAmazonS3Regions**
> ObjectWrapper getAmazonS3Regions()

Returns a list of all Amazon regions.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.getAmazonS3Regions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of the Amazon regions |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStorageProgress**
> DoubleWrapper getStorageProgress()

Returns the storage progress.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.getStorageProgress();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DoubleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage progress |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetCdnToDefault**
> resetCdnToDefault()

Resets the CDN storage settings to the default parameters.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.resetCdnToDefault();
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

# **resetStorageToDefault**
> resetStorageToDefault()

Resets the storage settings to the default parameters.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

const { status, data } = await apiInstance.resetStorageToDefault();
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

# **updateCdn**
> CdnStorageSettingsWrapper updateCdn()

Updates the CDN storage with the parameters specified in the request.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration,
    StorageRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

let storageRequestsDto: StorageRequestsDto; // (optional)

const { status, data } = await apiInstance.updateCdn(
    storageRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageRequestsDto** | **StorageRequestsDto**|  | |


### Return type

**CdnStorageSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated CDN storage |  -  |
|**400** | Module |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateStorage**
> StorageSettingsWrapper updateStorage()

Updates a storage with the parameters specified in the request.

### Example

```typescript
import {
    SettingsStorageApi,
    Configuration,
    StorageRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsStorageApi(configuration);

let storageRequestsDto: StorageRequestsDto; // (optional)

const { status, data } = await apiInstance.updateStorage(
    storageRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageRequestsDto** | **StorageRequestsDto**|  | |


### Return type

**StorageSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated storage settings |  -  |
|**400** | Module |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

