# NewAIAgentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiAgentsCreate**](#newaiagentscreate) | **POST** /api/2.0/new-ai/agents | Create an agent|
|[**newAiAgentsDelete**](#newaiagentsdelete) | **DELETE** /api/2.0/new-ai/agents/{id} | Delete an agent|
|[**newAiAgentsGet**](#newaiagentsget) | **GET** /api/2.0/new-ai/agents/{id} | Get an agent|
|[**newAiAgentsList**](#newaiagentslist) | **GET** /api/2.0/new-ai/agents | List agents|
|[**newAiAgentsNews**](#newaiagentsnews) | **GET** /api/2.0/new-ai/agents/news | List agent news items|
|[**newAiAgentsResetQuota**](#newaiagentsresetquota) | **PUT** /api/2.0/new-ai/agents/resetquota | Reset agents\' quota|
|[**newAiAgentsUpdate**](#newaiagentsupdate) | **PUT** /api/2.0/new-ai/agents/{id} | Update an agent|
|[**newAiAgentsUpdateQuota**](#newaiagentsupdatequota) | **PUT** /api/2.0/new-ai/agents/agentquota | Update agents\' quota|

# **newAiAgentsCreate**
> NewAiFolderIntegerWrapper newAiAgentsCreate(newAiAgentsCreateRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAgentsCreateRequest** | **NewAiAgentsCreateRequest**|  | |


### Return type

**NewAiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration,
    NewAiAgentsCreateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let newAiAgentsCreateRequest: NewAiAgentsCreateRequest; //

const { status, data } = await apiInstance.newAiAgentsCreate(
    newAiAgentsCreateRequest
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

# **newAiAgentsDelete**
> NewAiFileOperationWrapper newAiAgentsDelete(newAiAgentsDeleteRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAgentsDeleteRequest** | **NewAiAgentsDeleteRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiFileOperationWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration,
    NewAiAgentsDeleteRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let id: string; // (default to undefined)
let newAiAgentsDeleteRequest: NewAiAgentsDeleteRequest; //

const { status, data } = await apiInstance.newAiAgentsDelete(
    id,
    newAiAgentsDeleteRequest
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

# **newAiAgentsGet**
> NewAiFolderIntegerWrapper newAiAgentsGet()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.newAiAgentsGet(
    id
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

# **newAiAgentsList**
> NewAiFolderContentIntegerWrapper newAiAgentsList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-list/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiFolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

const { status, data } = await apiInstance.newAiAgentsList();
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

# **newAiAgentsNews**
> NewAiNewItemsAgentNewItemsArrayWrapper newAiAgentsNews()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-news/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiNewItemsAgentNewItemsArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

const { status, data } = await apiInstance.newAiAgentsNews();
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

# **newAiAgentsResetQuota**
> NewAiFolderIntegerArrayWrapper newAiAgentsResetQuota(newAiAgentsResetQuotaRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-reset-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAgentsResetQuotaRequest** | **NewAiAgentsResetQuotaRequest**|  | |


### Return type

**NewAiFolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration,
    NewAiAgentsResetQuotaRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let newAiAgentsResetQuotaRequest: NewAiAgentsResetQuotaRequest; //

const { status, data } = await apiInstance.newAiAgentsResetQuota(
    newAiAgentsResetQuotaRequest
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

# **newAiAgentsUpdate**
> NewAiFolderIntegerWrapper newAiAgentsUpdate(newAiAgentsUpdateRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAgentsUpdateRequest** | **NewAiAgentsUpdateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration,
    NewAiAgentsUpdateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let id: string; // (default to undefined)
let newAiAgentsUpdateRequest: NewAiAgentsUpdateRequest; //

const { status, data } = await apiInstance.newAiAgentsUpdate(
    id,
    newAiAgentsUpdateRequest
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

# **newAiAgentsUpdateQuota**
> NewAiFolderIntegerArrayWrapper newAiAgentsUpdateQuota(newAiAgentsUpdateQuotaRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-agents-update-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAgentsUpdateQuotaRequest** | **NewAiAgentsUpdateQuotaRequest**|  | |


### Return type

**NewAiFolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAgentsApi,
    Configuration,
    NewAiAgentsUpdateQuotaRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAgentsApi(configuration);

let newAiAgentsUpdateQuotaRequest: NewAiAgentsUpdateQuotaRequest; //

const { status, data } = await apiInstance.newAiAgentsUpdateQuota(
    newAiAgentsUpdateQuotaRequest
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

