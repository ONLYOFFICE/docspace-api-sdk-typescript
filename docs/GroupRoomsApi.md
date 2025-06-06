# GroupRoomsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGroupsWithShared**](#getgroupswithshared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings|

# **getGroupsWithShared**
> GroupArrayWrapper getGroupsWithShared()

Returns groups with their sharing settings.

### Example

```typescript
import {
    GroupRoomsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupRoomsApi(configuration);

let id: number; //The group ID. (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the group sharing settings from the response. (optional) (default to undefined)
let count: number; //The number of groups to retrieve in the request. (optional) (default to undefined)
let startIndex: number; //The starting index from which to begin retrieving groups with their sharing settings. (optional) (default to undefined)
let filterValue: string; //The text used as a filter for retrieving groups with their sharing settings. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithShared(
    id,
    excludeShared,
    count,
    startIndex,
    filterValue
);
```

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

