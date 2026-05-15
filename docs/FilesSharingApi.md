# SharingApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyExternalSharePassword**](#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password|
|[**changeFileOwner**](#changefileowner) | **POST** /api/2.0/files/owner | Change the file owner|
|[**getExternalShareData**](#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | Get the external data|
|[**getFileSecurityInfo**](#getfilesecurityinfo) | **GET** /api/2.0/files/file/{id}/share | Get the shared file information|
|[**getFolderSecurityInfo**](#getfoldersecurityinfo) | **GET** /api/2.0/files/folder/{id}/share | Get the shared folder information|
|[**getGroupsMembersWithFileSecurity**](#getgroupsmemberswithfilesecurity) | **GET** /api/2.0/files/file/{fileId}/group/{groupId}/share | Get file group members with security information|
|[**getGroupsMembersWithFolderSecurity**](#getgroupsmemberswithfoldersecurity) | **GET** /api/2.0/files/folder/{folderId}/group/{groupId}/share | Get folder group members with security information|
|[**getSecurityInfo**](#getsecurityinfo) | **POST** /api/2.0/files/share | Get the sharing rights|
|[**getSharedUsers**](#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID|
|[**removeSecurityInfo**](#removesecurityinfo) | **DELETE** /api/2.0/files/share | Remove the sharing rights|
|[**sendEditorNotify**](#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message|
|[**setFileSecurityInfo**](#setfilesecurityinfo) | **PUT** /api/2.0/files/file/{fileId}/share | Share a file|
|[**setFolderSecurityInfo**](#setfoldersecurityinfo) | **PUT** /api/2.0/files/folder/{folderId}/share | Share a folder|
|[**setSecurityInfo**](#setsecurityinfo) | **PUT** /api/2.0/files/share | Set the sharing rights|

# **applyExternalSharePassword**
> ExternalShareWrapper applyExternalSharePassword(externalShareRequestParam)

Applies a password specified in the request to get the external data.

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

Changes the owner of the file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeOwnerRequestDto** | **ChangeOwnerRequestDto**|  | |


### Return type

**FileEntryBaseArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExternalShareData**
> ExternalShareWrapper getExternalShareData()

Returns the external data by the key specified in the request.

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

Returns the detailed information about the shared file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/).

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
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let id: number; //The file unique identifier. (default to undefined)
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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolderSecurityInfo**
> FileShareArrayWrapper getFolderSecurityInfo()

Returns the detailed information about the shared folder with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The folder unique identifier. | defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let id: number; //The folder unique identifier. (default to undefined)
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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsMembersWithFileSecurity**
> GroupMemberSecurityRequestArrayWrapper getGroupsMembersWithFileSecurity()

Returns the group members with their file security information.

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

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsMembersWithFolderSecurity**
> GroupMemberSecurityRequestArrayWrapper getGroupsMembersWithFolderSecurity()

Returns the group members with their folder security information.

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

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSecurityInfo**
> FileShareArrayWrapper getSecurityInfo()

Returns the sharing rights for all the files and folders specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSharedUsers**
> MentionWrapperArrayWrapper getSharedUsers()

Returns a list of users with their access rights to the file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/).

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
    FilesSharingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file unique identifier. (default to undefined)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeSecurityInfo**
> BooleanWrapper removeSecurityInfo()

Removes the sharing rights from all the files and folders specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseBatchRequestDto** | **BaseBatchRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEditorNotify**
> AceShortWrapperArrayWrapper sendEditorNotify()

Sends a message to the users who are mentioned in the file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mentionMessageWrapper** | **MentionMessageWrapper**| The mention message. | |
| **fileId** | [**number**] | The file ID with the mention message. | defaults to undefined|


### Return type

**AceShortWrapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    FilesSharingApi,
    Configuration,
    MentionMessageWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new FilesSharingApi(configuration);

let fileId: number; //The file ID with the mention message. (default to undefined)
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
|**400** | The list of email addresses is empty |  -  |
|**403** | You don\'t have enough permission to perform the operation |  -  |
|**404** | The required file was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileSecurityInfo**
> FileShareArrayWrapper setFileSecurityInfo(securityInfoSimpleRequestDto)

Sets the sharing settings to a file with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoSimpleRequestDto** | **SecurityInfoSimpleRequestDto**| The parameters of the security information simple request. | |
| **fileId** | [**number**] | The file ID. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFolderSecurityInfo**
> FileShareArrayWrapper setFolderSecurityInfo(securityInfoSimpleRequestDto)

Sets the sharing settings to a folder with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoSimpleRequestDto** | **SecurityInfoSimpleRequestDto**| The parameters of the security information simple request. | |
| **folderId** | [**number**] | The folder ID. | defaults to undefined|


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setSecurityInfo**
> FileShareArrayWrapper setSecurityInfo()

Sets the sharing rights to all the files and folders specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityInfoRequestDto** | **SecurityInfoRequestDto**|  | |


### Return type

**FileShareArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

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
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

