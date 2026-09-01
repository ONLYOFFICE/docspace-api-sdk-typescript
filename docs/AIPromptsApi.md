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

Saves a new prompt. The name must be non-empty and unique inside its folder, and `folderId` must point at an existing folder - omit it for the root.

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

Creates a prompt folder. The name must be non-empty and unique across the portal - prompt folders do not nest.

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

Deletes a saved prompt. Does nothing when it no longer exists.

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

Deletes a prompt folder together with the prompts inside it.

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

Builds a self-contained, versioned bundle of every saved prompt and folder, ready for `import-bundle`.

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

Returns one saved prompt, or an empty result when the identifier is unknown.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The saved prompt identifier. | defaults to undefined|


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

let id: string; //The saved prompt identifier. (default to undefined)

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

Returns one prompt folder, or an empty result when the identifier is unknown.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-get-folder-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The prompt folder identifier. | defaults to undefined|


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

let id: string; //The prompt folder identifier. (default to undefined)

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

Restores a prompt bundle. `replace` wipes the current prompts and folders before writing the bundle, `merge` writes the bundle on top of what is already there; both validate the folder references inside the bundle before any write, so a corrupt bundle is rejected whole.

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

Lists saved prompts. Scope the answer to one folder, ask for the root-level prompts only, or omit the folder to get every prompt newest first.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-prompts-list/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] | The prompt folder identifier. Omit to list the prompts that sit outside any folder. | (optional) defaults to undefined|


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

let folderId: string; //The prompt folder identifier. Omit to list the prompts that sit outside any folder. (optional) (default to undefined)

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

Lists the prompt folders, newest first.

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

Moves a saved prompt into another folder, or to the root. The name is re-validated in the target folder, so the move fails when a prompt of that name is already there.

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

Renames a prompt folder, validating the new name against the existing folders.

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

Updates a saved prompt. The name and the folder reference are re-validated whenever either of them changes.

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

