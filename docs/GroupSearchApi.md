# SearchApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGroupsWithFilesShared**](#getgroupswithfilesshared) | **GET** /api/2.0/group/file/{id} | Get groups with file sharing settings|
|[**getGroupsWithFoldersShared**](#getgroupswithfoldersshared) | **GET** /api/2.0/group/folder/{id} | Get groups with folder sharing settings|
|[**getGroupsWithRoomsShared**](#getgroupswithroomsshared) | **GET** /api/2.0/group/room/{id} | Get groups with room sharing settings|

# **getGroupsWithFilesShared**
> GroupArrayWrapper getGroupsWithFilesShared()

Returns groups with their sharing settings for a file with the ID specified in request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The group ID. | defaults to undefined|
| **excludeShared** | [**boolean**] | Specifies whether to exclude the group sharing settings from the response. | (optional) defaults to undefined|
| **count** | [**number**] | The number of groups to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index from which to begin retrieving groups with their sharing settings. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter for retrieving groups with their sharing settings. | (optional) defaults to undefined|


### Return type

**GroupArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new GroupSearchApi(configuration);

let id: number; //The group ID. (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the group sharing settings from the response. (optional) (default to undefined)
let count: number; //The number of groups to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index from which to begin retrieving groups with their sharing settings. (optional) (default to undefined)
let filterValue: string; //The text used as a filter for retrieving groups with their sharing settings. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithFilesShared(
    id,
    excludeShared,
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
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithFoldersShared**
> GroupArrayWrapper getGroupsWithFoldersShared()

Returns groups with their sharing settings in a folder with the ID specified in request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The group ID. | defaults to undefined|
| **excludeShared** | [**boolean**] | Specifies whether to exclude the group sharing settings from the response. | (optional) defaults to undefined|
| **count** | [**number**] | The number of groups to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index from which to begin retrieving groups with their sharing settings. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter for retrieving groups with their sharing settings. | (optional) defaults to undefined|


### Return type

**GroupArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new GroupSearchApi(configuration);

let id: number; //The group ID. (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the group sharing settings from the response. (optional) (default to undefined)
let count: number; //The number of groups to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index from which to begin retrieving groups with their sharing settings. (optional) (default to undefined)
let filterValue: string; //The text used as a filter for retrieving groups with their sharing settings. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithFoldersShared(
    id,
    excludeShared,
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
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithRoomsShared**
> GroupArrayWrapper getGroupsWithRoomsShared()

Returns groups with their sharing settings in a room with the ID specified in request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The group ID. | defaults to undefined|
| **excludeShared** | [**boolean**] | Specifies whether to exclude the group sharing settings from the response. | (optional) defaults to undefined|
| **count** | [**number**] | The number of groups to retrieve in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index from which to begin retrieving groups with their sharing settings. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used as a filter for retrieving groups with their sharing settings. | (optional) defaults to undefined|


### Return type

**GroupArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new GroupSearchApi(configuration);

let id: number; //The group ID. (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the group sharing settings from the response. (optional) (default to undefined)
let count: number; //The number of groups to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index from which to begin retrieving groups with their sharing settings. (optional) (default to undefined)
let filterValue: string; //The text used as a filter for retrieving groups with their sharing settings. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithRoomsShared(
    id,
    excludeShared,
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
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

