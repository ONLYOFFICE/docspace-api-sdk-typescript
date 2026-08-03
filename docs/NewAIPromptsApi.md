# PromptsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiPromptsCreate**](#newaipromptscreate) | **POST** /api/2.0/ai/prompts/create | Create|
|[**newAiPromptsCreateFolder**](#newaipromptscreatefolder) | **POST** /api/2.0/ai/prompts/create-folder | Create folder|
|[**newAiPromptsDelete**](#newaipromptsdelete) | **DELETE** /api/2.0/ai/prompts/delete | Delete|
|[**newAiPromptsDeleteFolder**](#newaipromptsdeletefolder) | **DELETE** /api/2.0/ai/prompts/delete-folder | Delete folder|
|[**newAiPromptsExport**](#newaipromptsexport) | **GET** /api/2.0/ai/prompts/export | Export|
|[**newAiPromptsGetById**](#newaipromptsgetbyid) | **GET** /api/2.0/ai/prompts/get-by-id | Get by id|
|[**newAiPromptsGetFolderById**](#newaipromptsgetfolderbyid) | **GET** /api/2.0/ai/prompts/get-folder-by-id | Get folder by id|
|[**newAiPromptsImportBundle**](#newaipromptsimportbundle) | **POST** /api/2.0/ai/prompts/import-bundle | Import bundle|
|[**newAiPromptsList**](#newaipromptslist) | **GET** /api/2.0/ai/prompts/list | List|
|[**newAiPromptsListFolders**](#newaipromptslistfolders) | **GET** /api/2.0/ai/prompts/list-folders | List folders|
|[**newAiPromptsMove**](#newaipromptsmove) | **PUT** /api/2.0/ai/prompts/move | Move|
|[**newAiPromptsRenameFolder**](#newaipromptsrenamefolder) | **PUT** /api/2.0/ai/prompts/rename-folder | Rename folder|
|[**newAiPromptsUpdate**](#newaipromptsupdate) | **PUT** /api/2.0/ai/prompts/update | Update|

# **newAiPromptsCreate**
> NewAiPromptMutationResult newAiPromptsCreate(newAiCreatePromptInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiCreatePromptInput** | **NewAiCreatePromptInput**|  | |


### Return type

**NewAiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration,
    NewAiCreatePromptInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let newAiCreatePromptInput: NewAiCreatePromptInput; //

const { status, data } = await apiInstance.newAiPromptsCreate(
    newAiCreatePromptInput
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

# **newAiPromptsCreateFolder**
> NewAiFolderMutationResult newAiPromptsCreateFolder(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-create-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiFolderMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiPromptsCreateFolder(
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

# **newAiPromptsDelete**
> NewAiSuccessResponse newAiPromptsDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete/).

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
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiPromptsDelete(
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

# **newAiPromptsDeleteFolder**
> NewAiSuccessResponse newAiPromptsDeleteFolder(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-delete-folder/).

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
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiPromptsDeleteFolder(
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

# **newAiPromptsExport**
> NewAiPromptBundle newAiPromptsExport()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-export/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NewAiPromptBundle**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

const { status, data } = await apiInstance.newAiPromptsExport();
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

# **newAiPromptsGetById**
> NewAiPrompt newAiPromptsGetById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiPrompt**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.newAiPromptsGetById(
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

# **newAiPromptsGetFolderById**
> NewAiPromptFolder newAiPromptsGetFolderById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-get-folder-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiPromptFolder**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.newAiPromptsGetFolderById(
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

# **newAiPromptsImportBundle**
> NewAiImportResult newAiPromptsImportBundle(newAiPromptsImportBundleRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-import-bundle/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiPromptsImportBundleRequest** | **NewAiPromptsImportBundleRequest**|  | |


### Return type

**NewAiImportResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration,
    NewAiPromptsImportBundleRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let newAiPromptsImportBundleRequest: NewAiPromptsImportBundleRequest; //

const { status, data } = await apiInstance.newAiPromptsImportBundle(
    newAiPromptsImportBundleRequest
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

# **newAiPromptsList**
> Array<NewAiPrompt> newAiPromptsList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**Array<NewAiPrompt>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiPromptsList(
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

# **newAiPromptsListFolders**
> Array<NewAiPromptFolder> newAiPromptsListFolders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-list-folders/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NewAiPromptFolder>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

const { status, data } = await apiInstance.newAiPromptsListFolders();
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

# **newAiPromptsMove**
> NewAiPromptMutationResult newAiPromptsMove(newAiPromptsMoveRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-move/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiPromptsMoveRequest** | **NewAiPromptsMoveRequest**|  | |


### Return type

**NewAiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration,
    NewAiPromptsMoveRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let newAiPromptsMoveRequest: NewAiPromptsMoveRequest; //

const { status, data } = await apiInstance.newAiPromptsMove(
    newAiPromptsMoveRequest
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

# **newAiPromptsRenameFolder**
> NewAiFolderMutationResult newAiPromptsRenameFolder(newAiPromptsRenameFolderRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-rename-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiPromptsRenameFolderRequest** | **NewAiPromptsRenameFolderRequest**|  | |


### Return type

**NewAiFolderMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration,
    NewAiPromptsRenameFolderRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let newAiPromptsRenameFolderRequest: NewAiPromptsRenameFolderRequest; //

const { status, data } = await apiInstance.newAiPromptsRenameFolder(
    newAiPromptsRenameFolderRequest
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

# **newAiPromptsUpdate**
> NewAiPromptMutationResult newAiPromptsUpdate(newAiPromptsUpdateRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-prompts-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiPromptsUpdateRequest** | **NewAiPromptsUpdateRequest**|  | |


### Return type

**NewAiPromptMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPromptsApi,
    Configuration,
    NewAiPromptsUpdateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPromptsApi(configuration);

let newAiPromptsUpdateRequest: NewAiPromptsUpdateRequest; //

const { status, data } = await apiInstance.newAiPromptsUpdate(
    newAiPromptsUpdateRequest
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

