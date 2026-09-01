# ExportApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiExportTextToDocx**](#aiexporttexttodocx) | **POST** /api/2.0/ai/text-to-docx | Start markdown → docx export|

# **aiExportTextToDocx**
> AiExportTextToDocx200Response aiExportTextToDocx(aiExportTextToDocxRequest)

Starts an asynchronous markdown-to-docx export. The response only acknowledges the task: the AI Worker converts the content and saves the .docx into the target folder (an agent room resolves to its result-storage subfolder), and completion reaches the client as the usual folder-modified socket event.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiExportTextToDocxRequest** | **AiExportTextToDocxRequest**|  | |


### Return type

**AiExportTextToDocx200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    AIExportApi,
    Configuration,
    AiExportTextToDocxRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIExportApi(configuration);

let aiExportTextToDocxRequest: AiExportTextToDocxRequest; //

const { status, data } = await apiInstance.aiExportTextToDocx(
    aiExportTextToDocxRequest
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

