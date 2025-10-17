# FoldersApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkUpload**](#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | |
|[**createFolder**](#createfolder) | **POST** /api/2.0/files/folder/{folderId} | |
|[**createFolderPrimaryExternalLink**](#createfolderprimaryexternallink) | **POST** /api/2.0/files/folder/{id}/link | |
|[**createReportFolderHistory**](#createreportfolderhistory) | **POST** /api/2.0/files/folder/{folderId}/log/report | |
|[**deleteFolder**](#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | |
|[**getFavoritesFolder**](#getfavoritesfolder) | **GET** /api/2.0/files/@favorites | |
|[**getFilesUsedSpace**](#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | |
|[**getFolder**](#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | |
|[**getFolderByFolderId**](#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | |
|[**getFolderHistory**](#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | |
|[**getFolderInfo**](#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | |
|[**getFolderLinks**](#getfolderlinks) | **GET** /api/2.0/files/folder/{id}/links | |
|[**getFolderPath**](#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | |
|[**getFolderPrimaryExternalLink**](#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | |
|[**getFolderRecent**](#getfolderrecent) | **GET** /api/2.0/files/recent | |
|[**getFolders**](#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | |
|[**getMyFolder**](#getmyfolder) | **GET** /api/2.0/files/@my | |
|[**getNewFolderItems**](#getnewfolderitems) | **GET** /api/2.0/files/{folderId}/news | |
|[**getPrivacyFolder**](#getprivacyfolder) | **GET** /api/2.0/files/@privacy | |
|[**getRecentFolder**](#getrecentfolder) | **GET** /api/2.0/files/@recent | |
|[**getRootFolders**](#getrootfolders) | **GET** /api/2.0/files/@root | |
|[**getTrashFolder**](#gettrashfolder) | **GET** /api/2.0/files/@trash | |
|[**insertFile**](#insertfile) | **POST** /api/2.0/files/{folderId}/insert | |
|[**insertFileToMyFromBody**](#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | |
|[**renameFolder**](#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | |
|[**setFolderOrder**](#setfolderorder) | **PUT** /api/2.0/files/folder/{folderId}/order | |
|[**setFolderPrimaryExternalLink**](#setfolderprimaryexternallink) | **PUT** /api/2.0/files/folder/{id}/links | |
|[**uploadFile**](#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | |
|[**uploadFileToMy**](#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | |

# **checkUpload**
> STRINGArrayWrapper checkUpload(checkUploadRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-upload/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkUploadRequest** | **CheckUploadRequest**| The request parameters for checking file uploads. | |
| **folderId** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**STRINGArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CheckUploadRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID. (default to undefined)
let checkUploadRequest: CheckUploadRequest; //The request parameters for checking file uploads.

const { status, data } = await apiInstance.checkUpload(
    folderId,
    checkUploadRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolder**
> FolderIntegerWrapper createFolder(createFolder)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolder** | **CreateFolder**| The parameters for creating a folder. | |
| **folderId** | [**number**] | The folder ID for the folder creation. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CreateFolder
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID for the folder creation. (default to undefined)
let createFolder: CreateFolder; //The parameters for creating a folder.

const { status, data } = await apiInstance.createFolder(
    folderId,
    createFolder
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New folder parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolderPrimaryExternalLink**
> FileShareWrapper createFolderPrimaryExternalLink(folderLinkRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-folder-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderLinkRequest** | **FolderLinkRequest**| The folder link parameters. | |
| **id** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    FolderLinkRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let id: number; //The folder ID. (default to undefined)
let folderLinkRequest: FolderLinkRequest; //The folder link parameters.

const { status, data } = await apiInstance.createFolderPrimaryExternalLink(
    id,
    folderLinkRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folders security information |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReportFolderHistory**
> StringWrapper createReportFolderHistory()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-report-folder-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] |  | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; // (default to undefined)

const { status, data } = await apiInstance.createReportFolderHistory(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | URL to the report file |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFolder**
> FileOperationArrayWrapper deleteFolder(deleteFolder)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteFolder** | **DeleteFolder**| The parameters for deleting a folder. | |
| **folderId** | [**number**] | The folder ID to delete. | defaults to undefined|


### Return type

**FileOperationArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    DeleteFolder
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID to delete. (default to undefined)
let deleteFolder: DeleteFolder; //The parameters for deleting a folder.

const { status, data } = await apiInstance.deleteFolder(
    folderId,
    deleteFolder
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

# **getFavoritesFolder**
> FolderContentIntegerWrapper getFavoritesFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-favorites-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to retrieve in a paginated list. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the field by which the folder content should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter or search criterion for folder content queries. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to retrieve in a paginated list. (optional) (default to undefined)
let sortBy: string; //Specifies the field by which the folder content should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used as a filter or search criterion for folder content queries. (optional) (default to undefined)

const { status, data } = await apiInstance.getFavoritesFolder(
    userIdOrGroupId,
    filterType,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Favorites section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesUsedSpace**
> FilesStatisticsResultWrapper getFilesUsedSpace()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-used-space/).

### Parameters
This endpoint does not have any parameters.


### Return type

**FilesStatisticsResultWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

const { status, data } = await apiInstance.getFilesUsedSpace();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Used space of files in the root folders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolder**
> FormsItemArrayWrapper getFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FormsItemArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)

const { status, data } = await apiInstance.getFolder(
    folderId
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

# **getFolderByFolderId**
> FolderContentIntegerWrapper getFolderByFolderId()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-by-folder-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID. | defaults to undefined|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **roomId** | [**number**] | The room ID. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders, or all elements from the specified folder. | (optional) defaults to undefined|
| **extension** | [**string**] | Specifies whether to search for the specific file extension. | (optional) defaults to undefined|
| **searchArea** | **SearchArea** | The search area. | (optional) defaults to undefined|
| **formsItemKey** | [**string**] | The forms item key. | (optional) defaults to undefined|
| **formsItemType** | [**string**] | The forms item type. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to retrieve in a paginated request. | (optional) defaults to undefined|
| **sortBy** | [**string**] | The property used for sorting the folder request results. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text value used as a filter parameter for folder content queries. | (optional) defaults to undefined|
| **location** | **Location** | The location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID. (default to undefined)
let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let roomId: number; //The room ID. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders, or all elements from the specified folder. (optional) (default to undefined)
let extension: string; //Specifies whether to search for the specific file extension. (optional) (default to undefined)
let searchArea: SearchArea; //The search area. (optional) (default to undefined)
let formsItemKey: string; //The forms item key. (optional) (default to undefined)
let formsItemType: string; //The forms item type. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to retrieve in a paginated request. (optional) (default to undefined)
let sortBy: string; //The property used for sorting the folder request results. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text value used as a filter parameter for folder content queries. (optional) (default to undefined)
let location: Location; //The location context of the request, specifying the area  where the operation is performed, such as a room, documents, or a link. (optional) (default to undefined)

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
    formsItemType,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue,
    location
);
```

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


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-history/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID of the history request. | defaults to undefined|
| **fromDate** | **ApiDateTime** | The start date of the history request. | (optional) defaults to undefined|
| **toDate** | **ApiDateTime** | The end date of the history request. | (optional) defaults to undefined|
| **count** | [**number**] | The number of records to retrieve for the folder history. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index from which the history records are retrieved in the request. | (optional) defaults to undefined|


### Return type

**HistoryArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID of the history request. (default to undefined)
let fromDate: ApiDateTime; //The start date of the history request. (optional) (default to undefined)
let toDate: ApiDateTime; //The end date of the history request. (optional) (default to undefined)
let count: number; //The number of records to retrieve for the folder history. (optional) (default to undefined)
let startIndex: number; //The starting index from which the history records are retrieved in the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderHistory(
    folderId,
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
|**200** | List of actions in the folder |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderInfo**
> FolderIntegerWrapper getFolderInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)

const { status, data } = await apiInstance.getFolderInfo(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderLinks**
> FileShareArrayWrapper getFolderLinks()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-links/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let id: number; //The folder ID. (default to undefined)

const { status, data } = await apiInstance.getFolderLinks(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder security information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderPath**
> FileEntryBaseArrayWrapper getFolderPath()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-path/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)

const { status, data } = await apiInstance.getFolderPath(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderPrimaryExternalLink**
> FileShareWrapper getFolderPrimaryExternalLink()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The folder unique identifier. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let id: number; //The folder unique identifier. (default to undefined)
let count: number; //The number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderPrimaryExternalLink(
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
|**200** | Folder security information |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderRecent**
> FolderContentIntegerWrapper getFolderRecent()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-recent/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|
| **searchArea** | **SearchArea** | The search area. | (optional) defaults to undefined|
| **extension** | **Array&lt;string&gt;** | Specifies whether to search for a specific file extension in the Recent folder. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting position of the results to be returned in the query response. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the sorting criteria for the folder request. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used for filtering or searching folder contents. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)
let searchArea: SearchArea; //The search area. (optional) (default to undefined)
let extension: Array<string>; //Specifies whether to search for a specific file extension in the Recent folder. (optional) (default to undefined)
let count: number; //The maximum number of items to return. (optional) (default to undefined)
let startIndex: number; //The starting position of the results to be returned in the query response. (optional) (default to undefined)
let sortBy: string; //Specifies the sorting criteria for the folder request. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used for filtering or searching folder contents. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderRecent(
    userIdOrGroupId,
    filterType,
    excludeSubject,
    applyFilterOption,
    searchArea,
    extension,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Recent section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolders**
> FileEntryBaseArrayWrapper getFolders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folders/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)

const { status, data } = await apiInstance.getFolders(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyFolder**
> FolderContentIntegerWrapper getMyFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-my-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting position of the items to be retrieved. | (optional) defaults to undefined|
| **sortBy** | [**string**] | The property used to specify the sorting criteria for folder contents. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used for filtering or searching folder contents. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the response. (optional) (default to undefined)
let startIndex: number; //The starting position of the items to be retrieved. (optional) (default to undefined)
let sortBy: string; //The property used to specify the sorting criteria for folder contents. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used for filtering or searching folder contents. (optional) (default to undefined)

const { status, data } = await apiInstance.getMyFolder(
    userIdOrGroupId,
    filterType,
    applyFilterOption,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The My documents section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNewFolderItems**
> FileEntryBaseArrayWrapper getNewFolderItems()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-folder-items/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)

const { status, data } = await apiInstance.getNewFolderItems(
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file entry information |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPrivacyFolder**
> FolderContentIntegerWrapper getPrivacyFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-privacy-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to retrieve in a paginated list. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the field by which the folder content should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter or search criterion for folder content queries. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to retrieve in a paginated list. (optional) (default to undefined)
let sortBy: string; //Specifies the field by which the folder content should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used as a filter or search criterion for folder content queries. (optional) (default to undefined)

const { status, data } = await apiInstance.getPrivacyFolder(
    userIdOrGroupId,
    filterType,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Private Room section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecentFolder**
> FolderContentIntegerWrapper getRecentFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-recent-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **excludeSubject** | [**boolean**] | Specifies whether to exclude search by user or group ID. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|
| **searchArea** | **SearchArea** | The search area. | (optional) defaults to undefined|
| **extension** | **Array&lt;string&gt;** | Specifies whether to search for a specific file extension in the Recent folder. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting position of the results to be returned in the query response. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the sorting criteria for the folder request. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used for filtering or searching folder contents. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let excludeSubject: boolean; //Specifies whether to exclude search by user or group ID. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)
let searchArea: SearchArea; //The search area. (optional) (default to undefined)
let extension: Array<string>; //Specifies whether to search for a specific file extension in the Recent folder. (optional) (default to undefined)
let count: number; //The maximum number of items to return. (optional) (default to undefined)
let startIndex: number; //The starting position of the results to be returned in the query response. (optional) (default to undefined)
let sortBy: string; //Specifies the sorting criteria for the folder request. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used for filtering or searching folder contents. (optional) (default to undefined)

const { status, data } = await apiInstance.getRecentFolder(
    userIdOrGroupId,
    filterType,
    excludeSubject,
    applyFilterOption,
    searchArea,
    extension,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Recent section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRootFolders**
> FolderContentIntegerArrayWrapper getRootFolders()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-root-folders/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **withoutTrash** | [**boolean**] | Specifies whether to return the Trash section or not. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting position of the items to be retrieved. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the field by which the folder content should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter for searching or retrieving folder contents. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let withoutTrash: boolean; //Specifies whether to return the Trash section or not. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the response. (optional) (default to undefined)
let startIndex: number; //The starting position of the items to be retrieved. (optional) (default to undefined)
let sortBy: string; //Specifies the field by which the folder content should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used as a filter for searching or retrieving folder contents. (optional) (default to undefined)

const { status, data } = await apiInstance.getRootFolders(
    userIdOrGroupId,
    filterType,
    withoutTrash,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of section contents with the following parameters |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrashFolder**
> FolderContentIntegerWrapper getTrashFolder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-trash-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | [**string**] | The user or group ID. | (optional) defaults to undefined|
| **filterType** | **FilterType** | The filter type. | (optional) defaults to undefined|
| **applyFilterOption** | **ApplyFilterOption** | Specifies whether to return only files, only folders or all elements. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to retrieve in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting position of the items to be retrieved. | (optional) defaults to undefined|
| **sortBy** | [**string**] | The property used to specify the sorting criteria for folder contents. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used for filtering or searching folder contents. | (optional) defaults to undefined|


### Return type

**FolderContentIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let userIdOrGroupId: string; //The user or group ID. (optional) (default to undefined)
let filterType: FilterType; //The filter type. (optional) (default to undefined)
let applyFilterOption: ApplyFilterOption; //Specifies whether to return only files, only folders or all elements. (optional) (default to undefined)
let count: number; //The maximum number of items to retrieve in the response. (optional) (default to undefined)
let startIndex: number; //The starting position of the items to be retrieved. (optional) (default to undefined)
let sortBy: string; //The property used to specify the sorting criteria for folder contents. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used for filtering or searching folder contents. (optional) (default to undefined)

const { status, data } = await apiInstance.getTrashFolder(
    userIdOrGroupId,
    filterType,
    applyFilterOption,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Trash section contents |  -  |
|**403** | You don\&#39;t have enough permission to view the folder content |  -  |
|**404** | The required folder was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertFile**
> FileIntegerWrapper insertFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file/).

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

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

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

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **insertFileToMyFromBody**
> FileIntegerWrapper insertFileToMyFromBody()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/insert-file-to-my-from-body/).

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

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

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

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renameFolder**
> FolderIntegerWrapper renameFolder(createFolder)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/rename-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolder** | **CreateFolder**| The parameters for creating a folder. | |
| **folderId** | [**number**] | The folder ID for the folder creation. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    CreateFolder
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID for the folder creation. (default to undefined)
let createFolder: CreateFolder; //The parameters for creating a folder.

const { status, data } = await apiInstance.renameFolder(
    folderId,
    createFolder
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder parameters |  -  |
|**403** | You don\&#39;t have enough permission to rename the folder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFolderOrder**
> FolderIntegerWrapper setFolderOrder()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-order/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequestDto** | **OrderRequestDto**| The folder order information. | |
| **folderId** | [**number**] | The folder unique identifier. | defaults to undefined|


### Return type

**FolderIntegerWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    OrderRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder unique identifier. (default to undefined)
let orderRequestDto: OrderRequestDto; //The folder order information. (optional)

const { status, data } = await apiInstance.setFolderOrder(
    folderId,
    orderRequestDto
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

# **setFolderPrimaryExternalLink**
> FileShareWrapper setFolderPrimaryExternalLink(folderLinkRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-primary-external-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderLinkRequest** | **FolderLinkRequest**| The folder link parameters. | |
| **id** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**FileShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    FolderLinkRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let id: number; //The folder ID. (default to undefined)
let folderLinkRequest: FolderLinkRequest; //The folder link parameters.

const { status, data } = await apiInstance.setFolderPrimaryExternalLink(
    id,
    folderLinkRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> ObjectWrapper uploadFile()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadRequestDto** | **UploadRequestDto**| The request parameters for uploading a file. | |
| **folderId** | [**number**] | The folder ID to upload a file. | defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    UploadRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let folderId: number; //The folder ID to upload a file. (default to undefined)
let uploadRequestDto: UploadRequestDto; //The request parameters for uploading a file. (optional)

const { status, data } = await apiInstance.uploadFile(
    folderId,
    uploadRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inserted file |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | Folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFileToMy**
> ObjectWrapper uploadFileToMy()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-file-to-my/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inDto** | **UploadRequestDto** | The request parameters for uploading a file. | (optional) defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesFoldersApi,
    Configuration,
    UploadRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesFoldersApi(configuration);

let inDto: UploadRequestDto; //The request parameters for uploading a file. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFileToMy(
    inDto
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Uploaded file(s) |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

