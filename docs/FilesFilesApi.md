# FilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFileToRecent**](#addfiletorecent) | **POST** /api/2.0/files/file/{fileId}/recent | Add a file to Recent|
|[**addFileToRecentThirdParty**](#addfiletorecentthirdparty) | **POST** /api/2.0/files/file/{fileId}/recent | Add a file to Recent (third-party storage)|
|[**addTemplates**](#addtemplates) | **POST** /api/2.0/files/templates | Add template files|
|[**changeVersionHistory**](#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history|
|[**changeVersionHistoryThirdParty**](#changeversionhistorythirdparty) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history (third-party storage)|
|[**checkFillFormDraft**](#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Open a form draft for filling|
|[**checkFillFormDraftThirdParty**](#checkfillformdraftthirdparty) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Open a form draft for filling (third-party storage)|
|[**copyFileAs**](#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file|
|[**copyFileAsThirdParty**](#copyfileasthirdparty) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file (third-party storage)|
|[**createEditSession**](#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session|
|[**createEditSessionThirdParty**](#createeditsessionthirdparty) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session (third-party storage)|
|[**createFile**](#createfile) | **POST** /api/2.0/files/{folderId}/file | Create a file|
|[**createFileThirdParty**](#createfilethirdparty) | **POST** /api/2.0/files/{folderId}/file | Create a file (third-party storage)|
|[**createFileInMyDocuments**](#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | Create a file in My documents|
|[**createFilePrimaryExternalLink**](#createfileprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Create the file primary external link|
|[**createFilePrimaryExternalLinkThirdParty**](#createfileprimaryexternallinkthirdparty) | **POST** /api/2.0/files/file/{id}/link | Create the file primary external link (third-party storage)|
|[**createHtmlFile**](#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file|
|[**createHtmlFileThirdParty**](#createhtmlfilethirdparty) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file (third-party storage)|
|[**createHtmlFileInMyDocuments**](#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in My documents|
|[**createTextFile**](#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Create a text file|
|[**createTextFileThirdParty**](#createtextfilethirdparty) | **POST** /api/2.0/files/{folderId}/text | Create a text file (third-party storage)|
|[**createTextFileInMyDocuments**](#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | Create a text file in My documents|
|[**createThumbnails**](#createthumbnails) | **POST** /api/2.0/files/thumbnails | Queue file thumbnails|
|[**deleteFile**](#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file|
|[**deleteFileThirdParty**](#deletefilethirdparty) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file (third-party storage)|
|[**deleteRecent**](#deleterecent) | **DELETE** /api/2.0/files/recent | Delete recent files|
|[**deleteTemplates**](#deletetemplates) | **DELETE** /api/2.0/files/templates | Delete template files|
|[**generateXlsx**](#generatexlsx) | **POST** /api/2.0/files/file/{fileId}/xlsx | Generate a form answers report|
|[**getAllFormRoles**](#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles|
|[**getAllFormRolesThirdParty**](#getallformrolesthirdparty) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles (third-party storage)|
|[**getEditDiffUrl**](#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL|
|[**getEditDiffUrlThirdParty**](#geteditdiffurlthirdparty) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL (third-party storage)|
|[**getEditHistory**](#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history|
|[**getEditHistoryThirdParty**](#getedithistorythirdparty) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history (third-party storage)|
|[**getEncryptionInfo**](#getencryptioninfo) | **GET** /api/2.0/files/{fileId}/access | Get file encryption information|
|[**getEncryptionInfoThirdParty**](#getencryptioninfothirdparty) | **GET** /api/2.0/files/{fileId}/access | Get file encryption information (third-party storage)|
|[**getFileHistory**](#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history|
|[**getFileInfo**](#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Get file information|
|[**getFileInfoThirdParty**](#getfileinfothirdparty) | **GET** /api/2.0/files/file/{fileId} | Get file information (third-party storage)|
|[**getFileLinks**](#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links|
|[**getFileLinksThirdParty**](#getfilelinksthirdparty) | **GET** /api/2.0/files/file/{id}/links | Get file external links (third-party storage)|
|[**getFilePrimaryExternalLink**](#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Get the file primary external link|
|[**getFilePrimaryExternalLinkThirdParty**](#getfileprimaryexternallinkthirdparty) | **GET** /api/2.0/files/file/{id}/link | Get the file primary external link (third-party storage)|
|[**getFileVersionInfo**](#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions|
|[**getFileVersionInfoThirdParty**](#getfileversioninfothirdparty) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions (third-party storage)|
|[**getFillResult**](#getfillresult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result|
|[**getFormSubmissions**](#getformsubmissions) | **GET** /api/2.0/files/file/{fileId}/submissions | Get form submission results|
|[**getPresignedFileUri**](#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get a signed download address|
|[**getPresignedFileUriThirdParty**](#getpresignedfileurithirdparty) | **GET** /api/2.0/files/file/{fileId}/presigned | Get a signed download address (third-party storage)|
|[**getPresignedUri**](#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link|
|[**getPresignedUriThirdParty**](#getpresignedurithirdparty) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link (third-party storage)|
|[**getProtectedFileUsers**](#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users for document protection|
|[**getProtectedFileUsersThirdParty**](#getprotectedfileusersthirdparty) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users for document protection (third-party storage)|
|[**getReferenceData**](#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Resolve a spreadsheet reference|
|[**getXlsx**](#getxlsx) | **GET** /api/2.0/files/file/{fileId}/xlsx | Get form report generation status|
|[**isFormPDF**](#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file|
|[**isFormPDFThirdParty**](#isformpdfthirdparty) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file (third-party storage)|
|[**lockFile**](#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file|
|[**lockFileThirdParty**](#lockfilethirdparty) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file (third-party storage)|
|[**manageFormFilling**](#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action|
|[**openEditFile**](#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | Get the editor configuration|
|[**openEditFileThirdParty**](#openeditfilethirdparty) | **GET** /api/2.0/files/file/{fileId}/openedit | Get the editor configuration (third-party storage)|
|[**restoreFileVersion**](#restorefileversion) | **POST** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version|
|[**restoreFileVersionThirdParty**](#restorefileversionthirdparty) | **POST** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version (third-party storage)|
|[**saveEditingFileFromForm**](#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save edited file content|
|[**saveEditingFileFromFormThirdParty**](#saveeditingfilefromformthirdparty) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save edited file content (third-party storage)|
|[**saveFileAsPdf**](#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF|
|[**saveFileAsPdfThirdParty**](#savefileaspdfthirdparty) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF (third-party storage)|
|[**saveFormRoleMapping**](#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping|
|[**setCustomFilterTag**](#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode|
|[**setCustomFilterTagThirdParty**](#setcustomfiltertagthirdparty) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode (third-party storage)|
|[**setEncryptionInfo**](#setencryptioninfo) | **PUT** /api/2.0/files/{fileId}/access | Set file encryption information|
|[**setEncryptionInfoThirdParty**](#setencryptioninfothirdparty) | **PUT** /api/2.0/files/{fileId}/access | Set file encryption information (third-party storage)|
|[**setFileExternalLink**](#setfileexternallink) | **PUT** /api/2.0/files/file/{id}/links | Set a file external link|
|[**setFileExternalLinkThirdParty**](#setfileexternallinkthirdparty) | **PUT** /api/2.0/files/file/{id}/links | Set a file external link (third-party storage)|
|[**setFileOrder**](#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | Set file order|
|[**setFileOrderThirdParty**](#setfileorderthirdparty) | **PUT** /api/2.0/files/{fileId}/order | Set file order (third-party storage)|
|[**setFilesOrder**](#setfilesorder) | **PUT** /api/2.0/files/order | Set order of files|
|[**startEditFile**](#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | Open an editing session|
|[**startEditFileThirdParty**](#starteditfilethirdparty) | **POST** /api/2.0/files/file/{fileId}/startedit | Open an editing session (third-party storage)|
|[**startFillingFile**](#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start filling a form|
|[**startFillingFileThirdParty**](#startfillingfilethirdparty) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start filling a form (third-party storage)|
|[**toggleFileFavorite**](#togglefilefavorite) | **GET** /api/2.0/files/favorites/{fileId} | Set the file favorite status|
|[**toggleFileFavoriteThirdParty**](#togglefilefavoritethirdparty) | **GET** /api/2.0/files/favorites/{fileId} | Set the file favorite status (third-party storage)|
|[**trackEditFile**](#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track an editing session|
|[**trackEditFileThirdParty**](#trackeditfilethirdparty) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track an editing session (third-party storage)|
|[**updateFile**](#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Update a file|
|[**updateFileThirdParty**](#updatefilethirdparty) | **PUT** /api/2.0/files/file/{fileId} | Update a file (third-party storage)|

# **addFileToRecent**
> FileWrapper addFileToRecent()

Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The file as it stands after the entry was recorded |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The calling account cannot read this file |  -  |
|**404** | No file answers to this identifier |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addFileToRecentThirdParty**
> ThirdPartyFileWrapper addFileToRecentThirdParty()

Stamps the file as just used by the calling account and puts it at the top of that account\'s Recent section,  then answers with the file as it stands now. The list is personal: no other member sees the change, and the  file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest  may call it, and a visitor who reaches the file through an external link is recorded against that link. A  caller without read access is refused with 403, and an identifier that resolves to nothing answers 404.  Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds  the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and  an encrypted file of a private room is answered normally but never recorded. Read the section back with  `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among  the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-file-to-recent-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.addFileToRecentThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The file as it stands after the entry was recorded |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The calling account cannot read this file |  -  |
|**404** | No file answers to this identifier |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addTemplates**
> BooleanWrapper addTemplates()

Adds the listed files to the personal template list of the calling account, the set the portal offers when a  new document is started from an existing one. The list belongs to the account and no other member sees it.  Every authenticated member type may manage their own list, a guest is refused, and read access to each file is  required. Only formats the portal treats as template documents survive: the accepted extensions arrive in  `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only  numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is  `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable  file all achieve, so it confirms nothing about what was added; no operation of this document reads the list  back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.

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
|**200** | Always true: the request was understood, which does not mean that anything was added |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeVersionHistory**
> FileArrayWrapper changeVersionHistory(changeHistory)

Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeHistory** | **ChangeHistory**| The change to make to the revision group. | |
| **fileId** | [**number**] | The file whose version history is changed. | defaults to undefined|


### Return type

**FileArrayWrapper**

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

let fileId: number; //The file whose version history is changed. (default to undefined)
let changeHistory: ChangeHistory; //The change to make to the revision group.

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
|**200** | The versions of the file after the change |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not change the version history of the file |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeVersionHistoryThirdParty**
> ThirdPartyFileArrayWrapper changeVersionHistoryThirdParty(changeHistory)

Closes or reopens a revision group in the version history of a file and answers with every stored version of  that file, newest first. With `continueVersion=false` the named version is completed: its content is stored  again as a fresh version that opens a new revision group, so the editing that follows no longer extends the  previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so  the next save continues that revision instead of becoming a version of its own; a file that has only one group  is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history  of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator  rights have; plain editing access is refused with 403, as are a guest and a member without access to the room.  The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session  or is kept in a connected third-party storage is refused.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-version-history-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeHistory** | **ChangeHistory**| The change to make to the revision group. | |
| **fileId** | [**string**] | The file whose version history is changed. | defaults to undefined|


### Return type

**ThirdPartyFileArrayWrapper**

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

let fileId: string; //The file whose version history is changed. (default to undefined)
let changeHistory: ChangeHistory; //The change to make to the revision group.

const { status, data } = await apiInstance.changeVersionHistoryThirdParty(
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
|**200** | The versions of the file after the change |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not change the version history of the file |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFillFormDraft**
> StringWrapper checkFillFormDraft(checkFillFormDraft)

Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkFillFormDraft** | **CheckFillFormDraft**| The revision of the form to open and what the caller intends to do with it. | |
| **fileId** | [**number**] | The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CheckFillFormDraft
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well. (default to undefined)
let checkFillFormDraft: CheckFillFormDraft; //The revision of the form to open and what the caller intends to do with it.

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
|**200** | The editor address to open, with an optional notice fragment |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot open the form, or asked for a past revision without history access |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFillFormDraftThirdParty**
> StringWrapper checkFillFormDraftThirdParty(checkFillFormDraft)

Resolves the editor address the caller must open to fill out the given PDF form, and provisions the personal  draft that filling needs. The form has to live in a form-filling room and filling has to be started for it  with `PUT api/2.0/files/file/{fileId}/manageformfilling`; a caller who may edit the form, a form whose filling  has not started, and a request naming `view` or `embedded` as the action are all sent straight to the form  itself. Read access to the form is enough to get an address, fill-forms access is what puts the caller into  the filling flow, and a holder of an external link may call it without signing in, while a caller with neither  a session nor a link key is rejected. In the filling case the call is not read-only: it copies the form into  the room\'s in-progress folder under the caller\'s name, clears the new-item badge, closes the editing session  of the original, and answers with the address of that copy. A repeated call reuses that copy, and a call  naming an existing draft adds a discard notice when that draft is no longer valid. The answer is one URL  string that may carry a `#message/...` fragment the editor renders as a notice. For the full editor  configuration use `GET api/2.0/files/file/{fileId}/openedit`. A form the caller cannot open is refused with  403, and one that does not exist is answered as missing.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-fill-form-draft-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkFillFormDraft** | **CheckFillFormDraft**| The revision of the form to open and what the caller intends to do with it. | |
| **fileId** | [**string**] | The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    CheckFillFormDraft
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The identifier of the PDF form to open, as it is returned by a room listing such as  `GET api/2.0/files/{folderId}`. The identifier of an already created draft is accepted here as well. (default to undefined)
let checkFillFormDraft: CheckFillFormDraft; //The revision of the form to open and what the caller intends to do with it.

const { status, data } = await apiInstance.checkFillFormDraftThirdParty(
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
|**200** | The editor address to open, with an optional notice fragment |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot open the form, or asked for a past revision without history access |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyFileAs**
> FileEntryBaseWrapper copyFileAs(copyAsJsonElement)

Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyAsJsonElement** | **CopyAsJsonElement**| The title, the destination and the conversion options of the copy. | |
| **fileId** | [**number**] | The file to copy. | defaults to undefined|


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

let fileId: number; //The file to copy. (default to undefined)
let copyAsJsonElement: CopyAsJsonElement; //The title, the destination and the conversion options of the copy.

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
|**200** | The copy that was created |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The content cannot be converted into the format of the new title |  -  |
|**403** | The caller may not read the file or may not create files in the destination folder |  -  |
|**404** | The file or the destination folder does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyFileAsThirdParty**
> FileEntryBaseWrapper copyFileAsThirdParty(copyAsJsonElement)

Copies one file into another folder under a new title, converting its content when the new title names a  different format, and answers with the copy that was created. The extension of `destTitle` decides what  happens: the same extension as the source copies the bytes as they are, a different one has the document  service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source  file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a  string for a folder in a connected third-party storage; anything else is answered with an empty body and  nothing is copied. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a  format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another  copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/copy-file-as-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyAsJsonElement** | **CopyAsJsonElement**| The title, the destination and the conversion options of the copy. | |
| **fileId** | [**string**] | The file to copy. | defaults to undefined|


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

let fileId: string; //The file to copy. (default to undefined)
let copyAsJsonElement: CopyAsJsonElement; //The title, the destination and the conversion options of the copy.

const { status, data } = await apiInstance.copyFileAsThirdParty(
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
|**200** | The copy that was created |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The content cannot be converted into the format of the new title |  -  |
|**403** | The caller may not read the file or may not create files in the destination folder |  -  |
|**404** | The file or the destination folder does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEditSession**
> ChunkedUploadSessionResponseWrapperWrapper createEditSession()

Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose content the session will replace; take the id from a folder listing or from the file itself. | defaults to undefined|
| **fileSize** | [**number**] | The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part. | (optional) defaults to undefined|


### Return type

**ChunkedUploadSessionResponseWrapperWrapper**

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

let fileId: number; //The file whose content the session will replace; take the id from a folder listing or from the file itself. (default to undefined)
let fileSize: number; //The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part. (optional) (default to undefined)

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
|**200** | The created editing session, wrapped in the success envelope |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot edit this file |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEditSessionThirdParty**
> ThirdPartyChunkedUploadSessionResponseWrapperWrapper createEditSessionThirdParty()

Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a  document. The answer carries the session id the later calls quote, the address of the standalone chunk  handler, the expiry and the reserved size, and nothing is written until the parts reach  `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with  `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in.  Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current  one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be  allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader  and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit  for chunked uploads is refused before the session is created.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-edit-session-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose content the session will replace; take the id from a folder listing or from the file itself. | defaults to undefined|
| **fileSize** | [**number**] | The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part. | (optional) defaults to undefined|


### Return type

**ThirdPartyChunkedUploadSessionResponseWrapperWrapper**

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

let fileId: string; //The file whose content the session will replace; take the id from a folder listing or from the file itself. (default to undefined)
let fileSize: number; //The number of bytes the new content will take. It is checked against the portal limit for chunked uploads  before the session opens, and a session left at 0 takes the whole content in a single part. (optional) (default to undefined)

const { status, data } = await apiInstance.createEditSessionThirdParty(
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
|**200** | The created editing session, wrapped in the success envelope |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot edit this file |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFile**
> FileWrapper createFile(createFileJsonElement)

Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**| The title of the new file and the source of its content. | |
| **folderId** | [**number**] | The folder the file is created in. | defaults to undefined|


### Return type

**FileWrapper**

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

let folderId: number; //The folder the file is created in. (default to undefined)
let createFileJsonElement: CreateFileJsonElement; //The title of the new file and the source of its content.

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
|**200** | The created file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileThirdParty**
> ThirdPartyFileWrapper createFileThirdParty(createFileJsonElement)

Creates a file in the folder named in the route and answers with the stored file. The extension in the title  decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the  portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension  and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title  verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId`  copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a  number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The caller needs the right  to create files in the folder, and the room roots, Archive and the template sections are refused even to an  admin. The call is mutating and not idempotent. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/file`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**| The title of the new file and the source of its content. | |
| **folderId** | [**string**] | The folder the file is created in. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let folderId: string; //The folder the file is created in. (default to undefined)
let createFileJsonElement: CreateFileJsonElement; //The title of the new file and the source of its content.

const { status, data } = await apiInstance.createFileThirdParty(
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
|**200** | The created file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFileInMyDocuments**
> FileWrapper createFileInMyDocuments()

Creates a file in the caller\'s own My documents section and answers with the stored file. The extension in  the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to  the portal\'s own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown  extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the  title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order:  `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read  - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of  them the portal\'s blank template for that format and the caller\'s language is used. The call is mutating and  not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest  cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a  room or any other folder use  `POST api/2.0/files/{folderId}/file`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFileJsonElement** | **CreateFileJsonElement**|  | |


### Return type

**FileWrapper**

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
|**200** | The created file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFilePrimaryExternalLink**
> FileShareWrapper createFilePrimaryExternalLink(fileLinkRequest)

Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The settings of the link. They are applied in full, so a field left out is reset rather than kept. | |
| **id** | [**number**] | The file the link points at. | defaults to undefined|


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

let id: number; //The file the link points at. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The settings of the link. They are applied in full, so a field left out is reset rather than kept.

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
|**200** | The primary external link of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not share the file |  -  |
|**404** | The file does not exist, or its primary link was revoked |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFilePrimaryExternalLinkThirdParty**
> FileShareWrapper createFilePrimaryExternalLinkThirdParty(fileLinkRequest)

Answers with the primary external link of a file, creating it on the first call and returning the one that  already exists afterwards, so the operation is idempotent in effect: a second call with other parameters does  not reconfigure the existing link, and changing one is the business of `PUT api/2.0/files/file/{id}/links`.  The parameters therefore only shape the link at the moment it is born - `access` its rights, `expirationDate`  its lifetime, which for a file in a personal section is unlimited here rather than the default of a few days,  `internal` whether only signed-in members may follow it, `denyDownload` whether the content may only be  viewed, and `password` a secret to be asked for. A PDF form gets the rights it needs for filling out whatever  was asked for, and a form in a form-filling room is answered with the link of the room instead. The caller  needs the right to share the file and is otherwise refused with 403; a link that was deliberately revoked is  not recreated but answered with 404. Read the address from `sharedTo.shareLink`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-file-primary-external-link-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The settings of the link. They are applied in full, so a field left out is reset rather than kept. | |
| **id** | [**string**] | The file the link points at. | defaults to undefined|


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

let id: string; //The file the link points at. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The settings of the link. They are applied in full, so a field left out is reset rather than kept.

const { status, data } = await apiInstance.createFilePrimaryExternalLinkThirdParty(
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
|**200** | The primary external link of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not share the file |  -  |
|**404** | The file does not exist, or its primary link was revoked |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFile**
> FileWrapper createHtmlFile(createTextOrHtmlFile)

Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The title, the content and the collision behaviour of the new file. | |
| **folderId** | [**number**] | The folder the file is created in. | defaults to undefined|


### Return type

**FileWrapper**

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

let folderId: number; //The folder the file is created in. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The title, the content and the collision behaviour of the new file.

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
|**200** | The created or updated HTML file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not create files in this folder |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFileThirdParty**
> ThirdPartyFileWrapper createHtmlFileThirdParty(createTextOrHtmlFile)

Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers  with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a  request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round  than its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The caller needs the right to create files in the folder and is otherwise  refused with 403. The call is mutating. To create the file in the caller\'s own section use  `POST api/2.0/files/@my/html`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The title, the content and the collision behaviour of the new file. | |
| **folderId** | [**string**] | The folder the file is created in. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let folderId: string; //The folder the file is created in. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The title, the content and the collision behaviour of the new file.

const { status, data } = await apiInstance.createHtmlFileThirdParty(
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
|**200** | The created or updated HTML file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not create files in this folder |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHtmlFileInMyDocuments**
> FileWrapper createHtmlFileInMyDocuments()

Creates an HTML file in the caller\'s own My documents section out of the markup passed as the content, and  answers with the stored file. The `.html` extension is added to the title unless the title already ends with  it, and a request carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than  its name reads: with `true` the file that already carries this title is updated, the markup replacing its  content and a version appearing in its history, while with `false`, which is also the default, another file is  created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by  the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new  file appears beside it instead. The call is mutating: repeating it with `true` keeps a single file and grows  its history, repeating it with `false` fills the section with numbered copies. A guest has no My documents  section and is refused. To create the file in a room or another folder use  `POST api/2.0/files/{folderId}/html`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-html-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileWrapper**

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
|**200** | The created or updated HTML file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not create a file in this section |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFile**
> FileWrapper createTextFile(createTextOrHtmlFile)

Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The title, the content and the collision behaviour of the new file. | |
| **folderId** | [**number**] | The folder the file is created in. | defaults to undefined|


### Return type

**FileWrapper**

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

let folderId: number; //The folder the file is created in. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The title, the content and the collision behaviour of the new file.

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
|**200** | The created or updated text file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFileThirdParty**
> ThirdPartyFileWrapper createTextFileThirdParty(createTextOrHtmlFile)

Creates a text file in the folder named in the route out of the text passed as the content, and answers with  the stored file. The extension follows the content rather than the request: `.txt` normally, but `.html` as  soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends up as an  HTML file; the extension is added to the title unless the title already ends with it. A request carrying no  content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in Notes  (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a new file  appears beside it instead. The caller needs the right to create files in the folder. The call is mutating. To  create the file in the caller\'s own section use `POST api/2.0/files/@my/text`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**| The title, the content and the collision behaviour of the new file. | |
| **folderId** | [**string**] | The folder the file is created in. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let folderId: string; //The folder the file is created in. (default to undefined)
let createTextOrHtmlFile: CreateTextOrHtmlFile; //The title, the content and the collision behaviour of the new file.

const { status, data } = await apiInstance.createTextFileThirdParty(
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
|**200** | The created or updated text file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextFileInMyDocuments**
> FileWrapper createTextFileInMyDocuments()

Creates a text file in the caller\'s own My documents section out of the text passed as the content, and  answers with the stored file. The extension follows the content rather than the request: `.txt` normally, but  `.html` as soon as the text contains something shaped like an HTML tag, so a snippet of markup sent here ends  up as an HTML file; the extension is added to the title unless the title already ends with it. A request  carrying no content is rejected as invalid. `createNewIfExist` acts the other way round than its name reads:  with `true` the file that already carries this title is updated and a version appears in its history, while  with `false`, which is also the default, another file is created and its title made unique, as in  Notes (1).txt. A file that is locked, open in an editing session, encrypted or in Trash is not updated - a  new file appears beside it instead. The call is mutating. A guest has no My documents section and is  refused. To create the file in a room or another folder use `POST api/2.0/files/{folderId}/text`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-text-file-in-my-documents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTextOrHtmlFile** | **CreateTextOrHtmlFile**|  | |


### Return type

**FileWrapper**

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
|**200** | The created or updated text file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createThumbnails**
> ObjectArrayWrapper createThumbnails()

Asks the portal to build preview thumbnails for the listed files, and answers at once with the same file ids  that were sent. That answer echoes the request and does not confirm that anything was queued: the work is  handed over to a background worker, and a failure on the way there is written to the log rather than reported  to the caller. Only the file ids of the body are read - the folder ids are ignored, and a request naming no  files at all is answered with an empty list. Ids of files kept in a connected third-party storage are dropped  as well, because the worker handles portal storage only. Access to the individual files is not checked here;  the caller has to be signed in or to reach the portal through an external share link, and an anonymous caller  without such a link is refused. The call is asynchronous and safe to repeat. The thumbnails themselves are not  in the answer: read `thumbnailStatus` and `thumbnailUrl` of the file, for instance with  `GET api/2.0/files/file/{fileId}`, until the status reports the thumbnail as created.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-thumbnails/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**ObjectArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
|**200** | The file ids from the request, echoed back |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFile**
> FileOperationArrayWrapper deleteFile(_delete)

Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_delete** | **Delete**| When and how the file is deleted. | |
| **fileId** | [**number**] | The file to delete. | defaults to undefined|
| **returnSingleOperation** | [**boolean**] | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list. | (optional) defaults to undefined|


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

let fileId: number; //The file to delete. (default to undefined)
let _delete: Delete; //When and how the file is deleted.
let returnSingleOperation: boolean; //Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list. (optional) (default to undefined)

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
|**200** | The file operations of the caller, including the deletion just queued |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFileThirdParty**
> FileOperationArrayWrapper deleteFileThirdParty(_delete)

Queues the deletion of one file and answers with the caller\'s file operations, the one just created among  them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation  reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved  to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room,  where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing  session on the file has ended, so a file somebody is working on is not pulled away.  `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of  the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as  room manager and a content creator acting on their own file have; editing access alone, read access, a guest  and a member without access to the room are all refused. The call is destructive. To delete several items at  once use `PUT api/2.0/files/fileops/delete`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_delete** | **Delete**| When and how the file is deleted. | |
| **fileId** | [**string**] | The file to delete. | defaults to undefined|
| **returnSingleOperation** | [**boolean**] | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list. | (optional) defaults to undefined|


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

let fileId: string; //The file to delete. (default to undefined)
let _delete: Delete; //When and how the file is deleted.
let returnSingleOperation: boolean; //Which operations the answer carries: `true` returns the operation this call started and nothing else, `false`  returns every operation of the same kind that the caller has running or unread. When nothing was queued, which  happens for an empty selection, `true` falls back to the full list. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteFileThirdParty(
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
|**200** | The file operations of the caller, including the deletion just queued |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecent**
> deleteRecent()

Removes the listed entries from the Recent section of the calling account, the history of opened files that  `GET api/2.0/files/recent` returns. Nothing is deleted from storage and no other member\'s history is touched;  access to the entries is not checked at all, so a file the caller can no longer read can still be cleared from  their own history. Only numeric file ids are honoured, so a file on a connected third-party account cannot be  cleared this way, and folder ids are accepted but change nothing because the section lists files only. The  answer carries no body and reports nothing about how many entries were found: an empty request and an id that  was never in the section are accepted alike. Repeating the call is safe, but an entry returns the next time  the file is opened or `POST api/2.0/files/file/{fileId}/recent` is called for it. To hide the whole section  instead, call `PUT api/2.0/files/displayrecent`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

void (empty response body)

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
|**200** | Empty answer: the listed entries no longer appear in the Recent section |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTemplates**
> BooleanWrapper deleteTemplates()

Takes the listed files off the personal template list of the calling account, leaving the files themselves  untouched: only the template mark is dropped. The body of this request is a bare JSON array of numeric file  ids rather than an object with a field, and a request that carries no array at all is rejected as an invalid  request. Every authenticated member type may manage their own list, a guest is refused, and read access to a  file is required for its mark to be dropped. The answer is `true` whenever the array was understood, which an  empty array, an id that does not exist and a file that was never a template all achieve, so it confirms  nothing about what was removed. Repeating the call is safe. Use `POST api/2.0/files/templates` to put a file  back on the list; that operation expects an object with a `fileIds` field, so the two bodies are not  interchangeable.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-templates/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<number>**| The files to take off the template list, by id; this array is the whole request body. Only a file stored in  the portal itself can be a template, which is why an id here is always numeric. | |


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

let requestBody: Array<number>; //The files to take off the template list, by id; this array is the whole request body. Only a file stored in  the portal itself can be a template, which is why an id here is always numeric. (optional)

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
|**200** | Always true: the files named in the array are no longer templates of the caller |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateXlsx**
> XlsxReportResponseWrapper generateXlsx()

Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling  room, and answers at once with the queued task, the original form and a flag telling whether the report file  is being created now or an existing one refreshed in place. Either identifier works: the id of the original  form, or the id of an XLSX or CSV result file inside the room\'s Complete folder, from which the portal  resolves the form behind it. The form must already have been opened for filling with  `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it.  The caller must be allowed to update that form\'s report. The call is mutating and asynchronous: the  spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the  original form\'s id until the task reports completion, then take the produced file from the task. Calling it  again while a run is still going answers with that run instead of starting a second one.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-xlsx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The generation task, the original form and the new-file flag |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not update the report, or the file is not a started form of a form-filling room |  -  |
|**404** | The file id, or the original form behind a result file, resolves to nothing |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFormRoles**
> FormRoleArrayWrapper getAllFormRoles()

Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The roles of the form with the state of each |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller has no read access to the form |  -  |
|**404** | No file with this identifier exists |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFormRolesThirdParty**
> FormRoleArrayWrapper getAllFormRolesThirdParty()

Returns the roles of a PDF form together with the state each of them is in, which is how a client shows who is  expected to fill the form next. Every entry carries the name of the role, the account holding it, the sequence  number that decides the turn and a status: the roles of earlier turns are reported as complete, those of later  turns as waiting, and the role whose turn it is as either yours to fill or already in progress, depending on  whether that person has opened the form; when the filling has been stopped, the role it was interrupted at is  reported as stopped instead. A form whose filling was never started answers with an empty list. The file has  to be a PDF form, or the completed copy of one, and anything else is refused. Read access to the form is  enough, so every member of the room sees the roles, while a caller without access to the room and a guest  outside it are refused with 403 and an unknown file is answered with 404. The operation is read-only. The  assignment itself is written by `POST api/2.0/files/file/{fileId}/formrolemapping`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-form-roles-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getAllFormRolesThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The roles of the form with the state of each |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller has no read access to the form |  -  |
|**404** | No file with this identifier exists |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditDiffUrl**
> EditHistoryDataWrapper getEditDiffUrl()

Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose changes are read. | defaults to undefined|
| **version** | [**number**] | The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version. | (optional) defaults to undefined|


### Return type

**EditHistoryDataWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file whose changes are read. (default to undefined)
let version: number; //The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version. (optional) (default to undefined)

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
|**200** | The addresses and keys the editor needs to show the changes |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditDiffUrlThirdParty**
> EditHistoryDataWrapper getEditDiffUrlThirdParty()

Answers with everything an editor needs in order to show what changed in one version of a file: the address of  the version itself, its document key and format, the address of the recorded changes, the same trio for the  version it is compared against, and a token that signs the whole answer for the document service. `version`  picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only  when the portal has stored the changes of that version, which is the case for versions written by an editing  session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The  addresses are meant for the document service and carry their own time-limited keys. The caller needs the right  to read the history of the file, which editing access and above grant: read-only access, commenting access, a  guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The  operation is read-only. For the list of versions themselves use  `GET api/2.0/files/file/{fileId}/edit/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-diff-url-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose changes are read. | defaults to undefined|
| **version** | [**number**] | The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version. | (optional) defaults to undefined|


### Return type

**EditHistoryDataWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file whose changes are read. (default to undefined)
let version: number; //The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the  current version. (optional) (default to undefined)

const { status, data } = await apiInstance.getEditDiffUrlThirdParty(
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
|**200** | The addresses and keys the editor needs to show the changes |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditHistory**
> EditHistoryArrayWrapper getEditHistory()

Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The editing revisions of the file, oldest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEditHistoryThirdParty**
> EditHistoryArrayWrapper getEditHistoryThirdParty()

Returns the editing revisions of a file, oldest first, as the document service understands them: each entry  carries the version and the revision group it belongs to, the account that saved it, when it was saved, the  comment left on it, the document key of that revision and, where the portal stored them, the changes it  introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between  are left out, which is what separates this list from the plain version list of  `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which  editing access and above grant: commenting access, read-only access, a guest, a member without access to the  room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which  keeps no history in the portal. The operation is read-only. Take one entry to  `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to  `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-edit-history-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getEditHistoryThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The editing revisions of the file, oldest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEncryptionInfo**
> FileEncryptionInfoWrapper getEncryptionInfo()

Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any. | defaults to undefined|


### Return type

**FileEncryptionInfoWrapper**

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

let fileId: number; //The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any. (default to undefined)

const { status, data } = await apiInstance.getEncryptionInfo(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The key pairs of the caller and the file keys issued to them |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The file cannot carry encryption keys |  -  |
|**403** | The caller has no read access to the file |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEncryptionInfoThirdParty**
> FileEncryptionInfoWrapper getEncryptionInfoThirdParty()

Returns what the caller needs in order to decrypt one file of an end-to-end encrypted private room: `userKeys`  holds the key pairs of the calling account, the private half of each of them encrypted with that person\'s own  password, and `fileKeys` holds the file keys that were issued to this account for this file, each naming the  public key it was encrypted for. Only the keys of the calling account are ever returned, never those of the  other people in the room. An account that holds no key pair yet, and a file no key was issued for, answer with  empty lists rather than with an error, so an empty `fileKeys` means the caller cannot open that file rather  than that the file is unencrypted. The caller needs read access to the file; a caller without it, and a file  that does not exist, are both refused with 403. The operation is read-only. Keys are issued by  `PUT api/2.0/files/{fileId}/access`, and the personal key pairs are managed under `api/2.0/privacyroom/keys`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-info-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any. | defaults to undefined|


### Return type

**FileEncryptionInfoWrapper**

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

let fileId: string; //The file whose encryption keys are read. Only a file in an end-to-end encrypted              private room has any. (default to undefined)

const { status, data } = await apiInstance.getEncryptionInfoThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The key pairs of the caller and the file keys issued to them |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The file cannot carry encryption keys |  -  |
|**403** | The caller has no read access to the file |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileHistory**
> HistoryArrayWrapper getFileHistory()

Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and  when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong  to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and  `toDate` are read in the portal\'s time zone and narrow the range; `startIndex` and `count` page through the  result, and the number of matching entries is reported in the response headers rather than in the body. The  caller needs read access to the file, so a member of the room it lies in, the admin of that room and a  DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an  unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log  here - a file kept in a connected third-party storage has none. For the log of a folder or a room use  `GET api/2.0/files/folder/{folderId}/log`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose activity log is read; only files stored in the portal itself have one. | defaults to undefined|
| **fromDate** | [**string**] | The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps. | (optional) defaults to undefined|
| **toDate** | [**string**] | The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry. | (optional) defaults to undefined|
| **count** | [**number**] | How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it. | (optional) defaults to undefined|


### Return type

**HistoryArrayWrapper**

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

let fileId: number; //The file whose activity log is read; only files stored in the portal itself have one. (default to undefined)
let fromDate: string; //The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the  oldest entry the portal still keeps. (optional) (default to undefined)
let toDate: string; //The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest  entry. (optional) (default to undefined)
let count: number; //How many entries one page holds. The number of entries that match the query is reported in the response  headers, not in the body. (optional) (default to undefined)
let startIndex: number; //How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the  page size to it. (optional) (default to undefined)

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
|**200** | The activity entries of the file, newest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller has no read access to the file |  -  |
|**404** | No file with this identifier exists |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileInfo**
> FileWrapper getFileInfo()

Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file to read. | defaults to undefined|
| **version** | [**number**] | The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version. | (optional) defaults to undefined|


### Return type

**FileWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file to read. (default to undefined)
let version: number; //The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version. (optional) (default to undefined)

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
|**200** | The file as it is stored, with the state it has for the caller |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileInfoThirdParty**
> ThirdPartyFileWrapper getFileInfoThirdParty()

Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder  it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the  actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail  state. `version` picks an older version instead of the current one; the default of -1 means the current  version. When the file belongs to another person\'s own section and the caller cannot read the folder holding  it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the  caller can actually open. The caller needs read access to the file, which any member of the room it lies in  has; a caller without access to the room is refused and an anonymous caller without an external share link is  rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-info-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file to read. | defaults to undefined|
| **version** | [**number**] | The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version. | (optional) defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file to read. (default to undefined)
let version: number; //The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the  current version. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileInfoThirdParty(
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
|**200** | The file as it is stored, with the state it has for the caller |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileLinks**
> FileShareArrayWrapper getFileLinks()

Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **count** | [**number**] | How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. | (optional) defaults to undefined|


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

let id: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let count: number; //How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. (optional) (default to undefined)
let startIndex: number; //How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. (optional) (default to undefined)

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
|**200** | The external links of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileLinksThirdParty**
> FileShareArrayWrapper getFileLinksThirdParty()

Lists the external links of a file, each with its identifier, title, address, rights, expiration date and  download restriction. `startIndex` and `count` page through the list, and the total number of links is  reported in the response headers rather than in the body. A file that has never been shared by link answers  with an empty list; the primary link is part of this list once it exists, and it is the only one that is  created on demand, by `GET api/2.0/files/file/{id}/link`. For a PDF form kept in a form-filling room the link  of the room is appended to the answer, because that is the address through which the form is filled out. The  caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as  room manager have; a caller without access to the file is refused and an anonymous caller is rejected. The  operation is read-only. Take an identifier from here to `PUT api/2.0/files/file/{id}/links` to change or  remove that link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-links-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **count** | [**number**] | How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. | (optional) defaults to undefined|


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

let id: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let count: number; //How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. (optional) (default to undefined)
let startIndex: number; //How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileLinksThirdParty(
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
|**200** | The external links of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilePrimaryExternalLink**
> FileShareWrapper getFilePrimaryExternalLink()

Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **count** | [**number**] | How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. | (optional) defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let count: number; //How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. (optional) (default to undefined)
let startIndex: number; //How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. (optional) (default to undefined)

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
|**200** | The primary external link of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not share the file |  -  |
|**404** | The file does not exist, or its primary link was revoked |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilePrimaryExternalLinkThirdParty**
> FileShareWrapper getFilePrimaryExternalLinkThirdParty()

Answers with the primary external link of a file - the one the Copy link action of a client hands out - with  its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and  download restriction beside them. The link is created on the first read if the file has none, with read  rights, no password and no expiry, so this operation mutates on that first call and is a plain read  afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered  with the link of that room, carried over to the form. The caller needs the right to share the file, which its  creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file  is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is  answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted,  are listed by `GET api/2.0/files/file/{id}/links`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-primary-external-link-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **count** | [**number**] | How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. | (optional) defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let count: number; //How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it. (optional) (default to undefined)
let startIndex: number; //How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page. (optional) (default to undefined)

const { status, data } = await apiInstance.getFilePrimaryExternalLinkThirdParty(
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
|**200** | The primary external link of the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not share the file |  -  |
|**404** | The file does not exist, or its primary link was revoked |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileVersionInfo**
> FileArrayWrapper getFileVersionInfo()

Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**FileArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | Every stored version of the file, newest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileVersionInfoThirdParty**
> ThirdPartyFileArrayWrapper getFileVersionInfoThirdParty()

Returns every stored version of a file, newest first, each of them shaped like the file itself - the version  and the revision group it belongs to, the size, the comment saved with it, the addresses for viewing it, and  the thumbnail and lock state. Unlike the editing revisions of `GET api/2.0/files/file/{fileId}/edit/history`,  this list also holds the autosave revisions an editing session writes, so it is the fuller of the two, and it  is the shape a client already knows how to render. The caller needs the right to read the history of the file,  which is a stricter rule than reading the file: in a room only its managers and content creators may read the  history, and in a personal section editing access is enough, so a member with read access to somebody else\'s  file, and even a DocSpace admin in that position, are refused, as is an anonymous caller. The operation is  read-only. To restore one of the versions use `POST api/2.0/files/file/{fileId}/restoreversion`, and to close  or reopen a revision group `PUT api/2.0/files/file/{fileId}/history`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-version-info-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


### Return type

**ThirdPartyFileArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getFileVersionInfoThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Every stored version of the file, newest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFillResult**
> FillingFormResultWrapper getFillResult()

Answers with the outcome of one completed form-filling session: the filled copy of the form, the original form  it was made from, the number this submission was given inside the room, the identifier of the room and the  account that started the filling. `isRoomMember` says whether the caller is a member of that room, which a  client uses to decide whether the room can be offered for opening. The session is named by `fillingSessionId`,  the value the document service reports when the filling ends; the portal remembers it only for a while after  that, so a session that was never completed, one already forgotten and a value of the wrong shape are all  answered as not found, while omitting the parameter is rejected as an invalid request. The operation is  read-only and needs no sign-in: it is meant for the caller that has just finished filling the form through an  external link, and the session identifier is the only secret involved. The filled copy itself is an ordinary  file - read it with `GET api/2.0/files/file/{fileId}`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-fill-result/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fillingSessionId** | [**string**] | The identifier of the finished filling session, the value the document service reports when the filling ends.  The portal remembers it only for a while afterwards, so an older session is answered as not found. | (optional) defaults to undefined|


### Return type

**FillingFormResultWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fillingSessionId: string; //The identifier of the finished filling session, the value the document service reports when the filling ends.  The portal remembers it only for a while afterwards, so an older session is answered as not found. (optional) (default to undefined)

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
|**200** | The result of the completed form-filling session |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormSubmissions**
> FormSubmissionsWrapper getFormSubmissions()

Returns everything that has been submitted against one PDF form: `metadata` describes the fields of the form,  in the order they are laid out, and `submissions` carries one record per completed copy, each of them holding  the values that were entered. It is the data behind the results table a client shows for a form, and the same  data the spreadsheet report of `POST api/2.0/files/file/{fileId}/xlsx` is built from. Only the submissions of  the version that is currently being filled are reported. The form has to be a PDF form whose filling has been  started and which is still the original form of its room; a form that was never started, a copy of a form and  a form whose room has been moved away are all refused. Read access to the form is enough, so every member of  the room can read the results, while a caller without access to it is refused with 403. The operation is  read-only. The list of roles and whose turn it is comes from `GET api/2.0/files/file/{fileId}/formroles`  instead.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-form-submissions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The submissions collected for the form, with the description of its fields |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller has no read access to the form |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedFileUri**
> FileLinkWrapper getPresignedFileUri()

Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The download address of the file with its signature token |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedFileUriThirdParty**
> FileLinkWrapper getPresignedFileUriThirdParty()

Returns a direct download address for the current content of the file together with the signature token that  the document service validates, which is what the portal hands over when the editors have to fetch the  document themselves. The address points at the portal\'s file stream endpoint and is rewritten to the host the  document service can reach, so on a deployment where the editors sit behind a private address it is not the  address a browser should follow. The answer also carries the extension of the stored document, leading dot  included. The caller needs read access to the file, and an unknown file id is reported as missing. The call  only reads, and each call mints a fresh address and token rather than reusing the previous one, so the value  is worth requesting again once a token has expired. For a link meant for a person, a plain address with no  token to put behind a download button, use `GET api/2.0/files/file/{fileId}/presigneduri` instead.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-file-uri-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getPresignedFileUriThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The download address of the file with its signature token |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedUri**
> StringWrapper getPresignedUri()

Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The download address of the current file version |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPresignedUriThirdParty**
> StringWrapper getPresignedUriThirdParty()

Builds a download address for the current version of a file and answers with it as a plain string. The address  points at the portal\'s own file handler and carries the file identifier, the version it was built for and a  time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself;  it stops working once that key has expired, and it keeps naming the version that was current when it was built  rather than following later edits. The caller needs read access to the file: a member of the room it lies in  gets an address, a caller without access to the room is refused, an unknown identifier is answered as not  found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call  mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the  document service signs, which comes back as an object with the file type and a token, use  `GET api/2.0/files/file/{fileId}/presigned`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-presigned-uri-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getPresignedUriThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The download address of the current file version |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProtectedFileUsers**
> MentionWrapperArrayWrapper getProtectedFileUsers()

Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The users the file is shared with, ordered by display name |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProtectedFileUsersThirdParty**
> MentionWrapperArrayWrapper getProtectedFileUsersThirdParty()

Lists the users the file is shared with, which is what a client offers when the author protects a document and  picks who may still edit it. The list is built from the whole access list of the file: every entry that is not  an explicit denial, with groups expanded into their members, the caller themselves and deleted accounts left  out, ordered by display name. Access inherited from the room counts, so a member who never received a share on  the file itself is listed too. A file kept in the legacy project storage always answers with an empty list  rather than with its team. The call only reads. A guest is refused, an anonymous caller is answered with  nothing, and a file id that resolves to nothing is refused as well instead of being reported as missing. For  the readers to offer as mentions inside the editor use `GET api/2.0/files/file/{fileId}/sharedusers`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-protected-file-users-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.getProtectedFileUsersThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The users the file is shared with, ordered by display name |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReferenceData**
> FileReferenceWrapper getReferenceData()

Resolves a reference that a formula in one spreadsheet makes to another document, and answers with the  descriptor the document service needs in order to read it: the title, the download address, the file type, the  document key of the co-editing session, the web editor link and the signature token. Three ways of naming the  target are tried in order, and the first that resolves wins: `fileKey` as a file id inside the portal named by  `instanceId`, then `path` looked up among the files sitting next to `sourceFileId`, then `link`, short links  included, from which the file id is read out. A link that points outside this portal is not resolved at all  and comes back unchanged as the address to follow. The caller needs read access to the source file and to its  folder, otherwise the call is refused. The call only reads. A reference that resolves to nothing is still  answered with 200, with the error text filled in and the rest of the descriptor empty, so read the error  before using any other field.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reference-data/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReferenceDataDto** | **GetReferenceDataDto**|  | |


### Return type

**FileReferenceWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    GetReferenceDataDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let getReferenceDataDto: GetReferenceDataDto; // (optional)

const { status, data } = await apiInstance.getReferenceData(
    getReferenceDataDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The reference descriptor, or the same object with the error text set when nothing resolved |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getXlsx**
> DocumentBuilderTaskWrapper getXlsx()

Reports how far the spreadsheet of submitted form answers has got, the one queued by  `POST api/2.0/files/file/{fileId}/xlsx`. A run is kept per portal, per caller and per form, so this reports  the caller\'s own run and not one started by another member of the room; address it with the id of the original  form rather than with the id of the produced spreadsheet. The answer carries the completion flag, the progress  percentage, the error text when the run failed, and the id, name and address of the produced file once it is  there. Nothing at all comes back when no run is on record for this caller and form, which is the normal answer  before the first run and not an error. The call only reads and is meant to be polled until completion is  reported. Any authenticated caller may ask; whether the report may be built is decided when the run is queued,  not here.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-xlsx/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | The state of the report generation task, or nothing when no run is on record |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFormPDF**
> BooleanWrapper isFormPDF()

Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

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
|**200** | True when the file is a PDF form made in the editors, false otherwise |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isFormPDFThirdParty**
> BooleanWrapper isFormPDFThirdParty()

Tells whether a file is a PDF form that can be filled out in the portal, and answers with a single boolean.  The check is by content, not by extension: the beginning of the file is read and the answer is `true` only  when it carries the marker the editors write into the forms they produce, so an ordinary PDF, and a PDF form  made in other software, both answer `false`. A file whose name is not a PDF at all answers `false` without  being read. Use it before offering the form-filling operations on a file, because a document that answers  `false` cannot be started for filling. The caller needs read access to the file, and read access is enough - a  member of the room with read-only rights gets the answer; a caller without access to the room is refused and  an anonymous caller is rejected. The operation is read-only and idempotent. It says nothing about the state of  the filling - for that read `GET api/2.0/files/file/{fileId}/formroles`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/is-form-pdfthird-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)

const { status, data } = await apiInstance.isFormPDFThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | True when the file is a PDF form made in the editors, false otherwise |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lockFile**
> FileWrapper lockFile(lockFileParameters)

Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockFileParameters** | **LockFileParameters**| The lock state to reach. | |
| **fileId** | [**number**] | The file to lock or unlock. | defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The file to lock or unlock. (default to undefined)
let lockFileParameters: LockFileParameters; //The lock state to reach.

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
|**200** | The file with its lock state as it now stands |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lockFileThirdParty**
> ThirdPartyFileWrapper lockFileThirdParty(lockFileParameters)

Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now  stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment  is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for  everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a  note about the unlocking is appended to the current version comment, unless the file lives in a connected  third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and  still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller  needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member  with content-creator rights have; a member without access to the room and a guest are refused, and so is a  file in Trash. A lock set by somebody else can only be released by a room manager.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/lock-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockFileParameters** | **LockFileParameters**| The lock state to reach. | |
| **fileId** | [**string**] | The file to lock or unlock. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The file to lock or unlock. (default to undefined)
let lockFileParameters: LockFileParameters; //The lock state to reach.

const { status, data } = await apiInstance.lockFileThirdParty(
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
|**200** | The file with its lock state as it now stands |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageFormFilling**
> manageFormFilling()

Drives the filling of a PDF form through its states, the action deciding which way. Action 2 starts the  filling: in a form-filling room the form is opened for filling, the members whose rights are limited to  filling forms are let in, and a form that has been changed since it was last started has the drafts of its  previous round dropped. Action 0 stops it, which in a virtual data room records who interrupted it and at  which role and notifies the people who held the other roles, and in a form-filling room closes the form for  filling. Action 1 resumes a filling that was stopped, clearing that record. Action 3 puts the form back into  editing, closing it for filling and remembering the version it was edited from. The file has to be a PDF form  lying in a room. Starting needs the right to start the filling, which the room admin and a member with  content-creator rights have, while stopping a filling that somebody else started belongs to room managers  alone, so a content creator is refused with 403 there. The call is mutating; the state that resulted is read  with `GET api/2.0/files/file/{fileId}/formroles`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/manage-form-filling/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manageFormFillingDto** | **ManageFormFillingDto**|  | |
| **fileId** | [**string**] | The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ManageFormFillingDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The form the action applies to. Send the same value as the `formId` of the request body, which is the one the handler reads. (default to undefined)
let manageFormFillingDto: ManageFormFillingDto; // (optional)

const { status, data } = await apiInstance.manageFormFilling(
    fileId,
    manageFormFillingDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The action was applied to the form |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not start, stop or resume the filling of this form |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openEditFile**
> ConfigurationWrapper openEditFile()

Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`. | defaults to undefined|
| **version** | [**number**] | Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file. | (optional) defaults to undefined|
| **view** | [**boolean**] | Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow. | (optional) defaults to undefined|
| **editorType** | **EditorType** | Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page. | (optional) defaults to undefined|
| **edit** | [**boolean**] | Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling. | (optional) defaults to undefined|
| **fill** | [**boolean**] | Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form. | (optional) defaults to undefined|


### Return type

**ConfigurationWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`. (default to undefined)
let version: number; //Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file. (optional) (default to undefined)
let view: boolean; //Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow. (optional) (default to undefined)
let editorType: EditorType; //Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page. (optional) (default to undefined)
let edit: boolean; //Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling. (optional) (default to undefined)
let fill: boolean; //Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form. (optional) (default to undefined)

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
|**200** | The editor configuration for the requested file and mode |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot read the file, or asked for a past version without access to the file history |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openEditFileThirdParty**
> ThirdPartyConfigurationWrapper openEditFileThirdParty()

Builds everything an editor client needs to open the file: the document descriptor with its download address,  title, type and document key, the editor configuration with the mode, the caller\'s permissions, the user and  the customization, the callback the editors report back to, and the signature token the document service  validates. `version` opens one entry of the file history and requires access to that history; left out, the  current revision is opened. `view`, `edit` and `fill` say what the client intends to do, and `editorType`  picks the desktop, mobile or embedded layout. For a PDF form the room decides the outcome and may overrule the  request: a form-filling room, a virtual data room, a public room and a user folder each produce their own  mode, and a form opened from the templates folder is read-only and, outside the mobile layout, framed as  embedded. When the portal is over its storage quota the configuration comes back read-only with the exceeded  scope named. In a private room the caller\'s encryption keys are added to the editor configuration. Payment is  not required and an anonymous caller opens through an external link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/open-edit-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`. | defaults to undefined|
| **version** | [**number**] | Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file. | (optional) defaults to undefined|
| **view** | [**boolean**] | Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow. | (optional) defaults to undefined|
| **editorType** | **EditorType** | Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page. | (optional) defaults to undefined|
| **edit** | [**boolean**] | Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling. | (optional) defaults to undefined|
| **fill** | [**boolean**] | Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form. | (optional) defaults to undefined|


### Return type

**ThirdPartyConfigurationWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file the editor configuration is built for. Take the id from a folder listing such as  `GET api/2.0/files/{folderId}`. (default to undefined)
let version: number; //Which entry of the file history to open, numbered the way the file versions are. Left out, the current  revision is opened; naming a version requires access to the history of the file. (optional) (default to undefined)
let view: boolean; //Asks for a read-only configuration. Left off, the configuration is built for editing as far as the caller\'s  rights and the room the file lies in allow. (optional) (default to undefined)
let editorType: EditorType; //Which editor layout the configuration is built for: the full desktop interface, the reduced mobile one, or the  embedded viewer meant to be framed inside another page. (optional) (default to undefined)
let edit: boolean; //Asks for editing rather than viewing. On a form in a form-filling room this also records that the form is  being edited; the room may still turn the request into viewing or into filling. (optional) (default to undefined)
let fill: boolean; //Asks for a PDF form to open for filling out rather than for editing. It has no effect on a file that is not a  form. (optional) (default to undefined)

const { status, data } = await apiInstance.openEditFileThirdParty(
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
|**200** | The editor configuration for the requested file and mode |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot read the file, or asked for a past version without access to the file history |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFileVersion**
> EditHistoryArrayWrapper restoreFileVersion()

Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose version is restored. | defaults to undefined|
| **version** | [**number**] | The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one. | (optional) defaults to undefined|
| **url** | [**string**] | The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used. | (optional) defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file whose version is restored. (default to undefined)
let version: number; //The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one. (optional) (default to undefined)
let url: string; //The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used. (optional) (default to undefined)

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
|**200** | The editing revisions of the file after the restore |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The version is missing or is already the current one |  -  |
|**403** | The caller may not change the version history of the file |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFileVersionThirdParty**
> EditHistoryArrayWrapper restoreFileVersionThirdParty()

Brings an earlier version of a file back and answers with the editing revisions of the file after the restore.  Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the  history, carrying a comment that says which version it was reverted to, so the intervening versions stay  readable. `url` changes the source - with it the content is fetched from that address, which is how the  document service returns a document with a set of changes rolled back, and the new version records that  instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other  people who can read it. `version` has to name an existing version and is refused with 400 when it is missing  or already the current one. The caller needs the right to edit the history of the file and is otherwise  refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in  Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-file-version-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose version is restored. | defaults to undefined|
| **version** | [**number**] | The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one. | (optional) defaults to undefined|
| **url** | [**string**] | The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used. | (optional) defaults to undefined|


### Return type

**EditHistoryArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file whose version is restored. (default to undefined)
let version: number; //The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an  existing version that is not the current one. (optional) (default to undefined)
let url: string; //The address the content of the new version is fetched from instead of the stored version, which is how the  document service hands back a document with a set of changes rolled back; left out, the stored version is  used. (optional) (default to undefined)

const { status, data } = await apiInstance.restoreFileVersionThirdParty(
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
|**200** | The editing revisions of the file after the restore |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The version is missing or is already the current one |  -  |
|**403** | The caller may not change the version history of the file |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveEditingFileFromForm**
> FileWrapper saveEditingFileFromForm()

Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it. | defaults to undefined|
| **downloadUri** | [**string**] | An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given. | (optional) defaults to undefined|
| **fileExtension** | [**string**] | The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed. | (optional) defaults to undefined|
| **file** | [**File**] | The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file. | (optional) defaults to undefined|
| **forcesave** | [**boolean**] | Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history. | (optional) defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it. (default to undefined)
let downloadUri: string; //An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given. (optional) (default to undefined)
let fileExtension: string; //The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed. (optional) (default to undefined)
let file: File; //The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file. (optional) (default to undefined)
let forcesave: boolean; //Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history. (optional) (default to undefined)

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
|**200** | The file is saved and the stored version is returned |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The file id cannot be resolved to a storage that could accept the content |  -  |
|**403** | The caller cannot edit the file, or it is locked, in Trash, or open in somebody else\'s editing session |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveEditingFileFromFormThirdParty**
> ThirdPartyFileWrapper saveEditingFileFromFormThirdParty()

Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The  content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body  is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content  here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the  content being sent, and when it differs from the stored format the portal converts the content, or keeps it  under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file.  The call is mutating and not idempotent: an ordinary call adds a version to the file history, while  `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding  another version and leaves a running editing session in place. It is refused with 403 when the file is locked,  lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported  as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-editing-file-from-form-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it. | defaults to undefined|
| **downloadUri** | [**string**] | An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given. | (optional) defaults to undefined|
| **fileExtension** | [**string**] | The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed. | (optional) defaults to undefined|
| **file** | [**File**] | The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file. | (optional) defaults to undefined|
| **forcesave** | [**boolean**] | Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history. | (optional) defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The file whose content is replaced. The submitted content is written onto this file, so it has to be the file  the editing session was opened on rather than a copy of it. (default to undefined)
let downloadUri: string; //An address the document service saved the document at. This operation does not fetch the content from it - the  content always comes from the request body - and reads it only for the extension, when no file extension is  given. (optional) (default to undefined)
let fileExtension: string; //The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format  the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off  the download address, and failing that the stored format is assumed. (optional) (default to undefined)
let file: File; //The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw  request body is saved as the content instead, so an empty body empties the file. (optional) (default to undefined)
let forcesave: boolean; //Records the write as an editor autosave: the file keeps its running editing session and the previous autosave  revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else  has the file open, and adds a version to the history. (optional) (default to undefined)

const { status, data } = await apiInstance.saveEditingFileFromFormThirdParty(
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
|**200** | The file is saved and the stored version is returned |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The file id cannot be resolved to a storage that could accept the content |  -  |
|**403** | The caller cannot edit the file, or it is locked, in Trash, or open in somebody else\'s editing session |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFileAsPdf**
> FileWrapper saveFileAsPdf(saveAsPdf)

Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveAsPdf** | **SaveAsPdf**| The destination folder and the name of the PDF. | |
| **id** | [**number**] | The file to convert; it is left untouched. | defaults to undefined|


### Return type

**FileWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveAsPdf
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: number; //The file to convert; it is left untouched. (default to undefined)
let saveAsPdf: SaveAsPdf; //The destination folder and the name of the PDF.

const { status, data } = await apiInstance.saveFileAsPdf(
    id,
    saveAsPdf
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The PDF file that was created |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**404** | The source file or the destination folder does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFileAsPdfThirdParty**
> ThirdPartyFileWrapper saveFileAsPdfThirdParty(thirdPartySaveAsPdf)

Converts a file into a PDF, stores that PDF as a new file in the folder named in the body, and answers with  the file that was created. The source is left untouched, so the two files then live side by side. `title`  names the result without an extension - the `.pdf` extension is added to it - and an empty title reuses the  name of the source with its extension replaced. The conversion is done by the document service while the  request waits, so the call takes as long as the document needs and answers with the finished file rather than  with a queue entry. The caller needs read access to the source file and the right to create files in the  destination folder, and is otherwise refused; a source file or a destination folder that does not exist is  answered with 404. The call is mutating and not idempotent: each call adds another PDF, its title made unique  when one of that name is already there. The result is marked as new for the room, and for a form the portal  recognises it is stored as a PDF form. To convert in place instead use  `PUT api/2.0/files/file/{fileId}/checkconversion`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-file-as-pdf-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartySaveAsPdf** | **ThirdPartySaveAsPdf**| The destination folder and the name of the PDF. | |
| **id** | [**string**] | The file to convert; it is left untouched. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    ThirdPartySaveAsPdf
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let id: string; //The file to convert; it is left untouched. (default to undefined)
let thirdPartySaveAsPdf: ThirdPartySaveAsPdf; //The destination folder and the name of the PDF.

const { status, data } = await apiInstance.saveFileAsPdfThirdParty(
    id,
    thirdPartySaveAsPdf
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The PDF file that was created |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**404** | The source file or the destination folder does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveFormRoleMapping**
> saveFormRoleMapping()

Assigns the roles of a PDF form to the people who are to fill them in, and starts the filling: the form is  marked as being filled out, the account that called is recorded as the one who started it, everybody named in  a role is notified, and the form becomes visible to the members whose room rights are limited to filling  forms. Each role carries its name, the account that takes it and the sequence number that decides the turn, so  the same sequence means the roles may be filled in parallel and different ones make a queue. Sending an empty  role list resets the filling instead, dropping the assignment altogether. The whole set is replaced on every  call, so the call is idempotent for a given set of roles but not additive. The file has to be a PDF form lying  in a room; the caller needs the right to start the filling of that form, which the room admin and a member  with content-creator rights have, and is otherwise refused with 403. Read back what was stored with  `GET api/2.0/files/file/{fileId}/formroles`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-form-role-mapping/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **saveFormRoleMappingDto** | **SaveFormRoleMappingDto**|  | |
| **fileId** | [**string**] | The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    SaveFormRoleMappingDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The form the role mapping belongs to. Send the same value as the `formId` of the request body, which is the one the handler reads. (default to undefined)
let saveFormRoleMappingDto: SaveFormRoleMappingDto; // (optional)

const { status, data } = await apiInstance.saveFormRoleMapping(
    fileId,
    saveFormRoleMappingDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The roles were stored and the filling was started or reset |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not start or reset the filling of this form |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomFilterTag**
> FileWrapper setCustomFilterTag(customFilterParameters)

Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFilterParameters** | **CustomFilterParameters**| The Custom Filter state to reach. | |
| **fileId** | [**number**] | The spreadsheet whose Custom Filter mode is switched. | defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The spreadsheet whose Custom Filter mode is switched. (default to undefined)
let customFilterParameters: CustomFilterParameters; //The Custom Filter state to reach.

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
|**200** | The spreadsheet with its Custom Filter state as it now stands |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCustomFilterTagThirdParty**
> ThirdPartyFileWrapper setCustomFilterTagThirdParty(customFilterParameters)

Turns the Custom Filter editing mode of a spreadsheet on or off and answers with the file as it now stands. In  that mode the sorting and filtering one person applies to the sheet is visible to that person alone, so that  several people can work on the same data without moving the rows under each other; with the mode off,  filtering is shared again, as everywhere else. Turning it on also drops everybody else out of the running  editing session, the caller excepted, because the mode has to be established before the sheet is opened. Only  formats that support the mode are accepted; anything else is rejected as an invalid request. The caller needs  the right to use the mode in the room, which the room admin and a DocSpace admin acting as room manager have;  read-only access, a member without access to the room and an anonymous caller are refused. Once the mode has  been switched on by one person, only that person, a room manager or a DocSpace admin can switch it off again.  The call is mutating and, called twice with the same value, changes nothing the second time.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-custom-filter-tag-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFilterParameters** | **CustomFilterParameters**| The Custom Filter state to reach. | |
| **fileId** | [**string**] | The spreadsheet whose Custom Filter mode is switched. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The spreadsheet whose Custom Filter mode is switched. (default to undefined)
let customFilterParameters: CustomFilterParameters; //The Custom Filter state to reach.

const { status, data } = await apiInstance.setCustomFilterTagThirdParty(
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
|**200** | The spreadsheet with its Custom Filter state as it now stands |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setEncryptionInfo**
> setEncryptionInfo()

Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-encryption-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessRequestKeyDto** | **Array<AccessRequestKeyDto>**| One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key. | |
| **fileId** | [**number**] | The file the keys are issued for; it has to lie in a private room. | defaults to undefined|


### Return type

void (empty response body)

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

let fileId: number; //The file the keys are issued for; it has to lie in a private room. (default to undefined)
let accessRequestKeyDto: Array<AccessRequestKeyDto>; //One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key. (optional)

const { status, data } = await apiInstance.setEncryptionInfo(
    fileId,
    accessRequestKeyDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The file keys were stored |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not issue keys for this file, or the file is not in a private room |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setEncryptionInfoThirdParty**
> setEncryptionInfoThirdParty()

Issues the file keys that let the named people open one file of an end-to-end encrypted private room. Each  entry of the body names the account the key is for, the public key it was encrypted with and the encrypted key  itself, so the plain key never reaches the portal: the client encrypts it once per recipient with the public  key that `GET api/2.0/files/file/{fileId}/publickeys` reports for them. The keys of the accounts named in the  request are replaced, and the keys of everybody else are left as they are, which makes the call idempotent for  a given set of recipients while remaining a mutating one; sending no entry for a person does not revoke that  person\'s key. The file has to lie in a private room, and every account named in the request has to have read  access to it. The caller needs read access to the file and the right to create content in that room, which its  members with editing rights and its admins have; a caller without those rights, a file outside a private room  and a file that does not exist are all refused with 403. Read the result back with  `GET api/2.0/files/{fileId}/access`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-encryption-info-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessRequestKeyDto** | **Array<AccessRequestKeyDto>**| One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key. | |
| **fileId** | [**string**] | The file the keys are issued for; it has to lie in a private room. | defaults to undefined|


### Return type

void (empty response body)

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

let fileId: string; //The file the keys are issued for; it has to lie in a private room. (default to undefined)
let accessRequestKeyDto: Array<AccessRequestKeyDto>; //One key per account that is to open the file. The keys of the accounts named here are replaced and the keys of  everybody else are left as they are, so sending no entry for a person does not revoke that person\'s key. (optional)

const { status, data } = await apiInstance.setEncryptionInfoThirdParty(
    fileId,
    accessRequestKeyDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The file keys were stored |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not issue keys for this file, or the file is not in a private room |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileExternalLink**
> FileShareWrapper setFileExternalLink(fileLinkRequest)

Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The settings of the link. They are applied in full, so a field left out is reset rather than kept. | |
| **id** | [**number**] | The file the link points at. | defaults to undefined|


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

let id: number; //The file the link points at. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The settings of the link. They are applied in full, so a field left out is reset rather than kept.

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
|**200** | The link as it now stands, or nothing when it was revoked |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileExternalLinkThirdParty**
> FileShareWrapper setFileExternalLinkThirdParty(fileLinkRequest)

Creates an external link to a file, or changes or revokes an existing one, and answers with the link as it now  stands. `linkId` decides which: an identifier that is not yet in use, the empty one included, creates a link,  while the identifier of an existing link rewrites it, so the whole set of parameters is applied every time and  a field left out is reset rather than kept. `access` carries the rights the link grants, and `access` set to  the value that denies everything revokes the link instead - the answer is then empty, and a revoked primary  link is not recreated by a later read. `title` names the link for the people who manage it, `expirationDate`  limits its lifetime and is refused when it lies more than a few years ahead, `password` asks visitors for a  secret, `denyDownload` leaves them with viewing only, `internal` admits signed-in members alone, and  `primary=true` makes it the primary link of the file. The caller needs the right to share the file and is  otherwise refused, an unknown file being answered as not found. The call is mutating.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-external-link-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileLinkRequest** | **FileLinkRequest**| The settings of the link. They are applied in full, so a field left out is reset rather than kept. | |
| **id** | [**string**] | The file the link points at. | defaults to undefined|


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

let id: string; //The file the link points at. (default to undefined)
let fileLinkRequest: FileLinkRequest; //The settings of the link. They are applied in full, so a field left out is reset rather than kept.

const { status, data } = await apiInstance.setFileExternalLinkThirdParty(
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
|**200** | The link as it now stands, or nothing when it was revoked |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileOrder**
> FileWrapper setFileOrder()

Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The position the file is to take. | |
| **fileId** | [**number**] | The file to move. | defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The file to move. (default to undefined)
let orderRequestDto: OrderRequestDto; //The position the file is to take. (optional)

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
|**200** | The file with the position it now holds |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not reorder this file |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileOrderThirdParty**
> ThirdPartyFileWrapper setFileOrderThirdParty()

Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it  now stands. Positions count from 1, and the file that held the wanted position, together with everything after  it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the  folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only  its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means  something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs  edit access to the file, which room managers, content creators and members with editing rights have; a member  acting on somebody else\'s file, a guest and an anonymous caller are refused with 403, and an unknown file is  answered with 404. The call is mutating and idempotent. To move several items in one go use  `PUT api/2.0/files/order`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-order-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The position the file is to take. | |
| **fileId** | [**string**] | The file to move. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The file to move. (default to undefined)
let orderRequestDto: OrderRequestDto; //The position the file is to take. (optional)

const { status, data } = await apiInstance.setFileOrderThirdParty(
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
|**200** | The file with the position it now holds |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not reorder this file |  -  |
|**404** | The file does not exist |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFilesOrder**
> FileEntryArrayWrapper setFilesOrder()

Puts several files and folders at given positions in one go and answers with the entries that were moved, each  with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file  or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path,  as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order  they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request  is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in  a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do:  read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is  answered as not found. Ordering only means something in rooms whose contents are indexed. The call is  mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-files-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersRequestDto** | **OrdersRequestDto**|  | |


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    OrdersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let ordersRequestDto: OrdersRequestDto; // (optional)

const { status, data } = await apiInstance.setFilesOrder(
    ordersRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The files and folders that were moved, with the positions they now hold |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEditFile**
> StringWrapper startEditFile(startEdit)

Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startEdit** | **StartEdit**| The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session. | |
| **fileId** | [**number**] | The file to open the editing session on. The caller needs edit access to it. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    StartEdit
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file to open the editing session on. The caller needs edit access to it. (default to undefined)
let startEdit: StartEdit; //The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session.

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
|**200** | The document key of the editing session |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot edit the file, or the file is already being edited and the session was claimed alone |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEditFileThirdParty**
> StringWrapper startEditFileThirdParty(startEdit)

Opens an editing session on the file and answers with the document key that identifies it, the value an editor  client passes to the document service in order to join the co-editing session for that exact revision. The  file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved.  With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of  the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking  the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403  when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an  anonymous caller whose external link does not grant editing are all refused. The call is mutating and not  idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling  that operation with `isFinish=true`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-edit-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startEdit** | **StartEdit**| The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session. | |
| **fileId** | [**string**] | The file to open the editing session on. The caller needs edit access to it. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    StartEdit
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file to open the editing session on. The caller needs edit access to it. (default to undefined)
let startEdit: StartEdit; //The session options. The body is required even when it only carries the default, so send an empty object to  open an ordinary co-editing session.

const { status, data } = await apiInstance.startEditFileThirdParty(
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
|**200** | The document key of the editing session |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller cannot edit the file, or the file is already being edited and the session was claimed alone |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFillingFile**
> FileWrapper startFillingFile()

Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result. | defaults to undefined|


### Return type

**FileWrapper**

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

let fileId: number; //The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result. (default to undefined)

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
|**200** | The form file, with the filling properties now stored on it |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller holds only form-filling access on the room, or no access to it at all |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startFillingFileThirdParty**
> ThirdPartyFileWrapper startFillingFileThirdParty()

Marks a PDF form in a form-filling room as open for filling out and answers with the form file. The portal  stores the filling properties on it - the room it belongs to, its title, the account that started it and the  id it keeps as the original form - so that later submissions are collected against this form. The file has to  be a PDF whose parent folder is a form-filling room; anything else is answered unchanged and nothing is  stored. Access follows room membership rather than portal role: a member holding only form-filling access on  the room may not start filling, and a caller with no access to the room at all is refused with 403 unless they  can manage it, which the room owner, a room administrator and a DocSpace administrator can. The call is  mutating and safe to repeat, since a repeat rewrites the same properties. Once a form is started, the answers  submitted for it can be collected into a spreadsheet with `POST api/2.0/files/file/{fileId}/xlsx`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-filling-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

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

let fileId: string; //The PDF form to open for filling. It has to be the form as it lies in the form-filling room itself, not a copy  kept elsewhere and not a submitted result. (default to undefined)

const { status, data } = await apiInstance.startFillingFileThirdParty(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The form file, with the filling properties now stored on it |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller holds only form-filling access on the room, or no access to it at all |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleFileFavorite**
> BooleanWrapper toggleFileFavorite()

Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **favorite** | [**boolean**] | Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it. | (optional) defaults to undefined|


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

let fileId: number; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let favorite: boolean; //Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it. (optional) (default to undefined)

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
|**200** | Echo of the requested state, which does not prove that the mark was changed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | Changing the favorite mark is refused for the caller |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleFileFavoriteThirdParty**
> BooleanWrapper toggleFileFavoriteThirdParty()

Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites,  `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue  speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member  sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights  and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to  nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is  never marked, and the requested value still comes back, so read the outcome from  `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that  listing until it is restored. To mark several entries at once, or to mark folders, use  `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/toggle-file-favorite-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. | defaults to undefined|
| **favorite** | [**boolean**] | Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it. | (optional) defaults to undefined|


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

let fileId: string; //The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string. (default to undefined)
let favorite: boolean; //Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes  it from them. Leaving the field out of the request removes the mark rather than setting it. (optional) (default to undefined)

const { status, data } = await apiInstance.toggleFileFavoriteThirdParty(
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
|**200** | Echo of the requested state, which does not prove that the mark was changed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | Changing the favorite mark is refused for the caller |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trackEditFile**
> ItemKeyValuePairBooleanStringWrapper trackEditFile()

Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file whose editing session is being tracked. | defaults to undefined|
| **tabId** | [**string**] | The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor. | (optional) defaults to undefined|
| **docKeyForTrack** | [**string**] | The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused. | (optional) defaults to undefined|
| **isFinish** | [**boolean**] | Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited. | (optional) defaults to undefined|


### Return type

**ItemKeyValuePairBooleanStringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file whose editing session is being tracked. (default to undefined)
let tabId: string; //The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor. (optional) (default to undefined)
let docKeyForTrack: string; //The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused. (optional) (default to undefined)
let isFinish: boolean; //Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited. (optional) (default to undefined)

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
|**200** | The session was refreshed or closed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The document key does not match the revision being edited |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trackEditFileThirdParty**
> ItemKeyValuePairBooleanStringWrapper trackEditFileThirdParty()

Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document  is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value  `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the  one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and  several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on  the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With  `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the  entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the  tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value`  whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is  accepted only through an external share link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/track-edit-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] | The file whose editing session is being tracked. | defaults to undefined|
| **tabId** | [**string**] | The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor. | (optional) defaults to undefined|
| **docKeyForTrack** | [**string**] | The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused. | (optional) defaults to undefined|
| **isFinish** | [**boolean**] | Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited. | (optional) defaults to undefined|


### Return type

**ItemKeyValuePairBooleanStringWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file whose editing session is being tracked. (default to undefined)
let tabId: string; //The client tab that holds the session, a value the client makes up once and repeats on every call about that  tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value  belongs to a session claimed for a single editor. (optional) (default to undefined)
let docKeyForTrack: string; //The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It  is checked against the file\'s current key on every call, so a key left over from an older revision is refused. (optional) (default to undefined)
let isFinish: boolean; //Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is  refreshed and the file stays marked as being edited. (optional) (default to undefined)

const { status, data } = await apiInstance.trackEditFileThirdParty(
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
|**200** | The session was refreshed or closed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The document key does not match the revision being edited |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFile**
> FileWrapper updateFile(updateFile)

Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFile** | **UpdateFile**| The new title and the version to restore. | |
| **fileId** | [**number**] | The file to update. | defaults to undefined|


### Return type

**FileWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    UpdateFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: number; //The file to update. (default to undefined)
let updateFile: UpdateFile; //The new title and the version to restore.

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
|**200** | The file after the rename, the restore, or both |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not rename the file or change its version |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFileThirdParty**
> ThirdPartyFileWrapper updateFileThirdParty(updateFile)

Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A  non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename  cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores  that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top  of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes  this operation a read of the file when both fields are left out. The caller needs edit access, and renaming  somebody else\'s file additionally needs room-manager rights: a member or room admin with plain editing access,  read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while  a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for  everybody else who can read it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFile** | **UpdateFile**| The new title and the version to restore. | |
| **fileId** | [**string**] | The file to update. | defaults to undefined|


### Return type

**ThirdPartyFileWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    FilesFilesApi,
    Configuration,
    UpdateFile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFilesApi(configuration);

let fileId: string; //The file to update. (default to undefined)
let updateFile: UpdateFile; //The new title and the version to restore.

const { status, data } = await apiInstance.updateFileThirdParty(
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
|**200** | The file after the rename, the restore, or both |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller may not rename the file or change its version |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

