# ThreadsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiThreadsAppendUserMessage**](#aithreadsappendusermessage) | **POST** /api/2.0/ai/threads/append-user-message | Append user message|
|[**aiThreadsClearMessages**](#aithreadsclearmessages) | **DELETE** /api/2.0/ai/threads/clear-messages | Clear messages|
|[**aiThreadsCreate**](#aithreadscreate) | **POST** /api/2.0/ai/threads/create | Create|
|[**aiThreadsDelete**](#aithreadsdelete) | **DELETE** /api/2.0/ai/threads/delete | Delete|
|[**aiThreadsDeleteMessage**](#aithreadsdeletemessage) | **DELETE** /api/2.0/ai/threads/delete-message | Delete message|
|[**aiThreadsGetById**](#aithreadsgetbyid) | **GET** /api/2.0/ai/threads/get-by-id | Get by id|
|[**aiThreadsGetMessageById**](#aithreadsgetmessagebyid) | **GET** /api/2.0/ai/threads/get-message-by-id | Get message by id|
|[**aiThreadsList**](#aithreadslist) | **GET** /api/2.0/ai/threads/list | List|
|[**aiThreadsOpenOrCreate**](#aithreadsopenorcreate) | **POST** /api/2.0/ai/threads/open-or-create | Open or create|
|[**aiThreadsReadMessages**](#aithreadsreadmessages) | **GET** /api/2.0/ai/threads/read-messages | Read messages|
|[**aiThreadsRegenerateTitle**](#aithreadsregeneratetitle) | **POST** /api/2.0/ai/threads/regenerate-title | Regenerate title|
|[**aiThreadsRename**](#aithreadsrename) | **PUT** /api/2.0/ai/threads/rename | Rename|
|[**aiThreadsTouch**](#aithreadstouch) | **POST** /api/2.0/ai/threads/touch | Touch|
|[**aiThreadsUpdateMessage**](#aithreadsupdatemessage) | **PUT** /api/2.0/ai/threads/update-message | Update message|

# **aiThreadsAppendUserMessage**
> AiThreadMessageLike aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest)

Persists a user message in a thread and bumps the thread\'s last-edit date so it resurfaces in the sidebar. Optionally rebinds the thread to another profile when the model changed mid-conversation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsAppendUserMessageRequest** | **AiThreadsAppendUserMessageRequest**|  | |


### Return type

**AiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsAppendUserMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsAppendUserMessageRequest: AiThreadsAppendUserMessageRequest; //

const { status, data } = await apiInstance.aiThreadsAppendUserMessage(
    aiThreadsAppendUserMessageRequest
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

# **aiThreadsClearMessages**
> AiSuccessResponse aiThreadsClearMessages(body)

Drops every message of a thread while keeping the thread itself, and bumps its last-edit date.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/).

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
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiThreadsClearMessages(
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

# **aiThreadsCreate**
> AiThread aiThreadsCreate(aiThreadsCreateRequest)

Creates a chat thread with a caller-supplied title. Use `open-or-create` instead when the title should be generated from the first user message.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsCreateRequest** | **AiThreadsCreateRequest**|  | |


### Return type

**AiThread**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsCreateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsCreateRequest: AiThreadsCreateRequest; //

const { status, data } = await apiInstance.aiThreadsCreate(
    aiThreadsCreateRequest
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

# **aiThreadsDelete**
> AiSuccessResponse aiThreadsDelete(body)

Deletes a chat thread together with its messages.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/).

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
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiThreadsDelete(
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

# **aiThreadsDeleteMessage**
> AiSuccessResponse aiThreadsDeleteMessage(body)

Deletes one chat message, leaving the rest of the thread untouched.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/).

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
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiThreadsDeleteMessage(
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

# **aiThreadsGetById**
> AiThread aiThreadsGetById()

Returns one chat thread, or an empty result when the identifier is unknown.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | The chat thread identifier. | defaults to undefined|


### Return type

**AiThread**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let threadId: string; //The chat thread identifier. (default to undefined)

const { status, data } = await apiInstance.aiThreadsGetById(
    threadId
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

# **aiThreadsGetMessageById**
> AiThreadMessageLike aiThreadsGetMessageById()

Returns one chat message by its globally unique identifier.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] | The globally unique chat message identifier. | defaults to undefined|


### Return type

**AiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let messageId: string; //The globally unique chat message identifier. (default to undefined)

const { status, data } = await apiInstance.aiThreadsGetMessageById(
    messageId
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

# **aiThreadsList**
> Array<AiThread> aiThreadsList()

Lists the chat threads of the scope, most recently edited first. Supports cursor pagination and a server-side case-insensitive title search.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|
| **count** | [**string**] | The maximum number of items to return in one page. | (optional) defaults to undefined|
| **cursor** | [**string**] | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | (optional) defaults to undefined|
| **query** | [**string**] | The full-text query the thread list is filtered by. | (optional) defaults to undefined|


### Return type

**Array<AiThread>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)
let count: string; //The maximum number of items to return in one page. (optional) (default to undefined)
let cursor: string; //The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. (optional) (default to undefined)
let query: string; //The full-text query the thread list is filtered by. (optional) (default to undefined)

const { status, data } = await apiInstance.aiThreadsList(
    entityId,
    count,
    cursor,
    query
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

# **aiThreadsOpenOrCreate**
> AiOpenOrCreateResult aiThreadsOpenOrCreate(aiThreadsOpenOrCreateRequest)

Opens a chat thread and returns its history, or creates one with a title generated from the supplied first message. That first message is not persisted - the caller decides whether to follow up with `append-user-message`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsOpenOrCreateRequest** | **AiThreadsOpenOrCreateRequest**|  | |


### Return type

**AiOpenOrCreateResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsOpenOrCreateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsOpenOrCreateRequest: AiThreadsOpenOrCreateRequest; //

const { status, data } = await apiInstance.aiThreadsOpenOrCreate(
    aiThreadsOpenOrCreateRequest
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

# **aiThreadsReadMessages**
> Array<AiThreadMessageLike> aiThreadsReadMessages()

Reads the messages of a thread, with the same cursor pagination as the thread list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | The chat thread identifier. | defaults to undefined|
| **count** | [**string**] | The maximum number of items to return in one page. | (optional) defaults to undefined|
| **cursor** | [**string**] | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | (optional) defaults to undefined|
| **direction** | [**string**] | The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read. | (optional) defaults to undefined|


### Return type

**Array<AiThreadMessageLike>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let threadId: string; //The chat thread identifier. (default to undefined)
let count: string; //The maximum number of items to return in one page. (optional) (default to undefined)
let cursor: string; //The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. (optional) (default to undefined)
let direction: string; //The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read. (optional) (default to undefined)

const { status, data } = await apiInstance.aiThreadsReadMessages(
    threadId,
    count,
    cursor,
    direction
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

# **aiThreadsRegenerateTitle**
> string aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest)

Generates a fresh title from the thread\'s first user message and persists it. Fails when the thread has no user message yet.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsRegenerateTitleRequest** | **AiThreadsRegenerateTitleRequest**|  | |


### Return type

**string**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsRegenerateTitleRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsRegenerateTitleRequest: AiThreadsRegenerateTitleRequest; //

const { status, data } = await apiInstance.aiThreadsRegenerateTitle(
    aiThreadsRegenerateTitleRequest
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

# **aiThreadsRename**
> AiSuccessResponse aiThreadsRename(aiThreadsRenameRequest)

Renames a chat thread and bumps its last-edit date so the new title shows up in the sidebar.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-rename/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsRenameRequest** | **AiThreadsRenameRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsRenameRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsRenameRequest: AiThreadsRenameRequest; //

const { status, data } = await apiInstance.aiThreadsRename(
    aiThreadsRenameRequest
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

# **aiThreadsTouch**
> AiSuccessResponse aiThreadsTouch(aiThreadsTouchRequest)

Bumps a thread\'s last-edit date, and optionally rebinds it to another profile, when something other than a new message - a model switch, say - should resurface it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-touch/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsTouchRequest** | **AiThreadsTouchRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsTouchRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsTouchRequest: AiThreadsTouchRequest; //

const { status, data } = await apiInstance.aiThreadsTouch(
    aiThreadsTouchRequest
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

# **aiThreadsUpdateMessage**
> AiSuccessResponse aiThreadsUpdateMessage(aiThreadsUpdateMessageRequest)

Replaces the content of a chat message - used by the edit and regenerate flows that change a message outside the streaming lifecycle.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-update-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsUpdateMessageRequest** | **AiThreadsUpdateMessageRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiThreadsUpdateMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiThreadsUpdateMessageRequest: AiThreadsUpdateMessageRequest; //

const { status, data } = await apiInstance.aiThreadsUpdateMessage(
    aiThreadsUpdateMessageRequest
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

