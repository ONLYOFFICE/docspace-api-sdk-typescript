# NewAISettingsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiSettingsGet**](#newaisettingsget) | **GET** /api/2.0/ai/config | Get AI settings|
|[**newAiSettingsGetUser**](#newaisettingsgetuser) | **GET** /api/2.0/ai/config/user | Get user AI settings|
|[**newAiSettingsGetVectorization**](#newaisettingsgetvectorization) | **GET** /api/2.0/ai/config/vectorization | Get vectorization settings|
|[**newAiSettingsSetUser**](#newaisettingssetuser) | **PUT** /api/2.0/ai/config/user | Update user AI settings|
|[**newAiSettingsSetVectorization**](#newaisettingssetvectorization) | **PUT** /api/2.0/ai/config/vectorization | Update vectorization settings|

# **newAiSettingsGet**
> NewAiAiSettingsWrapper newAiSettingsGet()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiAiSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAISettingsApi(configuration);

const { status, data } = await apiInstance.newAiSettingsGet();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiSettingsGetUser**
> NewAiAiUserSettingsWrapper newAiSettingsGetUser()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-user/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiAiUserSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAISettingsApi(configuration);

const { status, data } = await apiInstance.newAiSettingsGetUser();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiSettingsGetVectorization**
> NewAiVectorizationSettingsWrapper newAiSettingsGetVectorization()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-get-vectorization/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiVectorizationSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAISettingsApi(configuration);

const { status, data } = await apiInstance.newAiSettingsGetVectorization();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiSettingsSetUser**
> NewAiAiUserSettingsWrapper newAiSettingsSetUser(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-user/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**NewAiAiUserSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAISettingsApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.newAiSettingsSetUser(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiSettingsSetVectorization**
> NewAiVectorizationSettingsWrapper newAiSettingsSetVectorization(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-settings-set-vectorization/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**NewAiVectorizationSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAISettingsApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.newAiSettingsSetVectorization(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

