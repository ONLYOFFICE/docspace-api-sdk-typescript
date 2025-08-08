# FilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTemplates**](#addtemplates) | **POST** /api/2.0/files/templates | |
|[**changeVersionHistory**](#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | |
|[**checkFillFormDraft**](#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | |
|[**copyFileAs**](#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | |
|[**createEditSession**](#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | |
|[**createFile**](#createfile) | **POST** /api/2.0/files/{folderId}/file | |
|[**createFileInMyDocuments**](#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | |
|[**createHtmlFile**](#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | |
|[**createHtmlFileInMyDocuments**](#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | |
|[**createPrimaryExternalLink**](#createprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | |
|[**createTextFile**](#createtextfile) | **POST** /api/2.0/files/{folderId}/text | |
|[**createTextFileInMyDocuments**](#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | |
|[**createThumbnails**](#createthumbnails) | **POST** /api/2.0/files/thumbnails | |
|[**deleteFile**](#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | |
|[**deleteRecent**](#deleterecent) | **DELETE** /api/2.0/files/recent | |
|[**deleteTemplates**](#deletetemplates) | **DELETE** /api/2.0/files/templates | |
|[**getAllFormRoles**](#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | |
|[**getEditDiffUrl**](#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | |
|[**getEditHistory**](#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | |
|[**getFileHistory**](#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | |
|[**getFileInfo**](#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | |
|[**getFileLinks**](#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | |
|[**getFilePrimaryExternalLink**](#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | |
|[**getFileVersionInfo**](#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | |
|[**getFillResult**](#getfillresult) | **GET** /api/2.0/files/file/fillresult | |
|[**getPresignedFileUri**](#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | |
|[**getPresignedUri**](#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | |
|[**getProtectedFileUsers**](#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | |
|[**getReferenceData**](#getreferencedata) | **POST** /api/2.0/files/file/referencedata | |
|[**isFormPDF**](#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | |
|[**lockFile**](#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | |
|[**manageFormFilling**](#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | |
|[**openEditFile**](#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | |
|[**restoreFileVersion**](#restorefileversion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | |
|[**saveEditingFileFromForm**](#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | |
|[**saveFileAsPdf**](#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | |
|[**saveFormRoleMapping**](#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | |
|[**setCustomFilterTag**](#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | |
|[**setExternalLink**](#setexternallink) | **PUT** /api/2.0/files/file/{id}/links | |
|[**setFileOrder**](#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | |
|[**setFilesOrder**](#setfilesorder) | **PUT** /api/2.0/files/order | |
|[**startEditFile**](#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | |
|[**startFillingFile**](#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | |
|[**trackEditFile**](#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | |
|[**updateFile**](#updatefile) | **PUT** /api/2.0/files/file/{fileId} | |

# **addTemplates**
> BooleanWrapper addTemplates()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templatesRequestDto** | **TemplatesRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    TemplatesRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let templatesRequestDto: TemplatesRequestDto; // (optional)

const { status, data } = await apiInstance.addTemplates(
    templatesRequestDto
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

# **changeVersionHistory**
> FileStringArrayWrapper changeVersionHistory()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeHistory** | **ChangeHistory**| The parameters for changing version history. | |
| **fileId** | [**number**] | The file Id to change its version history. | defaults to undefined|


### Return type

**FileStringArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ChangeHistory
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file Id to change its version history. (default to undefined)
let changeHistory: ChangeHistory; //The parameters for changing version history. (optional)

const { status, data } = await apiInstance.changeVersionHistory(
    fileId,
    changeHistory
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated information about file versions |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFillFormDraft**
> StringWrapper checkFillFormDraft()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkFillFormDraft** | **CheckFillFormDraft**| The parameters for checking the form draft filling. | |
| **fileId** | [**number**] | The file ID of the form draft. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CheckFillFormDraft
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the form draft. (default to undefined)
let checkFillFormDraft: CheckFillFormDraft; //The parameters for checking the form draft filling. (optional)

const { status, data } = await apiInstance.checkFillFormDraft(
    fileId,
    checkFillFormDraft
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Link to the form |  -  |
|**403** | You don\&#39;t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyFileAs**
> FileEntryBaseWrapper copyFileAs()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyAsJsonElement** | **CopyAsJsonElement**| The parameters for copying a file. | |
| **fileId** | [**number**] | The file ID to copy. | defaults to undefined|


### Return type

**FileEntryBaseWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CopyAsJsonElement
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to copy. (default to undefined)
let copyAsJsonElement: CopyAsJsonElement; //The parameters for copying a file. (optional)

const { status, data } = await apiInstance.copyFileAs(
    fileId,
    copyAsJsonElement
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Copied file entry information |  -  |
|**400** | No file id or folder id toFolderId determine provider |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEditSession**
> ObjectWrapper createEditSession()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **fileSize** | [**number**] | The file size in bytes. | (optional) defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let fileSize: number; //The file size in bytes. (optional) (default to undefined)

const { status, data } = await apiInstance.createEditSession(
    fileId,
    fileSize
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about created session |  -  |
|**403** | You don\&#39;t have enough permission to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFile**
> FileIntegerWrapper createFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**| The parameters for creating a file. | |
| **folderId** | [**number**] | The folder ID for the file creation. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateFileJsonElement
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID for the file creation. (default to undefined)
let createFileJsonElement: CreateFileJsonElement; //The parameters for creating a file. (optional)

const { status, data } = await apiInstance.createFile(
    folderId,
    createFileJsonElement
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileInMyDocuments**
> FileIntegerWrapper createFileInMyDocuments()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateFileJsonElement
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createFileJsonElement: CreateFileJsonElement; // (optional)

const { status, data } = await apiInstance.createFileInMyDocuments(
    createFileJsonElement
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFile**
> FileIntegerWrapper createHtmlFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID to create the text or HTML file. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file. (optional)

const { status, data } = await apiInstance.createHtmlFile(
    folderId,
    createTextOrHtmlFile
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFileInMyDocuments**
> FileIntegerWrapper createHtmlFileInMyDocuments()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createTextOrHtmlFile: CreateTextOrHtmlFile; // (optional)

const { status, data } = await apiInstance.createHtmlFileInMyDocuments(
    createTextOrHtmlFile
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPrimaryExternalLink**
> FileShareWrapper createPrimaryExternalLink()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    FileLinkRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The file external link parameters. (optional)

const { status, data } = await apiInstance.createPrimaryExternalLink(
    id,
    fileLinkRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFile**
> FileIntegerWrapper createTextFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID to create the text or HTML file. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file. (optional)

const { status, data } = await apiInstance.createTextFile(
    folderId,
    createTextOrHtmlFile
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFileInMyDocuments**
> FileIntegerWrapper createTextFileInMyDocuments()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createTextOrHtmlFile: CreateTextOrHtmlFile; // (optional)

const { status, data } = await apiInstance.createTextFileInMyDocuments(
    createTextOrHtmlFile
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createThumbnails**
> ObjectArrayWrapper createThumbnails()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**ObjectArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.createThumbnails(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file IDs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFile**
> FileOperationArrayWrapper deleteFile(_delete)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_delete** | **Delete**| The parameters for deleting a file. | |
| **fileId** | [**number**] | The file ID to delete. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    Delete
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to delete. (default to undefined)
let _delete: Delete; //The parameters for deleting a file.

const { status, data } = await apiInstance.deleteFile(
    fileId,
    _delete
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

# **deleteRecent**
> NoContentResultWrapper deleteRecent()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**NoContentResultWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteRecent(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTemplates**
> BooleanWrapper deleteTemplates()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| The file IDs. | |


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let requestBody: Array<number>; //The file IDs. (optional)

const { status, data } = await apiInstance.deleteTemplates(
    requestBody
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

# **getAllFormRoles**
> FormRoleArrayWrapper getAllFormRoles()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FormRoleArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getAllFormRoles(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved all roles for the form |  -  |
|**403** | You do not have enough permissions to view the form roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditDiffUrl**
> EditHistoryDataWrapper getEditDiffUrl()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **version** | [**number**] | The file version. | (optional) defaults to undefined|


### Return type

**EditHistoryDataWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let version: number; //The file version. (optional) (default to undefined)

const { status, data } = await apiInstance.getEditDiffUrl(
    fileId,
    version
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File version history data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditHistory**
> EditHistoryArrayWrapper getEditHistory()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getEditHistory(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Version history data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileHistory**
> HistoryArrayWrapper getFileHistory()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the history request. | defaults to undefined|
| **fromDate** | **ApiDateTime** | The start date of the history. | (optional) defaults to undefined|
| **toDate** | **ApiDateTime** | The end date of the history. | (optional) defaults to undefined|
| **count** | [**number**] | The number of history entries to retrieve for the file log. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for retrieving a subset of file history entries. | (optional) defaults to undefined|


### Return type

**HistoryArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the history request. (default to undefined)
let fromDate: ApiDateTime; //The start date of the history. (optional) (default to undefined)
let toDate: ApiDateTime; //The end date of the history. (optional) (default to undefined)
let count: number; //The number of history entries to retrieve for the file log. (optional) (default to undefined)
let startIndex: number; //The starting index for retrieving a subset of file history entries. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileHistory(
    fileId,
    fromDate,
    toDate,
    count,
    startIndex
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of actions performed on the file |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | The required file was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileInfo**
> FileIntegerWrapper getFileInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **version** | [**number**] | The file version. | (optional) defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let version: number; //The file version. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileInfo(
    fileId,
    version
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileLinks**
> FileShareArrayWrapper getFileLinks()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file ID of the request. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID of the request. (default to undefined)
let count: number; //The number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileLinks(
    id,
    count,
    startIndex
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilePrimaryExternalLink**
> FileShareWrapper getFilePrimaryExternalLink()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file ID of the request. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID of the request. (default to undefined)
let count: number; //The number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getFilePrimaryExternalLink(
    id,
    count,
    startIndex
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileVersionInfo**
> FileStringArrayWrapper getFileVersionInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileStringArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getFileVersionInfo(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about file versions: folder ID, version, version group, content length, pure content length, file status, URL to view a file, web URL, file type, file extension, comment, encrypted or not, thumbnail URL, thumbnail status, locked or not, user ID who locked a file, denies file downloading or not, denies file sharing or not, file accessibility |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFillResult**
> FillingFormResultIntegerWrapper getFillResult()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fillingSessionId** | [**string**] | The form-filling session ID. | (optional) defaults to undefined|


### Return type

**FillingFormResultIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fillingSessionId: string; //The form-filling session ID. (optional) (default to undefined)

const { status, data } = await apiInstance.getFillResult(
    fillingSessionId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedFileUri**
> FileLinkWrapper getPresignedFileUri()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileLinkWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getPresignedFileUri(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File download link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedUri**
> StringWrapper getPresignedUri()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getPresignedUri(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File download link |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProtectedFileUsers**
> MentionWrapperArrayWrapper getProtectedFileUsers()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**MentionWrapperArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getProtectedFileUsers(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with their access rights to the protected file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReferenceData**
> FileReferenceWrapper getReferenceData()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReferenceDataDtoInteger** | **GetReferenceDataDtoInteger**|  | |


### Return type

**FileReferenceWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    GetReferenceDataDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let getReferenceDataDtoInteger: GetReferenceDataDtoInteger; // (optional)

const { status, data } = await apiInstance.getReferenceData(
    getReferenceDataDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File reference data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFormPDF**
> BooleanWrapper isFormPDF()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.isFormPDF(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true - the PDF file is form, false - the PDF file is not a form |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lockFile**
> FileIntegerWrapper lockFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockFileParameters** | **LockFileParameters**| The parameters for locking a file. | |
| **fileId** | [**number**] | The file ID for locking. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    LockFileParameters
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID for locking. (default to undefined)
let lockFileParameters: LockFileParameters; //The parameters for locking a file. (optional)

const { status, data } = await apiInstance.lockFile(
    fileId,
    lockFileParameters
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Locked file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageFormFilling**
> manageFormFilling()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manageFormFillingDtoInteger** | **ManageFormFillingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ManageFormFillingDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; // (default to undefined)
let manageFormFillingDtoInteger: ManageFormFillingDtoInteger; // (optional)

const { status, data } = await apiInstance.manageFormFilling(
    fileId,
    manageFormFillingDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully processed the form filling action |  -  |
|**403** | You do not have enough permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openEditFile**
> ConfigurationIntegerWrapper openEditFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to open. | defaults to undefined|
| **version** | [**number**] | The file version to open. | (optional) defaults to undefined|
| **view** | [**boolean**] | Specifies if the document will be opened for viewing only or not. | (optional) defaults to undefined|
| **editorType** | **EditorType** | The editor type to open the file. | (optional) defaults to undefined|
| **edit** | [**boolean**] | Specifies if the document is opened in the editing mode or not. | (optional) defaults to undefined|
| **fill** | [**boolean**] | Specifies if the document is opened in the form-filling mode or not. | (optional) defaults to undefined|


### Return type

**ConfigurationIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to open. (default to undefined)
let version: number; //The file version to open. (optional) (default to undefined)
let view: boolean; //Specifies if the document will be opened for viewing only or not. (optional) (default to undefined)
let editorType: EditorType; //The editor type to open the file. (optional) (default to undefined)
let edit: boolean; //Specifies if the document is opened in the editing mode or not. (optional) (default to undefined)
let fill: boolean; //Specifies if the document is opened in the form-filling mode or not. (optional) (default to undefined)

const { status, data } = await apiInstance.openEditFile(
    fileId,
    version,
    view,
    editorType,
    edit,
    fill
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Configuration parameters |  -  |
|**403** | You don\&#39;t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFileVersion**
> EditHistoryArrayWrapper restoreFileVersion()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the restore version. | defaults to undefined|
| **version** | [**number**] | The file version of the restore. | (optional) defaults to undefined|
| **url** | [**string**] | The file version URL of the restore. | (optional) defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the restore version. (default to undefined)
let version: number; //The file version of the restore. (optional) (default to undefined)
let url: string; //The file version URL of the restore. (optional) (default to undefined)

const { status, data } = await apiInstance.restoreFileVersion(
    fileId,
    version,
    url
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Version history data: file ID, key, file version, version group, a user who updated a file, creation time, history changes in the string format, list of history changes, server version |  -  |
|**400** | No file id or folder id toFolderId determine provider |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveEditingFileFromForm**
> FileIntegerWrapper saveEditingFileFromForm()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The editing file ID from the request. | defaults to undefined|
| **fileExtension** | [**string**] | The editing file extension from the request. | (optional) defaults to undefined|
| **downloadUri** | [**string**] | The URI to download the editing file. | (optional) defaults to undefined|
| **file** | [**File**] | The request file stream. | (optional) defaults to undefined|
| **forcesave** | [**boolean**] | Specifies whether to force save the file or not. | (optional) defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The editing file ID from the request. (default to undefined)
let fileExtension: string; //The editing file extension from the request. (optional) (default to undefined)
let downloadUri: string; //The URI to download the editing file. (optional) (default to undefined)
let file: File; //The request file stream. (optional) (default to undefined)
let forcesave: boolean; //Specifies whether to force save the file or not. (optional) (default to undefined)

const { status, data } = await apiInstance.saveEditingFileFromForm(
    fileId,
    fileExtension,
    downloadUri,
    file,
    forcesave
);
```

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved file parameters |  -  |
|**400** | No file id or folder id toFolderId determine provider |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFileAsPdf**
> FileIntegerWrapper saveFileAsPdf()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveAsPdfInteger** | **SaveAsPdfInteger**| The parameters for saving file as PDF. | |
| **id** | [**number**] | The file ID to save as PDF. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveAsPdfInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID to save as PDF. (default to undefined)
let saveAsPdfInteger: SaveAsPdfInteger; //The parameters for saving file as PDF. (optional)

const { status, data } = await apiInstance.saveFileAsPdf(
    id,
    saveAsPdfInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFormRoleMapping**
> FormRoleWrapper saveFormRoleMapping()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveFormRoleMappingDtoInteger** | **SaveFormRoleMappingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FormRoleWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveFormRoleMappingDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; // (default to undefined)
let saveFormRoleMappingDtoInteger: SaveFormRoleMappingDtoInteger; // (optional)

const { status, data } = await apiInstance.saveFormRoleMapping(
    fileId,
    saveFormRoleMappingDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated information about form role mappings |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomFilterTag**
> FileIntegerWrapper setCustomFilterTag()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFilterParameters** | **CustomFilterParameters**| The parameters for setting the Custom Filter editing mode. | |
| **fileId** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CustomFilterParameters
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let customFilterParameters: CustomFilterParameters; //The parameters for setting the Custom Filter editing mode. (optional)

const { status, data } = await apiInstance.setCustomFilterTag(
    fileId,
    customFilterParameters
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setExternalLink**
> FileShareWrapper setExternalLink()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    FileLinkRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The file external link parameters. (optional)

const { status, data } = await apiInstance.setExternalLink(
    id,
    fileLinkRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileOrder**
> FileIntegerWrapper setFileOrder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The file order information. | |
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    OrderRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)
let orderRequestDto: OrderRequestDto; //The file order information. (optional)

const { status, data } = await apiInstance.setFileOrder(
    fileId,
    orderRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file information |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFilesOrder**
> FileEntryStringArrayWrapper setFilesOrder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersRequestDtoInteger** | **OrdersRequestDtoInteger**|  | |


### Return type

**FileEntryStringArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    OrdersRequestDtoInteger
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let ordersRequestDtoInteger: OrdersRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.setFilesOrder(
    ordersRequestDtoInteger
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file entries information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEditFile**
> StringWrapper startEditFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startEdit** | **StartEdit**| The file parameters to start editing. | |
| **fileId** | [**number**] | The file ID to start editing. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    StartEdit
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to start editing. (default to undefined)
let startEdit: StartEdit; //The file parameters to start editing. (optional)

const { status, data } = await apiInstance.startEditFile(
    fileId,
    startEdit
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File key for Document Service |  -  |
|**403** | You don\&#39;t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFillingFile**
> FileIntegerWrapper startFillingFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to start filling. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to start filling. (default to undefined)

const { status, data } = await apiInstance.startFillingFile(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trackEditFile**
> KeyValuePairBooleanStringWrapper trackEditFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to track editing changes. | defaults to undefined|
| **tabId** | [**string**] | The tab ID to track editing changes. | (optional) defaults to undefined|
| **docKeyForTrack** | [**string**] | The document key for tracking changes. | (optional) defaults to undefined|
| **isFinish** | [**boolean**] | Specifies whether to finish file tracking or not. | (optional) defaults to undefined|


### Return type

**KeyValuePairBooleanStringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to track editing changes. (default to undefined)
let tabId: string; //The tab ID to track editing changes. (optional) (default to undefined)
let docKeyForTrack: string; //The document key for tracking changes. (optional) (default to undefined)
let isFinish: boolean; //Specifies whether to finish file tracking or not. (optional) (default to undefined)

const { status, data } = await apiInstance.trackEditFile(
    fileId,
    tabId,
    docKeyForTrack,
    isFinish
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File changes |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFile**
> FileIntegerWrapper updateFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFile** | **UpdateFile**| The parameters for updating a file. | |
| **fileId** | [**number**] | The file ID to update. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    UpdateFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to update. (default to undefined)
let updateFile: UpdateFile; //The parameters for updating a file. (optional)

const { status, data } = await apiInstance.updateFile(
    fileId,
    updateFile
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file information |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

