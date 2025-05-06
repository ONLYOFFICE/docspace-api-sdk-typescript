# FilesFoldersApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkUpload**](#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads|
|[**createFolder**](#createfolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder|
|[**deleteFolder**](#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder|
|[**getFilesUsedSpace**](#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | Get used space of files|
|[**getFolder**](#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter|
|[**getFolderByFolderId**](#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | Get a folder by ID|
|[**getFolderHistory**](#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history|
|[**getFolderInfo**](#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information|
|[**getFolderPath**](#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path|
|[**getFolderPrimaryExternalLink**](#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link|
|[**getFolders**](#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders|
|[**getMyFolder**](#getmyfolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section|
|[**getNewItems**](#getnewitems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items|
|[**getPrivacyFolder**](#getprivacyfolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section|
|[**getRootFolders**](#getrootfolders) | **GET** /api/2.0/files/@root | Get filtered sections|
|[**getTrashFolder**](#gettrashfolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section|
|[**insertFile**](#insertfile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file|
|[**insertFileToMyFromBody**](#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section|
|[**renameFolder**](#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder|
|[**setFileOrder**](#setfileorder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set file order|
|[**uploadFile**](#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file|
|[**uploadFileToMy**](#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section|

# **checkUpload**
> STRINGArrayWrapper checkUpload()

Checks the file uploads to the folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CheckUploadRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID. (default to undefined)
let checkUploadRequest: CheckUploadRequest; //The request parameters for checking file uploads. (optional)

const { status, data } = await apiInstance.checkUpload(
    folderId,
    checkUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkUploadRequest** | **CheckUploadRequest**| The request parameters for checking file uploads. | |
| **folderId** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**STRINGArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolder**
> FolderIntegerWrapper createFolder()

Creates a new folder with the title specified in the request. The parent folder ID can be also specified.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CreateFolder
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID for the folder creation. (default to undefined)
let createFolder: CreateFolder; //The parameters for creating a folder. (optional)

const { status, data } = await apiInstance.createFolder(
    folderId,
    createFolder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolder** | **CreateFolder**| The parameters for creating a folder. | |
| **folderId** | [**number**] | The folder ID for the folder creation. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New folder parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFolder**
> FileOperationArrayWrapper deleteFolder()

Deletes a folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    DeleteFolder
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID to delete. (default to undefined)
let deleteFolder: DeleteFolder; //The parameters for deleting a folder. (optional)

const { status, data } = await apiInstance.deleteFolder(
    folderId,
    deleteFolder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteFolder** | **DeleteFolder**| The parameters for deleting a folder. | |
| **folderId** | [**number**] | The folder ID to delete. | defaults to undefined|


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

# **getFilesUsedSpace**
> FilesStatisticsResultWrapper getFilesUsedSpace()

Returns the used space of files in the root folders.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

const { status, data } = await apiInstance.getFilesUsedSpace();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FilesStatisticsResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Used space of files in the root folders |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolder**
> FormsItemArrayWrapper getFolder()

Returns the form filter of a folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolder(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The request folder ID. | defaults to undefined|


### Return type

**FormsItemArrayWrapper**

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

# **getFolderByFolderId**
> FolderContentIntegerWrapper getFolderByFolderId()

Returns the detailed list of files and folders located in the folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID of the request. (default to undefined)
let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let roomId: number; //The room ID. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements from the specified folder. (optional) (default to undefined)
let extension: string; //Specifies whether to search for the specific file extension. (optional) (default to undefined)
let searchArea: SearchArea; //The search area. (optional) (default to undefined)
let formsItemKey: string; //The forms item key. (optional) (default to undefined)
let formsItemType: string; //The forms item type. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderByFolderId(
    folderId,
    userIdOrGroupId,
    filterType,
    roomId,
    excludeSubject,
    applyFilterOption,
    extension,
    searchArea,
    formsItemKey,
    formsItemType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID of the request. | defaults to undefined|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **roomId** | [**number**] | The room ID. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements from the specified folder. | (optional) defaults to undefined|
| **extension** | [**string**] | Specifies whether to search for the specific file extension. | (optional) defaults to undefined|
| **searchArea** | **SearchArea** | The search area. | (optional) defaults to undefined|
| **formsItemKey** | [**string**] | The forms item key. | (optional) defaults to undefined|
| **formsItemType** | [**string**] | The forms item type. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderHistory**
> HistoryArrayWrapper getFolderHistory()

Returns the activity history of a folder with a specified identifier.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID of the history request. (default to undefined)
let fromDate: ApiDateTime; //The start date of the history request. (optional) (default to undefined)
let toDate: ApiDateTime; //The end date of the history request. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderHistory(
    folderId,
    fromDate,
    toDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID of the history request. | defaults to undefined|
| **fromDate** | **ApiDateTime** | The start date of the history request. | (optional) defaults to undefined|
| **toDate** | **ApiDateTime** | The end date of the history request. | (optional) defaults to undefined|


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
|**200** | List of actions in the folder |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderInfo**
> FolderIntegerWrapper getFolderInfo()

Returns the detailed information about a folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolderInfo(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The request folder ID. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderPath**
> FileEntryArrayWrapper getFolderPath()

Returns a path to the folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolderPath(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The request folder ID. | defaults to undefined|


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderPrimaryExternalLink**
> FileShareWrapper getFolderPrimaryExternalLink()

Returns the primary external link by the identifier specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let id: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolderPrimaryExternalLink(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The request folder ID. | defaults to undefined|


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
|**200** | Folder security information |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolders**
> FileEntryArrayWrapper getFolders()

Returns a list of all the subfolders from a folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolders(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The request folder ID. | defaults to undefined|


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyFolder**
> FolderContentIntegerWrapper getMyFolder()

Returns the detailed list of files and folders located in the \"My documents\" section.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)

const { status, data } = await apiInstance.getMyFolder(
    userIdOrGroupId,
    filterType,
    applyFilterOption
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The \&quot;My documents\&quot; section contents |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNewItems**
> FileEntryArrayWrapper getNewItems()

Returns a list of all the new items from a folder with the ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The request folder ID. (default to undefined)

const { status, data } = await apiInstance.getNewItems(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The request folder ID. | defaults to undefined|


### Return type

**FileEntryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPrivacyFolder**
> FolderContentIntegerWrapper getPrivacyFolder()

Returns the detailed list of files and folders located in the \"Private Room\" section.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)

const { status, data } = await apiInstance.getPrivacyFolder(
    userIdOrGroupId,
    filterType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The \&quot;Private Room\&quot; section contents |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRootFolders**
> FolderContentIntegerArrayWrapper getRootFolders()

Returns all the sections matching the parameters specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let withoutTrash: boolean; //Specifies whether to return the \"Trash\" section or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getRootFolders(
    userIdOrGroupId,
    filterType,
    withoutTrash
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **withoutTrash** | [**boolean**] | Specifies whether to return the \&quot;Trash\&quot; section or not. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of section contents with the following parameters |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrashFolder**
> FolderContentIntegerWrapper getTrashFolder()

Returns the detailed list of files and folders located in the \"Trash\" section.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)

const { status, data } = await apiInstance.getTrashFolder(
    userIdOrGroupId,
    filterType,
    applyFilterOption
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The \&quot;Trash\&quot; section contents |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertFile**
> FileIntegerWrapper insertFile()

Inserts a file specified in the request to the selected folder by single file uploading.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID for inserting a file. (default to undefined)
let insertFileFile: File; //The file to be inserted. (optional) (default to undefined)
let insertFileTitle: string; //The file title to be inserted. (optional) (default to undefined)
let insertFileCreateNewIfExist: boolean; //Specifies whether to create a new file if it already exists or not. (optional) (default to undefined)
let insertFileKeepConvertStatus: boolean; //Specifies whether to keep the file converting status or not. (optional) (default to undefined)
let insertFileStreamCanRead: boolean; // (optional) (default to undefined)
let insertFileStreamCanWrite: boolean; // (optional) (default to undefined)
let insertFileStreamCanSeek: boolean; // (optional) (default to undefined)
let insertFileStreamCanTimeout: boolean; // (optional) (default to undefined)
let insertFileStreamLength: number; // (optional) (default to undefined)
let insertFileStreamPosition: number; // (optional) (default to undefined)
let insertFileStreamReadTimeout: number; // (optional) (default to undefined)
let insertFileStreamWriteTimeout: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.insertFile(
    folderId,
    insertFileFile,
    insertFileTitle,
    insertFileCreateNewIfExist,
    insertFileKeepConvertStatus,
    insertFileStreamCanRead,
    insertFileStreamCanWrite,
    insertFileStreamCanSeek,
    insertFileStreamCanTimeout,
    insertFileStreamLength,
    insertFileStreamPosition,
    insertFileStreamReadTimeout,
    insertFileStreamWriteTimeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID for inserting a file. | defaults to undefined|
| **insertFileFile** | [**File**] | The file to be inserted. | (optional) defaults to undefined|
| **insertFileTitle** | [**string**] | The file title to be inserted. | (optional) defaults to undefined|
| **insertFileCreateNewIfExist** | [**boolean**] | Specifies whether to create a new file if it already exists or not. | (optional) defaults to undefined|
| **insertFileKeepConvertStatus** | [**boolean**] | Specifies whether to keep the file converting status or not. | (optional) defaults to undefined|
| **insertFileStreamCanRead** | [**boolean**] |  | (optional) defaults to undefined|
| **insertFileStreamCanWrite** | [**boolean**] |  | (optional) defaults to undefined|
| **insertFileStreamCanSeek** | [**boolean**] |  | (optional) defaults to undefined|
| **insertFileStreamCanTimeout** | [**boolean**] |  | (optional) defaults to undefined|
| **insertFileStreamLength** | [**number**] |  | (optional) defaults to undefined|
| **insertFileStreamPosition** | [**number**] |  | (optional) defaults to undefined|
| **insertFileStreamReadTimeout** | [**number**] |  | (optional) defaults to undefined|
| **insertFileStreamWriteTimeout** | [**number**] |  | (optional) defaults to undefined|


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
|**200** | Inserted file |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertFileToMyFromBody**
> FileIntegerWrapper insertFileToMyFromBody()

Inserts a file specified in the request to the \"My documents\" section by single file uploading.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let file: File; //The file to be inserted. (optional) (default to undefined)
let title: string; //The file title to be inserted. (optional) (default to undefined)
let createNewIfExist: boolean; //Specifies whether to create a new file if it already exists or not. (optional) (default to undefined)
let keepConvertStatus: boolean; //Specifies whether to keep the file converting status or not. (optional) (default to undefined)
let streamCanRead: boolean; // (optional) (default to undefined)
let streamCanWrite: boolean; // (optional) (default to undefined)
let streamCanSeek: boolean; // (optional) (default to undefined)
let streamCanTimeout: boolean; // (optional) (default to undefined)
let streamLength: number; // (optional) (default to undefined)
let streamPosition: number; // (optional) (default to undefined)
let streamReadTimeout: number; // (optional) (default to undefined)
let streamWriteTimeout: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.insertFileToMyFromBody(
    file,
    title,
    createNewIfExist,
    keepConvertStatus,
    streamCanRead,
    streamCanWrite,
    streamCanSeek,
    streamCanTimeout,
    streamLength,
    streamPosition,
    streamReadTimeout,
    streamWriteTimeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | The file to be inserted. | (optional) defaults to undefined|
| **title** | [**string**] | The file title to be inserted. | (optional) defaults to undefined|
| **createNewIfExist** | [**boolean**] | Specifies whether to create a new file if it already exists or not. | (optional) defaults to undefined|
| **keepConvertStatus** | [**boolean**] | Specifies whether to keep the file converting status or not. | (optional) defaults to undefined|
| **streamCanRead** | [**boolean**] |  | (optional) defaults to undefined|
| **streamCanWrite** | [**boolean**] |  | (optional) defaults to undefined|
| **streamCanSeek** | [**boolean**] |  | (optional) defaults to undefined|
| **streamCanTimeout** | [**boolean**] |  | (optional) defaults to undefined|
| **streamLength** | [**number**] |  | (optional) defaults to undefined|
| **streamPosition** | [**number**] |  | (optional) defaults to undefined|
| **streamReadTimeout** | [**number**] |  | (optional) defaults to undefined|
| **streamWriteTimeout** | [**number**] |  | (optional) defaults to undefined|


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
|**200** | Inserted file |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renameFolder**
> FolderIntegerWrapper renameFolder()

Renames the selected folder with a new title specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CreateFolder
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID for the folder creation. (default to undefined)
let createFolder: CreateFolder; //The parameters for creating a folder. (optional)

const { status, data } = await apiInstance.renameFolder(
    folderId,
    createFolder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolder** | **CreateFolder**| The parameters for creating a folder. | |
| **folderId** | [**number**] | The folder ID for the folder creation. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder parameters |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to rename the folder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileOrder**
> FolderIntegerWrapper setFileOrder()

Sets the file order in the folder with ID specified in the request.

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    OrderRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)
let orderRequestDto: OrderRequestDto; //The folder order information. (optional)

const { status, data } = await apiInstance.setFileOrder(
    folderId,
    orderRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The folder order information. | |
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> ObjectWrapper uploadFile()

Uploads a file specified in the request to the selected folder by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   <ol>  <li>Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.</li>  <li>Using standart multipart/form-data method.</li>  </ol>

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    UploadRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID to upload a file. (default to undefined)
let uploadRequestDto: UploadRequestDto; //The request parameters for uploading a file. (optional)

const { status, data } = await apiInstance.uploadFile(
    folderId,
    uploadRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadRequestDto** | **UploadRequestDto**| The request parameters for uploading a file. | |
| **folderId** | [**number**] | The folder ID to upload a file. | defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFileToMy**
> ObjectWrapper uploadFileToMy()

Uploads a file specified in the request to the \"My documents\" section by single file uploading or standart multipart/form-data method.   **Note**:  You can upload files in two different ways:   <ol>  <li>Using single file upload. You should set the Content-Type and Content-Disposition headers to specify a file name and content type, and send the file to the request body.</li>  <li>Using standart multipart/form-data method.</li>  </ol>

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    UploadRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let inDto: UploadRequestDto; //The request parameters for uploading a file. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFileToMy(
    inDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **UploadRequestDto** | The request parameters for uploading a file. | (optional) defaults to undefined|


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
|**200** | Uploaded file(s) |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

