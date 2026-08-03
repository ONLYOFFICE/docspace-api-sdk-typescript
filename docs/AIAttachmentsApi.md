# AttachmentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAttachmentsDelete**](#aiattachmentsdelete) | **DELETE** /api/2.0/ai/attachments/delete | Delete|
|[**aiAttachmentsDeleteMany**](#aiattachmentsdeletemany) | **DELETE** /api/2.0/ai/attachments/delete-many | Delete many|
|[**aiAttachmentsGet**](#aiattachmentsget) | **POST** /api/2.0/ai/attachments/get | Get|
|[**aiAttachmentsGetMany**](#aiattachmentsgetmany) | **POST** /api/2.0/ai/attachments/get-many | Get many|
|[**aiAttachmentsLinkToMessage**](#aiattachmentslinktomessage) | **POST** /api/2.0/ai/attachments/link-to-message | Link to message|
|[**aiAttachmentsSaveFile**](#aiattachmentssavefile) | **POST** /api/2.0/ai/attachments/save-file | Save file|
|[**aiAttachmentsSaveFilesMany**](#aiattachmentssavefilesmany) | **POST** /api/2.0/ai/attachments/save-files-many | Save files many|
|[**aiAttachmentsSaveImage**](#aiattachmentssaveimage) | **POST** /api/2.0/ai/attachments/save-image | Save image|
|[**aiAttachmentsSaveImagesMany**](#aiattachmentssaveimagesmany) | **POST** /api/2.0/ai/attachments/save-images-many | Save images many|

# **aiAttachmentsDelete**
> AiSuccessResponse aiAttachmentsDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let body: string; //

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsDeleteMany**
> AiSuccessResponse aiAttachmentsDeleteMany(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let requestBody: Array<string>; //

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsGet**
> AiAttachment aiAttachmentsGet(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiAttachment**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let body: string; //

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsGetMany**
> Array<AiAttachment | null> aiAttachmentsGetMany(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |


### Return type

**Array<AiAttachment | null>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let requestBody: Array<string>; //

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsLinkToMessage**
> AiSuccessResponse aiAttachmentsLinkToMessage(aiAttachmentsLinkToMessageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-link-to-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsLinkToMessageRequest** | **AiAttachmentsLinkToMessageRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsSaveFile**
> AiAttachment aiAttachmentsSaveFile(aiAttachmentsSaveFileRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFileRequest** | **AiAttachmentsSaveFileRequest**|  | |


### Return type

**AiAttachment**

### Authorization

No authorization required

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsSaveFilesMany**
> Array<AiAttachment> aiAttachmentsSaveFilesMany(aiAttachmentsSaveFilesManyRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-files-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveFilesManyRequest** | **AiAttachmentsSaveFilesManyRequest**|  | |


### Return type

**Array<AiAttachment>**

### Authorization

No authorization required

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
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAttachmentsSaveImage**
> AiAttachment aiAttachmentsSaveImage(aiAttachmentsSaveImageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-image/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveImageRequest** | **AiAttachmentsSaveImageRequest**|  | |


### Return type

**AiAttachment**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration,
    AiAttachmentsSaveImageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let aiAttachmentsSaveImageRequest: AiAttachmentsSaveImageRequest; //

const { status, data } = await apiInstance.aiAttachmentsSaveImage(
    aiAttachmentsSaveImageRequest
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

# **aiAttachmentsSaveImagesMany**
> Array<AiAttachment> aiAttachmentsSaveImagesMany(aiAttachmentsSaveImagesManyRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-images-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAttachmentsSaveImagesManyRequest** | **AiAttachmentsSaveImagesManyRequest**|  | |


### Return type

**Array<AiAttachment>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIAttachmentsApi,
    Configuration,
    AiAttachmentsSaveImagesManyRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAttachmentsApi(configuration);

let aiAttachmentsSaveImagesManyRequest: AiAttachmentsSaveImagesManyRequest; //

const { status, data } = await apiInstance.aiAttachmentsSaveImagesMany(
    aiAttachmentsSaveImagesManyRequest
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

