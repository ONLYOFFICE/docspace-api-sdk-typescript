# AttachmentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiAttachmentsDelete**](#newaiattachmentsdelete) | **DELETE** /api/2.0/new-ai/attachments/delete | Delete|
|[**newAiAttachmentsDeleteMany**](#newaiattachmentsdeletemany) | **DELETE** /api/2.0/new-ai/attachments/delete-many | Delete many|
|[**newAiAttachmentsGet**](#newaiattachmentsget) | **POST** /api/2.0/new-ai/attachments/get | Get|
|[**newAiAttachmentsGetMany**](#newaiattachmentsgetmany) | **POST** /api/2.0/new-ai/attachments/get-many | Get many|
|[**newAiAttachmentsLinkToMessage**](#newaiattachmentslinktomessage) | **POST** /api/2.0/new-ai/attachments/link-to-message | Link to message|
|[**newAiAttachmentsSaveFile**](#newaiattachmentssavefile) | **POST** /api/2.0/new-ai/attachments/save-file | Save file|
|[**newAiAttachmentsSaveFilesMany**](#newaiattachmentssavefilesmany) | **POST** /api/2.0/new-ai/attachments/save-files-many | Save files many|
|[**newAiAttachmentsSaveImage**](#newaiattachmentssaveimage) | **POST** /api/2.0/new-ai/attachments/save-image | Save image|
|[**newAiAttachmentsSaveImagesMany**](#newaiattachmentssaveimagesmany) | **POST** /api/2.0/new-ai/attachments/save-images-many | Save images many|

# **newAiAttachmentsDelete**
> NewAiSuccessResponse newAiAttachmentsDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiAttachmentsDelete(
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

# **newAiAttachmentsDeleteMany**
> NewAiSuccessResponse newAiAttachmentsDeleteMany(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let requestBody: Array<string>; //

const { status, data } = await apiInstance.newAiAttachmentsDeleteMany(
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

# **newAiAttachmentsGet**
> NewAiAttachment newAiAttachmentsGet(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiAttachment**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiAttachmentsGet(
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

# **newAiAttachmentsGetMany**
> Array<NewAiAttachment | null> newAiAttachmentsGetMany(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |


### Return type

**Array<NewAiAttachment | null>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let requestBody: Array<string>; //

const { status, data } = await apiInstance.newAiAttachmentsGetMany(
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

# **newAiAttachmentsLinkToMessage**
> NewAiSuccessResponse newAiAttachmentsLinkToMessage(newAiAttachmentsLinkToMessageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-link-to-message/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAttachmentsLinkToMessageRequest** | **NewAiAttachmentsLinkToMessageRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration,
    NewAiAttachmentsLinkToMessageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let newAiAttachmentsLinkToMessageRequest: NewAiAttachmentsLinkToMessageRequest; //

const { status, data } = await apiInstance.newAiAttachmentsLinkToMessage(
    newAiAttachmentsLinkToMessageRequest
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

# **newAiAttachmentsSaveFile**
> NewAiAttachment newAiAttachmentsSaveFile(newAiAttachmentsSaveFileRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAttachmentsSaveFileRequest** | **NewAiAttachmentsSaveFileRequest**|  | |


### Return type

**NewAiAttachment**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration,
    NewAiAttachmentsSaveFileRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let newAiAttachmentsSaveFileRequest: NewAiAttachmentsSaveFileRequest; //

const { status, data } = await apiInstance.newAiAttachmentsSaveFile(
    newAiAttachmentsSaveFileRequest
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

# **newAiAttachmentsSaveFilesMany**
> Array<NewAiAttachment> newAiAttachmentsSaveFilesMany(newAiAttachmentsSaveFilesManyRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-files-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAttachmentsSaveFilesManyRequest** | **NewAiAttachmentsSaveFilesManyRequest**|  | |


### Return type

**Array<NewAiAttachment>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration,
    NewAiAttachmentsSaveFilesManyRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let newAiAttachmentsSaveFilesManyRequest: NewAiAttachmentsSaveFilesManyRequest; //

const { status, data } = await apiInstance.newAiAttachmentsSaveFilesMany(
    newAiAttachmentsSaveFilesManyRequest
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

# **newAiAttachmentsSaveImage**
> NewAiAttachment newAiAttachmentsSaveImage(newAiAttachmentsSaveImageRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-image/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAttachmentsSaveImageRequest** | **NewAiAttachmentsSaveImageRequest**|  | |


### Return type

**NewAiAttachment**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration,
    NewAiAttachmentsSaveImageRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let newAiAttachmentsSaveImageRequest: NewAiAttachmentsSaveImageRequest; //

const { status, data } = await apiInstance.newAiAttachmentsSaveImage(
    newAiAttachmentsSaveImageRequest
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

# **newAiAttachmentsSaveImagesMany**
> Array<NewAiAttachment> newAiAttachmentsSaveImagesMany(newAiAttachmentsSaveImagesManyRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-images-many/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAttachmentsSaveImagesManyRequest** | **NewAiAttachmentsSaveImagesManyRequest**|  | |


### Return type

**Array<NewAiAttachment>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAttachmentsApi,
    Configuration,
    NewAiAttachmentsSaveImagesManyRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAttachmentsApi(configuration);

let newAiAttachmentsSaveImagesManyRequest: NewAiAttachmentsSaveImagesManyRequest; //

const { status, data } = await apiInstance.newAiAttachmentsSaveImagesMany(
    newAiAttachmentsSaveImagesManyRequest
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

