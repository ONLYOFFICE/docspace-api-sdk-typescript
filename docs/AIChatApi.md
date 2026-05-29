# ChatApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**continueChat**](#continuechat) | **POST** /api/2.0/ai/chats/{chatId}/messages | Send a message to an existing AI chat|
|[**deleteChat**](#deletechat) | **DELETE** /api/2.0/ai/chats/{chatId} | Delete an AI chat|
|[**exportChat**](#exportchat) | **POST** /api/2.0/ai/chats/{chatId}/messages/export | Export AI chat messages to a file|
|[**getChat**](#getchat) | **GET** /api/2.0/ai/chats/{chatId} | Get an AI chat by ID|
|[**getChatModels**](#getchatmodels) | **GET** /api/2.0/ai/chats/models | Get available AI models|
|[**getChats**](#getchats) | **GET** /api/2.0/ai/rooms/{roomId}/chats | Get AI chats in a room|
|[**getMessages**](#getmessages) | **GET** /api/2.0/ai/chats/{chatId}/messages | Get messages of an AI chat|
|[**getUserChatsSettings**](#getuserchatssettings) | **GET** /api/2.0/ai/rooms/{roomId}/chats/config | Get user chat settings for a room|
|[**providePermission**](#providepermission) | **POST** /api/2.0/ai/chats/tool-permissions/{callId}/decision | Submit a tool execution permission decision|
|[**renameChat**](#renamechat) | **PUT** /api/2.0/ai/chats/{chatId} | Rename an AI chat|
|[**resolveEditorTool**](#resolveeditortool) | **POST** /api/2.0/ai/chats/tool-files/{callId}/decision | Resolve a pending editor file-generation tool|
|[**setUserChatsSettings**](#setuserchatssettings) | **PUT** /api/2.0/ai/rooms/{roomId}/chats/config | Update user chat settings for a room|
|[**startNewChat**](#startnewchat) | **POST** /api/2.0/ai/rooms/{roomId}/chats | Start a new AI chat|

# **continueChat**
> continueChat(continueChatBody)

Appends a new user message to an existing chat session and streams the AI assistant\'s response.  The full conversation history of the chat is sent to the AI provider to maintain context.  The response is delivered as a Server-Sent Events (SSE) stream with periodic keep-alive pings.  File references can optionally be attached to provide additional context.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/continue-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **continueChatBody** | **ContinueChatBody**| The message and optional file attachments. | |
| **chatId** | [**string**] | The unique identifier of the existing AI chat session to continue. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    ContinueChatBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the existing AI chat session to continue. (default to undefined)
let continueChatBody: ContinueChatBody; //The message and optional file attachments.

const { status, data } = await apiInstance.continueChat(
    chatId,
    continueChatBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SSE stream of ChatCompletion events (text/event-stream) |  -  |
|**400** | The message is empty or one or more file attachments could not be processed |  -  |
|**403** | You don\'t have enough permission to access the chat in this room |  -  |
|**404** | The specified chat, room, or AI provider was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteChat**
> deleteChat()

Permanently deletes an AI chat session along with all of its messages.  Only the chat owner can delete their own chat sessions. This action cannot be undone.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | The unique identifier of the AI chat session to delete. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the AI chat session to delete. (default to undefined)

const { status, data } = await apiInstance.deleteChat(
    chatId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The chat was successfully deleted |  -  |
|**404** | The chat with the specified ID was not found or does not belong to the current user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportChat**
> exportChat(exportChatRequestBody)

Exports the entire message history of an AI chat session and saves it as a document in the specified folder.  The exported file is created with the provided title. Only the chat owner can export their own chat sessions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/export-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exportChatRequestBody** | **ExportChatRequestBody**| The export parameters including destination folder and file title. | |
| **chatId** | [**string**] | The unique identifier of the AI chat session to export. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    ExportChatRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the AI chat session to export. (default to undefined)
let exportChatRequestBody: ExportChatRequestBody; //The export parameters including destination folder and file title.

const { status, data } = await apiInstance.exportChat(
    chatId,
    exportChatRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The chat messages were successfully exported to the specified folder |  -  |
|**404** | The chat with the specified ID was not found or does not belong to the current user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChat**
> ChatWrapper getChat()

Retrieves the metadata of a single AI chat session, including its title, creation date, and the user who created it.  Only the chat owner can access their own chat sessions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | The unique identifier of the AI chat session to retrieve. | defaults to undefined|


### Return type

**ChatWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the AI chat session to retrieve. (default to undefined)

const { status, data } = await apiInstance.getChat(
    chatId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chat session details |  -  |
|**404** | The chat with the specified ID was not found or does not belong to the current user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChatModels**
> ModelArrayWrapper getChatModels()

Returns the list of AI models available for chat conversations.  Optionally filters the results to models from a specific provider when the provider query parameter is specified.  Each model entry includes the provider ID, provider display name, and the model identifier.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chat-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**number**] | The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned. | (optional) defaults to undefined|


### Return type

**ModelArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let provider: number; //The optional AI provider identifier to filter models by. When set to 0, models from all providers are returned. (optional) (default to undefined)

const { status, data } = await apiInstance.getChatModels(
    provider
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available AI models |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChats**
> ChatArrayWrapper getChats()

Returns a paginated list of AI chat sessions that belong to the current user within the specified room.  Supports pagination via the startIndex and count query parameters. The total number of chats is included in the response metadata.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-chats/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | The identifier of the room whose AI chat sessions are to be listed. | defaults to undefined|
| **startIndex** | [**number**] | The number of items to skip before returning results (zero-based offset). Defaults to 0. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return per page. Defaults to 100. | (optional) defaults to undefined|


### Return type

**ChatArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let roomId: number; //The identifier of the room whose AI chat sessions are to be listed. (default to undefined)
let startIndex: number; //The number of items to skip before returning results (zero-based offset). Defaults to 0. (optional) (default to undefined)
let count: number; //The maximum number of items to return per page. Defaults to 100. (optional) (default to undefined)

const { status, data } = await apiInstance.getChats(
    roomId,
    startIndex,
    count
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of chat sessions in the room |  -  |
|**403** | You don\'t have enough permission to access chats in this room |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMessages**
> MessageArrayWrapper getMessages()

Returns a paginated list of messages from an AI chat session owned by the current user.  Each message includes its role (user or assistant), content blocks (text, tool calls, attachments), and timestamp.  Supports pagination via the startIndex and count query parameters. The total number of messages is included in the response metadata.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-messages/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] | The unique identifier of the AI chat session whose messages are to be listed. | defaults to undefined|
| **startIndex** | [**number**] | The number of items to skip before returning results (zero-based offset). Defaults to 0. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return per page. Defaults to 100. | (optional) defaults to undefined|


### Return type

**MessageArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the AI chat session whose messages are to be listed. (default to undefined)
let startIndex: number; //The number of items to skip before returning results (zero-based offset). Defaults to 0. (optional) (default to undefined)
let count: number; //The maximum number of items to return per page. Defaults to 100. (optional) (default to undefined)

const { status, data } = await apiInstance.getMessages(
    chatId,
    startIndex,
    count
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of messages in the chat |  -  |
|**404** | The chat with the specified ID was not found or does not belong to the current user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserChatsSettings**
> UserChatSettingsWrapper getUserChatsSettings()

Retrieves the current user\'s personal AI chat preferences for the specified room,  including whether web search is enabled for AI-assisted responses.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-chats-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | The identifier of the room whose chat settings are to be retrieved. | defaults to undefined|


### Return type

**UserChatSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let roomId: number; //The identifier of the room whose chat settings are to be retrieved. (default to undefined)

const { status, data } = await apiInstance.getUserChatsSettings(
    roomId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current user chat settings |  -  |
|**403** | You don\'t have enough permission to access chats in this room |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **providePermission**
> providePermission(toolDecisionRequestBody)

Provides the user\'s approval or denial decision for a pending MCP (Model Context Protocol) tool execution request.  When an AI assistant attempts to invoke an external tool that requires explicit user consent,  the client receives a permission prompt via the SSE stream. This endpoint is used to submit the user\'s decision  so that the AI chat session can proceed accordingly.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/provide-permission/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolDecisionRequestBody** | **ToolDecisionRequestBody**| The permission decision parameters. | |
| **callId** | [**string**] | The unique identifier of the pending tool execution call awaiting a permission decision. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    ToolDecisionRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let callId: string; //The unique identifier of the pending tool execution call awaiting a permission decision. (default to undefined)
let toolDecisionRequestBody: ToolDecisionRequestBody; //The permission decision parameters.

const { status, data } = await apiInstance.providePermission(
    callId,
    toolDecisionRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The permission decision was successfully recorded |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renameChat**
> ChatWrapper renameChat(renameChatBody)

Updates the display title of an existing AI chat session owned by the current user.  The new name must not exceed 255 characters.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renameChatBody** | **RenameChatBody**| The new chat name. | |
| **chatId** | [**string**] | The unique identifier of the AI chat session to rename. | defaults to undefined|


### Return type

**ChatWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    RenameChatBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let chatId: string; //The unique identifier of the AI chat session to rename. (default to undefined)
let renameChatBody: RenameChatBody; //The new chat name.

const { status, data } = await apiInstance.renameChat(
    chatId,
    renameChatBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated chat session details |  -  |
|**404** | The chat with the specified ID was not found or does not belong to the current user |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolveEditorTool**
> GeneratedFileWrapper resolveEditorTool(editorToolDecisionRequestBody)

Submits the user\'s approval or denial for a pending editor generation tool call (docx, form, presentation).  On approval the file is created from the original tool arguments and information about it is returned,  while the suspended chat tool is resumed with the same result so the AI session can continue.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/resolve-editor-tool/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **editorToolDecisionRequestBody** | **EditorToolDecisionRequestBody**| The decision parameters. | |
| **callId** | [**string**] | The unique identifier of the pending tool call awaiting the user\'s decision. | defaults to undefined|


### Return type

**GeneratedFileWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    EditorToolDecisionRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let callId: string; //The unique identifier of the pending tool call awaiting the user\'s decision. (default to undefined)
let editorToolDecisionRequestBody: EditorToolDecisionRequestBody; //The decision parameters.

const { status, data } = await apiInstance.resolveEditorTool(
    callId,
    editorToolDecisionRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about the created file, or empty if the request was declined or has expired |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setUserChatsSettings**
> UserChatSettingsWrapper setUserChatsSettings(setUserChatSettingsRequestBody)

Saves the current user\'s personal AI chat preferences for the specified room.  Currently supports toggling the web search capability, which allows the AI assistant to search the internet when generating responses.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-user-chats-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setUserChatSettingsRequestBody** | **SetUserChatSettingsRequestBody**| The chat settings to apply. | |
| **roomId** | [**number**] | The identifier of the room whose chat settings are to be updated. | defaults to undefined|


### Return type

**UserChatSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    SetUserChatSettingsRequestBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let roomId: number; //The identifier of the room whose chat settings are to be updated. (default to undefined)
let setUserChatSettingsRequestBody: SetUserChatSettingsRequestBody; //The chat settings to apply.

const { status, data } = await apiInstance.setUserChatsSettings(
    roomId,
    setUserChatSettingsRequestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated user chat settings |  -  |
|**403** | You don\'t have enough permission to access chats in this room |  -  |
|**404** | The room with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startNewChat**
> startNewChat(startNewChatBody)

Creates a new AI chat session within the specified room and sends the initial message to the configured AI provider.  The response is delivered as a Server-Sent Events (SSE) stream containing completion chunks (text deltas, tool calls, tool results, and message lifecycle events)  with periodic keep-alive pings every 5 seconds. File references can be included as context for the AI model.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-new-chat/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startNewChatBody** | **StartNewChatBody**| The initial message and optional file attachments. | |
| **roomId** | [**number**] | The identifier of the room in which to create the new AI chat session. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIChatApi,
    Configuration,
    StartNewChatBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIChatApi(configuration);

let roomId: number; //The identifier of the room in which to create the new AI chat session. (default to undefined)
let startNewChatBody: StartNewChatBody; //The initial message and optional file attachments.

const { status, data } = await apiInstance.startNewChat(
    roomId,
    startNewChatBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SSE stream of ChatCompletion events (text/event-stream) |  -  |
|**400** | The message is empty or one or more file attachments could not be processed |  -  |
|**403** | You don\'t have enough permission to access the chat in this room |  -  |
|**404** | The specified room or AI provider was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

