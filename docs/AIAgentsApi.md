# AgentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAgentsCreate**](#aiagentscreate) | **POST** /api/2.0/ai/agents | Create an agent|
|[**aiAgentsDelete**](#aiagentsdelete) | **DELETE** /api/2.0/ai/agents/{id} | Delete an agent|
|[**aiAgentsGet**](#aiagentsget) | **GET** /api/2.0/ai/agents/{id} | Get an agent|
|[**aiAgentsList**](#aiagentslist) | **GET** /api/2.0/ai/agents | List agents|
|[**aiAgentsNews**](#aiagentsnews) | **GET** /api/2.0/ai/agents/news | List agent news items|
|[**aiAgentsResetQuota**](#aiagentsresetquota) | **PUT** /api/2.0/ai/agents/resetquota | Reset agents\' quota|
|[**aiAgentsUpdate**](#aiagentsupdate) | **PUT** /api/2.0/ai/agents/{id} | Update an agent|
|[**aiAgentsUpdateQuota**](#aiagentsupdatequota) | **PUT** /api/2.0/ai/agents/agentquota | Update agents\' quota|

# **aiAgentsCreate**
> AiFolderIntegerWrapper aiAgentsCreate(aiAgentsCreateRequest)

Creates an AI agent room in the .NET AI service and binds the supplied `profileId` to it as a `Chat` assignment. The instruction is stored on the room as a prompt-only chat setting; a failed binding is reported as an error even though the room already exists.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsCreateRequest** | **AiAgentsCreateRequest**|  | |


### Return type

**AiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    AiAgentsCreateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let aiAgentsCreateRequest: AiAgentsCreateRequest; //

const { status, data } = await apiInstance.aiAgentsCreate(
    aiAgentsCreateRequest
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

# **aiAgentsDelete**
> AiFileOperationWrapper aiAgentsDelete(aiAgentsDeleteRequest)

Deletes an AI agent room.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsDeleteRequest** | **AiAgentsDeleteRequest**|  | |
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiFileOperationWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    AiAgentsDeleteRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: string; //The agent identifier. (default to undefined)
let aiAgentsDeleteRequest: AiAgentsDeleteRequest; //

const { status, data } = await apiInstance.aiAgentsDelete(
    id,
    aiAgentsDeleteRequest
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

# **aiAgentsGet**
> AiFolderIntegerWrapper aiAgentsGet()

Returns one AI agent room, enriched with the `profileId` bound to it so an edit form can prefill the profile selector. A missing assignment simply leaves `profileId` out.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: string; //The agent identifier. (default to undefined)

const { status, data } = await apiInstance.aiAgentsGet(
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

# **aiAgentsList**
> AiFolderContentIntegerWrapper aiAgentsList()

Lists the portal\'s AI agent rooms. Query parameters are forwarded unchanged to the .NET AI service, which answers with its folder-content payload.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiFolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

const { status, data } = await apiInstance.aiAgentsList();
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

# **aiAgentsNews**
> AiNewItemsAgentNewItemsArrayWrapper aiAgentsNews()

Lists the new items across the caller\'s AI agent rooms.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-news/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiNewItemsAgentNewItemsArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

const { status, data } = await apiInstance.aiAgentsNews();
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

# **aiAgentsResetQuota**
> AiFolderIntegerArrayWrapper aiAgentsResetQuota(aiAgentsResetQuotaRequest)

Resets the storage quota of the given AI agent rooms.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsResetQuotaRequest** | **AiAgentsResetQuotaRequest**|  | |


### Return type

**AiFolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    AiAgentsResetQuotaRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let aiAgentsResetQuotaRequest: AiAgentsResetQuotaRequest; //

const { status, data } = await apiInstance.aiAgentsResetQuota(
    aiAgentsResetQuotaRequest
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

# **aiAgentsUpdate**
> AiFolderIntegerWrapper aiAgentsUpdate(aiAgentsUpdateRequest)

Updates an AI agent room - title, tags, instruction. `profileId` is not part of the room contract: it is stripped from the forwarded body and re-bound as the agent\'s assignment afterwards.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateRequest** | **AiAgentsUpdateRequest**|  | |
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiFolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    AiAgentsUpdateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: string; //The agent identifier. (default to undefined)
let aiAgentsUpdateRequest: AiAgentsUpdateRequest; //

const { status, data } = await apiInstance.aiAgentsUpdate(
    id,
    aiAgentsUpdateRequest
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

# **aiAgentsUpdateQuota**
> AiFolderIntegerArrayWrapper aiAgentsUpdateQuota(aiAgentsUpdateQuotaRequest)

Changes the storage quota of the given AI agent rooms.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateQuotaRequest** | **AiAgentsUpdateQuotaRequest**|  | |


### Return type

**AiFolderIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    AiAgentsUpdateQuotaRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let aiAgentsUpdateQuotaRequest: AiAgentsUpdateQuotaRequest; //

const { status, data } = await apiInstance.aiAgentsUpdateQuota(
    aiAgentsUpdateQuotaRequest
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

