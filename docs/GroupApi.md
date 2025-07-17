# GroupApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addGroup**](#addgroup) | **POST** /api/2.0/group | Add a new group|
|[**addMembersTo**](#addmembersto) | **PUT** /api/2.0/group/{id}/members | Add group members|
|[**deleteGroup**](#deletegroup) | **DELETE** /api/2.0/group/{id} | Delete a group|
|[**getGroup**](#getgroup) | **GET** /api/2.0/group/{id} | Get a group|
|[**getGroupByUserId**](#getgroupbyuserid) | **GET** /api/2.0/group/user/{userid} | Get user groups|
|[**getGroups**](#getgroups) | **GET** /api/2.0/group | Get groups|
|[**moveMembersTo**](#movemembersto) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Move group members|
|[**removeMembersFrom**](#removemembersfrom) | **DELETE** /api/2.0/group/{id}/members | Remove group members|
|[**setGroupManager**](#setgroupmanager) | **PUT** /api/2.0/group/{id}/manager | Set a group manager|
|[**setMembersTo**](#setmembersto) | **POST** /api/2.0/group/{id}/members | Replace group members|
|[**updateGroup**](#updategroup) | **PUT** /api/2.0/group/{id} | Update a group|

# **addGroup**
> GroupWrapper addGroup()

Adds a new group with the group manager, name, and members specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-group/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupRequestDto** | **GroupRequestDto**|  | |


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupRequestDto: GroupRequestDto; // (optional)

const { status, data } = await apiInstance.addGroup(
    groupRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newly created group with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addMembersTo**
> GroupWrapper addMembersTo()

Adds new group members to the group with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-members-to/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membersRequest** | **MembersRequest**| The member request. | |
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    MembersRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let membersRequest: MembersRequest; //The member request. (optional)

const { status, data } = await apiInstance.addMembersTo(
    id,
    membersRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroup**
> NoContentResultWrapper deleteGroup()

Deletes a group with the ID specified in the request from the list of groups on the portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-group/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**NoContentResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No content |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroup**
> GroupWrapper getGroup()

Returns the detailed information about the selected group.   **Note**: This method returns full group information.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The group ID. | defaults to undefined|
| **includeMembers** | [**boolean**] | Specifies whether to include the group members or not. | (optional) defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let includeMembers: boolean; //Specifies whether to include the group members or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getGroup(
    id,
    includeMembers
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupByUserId**
> GroupSummaryArrayWrapper getGroupByUserId()

Returns a list of groups for the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-group-by-user-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**GroupSummaryArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getGroupByUserId(
    userid
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of groups |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroups**
> GroupArrayWrapper getGroups()

Returns the general information about all the groups, such as group ID and group manager.   **Note**: This method returns partial group information.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fields** | **string**| Comma-separated list of fields to include in the response | |
| **userId** | [**string**] | The user ID. | (optional) defaults to undefined|
| **manager** | [**boolean**] | Specifies if the user is a manager or not. | (optional) defaults to undefined|
| **count** | [**number**] | The number of records to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for paginated results. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the property used to sort the query results. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text used for filtering or searching group data. | (optional) defaults to undefined|


### Return type

**GroupArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let userId: string; //The user ID. (optional) (default to undefined)
let manager: boolean; //Specifies if the user is a manager or not. (optional) (default to undefined)
let count: number; //The number of records to retrieve. (optional) (default to undefined)
let startIndex: number; //The starting index for paginated results. (optional) (default to undefined)
let sortBy: string; //Specifies the property used to sort the query results. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterValue: string; //The text used for filtering or searching group data. (optional) (default to undefined)
let fields: string; //Comma-separated list of fields to include in the response (optional)

const { status, data } = await apiInstance.getGroups(
    userId,
    manager,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterValue,
    fields
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of groups |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveMembersTo**
> GroupWrapper moveMembersTo()

Moves all the members from the selected group to another one specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/move-members-to/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromId** | [**string**] | The group ID to move from. | defaults to undefined|
| **toId** | [**string**] | The group ID to move to. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let fromId: string; //The group ID to move from. (default to undefined)
let toId: string; //The group ID to move to. (default to undefined)

const { status, data } = await apiInstance.moveMembersTo(
    fromId,
    toId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeMembersFrom**
> GroupWrapper removeMembersFrom()

Removes the group members specified in the request from the selected group.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-members-from/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membersRequest** | **MembersRequest**| The member request. | |
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    MembersRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let membersRequest: MembersRequest; //The member request. (optional)

const { status, data } = await apiInstance.removeMembersFrom(
    id,
    membersRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setGroupManager**
> GroupWrapper setGroupManager()

Sets a user with the ID specified in the request as a group manager.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-group-manager/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setManagerRequest** | **SetManagerRequest**| The request for setting a group manager. | |
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    SetManagerRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let setManagerRequest: SetManagerRequest; //The request for setting a group manager. (optional)

const { status, data } = await apiInstance.setGroupManager(
    id,
    setManagerRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setMembersTo**
> GroupWrapper setMembersTo()

Replaces the group members with those specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-members-to/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membersRequest** | **MembersRequest**| The member request. | |
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    MembersRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let membersRequest: MembersRequest; //The member request. (optional)

const { status, data } = await apiInstance.setMembersTo(
    id,
    membersRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Group with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroup**
> GroupWrapper updateGroup()

Updates the existing group changing the group manager, name, and/or members.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-group/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupRequest** | **UpdateGroupRequest**| The request for updating a group. | |
| **id** | [**string**] | The group ID. | defaults to undefined|


### Return type

**GroupWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    GroupApi,
    Configuration,
    UpdateGroupRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let id: string; //The group ID. (default to undefined)
let updateGroupRequest: UpdateGroupRequest; //The request for updating a group. (optional)

const { status, data } = await apiInstance.updateGroup(
    id,
    updateGroupRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated group with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

