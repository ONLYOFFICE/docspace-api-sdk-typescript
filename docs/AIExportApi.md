# ExportApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiExportTextToDocx**](#aiexporttexttodocx) | **POST** /api/2.0/ai/text-to-docx | Start markdown export|

# **aiExportTextToDocx**
> AiExportTextToDocx202Response aiExportTextToDocx(aiExportTextToDocxRequest)

Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiExportTextToDocxRequest** | **AiExportTextToDocxRequest**|  | |


### Return type

**AiExportTextToDocx202Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**202** | Confirms the export was queued. The file arrives in the target folder later, announced by a folder-modified socket event. |  -  |
|**400** | `title`, `content` or `folderId` is missing, or `format` is not one of `Docx`, `Pdf`, `Md`. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. |  -  |
|**413** | The transcript is larger than 15 MB, this route\'s own parser limit. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

