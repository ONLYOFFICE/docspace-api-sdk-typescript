# ContextApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiContextGetContextFolders**](#aicontextgetcontextfolders) | **GET** /api/2.0/ai/context/get-context-folders | Get context folders|
|[**aiContextGetKnowledgeFolders**](#aicontextgetknowledgefolders) | **GET** /api/2.0/ai/context/get-knowledge-folders | Get knowledge folders|
|[**aiContextGetRoomSkill**](#aicontextgetroomskill) | **GET** /api/2.0/ai/context/get-room-skill | Get room skill|
|[**aiContextGetRoomSkills**](#aicontextgetroomskills) | **GET** /api/2.0/ai/context/get-room-skills | Get room skills|

# **aiContextGetContextFolders**
> Array<AiContextFolder> aiContextGetContextFolders()

Lists the Instructions rooms the caller can connect to a chat as context, grouped under the account they belong to (`docspace` for this portal). Only a room the caller can read that holds at least one skill is listed: one without skills would connect nothing. An empty list means there is nothing to connect. At most 1000 Instructions rooms are read; any beyond them are left out without a signal. Read the skills of one room with `GET api/2.0/ai/context/get-room-skills`. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AiContextFolder>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIContextApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIContextApi(configuration);

const { status, data } = await apiInstance.aiContextGetContextFolders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Instructions rooms the caller can connect, grouped by account. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiContextGetKnowledgeFolders**
> Array<AiContextFolder> aiContextGetKnowledgeFolders()

Lists the Knowledge rooms the caller can connect to a chat as its knowledge base, grouped under the account they belong to (`docspace` for this portal). A connected Knowledge room limits the knowledge search of a round to it (`actionArgs.knowledgeRooms`). An empty list means there is none the caller can read. At most 1000 Knowledge rooms are listed; any beyond them are left out without a signal. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-knowledge-folders/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AiContextFolder>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIContextApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIContextApi(configuration);

const { status, data } = await apiInstance.aiContextGetKnowledgeFolders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Knowledge rooms the caller can connect, grouped by account. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiContextGetRoomSkill**
> string aiContextGetRoomSkill()

Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room\'s skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**string**] | The Instructions room identifier. | defaults to undefined|
| **skillId** | [**string**] | The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it. | defaults to undefined|
| **cloud** | [**string**] | The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it. | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIContextApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIContextApi(configuration);

let roomId: string; //The Instructions room identifier. (default to undefined)
let skillId: string; //The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it. (default to undefined)
let cloud: string; //The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it. (optional) (default to undefined)

const { status, data } = await apiInstance.aiContextGetRoomSkill(
    roomId,
    skillId,
    cloud
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The skill\'s Markdown file as a JSON string, its first 256 KiB. |  -  |
|**400** | `roomId` or `skillId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**404** | The room is not an Instructions room the caller can read, or `skillId` is not one of its skills. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiContextGetRoomSkills**
> Array<AiRoomSkill> aiContextGetRoomSkills()

Lists the skills of one Instructions room: the ID, name and description from the frontmatter of each skill file, not its body. `roomId` is required; `cloud` is accepted and not read. A room that is not an Instructions room the caller can read answers 404. Read the body of one skill with `GET api/2.0/ai/context/get-room-skill`. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**string**] | The Instructions room identifier. | defaults to undefined|
| **cloud** | [**string**] | The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it. | (optional) defaults to undefined|


### Return type

**Array<AiRoomSkill>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIContextApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIContextApi(configuration);

let roomId: string; //The Instructions room identifier. (default to undefined)
let cloud: string; //The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it. (optional) (default to undefined)

const { status, data } = await apiInstance.aiContextGetRoomSkills(
    roomId,
    cloud
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The skills of the room, frontmatter only. |  -  |
|**400** | `roomId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**404** | The room is not an Instructions room the caller can read. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

