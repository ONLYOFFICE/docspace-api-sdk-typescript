# SettingsEncryptionApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getStorageEncryptionProgress**](#getstorageencryptionprogress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress|
|[**getStorageEncryptionSettings**](#getstorageencryptionsettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings|
|[**startStorageEncryption**](#startstorageencryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption process|

# **getStorageEncryptionProgress**
> DoubleWrapper getStorageEncryptionProgress()

Returns the storage encryption progress.

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

const { status, data } = await apiInstance.getStorageEncryptionProgress();
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
|**200** | Storage encryption progress |  -  |
|**401** | Unauthorized |  -  |
|**405** | Method not allowed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStorageEncryptionSettings**
> EncryptionSettingsWrapper getStorageEncryptionSettings()

Returns the storage encryption settings.

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

const { status, data } = await apiInstance.getStorageEncryptionSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**EncryptionSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage encryption settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**405** | Method not allowed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startStorageEncryption**
> BooleanWrapper startStorageEncryption()

Starts the storage encryption process.

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration,
    StorageEncryptionRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

let storageEncryptionRequestsDto: StorageEncryptionRequestsDto; // (optional)

const { status, data } = await apiInstance.startStorageEncryption(
    storageEncryptionRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageEncryptionRequestsDto** | **StorageEncryptionRequestsDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | No permissions to perform this action |  -  |
|**405** | Method not allowed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

