# VectorizationApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiVectorizationStartTask**](#newaivectorizationstarttask) | **POST** /api/2.0/ai/vectorization/tasks | Start a vectorization task|

# **newAiVectorizationStartTask**
> NewAiSuccessResponse newAiVectorizationStartTask(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-vectorization-start-task/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIVectorizationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIVectorizationApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.newAiVectorizationStartTask(
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

