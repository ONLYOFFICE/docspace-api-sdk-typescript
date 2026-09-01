# OpenAIPassthroughApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiOpenaiChatCompletions**](#aiopenaichatcompletions) | **POST** /api/2.0/ai/openai/{profileId}/v1/chat/completions | OpenAI-compatible chat completions proxied to the profile\'s provider|
|[**aiOpenaiImagesGenerations**](#aiopenaiimagesgenerations) | **POST** /api/2.0/ai/openai/{profileId}/v1/images/generations | OpenAI-compatible image generation proxied to the profile\'s provider|

# **aiOpenaiChatCompletions**
> AiSuccessResponse aiOpenaiChatCompletions(requestBody)

OpenAI-compatible chat completions for the document editor\'s AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider verbatim - the payload is owned by the plugin\'s SDK on one end and the provider on the other. A client disconnect cancels the provider call.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-chat-completions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **profileId** | [**string**] | The AI provider profile identifier. | defaults to undefined|


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIOpenAIPassthroughApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIOpenAIPassthroughApi(configuration);

let profileId: string; //The AI provider profile identifier. (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.aiOpenaiChatCompletions(
    profileId,
    requestBody
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

# **aiOpenaiImagesGenerations**
> AiSuccessResponse aiOpenaiImagesGenerations(requestBody)

OpenAI-compatible image generation for the document editor\'s AI plugin. As with the chat-completions passthrough, the profile\'s credentials are attached server-side and the body reaches the provider unchanged.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-openai-images-generations/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **profileId** | [**string**] | The AI provider profile identifier. | defaults to undefined|


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIOpenAIPassthroughApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIOpenAIPassthroughApi(configuration);

let profileId: string; //The AI provider profile identifier. (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.aiOpenaiImagesGenerations(
    profileId,
    requestBody
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

