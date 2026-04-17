# MessagesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**exportMessage**](#exportmessage) | **POST** /api/2.0/ai/messages/{messageId}/export | Export a single AI message to a document|

# **exportMessage**
> exportMessage(exportMessageRequestBody)

Exports a specific AI chat message as a document into the specified folder. The system verifies that the message exists  and belongs to a chat accessible by the current user, then publishes an asynchronous export task to the event bus.  The exported document will be created in the target folder with the given title once the background task completes.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/export-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exportMessageRequestBody** | **ExportMessageRequestBody**| The export parameters including destination folder and file title. | |
| **messageId** | [**number**] | The unique identifier of the AI chat message to export. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIMessagesApi,
    Configuration,
    ExportMessageRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIMessagesApi(configuration);

let messageId: number; //The unique identifier of the AI chat message to export. (default to undefined)
let exportMessageRequestBody: ExportMessageRequestBody; //The export parameters including destination folder and file title.

const { status, data } = await apiInstance.exportMessage(
    messageId,
    exportMessageRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The message export task has been successfully queued for background processing |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The message identifier is invalid (must be greater than 0) |  -  |
|**404** | The specified message was not found or the current user does not have access to it |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

