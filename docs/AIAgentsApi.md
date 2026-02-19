# AgentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAgent**](#createagent) | **POST** /api/2.0/ai/agents | Create an ai agent|
|[**deleteAgent**](#deleteagent) | **DELETE** /api/2.0/ai/agents/{id} | Remove an ai agent|
|[**getAgentInfo**](#getagentinfo) | **GET** /api/2.0/ai/agents/{id} | Return an ai agent|
|[**getAgents**](#getagents) | **GET** /api/2.0/ai/agents | Get ai agents|
|[**getAgentsNewItems**](#getagentsnewitems) | **GET** /api/2.0/ai/agents/news | Get the room new items|
|[**resetAgentsQuota**](#resetagentsquota) | **PUT** /api/2.0/ai/agents/resetquota | Reset the AI agents quota limit|
|[**updateAgent**](#updateagent) | **PUT** /api/2.0/ai/agents/{id} | Update an ai agent|
|[**updateAgentsQuota**](#updateagentsquota) | **PUT** /api/2.0/ai/agents/agentquota | Change the AI agent quota limit|

# **createAgent**
> FolderIntegerWrapper createAgent()

Creates an ai agent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-agent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAgentRequestDto** | **CreateAgentRequestDto**|  | |


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    CreateAgentRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let createAgentRequestDto: CreateAgentRequestDto; // (optional)

const { status, data } = await apiInstance.createAgent(
    createAgentRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAgent**
> FileOperationWrapper deleteAgent(deleteRoomRequest)

Removes an ai agent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-agent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRoomRequest** | **DeleteRoomRequest**| The parameters for deleting a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FileOperationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    DeleteRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: number; //The room ID. (default to undefined)
let deleteRoomRequest: DeleteRoomRequest; //The parameters for deleting a room.

const { status, data } = await apiInstance.deleteAgent(
    id,
    deleteRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File operation |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAgentInfo**
> FolderIntegerWrapper getAgentInfo()

Returns an ai agent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agent-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: number; //The room ID. (default to undefined)

const { status, data } = await apiInstance.getAgentInfo(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAgents**
> FolderContentIntegerWrapper getAgents()

Get ai agents

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subjectId** | [**string**] | The filter by user ID. | (optional) defaults to undefined|
| **withoutTags** | [**boolean**] | Specifies whether to search by tags or not. | (optional) defaults to undefined|
| **tags** | [**string**] | The tags in the serialized format. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **subjectFilter** | **SubjectFilter** | The filter by user (Owner - 0, Member - 1). | (optional) defaults to undefined|
| **quotaFilter** | **QuotaFilter** | The filter by quota (All - 0, Default - 1, Custom - 2). | (optional) defaults to undefined|
| **count** | [**number**] | Specifies the maximum number of items to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The index from which to start retrieving the room content. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the field by which the room content should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text filter value used to refine search or query operations. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let subjectId: string; //The filter by user ID. (optional) (default to undefined)
let withoutTags: boolean; //Specifies whether to search by tags or not. (optional) (default to undefined)
let tags: string; //The tags in the serialized format. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let subjectFilter: SubjectFilter; //The filter by user (Owner - 0, Member - 1). (optional) (default to undefined)
let quotaFilter: QuotaFilter; //The filter by quota (All - 0, Default - 1, Custom - 2). (optional) (default to undefined)
let count: number; //Specifies the maximum number of items to retrieve. (optional) (default to undefined)
let startIndex: number; //The index from which to start retrieving the room content. (optional) (default to undefined)
let sortBy: string; //Specifies the field by which the room content should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text filter value used to refine search or query operations. (optional) (default to undefined)

const { status, data } = await apiInstance.getAgents(
    subjectId,
    withoutTags,
    tags,
    excludeSubject,
    subjectFilter,
    quotaFilter,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAgentsNewItems**
> NewItemsAgentNewItemsArrayWrapper getAgentsNewItems()

Returns the room new items.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-agents-new-items/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewItemsAgentNewItemsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

const { status, data } = await apiInstance.getAgentsNewItems();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of new items |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetAgentsQuota**
> FolderIntegerArrayWrapper resetAgentsQuota()

Resets the quota limit for the AI agents with the IDs specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-agents-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomsRoomIdsRequestDtoInteger** | **UpdateRoomsRoomIdsRequestDtoInteger**|  | |


### Return type

**FolderIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    UpdateRoomsRoomIdsRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let updateRoomsRoomIdsRequestDtoInteger: UpdateRoomsRoomIdsRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.resetAgentsQuota(
    updateRoomsRoomIdsRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of AI agents with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAgent**
> FolderIntegerWrapper updateAgent(updateRoomRequest)

Updates an ai agent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomRequest** | **UpdateRoomRequest**| The request parameters for updating a room. | |
| **id** | [**number**] | The room ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    UpdateRoomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let id: number; //The room ID. (default to undefined)
let updateRoomRequest: UpdateRoomRequest; //The request parameters for updating a room.

const { status, data } = await apiInstance.updateAgent(
    id,
    updateRoomRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated agent information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAgentsQuota**
> FolderIntegerArrayWrapper updateAgentsQuota()

Changes the quota limit for the AI agents with the IDs specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-agents-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomsQuotaRequestDtoInteger** | **UpdateRoomsQuotaRequestDtoInteger**|  | |


### Return type

**FolderIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration,
    UpdateRoomsQuotaRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let updateRoomsQuotaRequestDtoInteger: UpdateRoomsQuotaRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.updateAgentsQuota(
    updateRoomsQuotaRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of AI agents with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

