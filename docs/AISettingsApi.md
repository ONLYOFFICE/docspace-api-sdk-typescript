# AISettingsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiSettingsGet**](#aisettingsget) | **GET** /api/2.0/ai/config | Get AI settings|
|[**aiSettingsGetUser**](#aisettingsgetuser) | **GET** /api/2.0/ai/config/user | Get user AI settings|
|[**aiSettingsGetVectorization**](#aisettingsgetvectorization) | **GET** /api/2.0/ai/config/vectorization | Get vectorization settings|
|[**aiSettingsSetUser**](#aisettingssetuser) | **PUT** /api/2.0/ai/config/user | Update user AI settings|
|[**aiSettingsSetVectorization**](#aisettingssetvectorization) | **PUT** /api/2.0/ai/config/vectorization | Update vectorization settings|

# **aiSettingsGet**
> AiAiSettingsWrapper aiSettingsGet()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiAiSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGet();
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

# **aiSettingsGetUser**
> AiAiUserSettingsWrapper aiSettingsGetUser()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiAiUserSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGetUser();
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

# **aiSettingsGetVectorization**
> AiVectorizationSettingsWrapper aiSettingsGetVectorization()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiVectorizationSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGetVectorization();
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

# **aiSettingsSetUser**
> AiAiUserSettingsWrapper aiSettingsSetUser(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**AiAiUserSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.aiSettingsSetUser(
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

# **aiSettingsSetVectorization**
> AiVectorizationSettingsWrapper aiSettingsSetVectorization(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**AiVectorizationSettingsWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.aiSettingsSetVectorization(
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

