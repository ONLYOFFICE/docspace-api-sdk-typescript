# WebSearchApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiWebSearchClear**](#newaiwebsearchclear) | **DELETE** /api/2.0/ai/web-search/clear | Clear|
|[**newAiWebSearchConfigure**](#newaiwebsearchconfigure) | **PUT** /api/2.0/ai/web-search/configure | Configure|
|[**newAiWebSearchGetActiveConfig**](#newaiwebsearchgetactiveconfig) | **GET** /api/2.0/ai/web-search/get-active-config | Get active config|
|[**newAiWebSearchIsConfigured**](#newaiwebsearchisconfigured) | **GET** /api/2.0/ai/web-search/is-configured | Is configured|
|[**newAiWebSearchSetActiveConfig**](#newaiwebsearchsetactiveconfig) | **PUT** /api/2.0/ai/web-search/set-active-config | Set active config|
|[**newAiWebSearchTestConnection**](#newaiwebsearchtestconnection) | **POST** /api/2.0/ai/web-search/test-connection | Test connection|

# **newAiWebSearchClear**
> NewAiSuccessResponse newAiWebSearchClear(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-clear/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiWebSearchClear(
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

# **newAiWebSearchConfigure**
> NewAiWebSearchMutationResult newAiWebSearchConfigure(newAiWebSearchConfigureRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-configure/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiWebSearchConfigureRequest** | **NewAiWebSearchConfigureRequest**|  | |


### Return type

**NewAiWebSearchMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIWebSearchApi,
    Configuration,
    NewAiWebSearchConfigureRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest; //

const { status, data } = await apiInstance.newAiWebSearchConfigure(
    newAiWebSearchConfigureRequest
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

# **newAiWebSearchGetActiveConfig**
> NewAiWebSearchConfig newAiWebSearchGetActiveConfig()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-get-active-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**NewAiWebSearchConfig**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiWebSearchGetActiveConfig(
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

# **newAiWebSearchIsConfigured**
> boolean newAiWebSearchIsConfigured()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-is-configured/).

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
    NewAIWebSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiWebSearchIsConfigured(
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

# **newAiWebSearchSetActiveConfig**
> NewAiSuccessResponse newAiWebSearchSetActiveConfig(newAiWebSearchConfigureRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-set-active-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiWebSearchConfigureRequest** | **NewAiWebSearchConfigureRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIWebSearchApi,
    Configuration,
    NewAiWebSearchConfigureRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let newAiWebSearchConfigureRequest: NewAiWebSearchConfigureRequest; //

const { status, data } = await apiInstance.newAiWebSearchSetActiveConfig(
    newAiWebSearchConfigureRequest
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

# **newAiWebSearchTestConnection**
> NewAiProfilesTestConnection200Response newAiWebSearchTestConnection(newAiWebSearchConfig)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-web-search-test-connection/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiWebSearchConfig** | **NewAiWebSearchConfig**|  | |


### Return type

**NewAiProfilesTestConnection200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIWebSearchApi,
    Configuration,
    NewAiWebSearchConfig
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIWebSearchApi(configuration);

let newAiWebSearchConfig: NewAiWebSearchConfig; //

const { status, data } = await apiInstance.newAiWebSearchTestConnection(
    newAiWebSearchConfig
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

