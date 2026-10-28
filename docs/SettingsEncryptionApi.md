# EncryptionApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getStorageEncryptionProgress**](#getstorageencryptionprogress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress|
|[**getStorageEncryptionSettings**](#getstorageencryptionsettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings|
|[**startStorageEncryption**](#startstorageencryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption|

# **getStorageEncryptionProgress**
> DoubleNullableWrapper getStorageEncryptionProgress()

Returns how far the running encryption or decryption of the installation storage has got, as a percentage from  0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption  or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in  flight and no recent result is remembered: the value of a finished run is kept for one minute after it  completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the  build does not offer storage encryption at all, and on an installation that is not a server one the call is  refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings  permission: any authenticated member of the portal may read the progress, which is intentional, because the  portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and  the call is safe to repeat.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-progress/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DoubleNullableWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

const { status, data } = await apiInstance.getStorageEncryptionProgress();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encryption or decryption progress as a percentage, or empty when no run is in flight |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**415** | Storage encryption is not available on this installation |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStorageEncryptionSettings**
> EncryptionSettingsWrapper getStorageEncryptionSettings()

Returns the encryption state of the installation storage: the status, which is one of decrypted, encryption  started, encrypted or decryption started, and the flag saying whether users are mailed when an encryption run  begins. The encryption password is never returned. The caller is expected to have the permission to edit portal settings, which in practice means  the portal owner or a DocSpace admin, on a server installation with an unrestricted access space; on any other  installation, and whenever the check fails, the operation answers with an empty body instead of an error. An  empty answer is therefore not proof that encryption is off, only that the settings cannot be read in this  context. Nothing is written and the call is safe to repeat. Use `GET api/2.0/settings/encryption/progress` to  follow a run that is in flight, and `POST api/2.0/settings/encryption/start` to encrypt or decrypt the  storage.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-storage-encryption-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**EncryptionSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

const { status, data } = await apiInstance.getStorageEncryptionSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The encryption status and the notify-users flag; empty on a custom-mode installation, or when the caller has no portal-settings right, the installation hides storage encryption or does not grant unrestricted space access, or the settings cannot be read |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startStorageEncryption**
> BooleanWrapper startStorageEncryption()

Queues encryption of everything the installation keeps in its local storage, or decryption of it when the data  is already encrypted: the saved encryption state decides the direction, so the same call encrypts a decrypted  installation and decrypts an encrypted one. It covers the whole server, not one portal, and only a server  installation with the feature switched on can run it, with neither the portal storage nor the CDN pointing at  a third-party provider: reset those first with `DELETE api/2.0/settings/storage` and  `DELETE api/2.0/settings/storage/cdn`. No backup may be running, and the backup schedules of all portals are  dropped as part of starting. The caller needs the permission to edit portal settings, that is the portal owner  or a DocSpace admin, and an unrestricted access space. This is a long, disruptive operation: every portal is  put into the encryption state and stays unavailable until it ends, so do not repeat the call while it runs,  and follow it with `GET api/2.0/settings/encryption/progress` instead. The password is generated on the server  and never returned by the API. Pass `notifyUsers=true` to mail every user before the portals go down. The  response is true once the job is queued, and false where encryption is switched off, nothing being started  then.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-storage-encryption/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageEncryptionRequestDto** | **StorageEncryptionRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsEncryptionApi,
    Configuration,
    StorageEncryptionRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsEncryptionApi(configuration);

let storageEncryptionRequestDto: StorageEncryptionRequestDto; // (optional)

const { status, data } = await apiInstance.startStorageEncryption(
    storageEncryptionRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | True when the encryption job has been queued; false in a build where storage encryption is switched off |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal pricing plan does not include storage encryption |  -  |
|**403** | The caller may not edit portal settings, or this installation does not allow storage encryption |  -  |
|**415** | Storage encryption is not available on this installation, or the storage or the CDN of the current portal is a third-party provider |  -  |
|**500** | A backup of one of the portals is still running |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

