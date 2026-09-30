# ThreadsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiThreadsAppendUserMessage**](#aithreadsappendusermessage) | **POST** /api/2.0/ai/threads/append-user-message | Append user message|
|[**aiThreadsClearMessages**](#aithreadsclearmessages) | **DELETE** /api/2.0/ai/threads/clear-messages | Clear messages|
|[**aiThreadsCreate**](#aithreadscreate) | **POST** /api/2.0/ai/threads/create | Create a chat thread|
|[**aiThreadsDelete**](#aithreadsdelete) | **DELETE** /api/2.0/ai/threads/delete | Delete a chat thread|
|[**aiThreadsDeleteMessage**](#aithreadsdeletemessage) | **DELETE** /api/2.0/ai/threads/delete-message | Delete message|
|[**aiThreadsGetById**](#aithreadsgetbyid) | **GET** /api/2.0/ai/threads/get-by-id | Get a chat thread|
|[**aiThreadsGetMessageById**](#aithreadsgetmessagebyid) | **GET** /api/2.0/ai/threads/get-message-by-id | Get one chat message|
|[**aiThreadsList**](#aithreadslist) | **GET** /api/2.0/ai/threads/list | List chat threads|
|[**aiThreadsOpenOrCreate**](#aithreadsopenorcreate) | **POST** /api/2.0/ai/threads/open-or-create | Open or create|
|[**aiThreadsReadMessages**](#aithreadsreadmessages) | **GET** /api/2.0/ai/threads/read-messages | Read messages|
|[**aiThreadsRegenerateTitle**](#aithreadsregeneratetitle) | **POST** /api/2.0/ai/threads/regenerate-title | Regenerate title|
|[**aiThreadsRename**](#aithreadsrename) | **PUT** /api/2.0/ai/threads/rename | Rename a chat thread|
|[**aiThreadsTouch**](#aithreadstouch) | **POST** /api/2.0/ai/threads/touch | Bump a thread\'s activity|
|[**aiThreadsUpdateMessage**](#aithreadsupdatemessage) | **PUT** /api/2.0/ai/threads/update-message | Update message|

# **aiThreadsAppendUserMessage**
> AiThreadsAppendUserMessage200Response aiThreadsAppendUserMessage(aiThreadsAppendUserMessageRequest)

Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message\'s ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-append-user-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsAppendUserMessageRequest** | **AiThreadsAppendUserMessageRequest**|  | |


### Return type

**AiThreadsAppendUserMessage200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The stored message, with the ID storage assigned to it. |  -  |
|**400** | The message is longer than the limit allows. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsClearMessages**
> AiSuccessResponse aiThreadsClearMessages(body)

Removes every message of a thread while keeping the thread, its title and its model binding, and bumps its last-edit date. The messages are gone for good. Unlike `delete` this does not verify that the thread exists, so clearing an unknown `threadId` reports success rather than 404. The answer only confirms the write.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-clear-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the thread to empty, as a bare JSON string. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //The ID of the thread to empty, as a bare JSON string.

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
|**200** | Confirms the request was accepted. It does not mean the thread existed. |  -  |
|**400** | `threadId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsCreate**
> AiThread aiThreadsCreate(aiThreadsCreateRequest)

Creates a chat thread with a title supplied by the caller and returns it. A scoped thread requires that `entityId` names a room the caller can open, and a model has to resolve for the scope - an explicit `profileId`, or the room\'s `Chat` assignment - otherwise there is nothing to run the thread against and the call answers 404. In an agent room the agent\'s own assignment overrides any `profileId` sent with the request, so a thread there always starts on the agent\'s model. Use `POST api/2.0/ai/threads/open-or-create` instead when the title should be generated from the first user message.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsCreateRequest** | **AiThreadsCreateRequest**|  | |


### Return type

**AiThread**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The created thread. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it, so there is no model to run the thread against. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsDelete**
> AiSuccessResponse aiThreadsDelete(body)

Deletes a thread together with every message in it. The thread has to exist: unlike the other operations that take a `threadId`, this one checks first and answers 404 for an unknown or already-deleted thread rather than reporting success. The deletion is permanent and the messages cannot be recovered. To empty a thread but keep it, use `DELETE api/2.0/ai/threads/clear-messages`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the thread to delete, as a bare JSON string. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //The ID of the thread to delete, as a bare JSON string.

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
|**200** | Confirms the thread and its messages are gone. |  -  |
|**400** | `threadId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | No thread has this ID. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsDeleteMessage**
> AiSuccessResponse aiThreadsDeleteMessage(body)

Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-delete-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the message to delete, as a bare JSON string. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let body: string; //The ID of the message to delete, as a bare JSON string.

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
|**200** | Confirms the request was accepted, whether or not a message was deleted. |  -  |
|**400** | `messageId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsGetById**
> AiThread aiThreadsGetById()

Returns one thread by its ID, without its messages - read those with `GET api/2.0/ai/threads/read-messages`. `threadId` is required and an unknown one answers 404, so the result is never an empty body. The answer carries the thread\'s title, its model binding and its last-edit date. This is a read-only operation and does not bump that date.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | The chat thread identifier. | defaults to undefined|


### Return type

**AiThread**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The thread, without its messages. |  -  |
|**400** | `threadId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | No thread has this ID. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsGetMessageById**
> AiThreadMessageLike aiThreadsGetMessageById()

Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] | The globally unique chat message identifier. | defaults to undefined|


### Return type

**AiThreadMessageLike**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The message, or an empty body when no message has that ID. |  -  |
|**400** | `messageId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsList**
> Array<AiThread> aiThreadsList()

Lists the threads of a scope, most recently edited first, and searches their titles case-insensitively when `query` is given. Every parameter is optional: omitting `entityId` lists the global scope, and omitting `count` lets the engine apply its own page size. Pagination is by cursor, and the cursor is a JSON object passed as a string in the query - `{id: <last thread id>, lastEditDate: <its date>}` - taken from the last entry of the previous page. A cursor that is not valid JSON, or that lacks an `id`, is ignored rather than rejected, and the read silently starts from the first page again.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return in one page. | (optional) defaults to undefined|
| **cursor** | [**string**] | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | (optional) defaults to undefined|
| **query** | [**string**] | The full-text query the thread list is filtered by. | (optional) defaults to undefined|


### Return type

**Array<AiThread>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)
let count: number; //The maximum number of items to return in one page. (optional) (default to undefined)
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
|**200** | The threads of the scope, most recently edited first. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsOpenOrCreate**
> AiOpenOrCreateResult aiThreadsOpenOrCreate(aiThreadsOpenOrCreateRequest)

Opens a chat thread and returns it with its history, or creates one whose title is generated from the first message supplied in the request. That first message is not persisted: follow up with `POST api/2.0/ai/threads/append-user-message` to store it, or start the round directly with `POST api/2.0/ai/ai/send-with-stream`. Unlike `create` this takes a whole resolved `profile` object rather than an ID, and a request without one answers 404 because no model could be bound. A supplied `entityId` has to be a room the caller can open; anything that is not an agent room folds to the global scope instead of being rejected.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsOpenOrCreateRequest** | **AiThreadsOpenOrCreateRequest**|  | |


### Return type

**AiOpenOrCreateResult**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The thread that was opened or created, with its prior messages. A created one carries the generated title. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | The `entityId` names a room the caller cannot open, or no live AI profile is bound to it. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsReadMessages**
> Array<AiThreadMessageLike> aiThreadsReadMessages()

Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. Omitting `threadId` is not an error: the call answers 200 with an empty list, so an empty result does not distinguish a thread with no messages from a request that forgot the ID. A malformed cursor is ignored and the read starts from the beginning.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] | The chat thread identifier. | defaults to undefined|
| **count** | [**number**] | The maximum number of items to return in one page. | (optional) defaults to undefined|
| **cursor** | [**string**] | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | (optional) defaults to undefined|
| **direction** | [**string**] | The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read. | (optional) defaults to undefined|


### Return type

**Array<AiThreadMessageLike>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let threadId: string; //The chat thread identifier. (default to undefined)
let count: number; //The maximum number of items to return in one page. (optional) (default to undefined)
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
|**200** | The thread\'s messages, oldest first unless `direction` reversed them. An empty list also means the request carried no thread ID. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsRegenerateTitle**
> AiThreadsRegenerateTitle200Response aiThreadsRegenerateTitle(aiThreadsRegenerateTitleRequest)

Asks the model to produce a title from the thread\'s first user message, stores it, and returns the new title. Both `threadId` and a resolved `profile` object are required; a thread with no user message yet has nothing to title and fails. This costs a model call, unlike `POST api/2.0/ai/threads/rename`, which just stores the string it is given. An `entityMeta` sent with the request is only read for its `entityId` hint - the source itself is resolved server-side under the caller\'s credentials, so a client cannot attribute the call to somebody else\'s room.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-regenerate-title/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsRegenerateTitleRequest** | **AiThreadsRegenerateTitleRequest**|  | |


### Return type

**AiThreadsRegenerateTitle200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The newly generated title, already stored on the thread. |  -  |
|**400** | `threadId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsRename**
> AiSuccessResponse aiThreadsRename(aiThreadsRenameRequest)

Replaces a thread\'s title with the one supplied and bumps its last-edit date. Both `threadId` and a title with at least one non-whitespace character are required - a blank title is rejected rather than silently stored, so a thread cannot end up nameless. The answer only confirms the write. To have the model produce a title instead of supplying one, use `POST api/2.0/ai/threads/regenerate-title`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-rename/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsRenameRequest** | **AiThreadsRenameRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | Confirms the new title was stored. |  -  |
|**400** | `threadId` or the new title is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsTouch**
> AiSuccessResponse aiThreadsTouch(aiThreadsTouchRequest)

Bumps a thread\'s last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-touch/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsTouchRequest** | **AiThreadsTouchRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | Confirms the thread\'s activity date moved forward. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiThreadsUpdateMessage**
> AiSuccessResponse aiThreadsUpdateMessage(aiThreadsUpdateMessageRequest)

Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object. Neither the ID nor the payload is validated here, so a malformed request surfaces as an error relayed from storage rather than as a 400. The answer only confirms the write.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-update-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiThreadsUpdateMessageRequest** | **AiThreadsUpdateMessageRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | Confirms the replacement was stored. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

