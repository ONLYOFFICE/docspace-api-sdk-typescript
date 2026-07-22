# ExportApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiExportTextToDocx**](#newaiexporttexttodocx) | **POST** /api/2.0/new-ai/text-to-docx | Start markdown → docx export|

# **newAiExportTextToDocx**
> NewAiExportTextToDocx200Response newAiExportTextToDocx(newAiExportTextToDocxRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-export-text-to-docx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiExportTextToDocxRequest** | **NewAiExportTextToDocxRequest**|  | |


### Return type

**NewAiExportTextToDocx200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIExportApi,
    Configuration,
    NewAiExportTextToDocxRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIExportApi(configuration);

let newAiExportTextToDocxRequest: NewAiExportTextToDocxRequest; //

const { status, data } = await apiInstance.newAiExportTextToDocx(
    newAiExportTextToDocxRequest
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

