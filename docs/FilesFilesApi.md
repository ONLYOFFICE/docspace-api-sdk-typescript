# FilesFilesApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTemplates**](#addtemplates) | **POST** /api/2.0/files/templates | Add template files|
|[**changeHistory**](#changehistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history|
|[**checkFillFormDraft**](#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling|
|[**copyFileAs**](#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file|
|[**createEditSession**](#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session|
|[**createFile**](#createfile) | **POST** /api/2.0/files/{folderId}/file | Create a file|
|[**createFileMyDocuments**](#createfilemydocuments) | **POST** /api/2.0/files/@my/file | Create a file in the \&quot;My documents\&quot; section|
|[**createHtmlFile**](#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file|
|[**createHtmlFileInMy**](#createhtmlfileinmy) | **POST** /api/2.0/files/@my/html | Create an HTML file in the \&quot;My documents\&quot; section|
|[**createPrimaryExternalLink**](#createprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link|
|[**createTextFile**](#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Create a text file|
|[**createTextFileInMy**](#createtextfileinmy) | **POST** /api/2.0/files/@my/text | Create a text file in the \&quot;My documents\&quot; section|
|[**createThumbnails**](#createthumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails|
|[**deleteFile**](#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file|
|[**deleteRecent**](#deleterecent) | **DELETE** /api/2.0/files/recent | Delete recent files|
|[**deleteTemplates**](#deletetemplates) | **DELETE** /api/2.0/files/templates | Delete template files|
|[**getAllFormRoles**](#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles|
|[**getEditDiffUrl**](#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL|
|[**getEditHistory**](#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history|
|[**getFileHistory**](#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history|
|[**getFileInfo**](#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Get file information|
|[**getFilePrimaryExternalLink**](#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link|
|[**getFileVersionInfo**](#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions|
|[**getFillResult**](#getfillresult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result|
|[**getLinks**](#getlinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links|
|[**getPresignedFileUri**](#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously|
|[**getPresignedUri**](#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link|
|[**getReferenceData**](#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Get reference data|
|[**isFormPDF**](#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file|
|[**lockFile**](#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file|
|[**manageFormFilling**](#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action|
|[**openEdit**](#openedit) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration|
|[**protectUsers**](#protectusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file|
|[**restoreVersion**](#restoreversion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version|
|[**saveAsPdf**](#saveaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF|
|[**saveEditingFromForm**](#saveeditingfromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits|
|[**saveFormRoleMapping**](#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping|
|[**setCustomFilterTag**](#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode|
|[**setExternalLink**](#setexternallink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link|
|[**setFilesOrder**](#setfilesorder) | **PUT** /api/2.0/files/order | Set order of files|
|[**setOrderFile**](#setorderfile) | **PUT** /api/2.0/files/{fileId}/order | Set file order|
|[**startEdit**](#startedit) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing|
|[**startFilling**](#startfilling) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling|
|[**trackEditFile**](#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing|
|[**updateFile**](#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Update a file|

# **addTemplates**
> BooleanWrapper addTemplates()

Adds files with the IDs specified in the request to the template list.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    TemplatesRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let templatesRequestDto: TemplatesRequestDto; // (optional)

const { status, data } = await apiInstance.addTemplates(
    templatesRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templatesRequestDto** | **TemplatesRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeHistory**
> FileIntegerArrayWrapper changeHistory()

Changes the version history of a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ChangeHistory
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file Id to change its version history. (default to undefined)
let changeHistory: ChangeHistory; //The parameters for changing version history. (optional)

const { status, data } = await apiInstance.changeHistory(
    fileId,
    changeHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeHistory** | **ChangeHistory**| The parameters for changing version history. | |
| **fileId** | [**number**] | The file Id to change its version history. | defaults to undefined|


### Return type

**FileIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated information about file versions |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFillFormDraft**
> StringWrapper checkFillFormDraft()

Checks if the current file is a form draft which can be filled out.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CheckFillFormDraft
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the form draft. (default to undefined)
let checkFillFormDraft: CheckFillFormDraft; //The parameters for checking the form draft filling. (optional)

const { status, data } = await apiInstance.checkFillFormDraft(
    fileId,
    checkFillFormDraft
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkFillFormDraft** | **CheckFillFormDraft**| The parameters for checking the form draft filling. | |
| **fileId** | [**number**] | The file ID of the form draft. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

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
> FileEntryWrapper copyFileAs()

Copies (and converts if possible) an existing file to the specified folder.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CopyAsJsonElement
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to copy. (default to undefined)
let copyAsJsonElement: CopyAsJsonElement; //The parameters for copying a file. (optional)

const { status, data } = await apiInstance.copyFileAs(
    fileId,
    copyAsJsonElement
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyAsJsonElement** | **CopyAsJsonElement**| The parameters for copying a file. | |
| **fileId** | [**number**] | The file ID to copy. | defaults to undefined|


### Return type

**FileEntryWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Copied file entry information |  -  |
|**400** | No file id or folder id toFolderId determine provider |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEditSession**
> ObjectWrapper createEditSession()

Creates a session to edit the existing file with multiple chunks (needed for WebDAV).   **Note**: Information about created session which includes:  <ul>  <li><b>id:</b> unique ID of this upload session,</li>  <li><b>created:</b> UTC time when the session was created,</li>  <li><b>expired:</b> UTC time when the session will expire if no chunks are sent before that time,</li>  <li><b>location:</b> URL where you should send your next chunk,</li>  <li><b>bytes_uploaded:</b> number of bytes uploaded for the specific upload ID,</li>  <li><b>bytes_total:</b> total number of bytes which will be uploaded.</li>  </ul>

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let fileSize: number; //The file size in bytes. (optional) (default to undefined)

const { status, data } = await apiInstance.createEditSession(
    fileId,
    fileSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **fileSize** | [**number**] | The file size in bytes. | (optional) defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Information about created session |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFile**
> FileIntegerWrapper createFile()

Creates a new file in the specified folder with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateFileJsonElement
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID for the file creation. (default to undefined)
let createFileJsonElement: CreateFileJsonElement; //The parameters for creating a file. (optional)

const { status, data } = await apiInstance.createFile(
    folderId,
    createFileJsonElement
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**| The parameters for creating a file. | |
| **folderId** | [**number**] | The folder ID for the file creation. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileMyDocuments**
> FileIntegerWrapper createFileMyDocuments()

Creates a new file in the \"My documents\" section with the title specified in the request.   **Note**: If a file extension is different from DOCX/XLSX/PPTX and refers to one of the known text, spreadsheet, or presentation formats, it will be changed to DOCX/XLSX/PPTX accordingly. If the file extension is not specified or is unknown, the DOCX extension will be added to the file title.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateFileJsonElement
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createFileJsonElement: CreateFileJsonElement; // (optional)

const { status, data } = await apiInstance.createFileMyDocuments(
    createFileJsonElement
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFile**
> FileIntegerWrapper createHtmlFile()

Creates an HTML (.html) file in the selected folder with the title and contents specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID to create the text or HTML file. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file. (optional)

const { status, data } = await apiInstance.createHtmlFile(
    folderId,
    createTextOrHtmlFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFileInMy**
> FileIntegerWrapper createHtmlFileInMy()

Creates an HTML (.html) file in the \"My documents\" section with the title and contents specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createTextOrHtmlFile: CreateTextOrHtmlFile; // (optional)

const { status, data } = await apiInstance.createHtmlFileInMy(
    createTextOrHtmlFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPrimaryExternalLink**
> FileShareWrapper createPrimaryExternalLink()

Creates a primary external link by the identifier specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    FileLinkRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The file external link parameters. (optional)

const { status, data } = await apiInstance.createPrimaryExternalLink(
    id,
    fileLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFile**
> FileIntegerWrapper createTextFile()

Creates a text (.txt) file in the selected folder with the title and contents specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let folderId: number; //The folder ID to create the text or HTML file. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The parameters for creating an HTML or text file. (optional)

const { status, data } = await apiInstance.createTextFile(
    folderId,
    createTextOrHtmlFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The parameters for creating an HTML or text file. | |
| **folderId** | [**number**] | The folder ID to create the text or HTML file. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFileInMy**
> FileIntegerWrapper createTextFileInMy()

Creates a text (.txt) file in the \"My documents\" section with the title and contents specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CreateTextOrHtmlFile
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let createTextOrHtmlFile: CreateTextOrHtmlFile; // (optional)

const { status, data } = await apiInstance.createTextFileInMy(
    createTextOrHtmlFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.createThumbnails(
    baseBatchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**ObjectArrayWrapper**

### Authorization

No authorization required

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    Delete
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to delete. (default to undefined)
let _delete: Delete; //The parameters for deleting a file.

const { status, data } = await apiInstance.deleteFile(
    fileId,
    _delete
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_delete** | **Delete**| The parameters for deleting a file. | |
| **fileId** | [**number**] | The file ID to delete. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

Removes files with the IDs specified in the request from the \"Recent\" section.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.deleteRecent(
    baseBatchRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**NoContentResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let requestBody: Array<number>; //The file IDs. (optional)

const { status, data } = await apiInstance.deleteTemplates(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| The file IDs. | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFormRoles**
> FormRoleArrayWrapper getAllFormRoles()

Returns all roles for the specified form.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getAllFormRoles(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FormRoleArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved all roles for the form |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to view the form roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditDiffUrl**
> EditHistoryDataWrapper getEditDiffUrl()

Returns a URL to the changes of a file version specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let version: number; //The file version. (optional) (default to undefined)

const { status, data } = await apiInstance.getEditDiffUrl(
    fileId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **version** | [**number**] | The file version. | (optional) defaults to undefined|


### Return type

**EditHistoryDataWrapper**

### Authorization

No authorization required

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getEditHistory(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

No authorization required

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the history request. (default to undefined)
let fromDate: ApiDateTime; //The start date of the history. (optional) (default to undefined)
let toDate: ApiDateTime; //The end date of the history. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileHistory(
    fileId,
    fromDate,
    toDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the history request. | defaults to undefined|
| **fromDate** | **ApiDateTime** | The start date of the history. | (optional) defaults to undefined|
| **toDate** | **ApiDateTime** | The end date of the history. | (optional) defaults to undefined|


### Return type

**HistoryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of actions performed on the file |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | The required file was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileInfo**
> FileIntegerWrapper getFileInfo()

Returns the detailed information about a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let version: number; //The file version. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileInfo(
    fileId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **version** | [**number**] | The file version. | (optional) defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilePrimaryExternalLink**
> FileShareWrapper getFilePrimaryExternalLink()

Returns the primary external link by the identifier specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getFilePrimaryExternalLink(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

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
> FileIntegerArrayWrapper getFileVersionInfo()

Returns the detailed information about all the available file versions with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getFileVersionInfo(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileIntegerArrayWrapper**

### Authorization

No authorization required

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fillingSessionId: string; //The form-filling session ID. (optional) (default to undefined)

const { status, data } = await apiInstance.getFillResult(
    fillingSessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fillingSessionId** | [**string**] | The form-filling session ID. | (optional) defaults to undefined|


### Return type

**FillingFormResultIntegerWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLinks**
> FileShareArrayWrapper getLinks()

Returns the external links of a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getLinks(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedFileUri**
> FileLinkWrapper getPresignedFileUri()

Returns a link to download a file with the ID specified in the request asynchronously.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getPresignedFileUri(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**FileLinkWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getPresignedUri(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File download link |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReferenceData**
> FileReferenceWrapper getReferenceData()

Returns the reference data to uniquely identify a file in its system and check the availability of insering data into the destination spreadsheet by the external link.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    GetReferenceDataDtoInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let getReferenceDataDtoInteger: GetReferenceDataDtoInteger; // (optional)

const { status, data } = await apiInstance.getReferenceData(
    getReferenceDataDtoInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReferenceDataDtoInteger** | **GetReferenceDataDtoInteger**|  | |


### Return type

**FileReferenceWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File reference data |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFormPDF**
> BooleanWrapper isFormPDF()

Checks if the PDF file is a form or not.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.isFormPDF(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
> FileIntegerWrapper lockFile()

Locks a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    LockFileParameters
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID for locking. (default to undefined)
let lockFileParameters: LockFileParameters; //The parameters for locking a file. (optional)

const { status, data } = await apiInstance.lockFile(
    fileId,
    lockFileParameters
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockFileParameters** | **LockFileParameters**| The parameters for locking a file. | |
| **fileId** | [**number**] | The file ID for locking. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ManageFormFillingDtoInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; // (default to undefined)
let manageFormFillingDtoInteger: ManageFormFillingDtoInteger; // (optional)

const { status, data } = await apiInstance.manageFormFilling(
    fileId,
    manageFormFillingDtoInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manageFormFillingDtoInteger** | **ManageFormFillingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully processed the form filling action |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openEdit**
> ConfigurationIntegerWrapper openEdit()

Returns the initialization configuration of a file to open it in the editor.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to open. (default to undefined)
let version: number; //The file version to open. (optional) (default to undefined)
let view: boolean; //Specifies if the document will be opened for viewing only or not. (optional) (default to undefined)
let editorType: EditorType; //The editor type to open the file. (optional) (default to undefined)
let edit: boolean; //Specifies if the document is opened in the editing mode or not. (optional) (default to undefined)
let fill: boolean; //Specifies if the document is opened in the form-filling mode or not. (optional) (default to undefined)

const { status, data } = await apiInstance.openEdit(
    fileId,
    version,
    view,
    editorType,
    edit,
    fill
);
```

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

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Configuration parameters |  -  |
|**403** | You don\&#39;t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protectUsers**
> MentionWrapperArrayWrapper protectUsers()

Returns a list of users with their access rights to the protected file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.protectUsers(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID of the request. | defaults to undefined|


### Return type

**MentionWrapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with their access rights to the protected file |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreVersion**
> EditHistoryArrayWrapper restoreVersion()

Restores a file version specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID of the restore version. (default to undefined)
let version: number; //The file version of the restore. (optional) (default to undefined)
let url: string; //The file version URL of the restore. (optional) (default to undefined)

const { status, data } = await apiInstance.restoreVersion(
    fileId,
    version,
    url
);
```

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

# **saveAsPdf**
> FileIntegerWrapper saveAsPdf()

Saves a file with the identifier specified in the request as a PDF document.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveAsPdfInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID to save as PDF. (default to undefined)
let saveAsPdfInteger: SaveAsPdfInteger; //The parameters for saving file as PDF. (optional)

const { status, data } = await apiInstance.saveAsPdf(
    id,
    saveAsPdfInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveAsPdfInteger** | **SaveAsPdfInteger**| The parameters for saving file as PDF. | |
| **id** | [**number**] | The file ID to save as PDF. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New file information |  -  |
|**401** | Unauthorized |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveEditingFromForm**
> FileIntegerWrapper saveEditingFromForm()

Saves edits to a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The editing file ID from the request. (default to undefined)
let fileExtension: string; //The editing file extension from the request. (optional) (default to undefined)
let downloadUri: string; //The URI to download the editing file. (optional) (default to undefined)
let file: File; //The request file stream. (optional) (default to undefined)
let forcesave: boolean; //Specifies whether to force save the file or not. (optional) (default to undefined)

const { status, data } = await apiInstance.saveEditingFromForm(
    fileId,
    fileExtension,
    downloadUri,
    file,
    forcesave
);
```

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

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved file parameters |  -  |
|**400** | No file id or folder id toFolderId determine provider |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFormRoleMapping**
> FormRoleWrapper saveFormRoleMapping()

Saves the form role mapping.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveFormRoleMappingDtoInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; // (default to undefined)
let saveFormRoleMappingDtoInteger: SaveFormRoleMappingDtoInteger; // (optional)

const { status, data } = await apiInstance.saveFormRoleMapping(
    fileId,
    saveFormRoleMappingDtoInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveFormRoleMappingDtoInteger** | **SaveFormRoleMappingDtoInteger**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FormRoleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated information about form role mappings |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomFilterTag**
> FileIntegerWrapper setCustomFilterTag()

Sets the Custom Filter editing mode to a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CustomFilterParameters
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let customFilterParameters: CustomFilterParameters; //The parameters for setting the Custom Filter editing mode. (optional)

const { status, data } = await apiInstance.setCustomFilterTag(
    fileId,
    customFilterParameters
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFilterParameters** | **CustomFilterParameters**| The parameters for setting the Custom Filter editing mode. | |
| **fileId** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setExternalLink**
> FileShareWrapper setExternalLink()

Sets an external link to a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    FileLinkRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file ID. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The file external link parameters. (optional)

const { status, data } = await apiInstance.setExternalLink(
    id,
    fileLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The file external link parameters. | |
| **id** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File security information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFilesOrder**
> FileIntegerArrayWrapper setFilesOrder()

Sets order of the files.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    OrdersRequestDtoInteger
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let ordersRequestDtoInteger: OrdersRequestDtoInteger; // (optional)

const { status, data } = await apiInstance.setFilesOrder(
    ordersRequestDtoInteger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersRequestDtoInteger** | **OrdersRequestDtoInteger**|  | |


### Return type

**FileIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file entries information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrderFile**
> FileIntegerWrapper setOrderFile()

Sets order of the file with ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    OrderRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)
let orderRequestDto: OrderRequestDto; //The file order information. (optional)

const { status, data } = await apiInstance.setOrderFile(
    fileId,
    orderRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The file order information. | |
| **fileId** | [**number**] | The file unique identifier. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEdit**
> StringWrapper startEdit()

Informs about opening a file with the ID specified in the request for editing, locking it from being deleted or moved (this method is called by the mobile editors).

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    StartEdit
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to start editing. (default to undefined)
let startEdit: StartEdit; //The file parameters to start editing. (optional)

const { status, data } = await apiInstance.startEdit(
    fileId,
    startEdit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startEdit** | **StartEdit**| The file parameters to start editing. | |
| **fileId** | [**number**] | The file ID to start editing. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File key for Document Service |  -  |
|**403** | You don\&#39;t have enough permission to view the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFilling**
> FileIntegerWrapper startFilling()

Starts filling a file with the ID specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to start filling. (default to undefined)

const { status, data } = await apiInstance.startFilling(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID to start filling. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trackEditFile**
> KeyValuePairBooleanStringWrapper trackEditFile()

Tracks file changes when editing.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

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

Updates the information of the selected file with the parameters specified in the request.

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    UpdateFile
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file ID to update. (default to undefined)
let updateFile: UpdateFile; //The parameters for updating a file. (optional)

const { status, data } = await apiInstance.updateFile(
    fileId,
    updateFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFile** | **UpdateFile**| The parameters for updating a file. | |
| **fileId** | [**number**] | The file ID to update. | defaults to undefined|


### Return type

**FileIntegerWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated file information |  -  |
|**403** | You do not have enough permissions to edit the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

