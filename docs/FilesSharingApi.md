# SharingApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyExternalSharePassword**](#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | |
|[**changeFileOwner**](#changefileowner) | **POST** /api/2.0/files/owner | |
|[**getExternalShareData**](#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | |
|[**getFileSecurityInfo**](#getfilesecurityinfo) | **GET** /api/2.0/files/file/{id}/share | |
|[**getFolderSecurityInfo**](#getfoldersecurityinfo) | **GET** /api/2.0/files/folder/{id}/share | |
|[**getGroupsMembersWithFileSecurity**](#getgroupsmemberswithfilesecurity) | **GET** /api/2.0/files/file/{fileId}/group/{groupId}/share | |
|[**getGroupsMembersWithFolderSecurity**](#getgroupsmemberswithfoldersecurity) | **GET** /api/2.0/files/folder/{folderId}/group/{groupId}/share | |
|[**getSecurityInfo**](#getsecurityinfo) | **POST** /api/2.0/files/share | |
|[**getSharedUsers**](#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | |
|[**removeSecurityInfo**](#removesecurityinfo) | **DELETE** /api/2.0/files/share | |
|[**sendEditorNotify**](#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | |
|[**setFileSecurityInfo**](#setfilesecurityinfo) | **PUT** /api/2.0/files/file/{fileId}/share | |
|[**setFolderSecurityInfo**](#setfoldersecurityinfo) | **PUT** /api/2.0/files/folder/{folderId}/share | |
|[**setSecurityInfo**](#setsecurityinfo) | **PUT** /api/2.0/files/share | |

# **applyExternalSharePassword**
> ExternalShareWrapper applyExternalSharePassword(externalShareRequestParam)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalShareRequestParam** | **ExternalShareRequestParam**| The external data share request parameters. | |
| **key** | [**string**] | The unique document identifier. | defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ExternalShareRequestParam
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique document identifier. (default to undefined)
let externalShareRequestParam: ExternalShareRequestParam; //The external data share request parameters.

const { status, data } = await apiInstance.applyExternalSharePassword(
    key,
    externalShareRequestParam
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | External data |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changeFileOwner**
> FileEntryBaseArrayWrapper changeFileOwner()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeOwnerRequestDto** | **ChangeOwnerRequestDto**|  | |


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    ChangeOwnerRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let changeOwnerRequestDto: ChangeOwnerRequestDto; // (optional)

const { status, data } = await apiInstance.changeFileOwner(
    changeOwnerRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File entry information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalShareData**
> ExternalShareWrapper getExternalShareData()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] | The unique key of the external shared data. | defaults to undefined|
| **fileId** | [**string**] | The unique document identifier. | (optional) defaults to undefined|
| **folderId** | [**string**] | The unique folder identifier. | (optional) defaults to undefined|


### Return type

**ExternalShareWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let key: string; //The unique key of the external shared data. (default to undefined)
let fileId: string; //The unique document identifier. (optional) (default to undefined)
let folderId: string; //The unique folder identifier. (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalShareData(
    key,
    fileId,
    folderId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | External data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileSecurityInfo**
> FileShareArrayWrapper getFileSecurityInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/).

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
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let id: number; //The file ID of the request. (default to undefined)
let count: number; //The number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getFileSecurityInfo(
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
|**200** | List of shared file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderSecurityInfo**
> FileShareArrayWrapper getFolderSecurityInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The request folder ID. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let id: number; //The request folder ID. (default to undefined)
let count: number; //The number of items to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderSecurityInfo(
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
|**200** | List of shared file information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsMembersWithFileSecurity**
> GroupMemberSecurityRequestArrayWrapper getGroupsMembersWithFileSecurity()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**number**] | The file ID. | defaults to undefined|
| **groupId** | [**string**] | The group ID. | defaults to undefined|
| **count** | [**number**] | The number of items to be retrieved in the current query. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query result set. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The filter value used for searching or querying group members based on text input. | (optional) defaults to undefined|


### Return type

**GroupMemberSecurityRequestArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let groupId: string; //The group ID. (default to undefined)
let count: number; //The number of items to be retrieved in the current query. (optional) (default to undefined)
let startIndex: number; //The starting index for the query result set. (optional) (default to undefined)
let filterValue: string; //The filter value used for searching or querying group members based on text input. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsMembersWithFileSecurity(
    fileId,
    groupId,
    count,
    startIndex,
    filterValue
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

# **getGroupsMembersWithFolderSecurity**
> GroupMemberSecurityRequestArrayWrapper getGroupsMembersWithFolderSecurity()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**number**] | The folder ID. | defaults to undefined|
| **groupId** | [**string**] | The group ID. | defaults to undefined|
| **count** | [**number**] | The number of items to be retrieved in the current query. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query result set. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The filter value used for searching or querying group members based on text input. | (optional) defaults to undefined|


### Return type

**GroupMemberSecurityRequestArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let folderId: number; //The folder ID. (default to undefined)
let groupId: string; //The group ID. (default to undefined)
let count: number; //The number of items to be retrieved in the current query. (optional) (default to undefined)
let startIndex: number; //The starting index for the query result set. (optional) (default to undefined)
let filterValue: string; //The filter value used for searching or querying group members based on text input. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsMembersWithFolderSecurity(
    folderId,
    groupId,
    count,
    startIndex,
    filterValue
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

# **getSecurityInfo**
> FileShareArrayWrapper getSecurityInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.getSecurityInfo(
    baseBatchRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of shared files and folders information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSharedUsers**
> MentionWrapperArrayWrapper getSharedUsers()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/).

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
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the request. (default to undefined)

const { status, data } = await apiInstance.getSharedUsers(
    fileId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with their access rights to the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeSecurityInfo**
> BooleanWrapper removeSecurityInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/).

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
    FilesSharingApi,
    Configuration,
    BaseBatchRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let baseBatchRequestDto: BaseBatchRequestDto; // (optional)

const { status, data } = await apiInstance.removeSecurityInfo(
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

# **sendEditorNotify**
> AceShortWrapperArrayWrapper sendEditorNotify()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mentionMessageWrapper** | **MentionMessageWrapper**| The mention message. | |
| **fileId** | [**number**] | The file ID of the mention message. | defaults to undefined|


### Return type

**AceShortWrapperArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    MentionMessageWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID of the mention message. (default to undefined)
let mentionMessageWrapper: MentionMessageWrapper; //The mention message. (optional)

const { status, data } = await apiInstance.sendEditorNotify(
    fileId,
    mentionMessageWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of access rights information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileSecurityInfo**
> FileShareArrayWrapper setFileSecurityInfo(securityInfoSimpleRequestDto)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoSimpleRequestDto** | **SecurityInfoSimpleRequestDto**| The parameters of the security information simple request. | |
| **fileId** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    SecurityInfoSimpleRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID. (default to undefined)
let securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto; //The parameters of the security information simple request.

const { status, data } = await apiInstance.setFileSecurityInfo(
    fileId,
    securityInfoSimpleRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of shared file information: sharing rights, a user who has the access to the specified file, the file is locked by this user or not, this user is an owner of the specified file or not, this user can edit the access to the specified file or not |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFolderSecurityInfo**
> FileShareArrayWrapper setFolderSecurityInfo(securityInfoSimpleRequestDto)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoSimpleRequestDto** | **SecurityInfoSimpleRequestDto**| The parameters of the security information simple request. | |
| **folderId** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    SecurityInfoSimpleRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let folderId: number; //The folder ID. (default to undefined)
let securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto; //The parameters of the security information simple request.

const { status, data } = await apiInstance.setFolderSecurityInfo(
    folderId,
    securityInfoSimpleRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of shared folder information: sharing rights, a user who has the access to the specified folder, the folder is locked by this user or not, this user is an owner of the specified folder or not, this user can edit the access to the specified folder or not |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setSecurityInfo**
> FileShareArrayWrapper setSecurityInfo()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoRequestDto** | **SecurityInfoRequestDto**|  | |


### Return type

**FileShareArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    SecurityInfoRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let securityInfoRequestDto: SecurityInfoRequestDto; // (optional)

const { status, data } = await apiInstance.setSecurityInfo(
    securityInfoRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of shared files and folders information: sharing rights, a user who has the access to the specified folder, the folder is locked by this user or not, this user is an owner of the specified folder or not, this user can edit the access to the specified folder or not |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

