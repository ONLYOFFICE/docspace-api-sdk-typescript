# AIApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAiApproveToolCall**](#aiaiapprovetoolcall) | **POST** /api/2.0/ai/ai/approve-tool-call | Approve tool call|
|[**aiAiDenyToolCall**](#aiaidenytoolcall) | **POST** /api/2.0/ai/ai/deny-tool-call | Deny tool call|
|[**aiAiRegenerateStream**](#aiairegeneratestream) | **POST** /api/2.0/ai/ai/regenerate-stream | Regenerate stream|
|[**aiAiSend**](#aiaisend) | **POST** /api/2.0/ai/ai/send | Send|
|[**aiAiSendCustom**](#aiaisendcustom) | **POST** /api/2.0/ai/ai/send-custom | Send custom|
|[**aiAiSendWithStream**](#aiaisendwithstream) | **POST** /api/2.0/ai/ai/send-with-stream | Send with stream|
|[**aiAiSendWithStreamOpenAI**](#aiaisendwithstreamopenai) | **POST** /api/2.0/ai/ai/send-with-stream-openai | Send with stream open ai|

# **aiAiApproveToolCall**
> AiChatEvent aiAiApproveToolCall(aiAiApproveToolCallRequest)

Resumes a chat round paused on a tool call. The supplied result is persisted onto the assistant message that issued the call and the stream continues with the augmented history.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-approve-tool-call/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiApproveToolCallRequest** | **AiAiApproveToolCallRequest**|  | |


### Return type

**AiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiApproveToolCallRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiApproveToolCallRequest: AiAiApproveToolCallRequest; //

const { status, data } = await apiInstance.aiAiApproveToolCall(
    aiAiApproveToolCallRequest
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

# **aiAiDenyToolCall**
> AiChatEvent aiAiDenyToolCall(aiAiToolCallData)

Denies the pending tool call and resumes the chat immediately, with `User deny tool call` standing in for the tool result.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-deny-tool-call/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiToolCallData** | **AiAiToolCallData**|  | |


### Return type

**AiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiToolCallData
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiToolCallData: AiAiToolCallData; //

const { status, data } = await apiInstance.aiAiDenyToolCall(
    aiAiToolCallData
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

# **aiAiRegenerateStream**
> AiChatEvent aiAiRegenerateStream(aiAiRegenerateStreamRequest)

Re-rolls the last assistant reply in an existing thread: every message after the last user message (the previous reply plus any tool-call hops) is dropped and a fresh reply is streamed against the unchanged prompt. The thread must already exist and no title is generated.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-regenerate-stream/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiRegenerateStreamRequest** | **AiAiRegenerateStreamRequest**|  | |


### Return type

**AiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiRegenerateStreamRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiRegenerateStreamRequest: AiAiRegenerateStreamRequest; //

const { status, data } = await apiInstance.aiAiRegenerateStream(
    aiAiRegenerateStreamRequest
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

# **aiAiSend**
> AiThreadMessageLike aiAiSend(aiAiSendRequest)

Runs one AI action: the profile bound to `actionType` (falling back to the `Default` slot) is dispatched against a single-message history. Nothing is persisted - no thread, no title generation, no storage writes.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiSendRequest** | **AiAiSendRequest**|  | |


### Return type

**AiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiSendRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiSendRequest: AiAiSendRequest; //

const { status, data } = await apiInstance.aiAiSend(
    aiAiSendRequest
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

# **aiAiSendCustom**
> AiThreadMessageLike aiAiSendCustom(aiAiSendCustomRequest)

Runs a free-form one-turn call against a caller-supplied system prompt. No thread, no history and no persistence. The profile is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-custom/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiSendCustomRequest** | **AiAiSendCustomRequest**|  | |


### Return type

**AiThreadMessageLike**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiSendCustomRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiSendCustomRequest: AiAiSendCustomRequest; //

const { status, data } = await apiInstance.aiAiSendCustom(
    aiAiSendCustomRequest
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

# **aiAiSendWithStream**
> AiChatEvent aiAiSendWithStream(aiAiSendStreamBody)

Starts a chat round and streams it back as newline-delimited `ChatEvent` objects. The thread is opened or created, the user message and the reply are persisted, a new thread gets a generated title, and a tool call pauses the round until it is approved or denied.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiSendStreamBody** | **AiAiSendStreamBody**|  | |


### Return type

**AiChatEvent**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiSendStreamBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiSendStreamBody: AiAiSendStreamBody; //

const { status, data } = await apiInstance.aiAiSendWithStream(
    aiAiSendStreamBody
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

# **aiAiSendWithStreamOpenAI**
> AiOpenAIStreamChunk aiAiSendWithStreamOpenAI(aiAiSendStreamBody)

The same chat round as `send-with-stream`, re-encoded as an OpenAI Chat Completions stream of `chat.completion.chunk` objects. Storage, title generation and tool-call pauses are identical - only the wire shape differs; a tool call ends the stream with `finish_reason: tool_calls`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-ai-send-with-stream-open-ai/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAiSendStreamBody** | **AiAiSendStreamBody**|  | |


### Return type

**AiOpenAIStreamChunk**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAIApi,
    Configuration,
    AiAiSendStreamBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAIApi(configuration);

let aiAiSendStreamBody: AiAiSendStreamBody; //

const { status, data } = await apiInstance.aiAiSendWithStreamOpenAI(
    aiAiSendStreamBody
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

