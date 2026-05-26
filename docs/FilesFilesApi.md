# FilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFileToRecent**](#addfiletorecent) | **POST** /api/2.0/files/file/{fileId}/recent | Add a file to the Recent section|
|[**addTemplates**](#addtemplates) | **POST** /api/2.0/files/templates | Add template files|
|[**changeVersionHistory**](#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history|
|[**checkFillFormDraft**](#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling|
|[**copyFileAs**](#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file|
|[**createEditSession**](#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session|
|[**createFile**](#createfile) | **POST** /api/2.0/files/{folderId}/file | Create a file|
|[**createFileInMyDocuments**](#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | Create a file in the My documents section|
|[**createFilePrimaryExternalLink**](#createfileprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link|
|[**createHtmlFile**](#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file|
|[**createHtmlFileInMyDocuments**](#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in the My documents section|
|[**createTextFile**](#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Create a text file|
|[**createTextFileInMyDocuments**](#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | Create a text file in the My documents section|
|[**createThumbnails**](#createthumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails|
|[**deleteFile**](#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file|
|[**deleteRecent**](#deleterecent) | **DELETE** /api/2.0/files/recent | Delete recent files|
|[**deleteTemplates**](#deletetemplates) | **DELETE** /api/2.0/files/templates | Delete template files|
|[**generateXlsx**](#generatexlsx) | **POST** /api/2.0/files/file/{fileId}/xlsx | Generate XLSX report|
|[**getAllFormRoles**](#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles|
|[**getEditDiffUrl**](#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL|
|[**getEditHistory**](#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history|
|[**getFileHistory**](#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history|
|[**getFileInfo**](#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Get file information|
|[**getFileLinks**](#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links|
|[**getFilePrimaryExternalLink**](#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link|
|[**getFileVersionInfo**](#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions|
|[**getFillResult**](#getfillresult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result|
|[**getFormSubmissions**](#getformsubmissions) | **GET** /api/2.0/files/file/{fileId}/submissions | Get form submission results|
|[**getPresignedFileUri**](#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously|
|[**getPresignedUri**](#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link|
|[**getProtectedFileUsers**](#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file|
|[**getReferenceData**](#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Get reference data|
|[**getXlsx**](#getxlsx) | **GET** /api/2.0/files/file/{fileId}/xlsx | Get XLSX report generation status|
|[**isFormPDF**](#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file|
|[**lockFile**](#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file|
|[**manageFormFilling**](#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action|
|[**openEditFile**](#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration|
|[**restoreFileVersion**](#restorefileversion) | **POST** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version|
|[**saveEditingFileFromForm**](#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits|
|[**saveFileAsPdf**](#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF|
|[**saveFormRoleMapping**](#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping|
|[**setCustomFilterTag**](#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode|
|[**setFileExternalLink**](#setfileexternallink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link|
|[**setFileOrder**](#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | Set file order|
|[**setFilesOrder**](#setfilesorder) | **PUT** /api/2.0/files/order | Set order of files|
|[**startEditFile**](#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing|
|[**startFillingFile**](#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling|
|[**toggleFileFavorite**](#togglefilefavorite) | **GET** /api/2.0/files/favorites/{fileId} | Change the file favorite status|
|[**trackEditFile**](#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing|
|[**updateFile**](#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Update a file|

# **addFileToRecent**
> FileIntegerWrapper addFileToRecent()

Adds a file with the ID specified in the request to the Recent section.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

const { status, data } = await apiInstance.addFileToRecent(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | File not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addTemplates**
> BooleanWrapper addTemplates()

Adds files with the IDs specified in the request to the template list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-templates/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templatesRequestDto** | **TemplatesRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeVersionHistory**
> FileIntegerArrayWrapper changeVersionHistory(changeHistory)

Changes the version history of a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeHistory** | **ChangeHistory**| The parameters for changing version history. | |
| **fileId** | [**number**] | The file Id to change its version history. | defaults to undefined|


### Return type

**FileIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let changeHistory: ChangeHistory; //The parameters for changing version history.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFillFormDraft**
> StringWrapper checkFillFormDraft(checkFillFormDraft)

Checks if the current file is a form draft which can be filled out.

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
let checkFillFormDraft: CheckFillFormDraft; //The parameters for checking the form draft filling.

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
|**403** | You don\'t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyFileAs**
> FileEntryBaseWrapper copyFileAs(copyAsJsonElement)

Copies (and converts if possible) an existing file to the specified folder.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyAsJsonElement** | **CopyAsJsonElement**| The parameters for copying a file. | |
| **fileId** | [**number**] | The file ID to copy. | defaults to undefined|


### Return type

**FileEntryBaseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let copyAsJsonElement: CopyAsJsonElement; //The parameters for copying a file.

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
|**403** | You don\'t have enough permission to create |  -  |
|**404** | File not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEditSession**
> ChunkedUploadSessionResponseWrapperIntegerWrapper createEditSession()

Creates a session to edit the existing file with multiple chunks (needed for WebDAV).

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **fileSize** | [**number**] | The file size in bytes. | (optional) defaults to undefined|


### Return type

**ChunkedUploadSessionResponseWrapperIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**403** | You don\'t have enough permission to edit the file |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFile**
> FileIntegerWrapper createFile(createFileJsonElement)

Creates a new file in the specified folder with the title specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**| The parameters for creating a file. | |
| **folderId** | [**number**] | The folder ID for the file creation. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let createFileJsonElement: CreateFileJsonElement; //The parameters for creating a file.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileInMyDocuments**
> FileIntegerWrapper createFileInMyDocuments()

Creates a new file in the My documents section with the title specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFilePrimaryExternalLink**
> FileShareWrapper createFilePrimaryExternalLink(fileLinkRequest)

Creates a primary external link by the identifier specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let fileLinkRequest: FileLinkRequest; //The file external link parameters.

const { status, data } = await apiInstance.createFilePrimaryExternalLink(
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
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | Not Found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFile**
> FileIntegerWrapper createHtmlFile(createTextOrHtmlFile)

Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file.

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
|**403** | You don\'t have enough permission to create |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFileInMyDocuments**
> FileIntegerWrapper createHtmlFileInMyDocuments()

Creates an HTML (.html) file in the My documents section with the title and contents specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**403** | You don\'t have enough permission to create |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFile**
> FileIntegerWrapper createTextFile(createTextOrHtmlFile)

Creates a text (.txt) file in the selected folder with the title and contents specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFileInMyDocuments**
> FileIntegerWrapper createTextFileInMyDocuments()

Creates a text (.txt) file in the My documents section with the title and contents specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createThumbnails**
> ObjectArrayWrapper createThumbnails()

Creates thumbnails for the files with the IDs specified in the request.

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

Deletes a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_delete** | **Delete**| The parameters for deleting a file. | |
| **fileId** | [**number**] | The file ID to delete. | defaults to undefined|
| **returnSingleOperation** | [**boolean**] | Specifies whether to return only the current operation | (optional) defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let returnSingleOperation: boolean; //Specifies whether to return only the current operation (optional) (default to undefined)

const { status, data } = await apiInstance.deleteFile(
    fileId,
    _delete,
    returnSingleOperation
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file operations |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecent**
> NoContentResultWrapper deleteRecent()

Removes files with the IDs specified in the request from the Recent section.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**NoContentResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTemplates**
> BooleanWrapper deleteTemplates()

Removes files with the IDs specified in the request from the template list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| The file IDs. | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateXlsx**
> XlsxReportResponseWrapper generateXlsx()

Triggers asynchronous XLSX report generation for the specified form file.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**XlsxReportResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

const { status, data } = await apiInstance.generateXlsx(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**403** | You do not have enough permissions to perform this action |  -  |
|**404** | The required file was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFormRoles**
> FormRoleArrayWrapper getAllFormRoles()

Returns all roles for the specified form.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FormRoleArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**404** | The required file was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditDiffUrl**
> EditHistoryDataWrapper getEditDiffUrl()

Returns a URL to the changes of a file version specified in the request.

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

Returns the version history of a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


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

let fileId: number; //The file unique identifier. (default to undefined)

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

Returns the list of actions performed on the file with the specified identifier.

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

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The required file was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileInfo**
> FileIntegerWrapper getFileInfo()

Returns the detailed information about a file with the ID specified in the request.

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

Returns the external links of a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file unique identifier. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file unique identifier. (default to undefined)
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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilePrimaryExternalLink**
> FileShareWrapper getFilePrimaryExternalLink()

Returns the primary external link by the identifier specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file unique identifier. | defaults to undefined|
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

let id: number; //The file unique identifier. (default to undefined)
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
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileVersionInfo**
> FileIntegerArrayWrapper getFileVersionInfo()

Returns the detailed information about all the available file versions with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileIntegerArrayWrapper**

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

let fileId: number; //The file unique identifier. (default to undefined)

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

Retrieves the result of a form-filling session.

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

# **getFormSubmissions**
> FormSubmissionsWrapper getFormSubmissions()

Returns the results of form submissions.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-form-submissions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FormSubmissionsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

const { status, data } = await apiInstance.getFormSubmissions(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Form submission results were successfully retrieved |  -  |
|**403** | You do not have enough permissions to perform this action |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedFileUri**
> FileLinkWrapper getPresignedFileUri()

Returns a link to download a file with the ID specified in the request asynchronously.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileLinkWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedUri**
> StringWrapper getPresignedUri()

Returns a pre-signed URL to download a file with the specified ID.  This temporary link provides secure access to the file.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProtectedFileUsers**
> MentionWrapperArrayWrapper getProtectedFileUsers()

Returns a list of users with their access rights to the protected file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**MentionWrapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReferenceData**
> FileReferenceWrapper getReferenceData()

Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReferenceDataDtoInteger** | **GetReferenceDataDtoInteger**|  | |


### Return type

**FileReferenceWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getXlsx**
> DocumentBuilderTaskWrapper getXlsx()

Returns the status of the XLSX report generation task for the specified form.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-xlsx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

const { status, data } = await apiInstance.getXlsx(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFormPDF**
> BooleanWrapper isFormPDF()

Checks if the PDF file is a form or not.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lockFile**
> FileIntegerWrapper lockFile(lockFileParameters)

Locks a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockFileParameters** | **LockFileParameters**| The parameters for locking a file. | |
| **fileId** | [**number**] | The file ID for locking. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let lockFileParameters: LockFileParameters; //The parameters for locking a file.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageFormFilling**
> manageFormFilling()

Performs the specified form filling action.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manageFormFillingDtoInteger** | **ManageFormFillingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openEditFile**
> ConfigurationIntegerWrapper openEditFile()

Returns the initialization configuration of a file to open it in the editor.

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
|**403** | You don\'t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFileVersion**
> EditHistoryArrayWrapper restoreFileVersion()

Restores a file version specified in the request.

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

Saves edits to a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The editing file ID from the request. | defaults to undefined|
| **downloadUri** | [**string**] | The URI to download the editing file. | (optional) defaults to undefined|
| **fileExtension** | [**string**] | The editing file extension from the request. | (optional) defaults to undefined|
| **file** | [**File**] | The edited file to be saved, uploaded as part of the multipart/form-data request.  This property represents the modified file content from the HTTP request form after editing operations.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream. | (optional) defaults to undefined|
| **forcesave** | [**boolean**] | Specifies whether to force save the file or not. | (optional) defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The editing file ID from the request. (default to undefined)
let downloadUri: string; //The URI to download the editing file. (optional) (default to undefined)
let fileExtension: string; //The editing file extension from the request. (optional) (default to undefined)
let file: File; //The edited file to be saved, uploaded as part of the multipart/form-data request.  This property represents the modified file content from the HTTP request form after editing operations.  The file is accessed via the IFormFile interface which provides access to the file name, content type, length, and stream. (optional) (default to undefined)
let forcesave: boolean; //Specifies whether to force save the file or not. (optional) (default to undefined)

const { status, data } = await apiInstance.saveEditingFileFromForm(
    fileId,
    downloadUri,
    fileExtension,
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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFileAsPdf**
> FileIntegerWrapper saveFileAsPdf(saveAsPdfInteger)

Saves a file with the identifier specified in the request as a PDF document.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveAsPdfInteger** | **SaveAsPdfInteger**| The parameters for saving the file as PDF. | |
| **id** | [**number**] | The file ID to save as PDF. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let saveAsPdfInteger: SaveAsPdfInteger; //The parameters for saving the file as PDF.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFormRoleMapping**
> saveFormRoleMapping()

Saves the form role mapping.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveFormRoleMappingDtoInteger** | **SaveFormRoleMappingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated information about form role mappings |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomFilterTag**
> FileIntegerWrapper setCustomFilterTag(customFilterParameters)

Sets the Custom Filter editing mode to a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFilterParameters** | **CustomFilterParameters**| The parameters for setting the Custom Filter editing mode. | |
| **fileId** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let customFilterParameters: CustomFilterParameters; //The parameters for setting the Custom Filter editing mode.

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileExternalLink**
> FileShareWrapper setFileExternalLink(fileLinkRequest)

Sets an external link to a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
let fileLinkRequest: FileLinkRequest; //The file external link parameters.

const { status, data } = await apiInstance.setFileExternalLink(
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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileOrder**
> FileIntegerWrapper setFileOrder()

Sets the order of the file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The file order information. | |
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | Not Found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFilesOrder**
> FileEntryIntegerArrayWrapper setFilesOrder()

Sets the order of the files specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersRequestDtoInteger** | **OrdersRequestDtoInteger**|  | |


### Return type

**FileEntryIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEditFile**
> StringWrapper startEditFile(startEdit)

Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).

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
let startEdit: StartEdit; //The file parameters to start editing.

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
|**403** | You don\'t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFillingFile**
> FileIntegerWrapper startFillingFile()

Starts filling a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to start filling. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleFileFavorite**
> BooleanWrapper toggleFileFavorite()

Changes the favorite status of the file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **favorite** | [**boolean**] | Specifies if the file is marked as favorite or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let favorite: boolean; //Specifies if the file is marked as favorite or not. (optional) (default to undefined)

const { status, data } = await apiInstance.toggleFileFavorite(
    fileId,
    favorite
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true - the file is favorite, false - the file is not favorite |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trackEditFile**
> KeyValuePairBooleanStringWrapper trackEditFile()

Tracks file changes when editing.

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
|**403** | You don\'t have enough permission to perform the operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFile**
> FileIntegerWrapper updateFile(updateFile)

Updates the information of the selected file with the parameters specified in the request.

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
let updateFile: UpdateFile; //The parameters for updating a file.

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

