# PromptsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiPromptsCreate**](#aipromptscreate) | **POST** /api/2.0/ai/prompts/create | Create|
|[**aiPromptsCreateFolder**](#aipromptscreatefolder) | **POST** /api/2.0/ai/prompts/create-folder | Create folder|
|[**aiPromptsDelete**](#aipromptsdelete) | **DELETE** /api/2.0/ai/prompts/delete | Delete|
|[**aiPromptsDeleteFolder**](#aipromptsdeletefolder) | **DELETE** /api/2.0/ai/prompts/delete-folder | Delete folder|
|[**aiPromptsExport**](#aipromptsexport) | **GET** /api/2.0/ai/prompts/export | Export|
|[**aiPromptsGetById**](#aipromptsgetbyid) | **GET** /api/2.0/ai/prompts/get-by-id | Get by id|
|[**aiPromptsGetFolderById**](#aipromptsgetfolderbyid) | **GET** /api/2.0/ai/prompts/get-folder-by-id | Get folder by id|
|[**aiPromptsImportBundle**](#aipromptsimportbundle) | **POST** /api/2.0/ai/prompts/import-bundle | Import bundle|
|[**aiPromptsList**](#aipromptslist) | **GET** /api/2.0/ai/prompts/list | List|
|[**aiPromptsListFolders**](#aipromptslistfolders) | **GET** /api/2.0/ai/prompts/list-folders | List folders|
|[**aiPromptsMove**](#aipromptsmove) | **PUT** /api/2.0/ai/prompts/move | Move|
|[**aiPromptsRenameFolder**](#aipromptsrenamefolder) | **PUT** /api/2.0/ai/prompts/rename-folder | Rename folder|
|[**aiPromptsUpdate**](#aipromptsupdate) | **PUT** /api/2.0/ai/prompts/update | Update|

# **aiPromptsCreate**
> AiPromptMutationResult aiPromptsCreate(aiCreatePromptInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiCreatePromptInput** | **AiCreatePromptInput**|  | |


### Return type

**AiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration,
    AiCreatePromptInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let aiCreatePromptInput: AiCreatePromptInput; //

const { status, data } = await apiInstance.aiPromptsCreate(
    aiCreatePromptInput
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

# **aiPromptsCreateFolder**
> AiFolderMutationResult aiPromptsCreateFolder(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-create-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiFolderMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiPromptsCreateFolder(
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

# **aiPromptsDelete**
> AiSuccessResponse aiPromptsDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete/).

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
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiPromptsDelete(
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

# **aiPromptsDeleteFolder**
> AiSuccessResponse aiPromptsDeleteFolder(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-delete-folder/).

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
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiPromptsDeleteFolder(
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

# **aiPromptsExport**
> AiPromptBundle aiPromptsExport()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-export/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiPromptBundle**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

const { status, data } = await apiInstance.aiPromptsExport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPromptsGetById**
> AiPrompt aiPromptsGetById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AiPrompt**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.aiPromptsGetById(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPromptsGetFolderById**
> AiPromptFolder aiPromptsGetFolderById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-folder-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AiPromptFolder**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.aiPromptsGetFolderById(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPromptsImportBundle**
> AiImportResult aiPromptsImportBundle(aiPromptsImportBundleRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-import-bundle/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPromptsImportBundleRequest** | **AiPromptsImportBundleRequest**|  | |


### Return type

**AiImportResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration,
    AiPromptsImportBundleRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let aiPromptsImportBundleRequest: AiPromptsImportBundleRequest; //

const { status, data } = await apiInstance.aiPromptsImportBundle(
    aiPromptsImportBundleRequest
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

# **aiPromptsList**
> Array<AiPrompt> aiPromptsList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**Array<AiPrompt>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.aiPromptsList(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPromptsListFolders**
> Array<AiPromptFolder> aiPromptsListFolders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list-folders/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AiPromptFolder>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

const { status, data } = await apiInstance.aiPromptsListFolders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPromptsMove**
> AiPromptMutationResult aiPromptsMove(aiPromptsMoveRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-move/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPromptsMoveRequest** | **AiPromptsMoveRequest**|  | |


### Return type

**AiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration,
    AiPromptsMoveRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let aiPromptsMoveRequest: AiPromptsMoveRequest; //

const { status, data } = await apiInstance.aiPromptsMove(
    aiPromptsMoveRequest
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

# **aiPromptsRenameFolder**
> AiFolderMutationResult aiPromptsRenameFolder(aiPromptsRenameFolderRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-rename-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPromptsRenameFolderRequest** | **AiPromptsRenameFolderRequest**|  | |


### Return type

**AiFolderMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration,
    AiPromptsRenameFolderRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let aiPromptsRenameFolderRequest: AiPromptsRenameFolderRequest; //

const { status, data } = await apiInstance.aiPromptsRenameFolder(
    aiPromptsRenameFolderRequest
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

# **aiPromptsUpdate**
> AiPromptMutationResult aiPromptsUpdate(aiPromptsUpdateRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPromptsUpdateRequest** | **AiPromptsUpdateRequest**|  | |


### Return type

**AiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIPromptsApi,
    Configuration,
    AiPromptsUpdateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPromptsApi(configuration);

let aiPromptsUpdateRequest: AiPromptsUpdateRequest; //

const { status, data } = await apiInstance.aiPromptsUpdate(
    aiPromptsUpdateRequest
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

