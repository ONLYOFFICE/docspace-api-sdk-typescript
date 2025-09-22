# OperationsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFavorites**](#addfavorites) | **POST** /api/2.0/files/favorites | |
|[**bulkDownload**](#bulkdownload) | **PUT** /api/2.0/files/fileops/bulkdownload | |
|[**checkConversionStatus**](#checkconversionstatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | |
|[**checkMoveOrCopyBatchItems**](#checkmoveorcopybatchitems) | **GET** /api/2.0/files/fileops/move | |
|[**checkMoveOrCopyDestFolder**](#checkmoveorcopydestfolder) | **GET** /api/2.0/files/fileops/checkdestfolder | |
|[**copyBatchItems**](#copybatchitems) | **PUT** /api/2.0/files/fileops/copy | |
|[**createUploadSession**](#createuploadsession) | **POST** /api/2.0/files/{folderId}/upload/create_session | |
|[**deleteBatchItems**](#deletebatchitems) | **PUT** /api/2.0/files/fileops/delete | |
|[**deleteFavoritesFromBody**](#deletefavoritesfrombody) | **DELETE** /api/2.0/files/favorites | |
|[**deleteFileVersions**](#deletefileversions) | **PUT** /api/2.0/files/fileops/deleteversion | |
|[**duplicateBatchItems**](#duplicatebatchitems) | **PUT** /api/2.0/files/fileops/duplicate | |
|[**emptyTrash**](#emptytrash) | **PUT** /api/2.0/files/fileops/emptytrash | |
|[**getOperationStatuses**](#getoperationstatuses) | **GET** /api/2.0/files/fileops | |
|[**getOperationStatusesByType**](#getoperationstatusesbytype) | **GET** /api/2.0/files/fileops/{operationType} | |
|[**markAsRead**](#markasread) | **PUT** /api/2.0/files/fileops/markasread | |
|[**moveBatchItems**](#movebatchitems) | **PUT** /api/2.0/files/fileops/move | |
|[**startFileConversion**](#startfileconversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | |
|[**terminateTasks**](#terminatetasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | |
|[**updateFileComment**](#updatefilecomment) | **PUT** /api/2.0/files/file/{fileId}/comment | |

# **addFavorites**
> BooleanWrapper addFavorites()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-favorites/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.addFavorites(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulkDownload**
> FileOperationArrayWrapper bulkDownload()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/bulk-download/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadRequestDto** | **DownloadRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DownloadRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let downloadRequestDto: DownloadRequestDto; // (optional)

const { status, data } = await apiInstance.bulkDownload(
    downloadRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to download |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkConversionStatus**
> ConversationResultArrayWrapper checkConversionStatus()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-conversion-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to check conversion status. | defaults to undefined|
| **start** | [**boolean**] | Specifies whether a conversion operation is started or not. | (optional) defaults to undefined|


### Return type

**ConversationResultArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID to check conversion status. (default to undefined)
let start: boolean; //Specifies whether a conversion operation is started or not. (optional) (default to undefined)

const { status, data } = await apiInstance.checkConversionStatus(
    fileId,
    start
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversion result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkMoveOrCopyBatchItems**
> FileEntryBaseArrayWrapper checkMoveOrCopyBatchItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-batch-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **BatchRequestDto** | The request parameters for copying/moving files. | (optional) defaults to undefined|


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let inDto: BatchRequestDto; //The request parameters for copying/moving files. (optional) (default to undefined)

const { status, data } = await apiInstance.checkMoveOrCopyBatchItems(
    inDto
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkMoveOrCopyDestFolder**
> CheckDestFolderWrapper checkMoveOrCopyDestFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-move-or-copy-dest-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **BatchRequestDto** | The request parameters for copying/moving files. | (optional) defaults to undefined|


### Return type

**CheckDestFolderWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let inDto: BatchRequestDto; //The request parameters for copying/moving files. (optional) (default to undefined)

const { status, data } = await apiInstance.checkMoveOrCopyDestFolder(
    inDto
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Result |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyBatchItems**
> FileOperationArrayWrapper copyBatchItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-batch-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchRequestDto** | **BatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let batchRequestDto: BatchRequestDto; // (optional)

const { status, data } = await apiInstance.copyBatchItems(
    batchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to copy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUploadSession**
> ObjectWrapper createUploadSession(sessionRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-upload-session/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionRequest** | **SessionRequest**| The session parameters. | |
| **folderId** | [**number**] | The folder ID of the session. | defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    SessionRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let folderId: number; //The folder ID of the session. (default to undefined)
let sessionRequest: SessionRequest; //The session parameters.

const { status, data } = await apiInstance.createUploadSession(
    folderId,
    sessionRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about created session |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBatchItems**
> FileOperationArrayWrapper deleteBatchItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-batch-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteBatchRequestDto** | **DeleteBatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DeleteBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let deleteBatchRequestDto: DeleteBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteBatchItems(
    deleteBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFavoritesFromBody**
> BooleanWrapper deleteFavoritesFromBody()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-favorites-from-body/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteFavoritesFromBody(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFileVersions**
> FileOperationWrapper deleteFileVersions()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-versions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteVersionBatchRequestDto** | **DeleteVersionBatchRequestDto**|  | |


### Return type

**FileOperationWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DeleteVersionBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let deleteVersionBatchRequestDto: DeleteVersionBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteFileVersions(
    deleteVersionBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **duplicateBatchItems**
> FileOperationArrayWrapper duplicateBatchItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/duplicate-batch-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **duplicateRequestDto** | **DuplicateRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    DuplicateRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let duplicateRequestDto: DuplicateRequestDto; // (optional)

const { status, data } = await apiInstance.duplicateBatchItems(
    duplicateRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to duplicate |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emptyTrash**
> FileOperationArrayWrapper emptyTrash()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/empty-trash/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **single** | [**boolean**] | Specifies whether to return only the current operation | (optional) defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let single: boolean; //Specifies whether to return only the current operation (optional) (default to undefined)

const { status, data } = await apiInstance.emptyTrash(
    single
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOperationStatuses**
> FileOperationArrayWrapper getOperationStatuses()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the file operation. | (optional) defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let id: string; //The ID of the file operation. (optional) (default to undefined)

const { status, data } = await apiInstance.getOperationStatuses(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOperationStatusesByType**
> FileOperationArrayWrapper getOperationStatusesByType()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-operation-statuses-by-type/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationType** | **FileOperationType** | Specifies the type of file operation to be retrieved. | defaults to undefined|
| **id** | [**string**] | The ID of the file operation. | (optional) defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let operationType: FileOperationType; //Specifies the type of file operation to be retrieved. (default to undefined)
let id: string; //The ID of the file operation. (optional) (default to undefined)

const { status, data } = await apiInstance.getOperationStatusesByType(
    operationType,
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markAsRead**
> FileOperationArrayWrapper markAsRead()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-as-read/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.markAsRead(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveBatchItems**
> FileOperationArrayWrapper moveBatchItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/move-batch-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchRequestDto** | **BatchRequestDto**|  | |


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    BatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let batchRequestDto: BatchRequestDto; // (optional)

const { status, data } = await apiInstance.moveBatchItems(
    batchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**403** | You don\&#39;t have enough permission to move |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFileConversion**
> ConversationResultArrayWrapper startFileConversion()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-file-conversion/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkConversionRequestDtoInteger** | **CheckConversionRequestDtoInteger**| The parameters for checking file conversion. | |
| **fileId** | [**number**] | The file ID to start conversion proccess. | defaults to undefined|


### Return type

**ConversationResultArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    CheckConversionRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID to start conversion proccess. (default to undefined)
let checkConversionRequestDtoInteger: CheckConversionRequestDtoInteger; //The parameters for checking file conversion. (optional)

const { status, data } = await apiInstance.startFileConversion(
    fileId,
    checkConversionRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversion result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateTasks**
> FileOperationArrayWrapper terminateTasks()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tasks/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The operation ID of the request. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let id: string; //The operation ID of the request. (default to undefined)

const { status, data } = await apiInstance.terminateTasks(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFileComment**
> StringWrapper updateFileComment(updateComment)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-comment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateComment** | **UpdateComment**| The parameters for updating a comment. | |
| **fileId** | [**number**] | The file ID where the comment is located. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesOperationsApi,
    Configuration,
    UpdateComment
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesOperationsApi(configuration);

let fileId: number; //The file ID where the comment is located. (default to undefined)
let updateComment: UpdateComment; //The parameters for updating a comment.

const { status, data } = await apiInstance.updateFileComment(
    fileId,
    updateComment
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated comment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

