# OpenAIPassthroughApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiOpenaiChatCompletions**](#aiopenaichatcompletions) | **POST** /api/2.0/ai/openai/{profileId}/v1/chat/completions | OpenAI chat completions passthrough|
|[**aiOpenaiImagesGenerations**](#aiopenaiimagesgenerations) | **POST** /api/2.0/ai/openai/{profileId}/v1/images/generations | OpenAI image generation passthrough|

# **aiOpenaiChatCompletions**
> { [key: string]: any | null; } aiOpenaiChatCompletions(aiOpenaiChatCompletionsRequest)

OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-chat-completions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiOpenaiChatCompletionsRequest** | **{ [key: string]: any | null; }**| An OpenAI Chat Completions request, forwarded to the provider byte for byte. The shape is the provider\'s, not this API\'s, so consult the provider\'s own reference; the model and the credentials come from the profile in the path and must not be sent here. | |
| **profileId** | [**string**] | The AI provider profile identifier. | defaults to undefined|


### Return type

**{ [key: string]: any | null; }**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIOpenAIPassthroughApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIOpenAIPassthroughApi(configuration);

let profileId: string; //The AI provider profile identifier. (default to undefined)
let aiOpenaiChatCompletionsRequest: { [key: string]: any | null; }; //An OpenAI Chat Completions request, forwarded to the provider byte for byte. The shape is the provider\'s, not this API\'s, so consult the provider\'s own reference; the model and the credentials come from the profile in the path and must not be sent here.

const { status, data } = await apiInstance.aiOpenaiChatCompletions(
    profileId,
    aiOpenaiChatCompletionsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The provider\'s own response, relayed verbatim with its status and content type. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**404** | No profile with this identifier exists for the caller. |  -  |
|**413** | The request body is larger than this route accepts. |  -  |
|**429** | Relayed verbatim from the AI provider, which is rate-limiting this portal\'s key. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |
|**502** | The AI provider could not be reached, or answered with a failure of its own. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiOpenaiImagesGenerations**
> { [key: string]: any | null; } aiOpenaiImagesGenerations(aiOpenaiImagesGenerationsRequest)

OpenAI-compatible image generation for the document editor\'s AI plugin, working exactly as the chat-completions passthrough does: the profile named by `profileId` is resolved server-side, its credentials are attached, and the body reaches the provider unchanged. The provider\'s status and body are relayed verbatim, so its 429 and its own error envelope surface as they stand. A body larger than this route accepts is refused before it is forwarded. A client disconnect aborts the provider call.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-images-generations/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiOpenaiImagesGenerationsRequest** | **{ [key: string]: any | null; }**| An OpenAI image-generation request, forwarded to the provider byte for byte. The shape is the provider\'s, not this API\'s, and the credentials come from the profile in the path. | |
| **profileId** | [**string**] | The AI provider profile identifier. | defaults to undefined|


### Return type

**{ [key: string]: any | null; }**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIOpenAIPassthroughApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIOpenAIPassthroughApi(configuration);

let profileId: string; //The AI provider profile identifier. (default to undefined)
let aiOpenaiImagesGenerationsRequest: { [key: string]: any | null; }; //An OpenAI image-generation request, forwarded to the provider byte for byte. The shape is the provider\'s, not this API\'s, and the credentials come from the profile in the path.

const { status, data } = await apiInstance.aiOpenaiImagesGenerations(
    profileId,
    aiOpenaiImagesGenerationsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The provider\'s own response, relayed verbatim with its status and content type. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**404** | No profile with this identifier exists for the caller. |  -  |
|**413** | The request body is larger than this route accepts. |  -  |
|**429** | Relayed verbatim from the AI provider, which is rate-limiting this portal\'s key. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |
|**502** | The AI provider could not be reached, or answered with a failure of its own. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

