# MCPApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addRoomServers**](#addroomservers) | **POST** /api/2.0/ai/rooms/{roomId}/servers | Assign MCP servers to a room|
|[**addServer**](#addserver) | **POST** /api/2.0/ai/servers | Register a custom MCP server|
|[**connectServer**](#connectserver) | **POST** /api/2.0/ai/rooms/{roomId}/servers/{serverId}/connect | Connect an OAuth-based MCP server in a room|
|[**deleteRoomServers**](#deleteroomservers) | **DELETE** /api/2.0/ai/rooms/{roomId}/servers | Remove MCP servers from a room|
|[**deleteServer**](#deleteserver) | **DELETE** /api/2.0/ai/servers | Delete MCP servers|
|[**disconnectServer**](#disconnectserver) | **POST** /api/2.0/ai/rooms/{roomId}/servers/{serverId}/disconnect | Disconnect an MCP server in a room|
|[**getAvailableServers**](#getavailableservers) | **GET** /api/2.0/ai/servers/available | Get available MCP servers|
|[**getRoomServers**](#getroomservers) | **GET** /api/2.0/ai/rooms/{roomId}/servers | Get MCP servers assigned to a room|
|[**getServer**](#getserver) | **GET** /api/2.0/ai/servers/{id} | Get an MCP server by ID|
|[**getServers**](#getservers) | **GET** /api/2.0/ai/servers | Get all MCP servers|
|[**getTools**](#gettools) | **GET** /api/2.0/ai/rooms/{roomId}/servers/{serverId}/tools | Get MCP server tools in a room|
|[**setServerStatus**](#setserverstatus) | **PUT** /api/2.0/ai/servers/{id}/status | Enable or disable an MCP server|
|[**setTools**](#settools) | **PUT** /api/2.0/ai/rooms/{roomId}/servers/{serverId}/tools | Configure MCP server tools in a room|
|[**updateServer**](#updateserver) | **PUT** /api/2.0/ai/servers/{id} | Update a custom MCP server|

# **addRoomServers**
> McpServerStatusArrayWrapper addRoomServers(addRoomServersRequestBody)

Associates one or more MCP servers with a specific room, making them available for AI chat sessions  within that room. A maximum of 5 MCP servers can be assigned to a single room. If OAuth-based servers  are included, each room member will need to individually authorize their connection.  Requires room edit permissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRoomServersRequestBody** | **AddRoomServersRequestBody**| Server identifiers to assign. | |
| **roomId** | [**number**] | Identifier of the room to which MCP servers will be assigned. | defaults to undefined|


### Return type

**McpServerStatusArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    AddRoomServersRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room to which MCP servers will be assigned. (default to undefined)
let addRoomServersRequestBody: AddRoomServersRequestBody; //Server identifiers to assign.

const { status, data } = await apiInstance.addRoomServers(
    roomId,
    addRoomServersRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of MCP server statuses after assignment |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | The maximum number of servers per room has been exceeded |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addServer**
> McpServerWrapper addServer(addMcpServerRequestBody)

Registers a new custom MCP (Model Context Protocol) server for the current tenant.  The system validates the server name (only letters, numbers, underscores, and hyphens are allowed),  checks that it is not reserved or already taken, and then attempts to connect to the provided endpoint  to verify reachability and credentials before persisting the configuration.  Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addMcpServerRequestBody** | **AddMcpServerRequestBody**| MCP server registration parameters. | |


### Return type

**McpServerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    AddMcpServerRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let addMcpServerRequestBody: AddMcpServerRequestBody; //MCP server registration parameters.

const { status, data } = await apiInstance.addServer(
    addMcpServerRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newly registered MCP server configuration |  * X-RateLimit-Limit - Rate limit: 10 requests per 1 minutes per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Invalid server name, reserved name, duplicate name, incorrect credentials, or invalid endpoint URL |  -  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connectServer**
> McpServerStatusWrapper connectServer(connectServerRequestBody)

Completes the OAuth authorization flow for an MCP server within a specific room on behalf of the  current user. The authorization code obtained from the OAuth provider must be passed in the request body.  Upon successful token exchange, the system verifies connectivity to the server and stores  the credentials for the current user. Requires room edit permissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/connect-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectServerRequestBody** | **ConnectServerRequestBody**| The request body containing additional data necessary for connecting to the server,  such as authentication or operation-specific information. | |
| **roomId** | [**number**] | Identifier of the room containing the MCP server. | defaults to undefined|
| **serverId** | [**string**] | Unique identifier of the MCP server to connect. | defaults to undefined|


### Return type

**McpServerStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    ConnectServerRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room containing the MCP server. (default to undefined)
let serverId: string; //Unique identifier of the MCP server to connect. (default to undefined)
let connectServerRequestBody: ConnectServerRequestBody; //The request body containing additional data necessary for connecting to the server,  such as authentication or operation-specific information.

const { status, data } = await apiInstance.connectServer(
    roomId,
    serverId,
    connectServerRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MCP server connection status after authorization |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | The provided authorization code is invalid |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room or MCP server connection was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRoomServers**
> deleteRoomServers(deleteRoomServersRequestBody)

Detaches one or more MCP servers from the specified room. After removal, the servers will no longer  be available in AI chat sessions within this room. Existing connections and tool configurations for  the removed servers are also cleaned up. Requires room edit permissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRoomServersRequestBody** | **DeleteRoomServersRequestBody**| Server identifiers to remove. | |
| **roomId** | [**number**] | Identifier of the room from which MCP servers will be removed. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    DeleteRoomServersRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room from which MCP servers will be removed. (default to undefined)
let deleteRoomServersRequestBody: DeleteRoomServersRequestBody; //Server identifiers to remove.

const { status, data } = await apiInstance.deleteRoomServers(
    roomId,
    deleteRoomServersRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | MCP servers were successfully removed from the room |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteServer**
> deleteServer(deleteServersRequestBody)

Permanently removes one or more MCP servers from the current tenant by their IDs.  All room associations and connection data for the deleted servers are also cleaned up.  This action is irreversible. Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteServersRequestBody** | **DeleteServersRequestBody**| Server identifiers to delete. | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    DeleteServersRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let deleteServersRequestBody: DeleteServersRequestBody; //Server identifiers to delete.

const { status, data } = await apiInstance.deleteServer(
    deleteServersRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | MCP servers were successfully deleted |  -  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disconnectServer**
> McpServerStatusWrapper disconnectServer()

Revokes the current user\'s OAuth connection to an MCP server within the specified room. After  disconnection, the server\'s tools will no longer be available to this user in AI chat sessions  until they re-authorize. Other room members\' connections are not affected.  Requires room edit permissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/disconnect-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | Identifier of the room containing the MCP server. | defaults to undefined|
| **serverId** | [**string**] | Unique identifier of the MCP server to disconnect from. | defaults to undefined|


### Return type

**McpServerStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room containing the MCP server. (default to undefined)
let serverId: string; //Unique identifier of the MCP server to disconnect from. (default to undefined)

const { status, data } = await apiInstance.disconnectServer(
    roomId,
    serverId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MCP server connection status after disconnection |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room or MCP server connection was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableServers**
> McpServerShortArrayWrapper getAvailableServers()

Returns a paginated list of MCP servers that are currently active (enabled) and available for  assignment to rooms. Only servers in the enabled state are included. Each entry contains a compact  summary with the server name, type, icon, and status. Supports pagination via startIndex and count.  The total count of available servers is included in the response metadata.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startIndex** | [**number**] | The number of items to skip before returning results (zero-based offset). Defaults to 0. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return per page. Defaults to 100. | (optional) defaults to undefined|


### Return type

**McpServerShortArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let startIndex: number; //The number of items to skip before returning results (zero-based offset). Defaults to 0. (optional) (default to undefined)
let count: number; //The maximum number of items to return per page. Defaults to 100. (optional) (default to undefined)

const { status, data } = await apiInstance.getAvailableServers(
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
|**200** | Paginated list of active MCP servers available for room assignment |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomServers**
> McpServerStatusArrayWrapper getRoomServers()

Returns the list of MCP servers currently assigned to the specified room along with their connection  statuses for the current user. For OAuth-based servers, the connection status reflects whether the  current user has completed authorization. Requires access to the room\'s AI chat.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | Identifier of the room whose assigned MCP servers are being retrieved. | defaults to undefined|


### Return type

**McpServerStatusArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room whose assigned MCP servers are being retrieved. (default to undefined)

const { status, data } = await apiInstance.getRoomServers(
    roomId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of MCP server statuses in the room |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getServer**
> McpServerShortWrapper getServer()

Retrieves a summary view of a single MCP server by its unique identifier, including its name,  type, enabled state, and icon. This endpoint returns a compact representation without  sensitive details such as endpoint URL or authentication headers.  Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier of the MCP server to retrieve. | defaults to undefined|


### Return type

**McpServerShortWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let id: string; //Unique identifier of the MCP server to retrieve. (default to undefined)

const { status, data } = await apiInstance.getServer(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MCP server summary information |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**404** | The MCP server with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getServers**
> McpServerArrayWrapper getServers()

Returns a paginated list of all MCP servers registered for the current tenant, including both  enabled and disabled servers. Each entry contains the full configuration (endpoint, headers,  icon, type, and status). Supports pagination via the startIndex and count query parameters.  The total number of servers is included in the response metadata.  Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startIndex** | [**number**] | The number of items to skip before returning results (zero-based offset). Defaults to 0. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return per page. Defaults to 100. | (optional) defaults to undefined|


### Return type

**McpServerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let startIndex: number; //The number of items to skip before returning results (zero-based offset). Defaults to 0. (optional) (default to undefined)
let count: number; //The maximum number of items to return per page. Defaults to 100. (optional) (default to undefined)

const { status, data } = await apiInstance.getServers(
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
|**200** | Paginated list of all registered MCP servers |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTools**
> McpToolArrayWrapper getTools()

Retrieves the full list of tools exposed by an MCP server within the context of a specific room,  along with each tool\'s enabled or disabled state. Disabled tools will not be invoked during  AI chat sessions in this room. Requires access to the room\'s AI chat.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tools/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | Identifier of the room containing the MCP server. | defaults to undefined|
| **serverId** | [**string**] | Unique identifier of the MCP server whose tools are being retrieved. | defaults to undefined|


### Return type

**McpToolArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room containing the MCP server. (default to undefined)
let serverId: string; //Unique identifier of the MCP server whose tools are being retrieved. (default to undefined)

const { status, data } = await apiInstance.getTools(
    roomId,
    serverId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tools with their enabled/disabled states |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room or MCP server was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setServerStatus**
> McpServerWrapper setServerStatus(setServerStatusRequestBody)

Toggles the enabled/disabled state of an MCP server. When a server is disabled, it becomes  unavailable for assignment to rooms and will not be used during AI chat sessions.  Enabling a previously disabled server restores its availability across the tenant.  Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-server-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setServerStatusRequestBody** | **SetServerStatusRequestBody**| New status value. | |
| **id** | [**string**] | Unique identifier of the MCP server whose status is being changed. | defaults to undefined|


### Return type

**McpServerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    SetServerStatusRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let id: string; //Unique identifier of the MCP server whose status is being changed. (default to undefined)
let setServerStatusRequestBody: SetServerStatusRequestBody; //New status value.

const { status, data } = await apiInstance.setServerStatus(
    id,
    setServerStatusRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MCP server with the updated status |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**404** | The MCP server with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setTools**
> McpToolArrayWrapper setTools(setMcpToolsRequestBody)

Updates the set of disabled tools for an MCP server within a specific room. Pass a list of tool names  that should be disabled — all other tools exposed by the server will remain enabled. This allows  room administrators to restrict which MCP capabilities are available during AI chat sessions.  Requires room edit permissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tools/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setMcpToolsRequestBody** | **SetMcpToolsRequestBody**| Tool configuration parameters. | |
| **roomId** | [**number**] | Identifier of the room containing the MCP server. | defaults to undefined|
| **serverId** | [**string**] | Unique identifier of the MCP server whose tools are being configured. | defaults to undefined|


### Return type

**McpToolArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    SetMcpToolsRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let roomId: number; //Identifier of the room containing the MCP server. (default to undefined)
let serverId: string; //Unique identifier of the MCP server whose tools are being configured. (default to undefined)
let setMcpToolsRequestBody: SetMcpToolsRequestBody; //Tool configuration parameters.

const { status, data } = await apiInstance.setTools(
    roomId,
    serverId,
    setMcpToolsRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Complete list of tools with their enabled/disabled states |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The room or MCP server was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateServer**
> McpServerWrapper updateServer(updateServerRequestBody)

Updates the configuration of an existing custom MCP server identified by its unique ID.  Any combination of fields (name, description, endpoint, headers, icon) can be updated in a single request.  If the endpoint or headers are changed, the system re-validates connectivity by attempting to reach  the new endpoint before saving. Name uniqueness and format rules are enforced on every update.  Requires DocSpace administrator privileges.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateServerRequestBody** | **UpdateServerRequestBody**| Updated server configuration fields. | |
| **id** | [**string**] | Unique identifier of the MCP server to update. | defaults to undefined|


### Return type

**McpServerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMCPApi,
    Configuration,
    UpdateServerRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMCPApi(configuration);

let id: string; //Unique identifier of the MCP server to update. (default to undefined)
let updateServerRequestBody: UpdateServerRequestBody; //Updated server configuration fields.

const { status, data } = await apiInstance.updateServer(
    id,
    updateServerRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated MCP server configuration |  * X-RateLimit-Limit - Rate limit: 10 requests per 1 minutes per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Invalid server name, reserved name, duplicate name, incorrect credentials, or invalid endpoint URL |  -  |
|**403** | You don\'t have permission to manage MCP servers |  -  |
|**404** | The MCP server with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

