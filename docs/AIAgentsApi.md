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
> AiFolderWrapper aiAgentsCreate(aiAgentsCreateRequest)

Creates an AI agent room and binds a model to it, in that order. `profileId` is required, has to be a UUID, has to name an existing profile, and that profile has to support chat - an image-only model is refused here rather than failing on every later request. `prompt` is required and is stored on the room as its standing instruction with any markup stripped, so it cannot round-trip HTML into another user\'s reply. The two steps are not atomic: when the room is created but the model binding fails, the call reports an error and the room is left behind, so re-bind it with `PUT api/2.0/ai/agents/{id}` rather than creating a second one.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsCreateRequest** | **AiAgentsCreateRequest**|  | |


### Return type

**AiFolderWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The created agent room, with the model already bound to it. |  -  |
|**400** | `profileId` is missing, is not a UUID, names no existing profile, or names one that does not support chat; or `prompt` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsDelete**
> AiFileOperationWrapper aiAgentsDelete(aiAgentsDeleteRequest)

Deletes an AI agent room. The ID has to be the room\'s integer identifier, and the body is forwarded to the DocSpace AI service unchanged, so it accepts the same options as deleting an ordinary room - `deleteAfter` among them. Deletion is asynchronous there: the answer is a file-operation payload to poll, not a completed result. The agent\'s model binding is deliberately left behind, because the upstream assignment API has no per-entry delete, so an orphaned assignment row survives the room.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsDeleteRequest** | **AiAgentsDeleteRequest**|  | |
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiFileOperationWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The queued file operation. Deletion runs asynchronously, so poll DocSpace for its outcome. |  -  |
|**400** | The agent ID is not a positive integer. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsGet**
> AiAgentsGet200Response aiAgentsGet()

Returns one AI agent room, enriched with the `profileId` currently bound to it so an edit form can prefill its model selector. The ID is the room\'s integer identifier, and a non-integer value is refused rather than passed on to fail opaquely upstream. The binding lives in an assignment rather than on the room, so it is looked up separately: a missing or unreadable assignment simply leaves `profileId` out of the answer instead of failing the call. The standing instruction comes back on the room as `chatSettings.prompt`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiAgentsGet200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The agent room, with `profileId` added when a model is bound to it. |  -  |
|**400** | The agent ID is not a positive integer. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsList**
> AiFolderContentWrapper aiAgentsList()

Lists the portal\'s AI agent rooms. The query is forwarded unchanged to the DocSpace AI service, so it takes the same paging, sorting and filtering parameters as an ordinary room listing, and the answer is that service\'s folder-content payload rather than a shape of this API\'s own. Array and object query values are dropped rather than guessed at, so send flat strings. The profile bound to each agent is not included here - read one agent with `GET api/2.0/ai/agents/{id}` for that.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subjectId** | [**string**] | Show only the agent rooms this user takes part in. | (optional) defaults to undefined|
| **subjectOwnerId** | [**string**] | Show only the agent rooms owned by this user. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Invert the user filter: leave out what `subjectId` selects instead of keeping it. | (optional) defaults to undefined|
| **tags** | [**string**] | Show only the agent rooms carrying these tags, comma-separated. | (optional) defaults to undefined|
| **withoutTags** | [**boolean**] | Show only the agent rooms that carry no tags at all. | (optional) defaults to undefined|
| **quotaFilter** | [**number**] | Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one. | (optional) defaults to undefined|
| **filterValue** | [**string**] | Show only the agent rooms whose title matches this text. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field to sort by, for example `DateAndTime`. | (optional) defaults to undefined|
| **sortOrder** | [**string**] | Sort direction, `ascending` or `descending`. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Index of the first entry to return; 0 starts at the beginning. | (optional) defaults to undefined|
| **count** | [**number**] | How many entries to return. The internal service applies its own default. | (optional) defaults to undefined|


### Return type

**AiFolderContentWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAgentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAgentsApi(configuration);

let subjectId: string; //Show only the agent rooms this user takes part in. (optional) (default to undefined)
let subjectOwnerId: string; //Show only the agent rooms owned by this user. (optional) (default to undefined)
let excludeSubject: boolean; //Invert the user filter: leave out what `subjectId` selects instead of keeping it. (optional) (default to undefined)
let tags: string; //Show only the agent rooms carrying these tags, comma-separated. (optional) (default to undefined)
let withoutTags: boolean; //Show only the agent rooms that carry no tags at all. (optional) (default to undefined)
let quotaFilter: number; //Filter by quota kind: 0 for all, 1 for the default quota, 2 for a custom one. (optional) (default to undefined)
let filterValue: string; //Show only the agent rooms whose title matches this text. (optional) (default to undefined)
let sortBy: string; //Field to sort by, for example `DateAndTime`. (optional) (default to undefined)
let sortOrder: string; //Sort direction, `ascending` or `descending`. (optional) (default to undefined)
let startIndex: number; //Index of the first entry to return; 0 starts at the beginning. (optional) (default to undefined)
let count: number; //How many entries to return. The internal service applies its own default. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAgentsList(
    subjectId,
    subjectOwnerId,
    excludeSubject,
    tags,
    withoutTags,
    quotaFilter,
    filterValue,
    sortBy,
    sortOrder,
    startIndex,
    count
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The agent rooms, in the DocSpace AI service\'s folder-content envelope. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsNews**
> AiNewItemsAgentNewItemsArrayWrapper aiAgentsNews()

Lists the unread items across the caller\'s AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service\'s new-items payload. This is a read-only operation and does not mark anything as seen.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-news/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiNewItemsAgentNewItemsArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The unread items of the caller\'s agent rooms. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsResetQuota**
> AiFolderArrayWrapper aiAgentsResetQuota(aiAgentsResetQuotaRequest)

Returns the listed AI agent rooms to the portal\'s default storage quota, forwarding `roomIds` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. This is the counterpart of `PUT api/2.0/ai/agents/agentquota` and takes no quota value of its own. Rooms already on the default are unaffected.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-reset-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsResetQuotaRequest** | **AiAgentsResetQuotaRequest**|  | |


### Return type

**AiFolderArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The updated agent rooms, one entry each. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsUpdate**
> AiFolderWrapper aiAgentsUpdate(aiAgentsUpdateRequest)

Changes an AI agent room - its title, tags or standing instruction - and optionally rebinds its model. The ID has to be the room\'s integer identifier. `profileId` is not part of the room contract: it is taken out of the forwarded body and applied afterwards as the agent\'s assignment, and it has to be a UUID naming an existing chat-capable profile. An instruction sent as `chatSettings.prompt` has its markup stripped, as on create; note that when `chatSettings` is present the upstream service still requires the rest of that object to be valid, so send it whole.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateRequest** | **AiAgentsUpdateRequest**|  | |
| **id** | [**string**] | The agent identifier. | defaults to undefined|


### Return type

**AiFolderWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The updated agent room. |  -  |
|**400** | The agent ID is not a positive integer, or `profileId` is not a UUID, names no existing profile, or names one that does not support chat. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAgentsUpdateQuota**
> AiFolderArrayWrapper aiAgentsUpdateQuota(aiAgentsUpdateQuotaRequest)

Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service\'s payload, one updated room per entry. A quota applies to the room\'s stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-agents-update-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateQuotaRequest** | **AiAgentsUpdateQuotaRequest**|  | |


### Return type

**AiFolderArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The updated agent rooms, one entry each. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

