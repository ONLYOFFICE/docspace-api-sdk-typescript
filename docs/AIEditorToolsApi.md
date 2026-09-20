# EditorToolsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiEditorToolsCall**](#aieditortoolscall) | **POST** /api/2.0/ai/editor-tools/call | Call an editor tool|
|[**aiEditorToolsList**](#aieditortoolslist) | **GET** /api/2.0/ai/editor-tools/list | List editor tools|

# **aiEditorToolsCall**
> AiEditorToolsCall200Response aiEditorToolsCall(aiEditorToolsCallRequest)

Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and under the caller\'s own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiEditorToolsCallRequest** | **AiEditorToolsCallRequest**| The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool\'s input schema, and an optional `entityId` for the room to run it in. | |


### Return type

**AiEditorToolsCall200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIEditorToolsApi,
    Configuration,
    AiEditorToolsCallRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIEditorToolsApi(configuration);

let aiEditorToolsCallRequest: AiEditorToolsCallRequest; //The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool\'s input schema, and an optional `entityId` for the room to run it in.

const { status, data } = await apiInstance.aiEditorToolsCall(
    aiEditorToolsCallRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The tool\'s output as a string. A tool that failed reports it inside that string. |  -  |
|**400** | The tool name is not one this portal exposes. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiEditorToolsList**
> AiEditorToolsList200Response aiEditorToolsList()

Returns the catalogue of DocSpace tools the document editor\'s AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiEditorToolsList200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIEditorToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIEditorToolsApi(configuration);

const { status, data } = await apiInstance.aiEditorToolsList();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The tools the editor plugin may offer the model, four fields each. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

