# AIApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiAiApproveToolCall**](#newaiaiapprovetoolcall) | **POST** /api/2.0/new-ai/ai/approve-tool-call | Approve tool call|
|[**newAiAiDenyToolCall**](#newaiaidenytoolcall) | **POST** /api/2.0/new-ai/ai/deny-tool-call | Deny tool call|
|[**newAiAiRegenerateStream**](#newaiairegeneratestream) | **POST** /api/2.0/new-ai/ai/regenerate-stream | Regenerate stream|
|[**newAiAiSend**](#newaiaisend) | **POST** /api/2.0/new-ai/ai/send | Send|
|[**newAiAiSendCustom**](#newaiaisendcustom) | **POST** /api/2.0/new-ai/ai/send-custom | Send custom|
|[**newAiAiSendWithStream**](#newaiaisendwithstream) | **POST** /api/2.0/new-ai/ai/send-with-stream | Send with stream|
|[**newAiAiSendWithStreamOpenAI**](#newaiaisendwithstreamopenai) | **POST** /api/2.0/new-ai/ai/send-with-stream-openai | Send with stream open ai|

# **newAiAiApproveToolCall**
> NewAiChatEvent newAiAiApproveToolCall(newAiAiApproveToolCallRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-approve-tool-call/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiApproveToolCallRequest** | **NewAiAiApproveToolCallRequest**|  | |


### Return type

**NewAiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiApproveToolCallRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiApproveToolCallRequest: NewAiAiApproveToolCallRequest; //

const { status, data } = await apiInstance.newAiAiApproveToolCall(
    newAiAiApproveToolCallRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/x-ndjson, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiAiDenyToolCall**
> NewAiChatEvent newAiAiDenyToolCall(newAiAiToolCallData)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-deny-tool-call/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiToolCallData** | **NewAiAiToolCallData**|  | |


### Return type

**NewAiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiToolCallData
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiToolCallData: NewAiAiToolCallData; //

const { status, data } = await apiInstance.newAiAiDenyToolCall(
    newAiAiToolCallData
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/x-ndjson, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiAiRegenerateStream**
> NewAiChatEvent newAiAiRegenerateStream(newAiAiRegenerateStreamRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-regenerate-stream/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiRegenerateStreamRequest** | **NewAiAiRegenerateStreamRequest**|  | |


### Return type

**NewAiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiRegenerateStreamRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiRegenerateStreamRequest: NewAiAiRegenerateStreamRequest; //

const { status, data } = await apiInstance.newAiAiRegenerateStream(
    newAiAiRegenerateStreamRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/x-ndjson, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiAiSend**
> NewAiThreadMessageLike newAiAiSend(newAiAiSendRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiSendRequest** | **NewAiAiSendRequest**|  | |


### Return type

**NewAiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiSendRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiSendRequest: NewAiAiSendRequest; //

const { status, data } = await apiInstance.newAiAiSend(
    newAiAiSendRequest
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

# **newAiAiSendCustom**
> NewAiThreadMessageLike newAiAiSendCustom(newAiAiSendCustomRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-custom/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiSendCustomRequest** | **NewAiAiSendCustomRequest**|  | |


### Return type

**NewAiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiSendCustomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiSendCustomRequest: NewAiAiSendCustomRequest; //

const { status, data } = await apiInstance.newAiAiSendCustom(
    newAiAiSendCustomRequest
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

# **newAiAiSendWithStream**
> NewAiChatEvent newAiAiSendWithStream(newAiAiSendStreamBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiSendStreamBody** | **NewAiAiSendStreamBody**|  | |


### Return type

**NewAiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiSendStreamBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiSendStreamBody: NewAiAiSendStreamBody; //

const { status, data } = await apiInstance.newAiAiSendWithStream(
    newAiAiSendStreamBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/x-ndjson, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiAiSendWithStreamOpenAI**
> NewAiOpenAIStreamChunk newAiAiSendWithStreamOpenAI(newAiAiSendStreamBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-ai-send-with-stream-open-ai/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAiSendStreamBody** | **NewAiAiSendStreamBody**|  | |


### Return type

**NewAiOpenAIStreamChunk**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAIApi,
    Configuration,
    NewAiAiSendStreamBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAIApi(configuration);

let newAiAiSendStreamBody: NewAiAiSendStreamBody; //

const { status, data } = await apiInstance.newAiAiSendWithStreamOpenAI(
    newAiAiSendStreamBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server-sent events stream of OpenAI `chat.completion.chunk` objects, terminated by a `[DONE]` sentinel. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

