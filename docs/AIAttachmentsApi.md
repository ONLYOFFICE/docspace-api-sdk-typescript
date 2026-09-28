# AttachmentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAttachmentsDelete**](#aiattachmentsdelete) | **DELETE** /api/2.0/ai/attachments/delete | Delete one attachment|
|[**aiAttachmentsDeleteMany**](#aiattachmentsdeletemany) | **DELETE** /api/2.0/ai/attachments/delete-many | Delete many|
|[**aiAttachmentsGet**](#aiattachmentsget) | **POST** /api/2.0/ai/attachments/get | Get one attachment|
|[**aiAttachmentsGetMany**](#aiattachmentsgetmany) | **POST** /api/2.0/ai/attachments/get-many | Get many|
|[**aiAttachmentsGetSuggestedQuestions**](#aiattachmentsgetsuggestedquestions) | **POST** /api/2.0/ai/attachments/suggested-questions | Get suggested questions|
|[**aiAttachmentsLinkToMessage**](#aiattachmentslinktomessage) | **POST** /api/2.0/ai/attachments/link-to-message | Link to message|
|[**aiAttachmentsSaveFile**](#aiattachmentssavefile) | **POST** /api/2.0/ai/attachments/save-file | Save file|
|[**aiAttachmentsSaveFilesMany**](#aiattachmentssavefilesmany) | **POST** /api/2.0/ai/attachments/save-files-many | Save files many|

# **aiAttachmentsDelete**
> AiSuccessResponse aiAttachmentsDelete(body)

Permanently deletes one attachment, whether it is still a draft or already bound to a message. The ID is not validated here, so a malformed one surfaces as an error relayed from storage rather than as a 400, and an ID that does not exist answers success without deleting anything. Deleting a bound attachment leaves the message in place without it. The deletion cannot be undone.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the attachment to delete, as a bare JSON string. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let body: string; //The ID of the attachment to delete, as a bare JSON string.

const { status, data } = await apiInstance.aiAttachmentsDelete(
    body
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the request was accepted, whether or not anything was deleted. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsDeleteMany**
> AiSuccessResponse aiAttachmentsDeleteMany(requestBody)

Permanently deletes several attachments in one round trip. `ids` is optional and an absent value is treated as an empty list, so a malformed request quietly deletes nothing instead of failing. IDs that do not exist are skipped without being reported, so the answer confirms only that the call was accepted. The deletions cannot be undone.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| The IDs of the attachments to delete, as a bare JSON array of strings. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let requestBody: Array<string>; //The IDs of the attachments to delete, as a bare JSON array of strings.

const { status, data } = await apiInstance.aiAttachmentsDeleteMany(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the request was accepted, whether or not anything was deleted. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsGet**
> AiAttachment aiAttachmentsGet(body)

Returns one attachment by its ID, whether it is still a draft or already bound to a message. The ID is required and has to be a non-empty string. An ID that no longer exists is not reported as 404: the answer is a null body with status 200, so treat a missing payload as no such attachment. Use `POST api/2.0/ai/attachments/get-many` to read several at once.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the attachment to read, as a bare JSON string. | |


### Return type

**AiAttachment**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let body: string; //The ID of the attachment to read, as a bare JSON string.

const { status, data } = await apiInstance.aiAttachmentsGet(
    body
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The attachment, or a null body when no attachment has that ID. |  -  |
|**400** | The attachment ID is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsGetMany**
> Array<AiAttachment | null> aiAttachmentsGetMany(requestBody)

Returns several attachments in one call, aligned by position with the `ids` that were sent, so the answer can be zipped straight onto the request. An ID that no longer exists leaves its slot empty rather than shortening the list, which is how a caller tells which of them are gone. `ids` has to be present and non-empty - an empty batch is rejected rather than answered with an empty list. Nothing is changed by the call.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| The IDs of the attachments to read, as a bare JSON array of strings. The answer is aligned with this array by position. | |


### Return type

**Array<AiAttachment | null>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let requestBody: Array<string>; //The IDs of the attachments to read, as a bare JSON array of strings. The answer is aligned with this array by position.

const { status, data } = await apiInstance.aiAttachmentsGetMany(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The attachments, aligned by position with the IDs that were sent. A missing one leaves its slot empty. |  -  |
|**400** | The list of attachment IDs is malformed. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsGetSuggestedQuestions**
> AiSuccessResponse aiAttachmentsGetSuggestedQuestions(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-suggested-questions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.aiAttachmentsGetSuggestedQuestions(
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
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsLinkToMessage**
> AiSuccessResponse aiAttachmentsLinkToMessage(aiAttachmentsLinkToMessageRequest)

Binds draft attachments to the chat message that owns them, after that message has been persisted, so that deleting the message removes them too. All three of `ids`, `messageId` and `threadId` are required, and the references are verified rather than trusted: an unknown message answers 404, a message that belongs to a different thread answers 400, and attachments that no longer exist answer 404 naming each missing ID. That verification exists because the underlying binding call skips unknown IDs silently, which used to report success for a link that had not happened. Drafts stay unbound until this succeeds.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-link-to-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsLinkToMessageRequest** | **AiAttachmentsLinkToMessageRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration,
    AiAttachmentsLinkToMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let aiAttachmentsLinkToMessageRequest: AiAttachmentsLinkToMessageRequest; //

const { status, data } = await apiInstance.aiAttachmentsLinkToMessage(
    aiAttachmentsLinkToMessageRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the attachments are now bound to the message. |  -  |
|**400** | The attachment or message reference is malformed. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | The message or the attachment does not exist. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsSaveFile**
> AiAttachment aiAttachmentsSaveFile(aiAttachmentsSaveFileRequest)

Stores one file attachment as a draft and returns it, so its ID can be attached to a message later. `input` carries the host `path` - the DocSpace entry ID the AI backend resolves server-side - the text `content` already extracted from that file, the ONLYOFFICE numeric file `type`, and optionally a `title`; the text is what the model reads, so this operation does not open the file itself. Archives are refused outright, whatever their declared name says. Drafts are not bound to a conversation until `POST api/2.0/ai/attachments/link-to-message` is called, so an unlinked draft outlives the round that created it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFileRequest** | **AiAttachmentsSaveFileRequest**|  | |


### Return type

**AiAttachment**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration,
    AiAttachmentsSaveFileRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let aiAttachmentsSaveFileRequest: AiAttachmentsSaveFileRequest; //

const { status, data } = await apiInstance.aiAttachmentsSaveFile(
    aiAttachmentsSaveFileRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The stored draft, whose ID links it to a message later. |  -  |
|**400** | The attachment payload is malformed. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsSaveFilesMany**
> Array<AiAttachment> aiAttachmentsSaveFilesMany(aiAttachmentsSaveFilesManyRequest)

Stores several file attachments as drafts in one round trip and returns them in the order they were sent. Each entry is validated exactly as the single-file operation validates its `input`, and the first bad one rejects the whole batch with its index named in the message - nothing is stored. `inputs` has to be present and an array: an absent or null value is a malformed request rather than an empty batch, and only an explicit empty array means no files. Follow up with `POST api/2.0/ai/attachments/link-to-message` to bind the drafts to a message.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-files-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFilesManyRequest** | **AiAttachmentsSaveFilesManyRequest**|  | |


### Return type

**Array<AiAttachment>**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration,
    AiAttachmentsSaveFilesManyRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let aiAttachmentsSaveFilesManyRequest: AiAttachmentsSaveFilesManyRequest; //

const { status, data } = await apiInstance.aiAttachmentsSaveFilesMany(
    aiAttachmentsSaveFilesManyRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The stored drafts, in the order they were sent. |  -  |
|**400** | `inputs` is not an array, or one of its entries is malformed. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

