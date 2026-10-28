# VectorizationApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiVectorizationStartTask**](#aivectorizationstarttask) | **POST** /api/2.0/ai/vectorization/tasks | Start a vectorization task|

# **aiVectorizationStartTask**
> AiVectorizationStartTask200Response aiVectorizationStartTask(aiVectorizationStartTaskRequest)

Queues the indexing of the portal files named in the body so their contents can be retrieved during a chat round. The body is proxied unchanged to the DocSpace AI service, which validates it and owns the job. Indexing is asynchronous and fire-and-forget: the answer acknowledges the request without carrying a job handle, so there is nothing to poll and progress is not reported here. The embedding provider used is the one in `GET api/2.0/ai/config/vectorization`, and changing that setting does not re-index anything already indexed - queue it again for that.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-vectorization-start-task/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiVectorizationStartTaskRequest** | **AiVectorizationStartTaskRequest**| The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape. | |


### Return type

**AiVectorizationStartTask200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIVectorizationApi,
    Configuration,
    AiVectorizationStartTaskRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIVectorizationApi(configuration);

let aiVectorizationStartTaskRequest: AiVectorizationStartTaskRequest; //The files to index, proxied unchanged to the DocSpace AI service, which owns and validates the shape.

const { status, data } = await apiInstance.aiVectorizationStartTask(
    aiVectorizationStartTaskRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the indexing was queued. It carries no job handle, so there is nothing to poll. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

