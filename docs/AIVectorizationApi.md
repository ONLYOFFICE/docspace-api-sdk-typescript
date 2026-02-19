# VectorizationApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**startTask**](#starttask) | **POST** /api/2.0/ai/vectorization/tasks | Start a vectorization task|

# **startTask**
> startTask(vectorizationStartRequestBody)

Submits the specified files for vectorization. Each file is processed asynchronously by the configured embedding provider  and indexed for semantic search in AI chat sessions. Only files accessible to the current user can be vectorized.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-task/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vectorizationStartRequestBody** | **VectorizationStartRequestBody**| The vectorization parameters including file identifiers. | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIVectorizationApi,
    Configuration,
    VectorizationStartRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIVectorizationApi(configuration);

let vectorizationStartRequestBody: VectorizationStartRequestBody; //The vectorization parameters including file identifiers.

const { status, data } = await apiInstance.startTask(
    vectorizationStartRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The vectorization task was successfully submitted |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

