# WebSearchApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiWebSearchClear**](#aiwebsearchclear) | **DELETE** /api/2.0/ai/web-search/clear | Clear|
|[**aiWebSearchConfigure**](#aiwebsearchconfigure) | **PUT** /api/2.0/ai/web-search/configure | Configure|
|[**aiWebSearchGetActiveConfig**](#aiwebsearchgetactiveconfig) | **GET** /api/2.0/ai/web-search/get-active-config | Get active config|
|[**aiWebSearchIsConfigured**](#aiwebsearchisconfigured) | **GET** /api/2.0/ai/web-search/is-configured | Is configured|
|[**aiWebSearchSetActiveConfig**](#aiwebsearchsetactiveconfig) | **PUT** /api/2.0/ai/web-search/set-active-config | Set active config|
|[**aiWebSearchTestConnection**](#aiwebsearchtestconnection) | **POST** /api/2.0/ai/web-search/test-connection | Test connection|

# **aiWebSearchClear**
> AiSuccessResponse aiWebSearchClear(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiWebSearchClear(
    body
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

# **aiWebSearchConfigure**
> AiWebSearchMutationResult aiWebSearchConfigure(aiWebSearchConfigureRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiWebSearchConfigureRequest** | **AiWebSearchConfigureRequest**|  | |


### Return type

**AiWebSearchMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration,
    AiWebSearchConfigureRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let aiWebSearchConfigureRequest: AiWebSearchConfigureRequest; //

const { status, data } = await apiInstance.aiWebSearchConfigure(
    aiWebSearchConfigureRequest
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

# **aiWebSearchGetActiveConfig**
> AiWebSearchConfig aiWebSearchGetActiveConfig()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**AiWebSearchConfig**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiWebSearchGetActiveConfig(
    entityId
);
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

# **aiWebSearchIsConfigured**
> boolean aiWebSearchIsConfigured()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiWebSearchIsConfigured(
    entityId
);
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

# **aiWebSearchSetActiveConfig**
> AiSuccessResponse aiWebSearchSetActiveConfig(aiWebSearchConfigureRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiWebSearchConfigureRequest** | **AiWebSearchConfigureRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration,
    AiWebSearchConfigureRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let aiWebSearchConfigureRequest: AiWebSearchConfigureRequest; //

const { status, data } = await apiInstance.aiWebSearchSetActiveConfig(
    aiWebSearchConfigureRequest
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

# **aiWebSearchTestConnection**
> AiProfilesTestConnection200Response aiWebSearchTestConnection(aiWebSearchConfig)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiWebSearchConfig** | **AiWebSearchConfig**|  | |


### Return type

**AiProfilesTestConnection200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    AIWebSearchApi,
    Configuration,
    AiWebSearchConfig
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIWebSearchApi(configuration);

let aiWebSearchConfig: AiWebSearchConfig; //

const { status, data } = await apiInstance.aiWebSearchTestConnection(
    aiWebSearchConfig
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

