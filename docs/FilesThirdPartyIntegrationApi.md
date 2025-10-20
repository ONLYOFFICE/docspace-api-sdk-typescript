# ThirdPartyIntegrationApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteThirdParty**](#deletethirdparty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | |
|[**getAllProviders**](#getallproviders) | **GET** /api/2.0/files/thirdparty/providers | |
|[**getBackupThirdPartyAccount**](#getbackupthirdpartyaccount) | **GET** /api/2.0/files/thirdparty/backup | |
|[**getCapabilities**](#getcapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | |
|[**getCommonThirdPartyFolders**](#getcommonthirdpartyfolders) | **GET** /api/2.0/files/thirdparty/common | |
|[**getThirdPartyAccounts**](#getthirdpartyaccounts) | **GET** /api/2.0/files/thirdparty | |
|[**saveThirdParty**](#savethirdparty) | **POST** /api/2.0/files/thirdparty | |
|[**saveThirdPartyBackup**](#savethirdpartybackup) | **POST** /api/2.0/files/thirdparty/backup | |

# **deleteThirdParty**
> StringWrapper deleteThirdParty()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**number**] | The provider ID. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

let providerId: number; //The provider ID. (default to undefined)

const { status, data } = await apiInstance.deleteThirdParty(
    providerId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Third-party folder ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllProviders**
> ProviderArrayWrapper getAllProviders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-providers/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ProviderArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

const { status, data } = await apiInstance.getAllProviders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of provider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBackupThirdPartyAccount**
> FolderStringWrapper getBackupThirdPartyAccount()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-third-party-account/).

### Parameters
This endpoint does not have any parameters.


### Return type

**FolderStringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

const { status, data } = await apiInstance.getBackupThirdPartyAccount();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder for the third-party account backup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCapabilities**
> ArrayArrayWrapper getCapabilities()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-capabilities/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ArrayArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

const { status, data } = await apiInstance.getCapabilities();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of provider keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCommonThirdPartyFolders**
> FolderStringArrayWrapper getCommonThirdPartyFolders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-common-third-party-folders/).

### Parameters
This endpoint does not have any parameters.


### Return type

**FolderStringArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

const { status, data } = await apiInstance.getCommonThirdPartyFolders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of common third-party folderst |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getThirdPartyAccounts**
> ThirdPartyParamsArrayWrapper getThirdPartyAccounts()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-accounts/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ThirdPartyParamsArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

const { status, data } = await apiInstance.getThirdPartyAccounts();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of connected providers information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveThirdParty**
> FolderStringWrapper saveThirdParty()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyRequestDto** | **ThirdPartyRequestDto**|  | |


### Return type

**FolderStringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration,
    ThirdPartyRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

let thirdPartyRequestDto: ThirdPartyRequestDto; // (optional)

const { status, data } = await apiInstance.saveThirdParty(
    thirdPartyRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Connected provider folder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveThirdPartyBackup**
> FolderStringWrapper saveThirdPartyBackup()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-third-party-backup/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyBackupRequestDto** | **ThirdPartyBackupRequestDto**|  | |


### Return type

**FolderStringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesThirdPartyIntegrationApi,
    Configuration,
    ThirdPartyBackupRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesThirdPartyIntegrationApi(configuration);

let thirdPartyBackupRequestDto: ThirdPartyBackupRequestDto; // (optional)

const { status, data } = await apiInstance.saveThirdPartyBackup(
    thirdPartyBackupRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder for the third-party account backup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

