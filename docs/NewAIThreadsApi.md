# ThreadsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiThreadsAppendUserMessage**](#newaithreadsappendusermessage) | **POST** /api/2.0/new-ai/threads/append-user-message | Append user message|
|[**newAiThreadsClearMessages**](#newaithreadsclearmessages) | **DELETE** /api/2.0/new-ai/threads/clear-messages | Clear messages|
|[**newAiThreadsCreate**](#newaithreadscreate) | **POST** /api/2.0/new-ai/threads/create | Create|
|[**newAiThreadsDelete**](#newaithreadsdelete) | **DELETE** /api/2.0/new-ai/threads/delete | Delete|
|[**newAiThreadsDeleteMessage**](#newaithreadsdeletemessage) | **DELETE** /api/2.0/new-ai/threads/delete-message | Delete message|
|[**newAiThreadsGetById**](#newaithreadsgetbyid) | **GET** /api/2.0/new-ai/threads/get-by-id | Get by id|
|[**newAiThreadsGetMessageById**](#newaithreadsgetmessagebyid) | **GET** /api/2.0/new-ai/threads/get-message-by-id | Get message by id|
|[**newAiThreadsList**](#newaithreadslist) | **GET** /api/2.0/new-ai/threads/list | List|
|[**newAiThreadsOpenOrCreate**](#newaithreadsopenorcreate) | **POST** /api/2.0/new-ai/threads/open-or-create | Open or create|
|[**newAiThreadsReadMessages**](#newaithreadsreadmessages) | **GET** /api/2.0/new-ai/threads/read-messages | Read messages|
|[**newAiThreadsRegenerateTitle**](#newaithreadsregeneratetitle) | **POST** /api/2.0/new-ai/threads/regenerate-title | Regenerate title|
|[**newAiThreadsRename**](#newaithreadsrename) | **PUT** /api/2.0/new-ai/threads/rename | Rename|
|[**newAiThreadsTouch**](#newaithreadstouch) | **POST** /api/2.0/new-ai/threads/touch | Touch|
|[**newAiThreadsUpdateMessage**](#newaithreadsupdatemessage) | **PUT** /api/2.0/new-ai/threads/update-message | Update message|

# **newAiThreadsAppendUserMessage**
> NewAiThreadMessageLike newAiThreadsAppendUserMessage(newAiThreadsAppendUserMessageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-append-user-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsAppendUserMessageRequest** | **NewAiThreadsAppendUserMessageRequest**|  | |


### Return type

**NewAiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsAppendUserMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsAppendUserMessageRequest: NewAiThreadsAppendUserMessageRequest; //

const { status, data } = await apiInstance.newAiThreadsAppendUserMessage(
    newAiThreadsAppendUserMessageRequest
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

# **newAiThreadsClearMessages**
> NewAiSuccessResponse newAiThreadsClearMessages(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-clear-messages/).

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
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiThreadsClearMessages(
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

# **newAiThreadsCreate**
> NewAiThread newAiThreadsCreate(newAiThreadsCreateRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsCreateRequest** | **NewAiThreadsCreateRequest**|  | |


### Return type

**NewAiThread**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsCreateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsCreateRequest: NewAiThreadsCreateRequest; //

const { status, data } = await apiInstance.newAiThreadsCreate(
    newAiThreadsCreateRequest
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

# **newAiThreadsDelete**
> NewAiSuccessResponse newAiThreadsDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete/).

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
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiThreadsDelete(
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

# **newAiThreadsDeleteMessage**
> NewAiSuccessResponse newAiThreadsDeleteMessage(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-delete-message/).

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
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiThreadsDeleteMessage(
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

# **newAiThreadsGetById**
> NewAiThread newAiThreadsGetById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] |  | defaults to undefined|


### Return type

**NewAiThread**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let threadId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiThreadsGetById(
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

# **newAiThreadsGetMessageById**
> NewAiThreadMessageLike newAiThreadsGetMessageById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-get-message-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**NewAiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiThreadsGetMessageById(
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

# **newAiThreadsList**
> Array<NewAiThread> newAiThreadsList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**Array<NewAiThread>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiThreadsList(
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

# **newAiThreadsOpenOrCreate**
> NewAiOpenOrCreateResult newAiThreadsOpenOrCreate(newAiOpenOrCreateInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-open-or-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiOpenOrCreateInput** | **NewAiOpenOrCreateInput**|  | |


### Return type

**NewAiOpenOrCreateResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiOpenOrCreateInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiOpenOrCreateInput: NewAiOpenOrCreateInput; //

const { status, data } = await apiInstance.newAiThreadsOpenOrCreate(
    newAiOpenOrCreateInput
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

# **newAiThreadsReadMessages**
> Array<NewAiThreadMessageLike> newAiThreadsReadMessages()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-read-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **threadId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **startIndex** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<NewAiThreadMessageLike>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let threadId: string; // (default to undefined)
let limit: number; // (optional) (default to undefined)
let startIndex: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.newAiThreadsReadMessages(
    threadId,
    limit,
    startIndex
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

# **newAiThreadsRegenerateTitle**
> string newAiThreadsRegenerateTitle(newAiThreadsRegenerateTitleRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-regenerate-title/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsRegenerateTitleRequest** | **NewAiThreadsRegenerateTitleRequest**|  | |


### Return type

**string**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsRegenerateTitleRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsRegenerateTitleRequest: NewAiThreadsRegenerateTitleRequest; //

const { status, data } = await apiInstance.newAiThreadsRegenerateTitle(
    newAiThreadsRegenerateTitleRequest
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

# **newAiThreadsRename**
> NewAiSuccessResponse newAiThreadsRename(newAiThreadsRenameRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-rename/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsRenameRequest** | **NewAiThreadsRenameRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsRenameRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsRenameRequest: NewAiThreadsRenameRequest; //

const { status, data } = await apiInstance.newAiThreadsRename(
    newAiThreadsRenameRequest
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

# **newAiThreadsTouch**
> NewAiSuccessResponse newAiThreadsTouch(newAiThreadsTouchRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-touch/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsTouchRequest** | **NewAiThreadsTouchRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsTouchRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsTouchRequest: NewAiThreadsTouchRequest; //

const { status, data } = await apiInstance.newAiThreadsTouch(
    newAiThreadsTouchRequest
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

# **newAiThreadsUpdateMessage**
> NewAiSuccessResponse newAiThreadsUpdateMessage(newAiThreadsUpdateMessageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-threads-update-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiThreadsUpdateMessageRequest** | **NewAiThreadsUpdateMessageRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIThreadsApi,
    Configuration,
    NewAiThreadsUpdateMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIThreadsApi(configuration);

let newAiThreadsUpdateMessageRequest: NewAiThreadsUpdateMessageRequest; //

const { status, data } = await apiInstance.newAiThreadsUpdateMessage(
    newAiThreadsUpdateMessageRequest
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

