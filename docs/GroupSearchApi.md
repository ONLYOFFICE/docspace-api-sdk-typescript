# SearchApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGroupsWithFilesShared**](#getgroupswithfilesshared) | **GET** /api/2.0/group/file/{id} | Search groups for a file|
|[**getGroupsWithFilesSharedThirdParty**](#getgroupswithfilessharedthirdparty) | **GET** /api/2.0/group/file/{id} | Search groups for a file (third-party storage)|
|[**getGroupsWithFoldersShared**](#getgroupswithfoldersshared) | **GET** /api/2.0/group/folder/{id} | Search groups for a folder|
|[**getGroupsWithFoldersSharedThirdParty**](#getgroupswithfolderssharedthirdparty) | **GET** /api/2.0/group/folder/{id} | Search groups for a folder (third-party storage)|
|[**getGroupsWithRoomsShared**](#getgroupswithroomsshared) | **GET** /api/2.0/group/room/{id} | Search groups for a room|
|[**getGroupsWithRoomsSharedThirdParty**](#getgroupswithroomssharedthirdparty) | **GET** /api/2.0/group/room/{id} | Search groups for a room (third-party storage)|

# **getGroupsWithFilesShared**
> GroupArrayWrapper getGroupsWithFilesShared()

Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: number; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

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
|**200** | The matching groups, each with its access state for the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No file has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithFilesSharedThirdParty**
> GroupArrayWrapper getGroupsWithFilesSharedThirdParty()

Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: string; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithFilesSharedThirdParty(
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
|**200** | The matching groups, each with its access state for the file |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No file has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithFoldersShared**
> GroupArrayWrapper getGroupsWithFoldersShared()

Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: number; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

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
|**200** | The matching groups, each with its access state for the folder |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No folder has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithFoldersSharedThirdParty**
> GroupArrayWrapper getGroupsWithFoldersSharedThirdParty()

Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: string; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithFoldersSharedThirdParty(
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
|**200** | The matching groups, each with its access state for the folder |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No folder has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithRoomsShared**
> GroupArrayWrapper getGroupsWithRoomsShared()

Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: number; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

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
|**200** | The matching groups, each with its access state for the room |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No room has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupsWithRoomsSharedThirdParty**
> GroupArrayWrapper getGroupsWithRoomsSharedThirdParty()

Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared-third-party/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. | defaults to undefined|
| **excludeShared** | [**boolean**] | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the group name. Omit it to get every group the caller may grant access to. | (optional) defaults to undefined|


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

let id: string; //The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage. (default to undefined)
let excludeShared: boolean; //Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response. (optional) (default to undefined)
let filterValue: string; //The text to match against the group name. Omit it to get every group the caller may grant access to. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsWithRoomsSharedThirdParty(
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
|**200** | The matching groups, each with its access state for the room |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | No permissions to perform this action |  -  |
|**404** | No room has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

