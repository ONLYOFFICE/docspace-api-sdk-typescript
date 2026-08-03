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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] |  | defaults to undefined|


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

let threadId: string; // (default to undefined)

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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-get-message-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


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

let messageId: string; // (default to undefined)

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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|
| **count** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] |  | defaults to undefined|
| **query** | [**string**] |  | defaults to undefined|


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

let entityId: string; // (default to undefined)
let count: string; // (default to undefined)
let cursor: string; // (default to undefined)
let query: string; // (default to undefined)

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
> AiOpenOrCreateResult aiThreadsOpenOrCreate(aiOpenOrCreateInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-open-or-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiOpenOrCreateInput** | **AiOpenOrCreateInput**|  | |


### Return type

**AiOpenOrCreateResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIThreadsApi,
    Configuration,
    AiOpenOrCreateInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIThreadsApi(configuration);

let aiOpenOrCreateInput: AiOpenOrCreateInput; //

const { status, data } = await apiInstance.aiThreadsOpenOrCreate(
    aiOpenOrCreateInput
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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-threads-read-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] |  | defaults to undefined|
| **count** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] |  | defaults to undefined|


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

let threadId: string; // (default to undefined)
let count: string; // (default to undefined)
let cursor: string; // (default to undefined)

const { status, data } = await apiInstance.aiThreadsReadMessages(
    threadId,
    count,
    cursor
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

