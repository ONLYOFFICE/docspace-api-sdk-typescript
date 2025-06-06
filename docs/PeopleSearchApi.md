# PeopleSearchApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountsEntriesWithShared**](#getaccountsentrieswithshared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries|
|[**getSearch**](#getsearch) | **GET** /api/2.0/people/@search/{query} | Search users|
|[**getSimpleByFilter**](#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter|
|[**getUsersWithRoomShared**](#getuserswithroomshared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings|
|[**searchUsersByExtendedFilter**](#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter|
|[**searchUsersByQuery**](#searchusersbyquery) | **GET** /api/2.0/people/search | Search users (using query parameters)|
|[**searchUsersByStatus**](#searchusersbystatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter|

# **getAccountsEntriesWithShared**
> ObjectArrayWrapper getAccountsEntriesWithShared()

Returns the account entries with their sharing settings.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let id: number; //The user ID. (default to undefined)
let employeeStatus: EmployeeStatus; //The user status. (optional) (default to undefined)
let activationStatus: EmployeeActivationStatus; //The user activation status. (optional) (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the account sharing settings from the response. (optional) (default to undefined)
let includeShared: boolean; //Specifies whether to include the account sharing settings in the response. (optional) (default to undefined)
let invitedByMe: boolean; //Specifies whether the user is invited by the current user or not. (optional) (default to undefined)
let inviterId: string; //The inviter ID. (optional) (default to undefined)
let area: Area; //The area of the account entries. (optional) (default to undefined)
let employeeTypes: Array<EmployeeType>; //The list of the user types. (optional) (default to undefined)
let count: number; //The number of items to retrieve in a request. (optional) (default to undefined)
let startIndex: number; //The starting index for the query results. (optional) (default to undefined)
let filterSeparator: string; //Specifies the separator used in filter expressions. (optional) (default to undefined)
let filterValue: string; //The text filter applied to the accounts search query. (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountsEntriesWithShared(
    id,
    employeeStatus,
    activationStatus,
    excludeShared,
    includeShared,
    invitedByMe,
    inviterId,
    area,
    employeeTypes,
    count,
    startIndex,
    filterSeparator,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The user ID. | defaults to undefined|
| **employeeStatus** | **EmployeeStatus** | The user status. | (optional) defaults to undefined|
| **activationStatus** | **EmployeeActivationStatus** | The user activation status. | (optional) defaults to undefined|
| **excludeShared** | [**boolean**] | Specifies whether to exclude the account sharing settings from the response. | (optional) defaults to undefined|
| **includeShared** | [**boolean**] | Specifies whether to include the account sharing settings in the response. | (optional) defaults to undefined|
| **invitedByMe** | [**boolean**] | Specifies whether the user is invited by the current user or not. | (optional) defaults to undefined|
| **inviterId** | [**string**] | The inviter ID. | (optional) defaults to undefined|
| **area** | **Area** | The area of the account entries. | (optional) defaults to undefined|
| **employeeTypes** | **Array&lt;EmployeeType&gt;** | The list of the user types. | (optional) defaults to undefined|
| **count** | [**number**] | The number of items to retrieve in a request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for the query results. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | Specifies the separator used in filter expressions. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text filter applied to the accounts search query. | (optional) defaults to undefined|


### Return type

**ObjectArrayWrapper**

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

# **getSearch**
> EmployeeFullArrayWrapper getSearch()

Returns a list of users matching the search query.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let query: string; //The search query. (default to undefined)
let filterBy: string; //Specifies a filter criteria for the user search query. (optional) (default to undefined)
let filterValue: string; //The value used for filtering users, allowing additional constraints for the query. (optional) (default to undefined)

const { status, data } = await apiInstance.getSearch(
    query,
    filterBy,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | The search query. | defaults to undefined|
| **filterBy** | [**string**] | Specifies a filter criteria for the user search query. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The value used for filtering users, allowing additional constraints for the query. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSimpleByFilter**
> EmployeeArrayWrapper getSimpleByFilter()

Returns a list of users matching the parameters specified in the request.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let employeeStatus: EmployeeStatus; //The user status. (optional) (default to undefined)
let groupId: string; //The group ID. (optional) (default to undefined)
let activationStatus: EmployeeActivationStatus; //The user activation status. (optional) (default to undefined)
let employeeType: EmployeeType; //The user type. (optional) (default to undefined)
let employeeTypes: Array<0 | 1 | 2 | 3 | 4>; //The list of user types. (optional) (default to undefined)
let isAdministrator: boolean; //Specifies if the user is an administrator or not. (optional) (default to undefined)
let payments: Payments; //The user payment status. (optional) (default to undefined)
let accountLoginType: AccountLoginType; //The account login type. (optional) (default to undefined)
let quotaFilter: QuotaFilter; //The quota filter (All - 0, Default - 1, Custom - 2). (optional) (default to undefined)
let withoutGroup: boolean; //Specifies whether the user should be a member of a group or not. (optional) (default to undefined)
let excludeGroup: boolean; //Specifies whether the user should be a member of the group with the specified ID. (optional) (default to undefined)
let invitedByMe: boolean; //Specifies whether the user is invited by the current user or not. (optional) (default to undefined)
let inviterId: string; //The inviter ID. (optional) (default to undefined)
let area: Area; //The filter area. (optional) (default to undefined)
let count: number; //The maximum number of items to be retrieved in the response. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to be retrieved in a filtered result set. (optional) (default to undefined)
let sortBy: string; //Specifies the property or field name by which the results should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterSeparator: string; //Represents the separator used to split filter criteria in query parameters. (optional) (default to undefined)
let filterValue: string; //The search text used to filter results based on user input. (optional) (default to undefined)

const { status, data } = await apiInstance.getSimpleByFilter(
    employeeStatus,
    groupId,
    activationStatus,
    employeeType,
    employeeTypes,
    isAdministrator,
    payments,
    accountLoginType,
    quotaFilter,
    withoutGroup,
    excludeGroup,
    invitedByMe,
    inviterId,
    area,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterSeparator,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeStatus** | **EmployeeStatus** | The user status. | (optional) defaults to undefined|
| **groupId** | [**string**] | The group ID. | (optional) defaults to undefined|
| **activationStatus** | **EmployeeActivationStatus** | The user activation status. | (optional) defaults to undefined|
| **employeeType** | **EmployeeType** | The user type. | (optional) defaults to undefined|
| **employeeTypes** | **Array<0 &#124; 1 &#124; 2 &#124; 3 &#124; 4>** | The list of user types. | (optional) defaults to undefined|
| **isAdministrator** | [**boolean**] | Specifies if the user is an administrator or not. | (optional) defaults to undefined|
| **payments** | **Payments** | The user payment status. | (optional) defaults to undefined|
| **accountLoginType** | **AccountLoginType** | The account login type. | (optional) defaults to undefined|
| **quotaFilter** | **QuotaFilter** | The quota filter (All - 0, Default - 1, Custom - 2). | (optional) defaults to undefined|
| **withoutGroup** | [**boolean**] | Specifies whether the user should be a member of a group or not. | (optional) defaults to undefined|
| **excludeGroup** | [**boolean**] | Specifies whether the user should be a member of the group with the specified ID. | (optional) defaults to undefined|
| **invitedByMe** | [**boolean**] | Specifies whether the user is invited by the current user or not. | (optional) defaults to undefined|
| **inviterId** | [**string**] | The inviter ID. | (optional) defaults to undefined|
| **area** | **Area** | The filter area. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to be retrieved in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to be retrieved in a filtered result set. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the property or field name by which the results should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | Represents the separator used to split filter criteria in query parameters. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The search text used to filter results based on user input. | (optional) defaults to undefined|


### Return type

**EmployeeArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersWithRoomShared**
> EmployeeFullArrayWrapper getUsersWithRoomShared()

Returns the users with the sharing settings in a room with the ID specified in request.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let id: number; //The user ID. (default to undefined)
let employeeStatus: EmployeeStatus; //The user status. (optional) (default to undefined)
let activationStatus: EmployeeActivationStatus; //The user activation status. (optional) (default to undefined)
let excludeShared: boolean; //Specifies whether to exclude the user sharing settings or not. (optional) (default to undefined)
let includeShared: boolean; //Specifies whether to include the user sharing settings or not. (optional) (default to undefined)
let invitedByMe: boolean; //Specifies whether the user was invited by the current user or not. (optional) (default to undefined)
let inviterId: string; //The inviter ID. (optional) (default to undefined)
let area: Area; //The user area. (optional) (default to undefined)
let employeeTypes: Array<EmployeeType>; //The list of user types. (optional) (default to undefined)
let count: number; //The maximum number of users to be retrieved in the request. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first record to retrieve in a paged query. (optional) (default to undefined)
let filterSeparator: string; //The character or string used to separate multiple filter values in a filtering query. (optional) (default to undefined)
let filterValue: string; //The filter text value used for searching or filtering user results. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersWithRoomShared(
    id,
    employeeStatus,
    activationStatus,
    excludeShared,
    includeShared,
    invitedByMe,
    inviterId,
    area,
    employeeTypes,
    count,
    startIndex,
    filterSeparator,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The user ID. | defaults to undefined|
| **employeeStatus** | **EmployeeStatus** | The user status. | (optional) defaults to undefined|
| **activationStatus** | **EmployeeActivationStatus** | The user activation status. | (optional) defaults to undefined|
| **excludeShared** | [**boolean**] | Specifies whether to exclude the user sharing settings or not. | (optional) defaults to undefined|
| **includeShared** | [**boolean**] | Specifies whether to include the user sharing settings or not. | (optional) defaults to undefined|
| **invitedByMe** | [**boolean**] | Specifies whether the user was invited by the current user or not. | (optional) defaults to undefined|
| **inviterId** | [**string**] | The inviter ID. | (optional) defaults to undefined|
| **area** | **Area** | The user area. | (optional) defaults to undefined|
| **employeeTypes** | **Array&lt;EmployeeType&gt;** | The list of user types. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of users to be retrieved in the request. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first record to retrieve in a paged query. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | The character or string used to separate multiple filter values in a filtering query. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The filter text value used for searching or filtering user results. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

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

# **searchUsersByExtendedFilter**
> EmployeeFullArrayWrapper searchUsersByExtendedFilter()

Returns a list of users with full information about them matching the parameters specified in the request.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let employeeStatus: EmployeeStatus; //The user status. (optional) (default to undefined)
let groupId: string; //The group ID. (optional) (default to undefined)
let activationStatus: EmployeeActivationStatus; //The user activation status. (optional) (default to undefined)
let employeeType: EmployeeType; //The user type. (optional) (default to undefined)
let employeeTypes: Array<0 | 1 | 2 | 3 | 4>; //The list of user types. (optional) (default to undefined)
let isAdministrator: boolean; //Specifies if the user is an administrator or not. (optional) (default to undefined)
let payments: Payments; //The user payment status. (optional) (default to undefined)
let accountLoginType: AccountLoginType; //The account login type. (optional) (default to undefined)
let quotaFilter: QuotaFilter; //The quota filter (All - 0, Default - 1, Custom - 2). (optional) (default to undefined)
let withoutGroup: boolean; //Specifies whether the user should be a member of a group or not. (optional) (default to undefined)
let excludeGroup: boolean; //Specifies whether the user should be a member of the group with the specified ID. (optional) (default to undefined)
let invitedByMe: boolean; //Specifies whether the user is invited by the current user or not. (optional) (default to undefined)
let inviterId: string; //The inviter ID. (optional) (default to undefined)
let area: Area; //The filter area. (optional) (default to undefined)
let count: number; //The maximum number of items to be retrieved in the response. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to be retrieved in a filtered result set. (optional) (default to undefined)
let sortBy: string; //Specifies the property or field name by which the results should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterSeparator: string; //Represents the separator used to split filter criteria in query parameters. (optional) (default to undefined)
let filterValue: string; //The search text used to filter results based on user input. (optional) (default to undefined)

const { status, data } = await apiInstance.searchUsersByExtendedFilter(
    employeeStatus,
    groupId,
    activationStatus,
    employeeType,
    employeeTypes,
    isAdministrator,
    payments,
    accountLoginType,
    quotaFilter,
    withoutGroup,
    excludeGroup,
    invitedByMe,
    inviterId,
    area,
    count,
    startIndex,
    sortBy,
    sortOrder,
    filterSeparator,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeStatus** | **EmployeeStatus** | The user status. | (optional) defaults to undefined|
| **groupId** | [**string**] | The group ID. | (optional) defaults to undefined|
| **activationStatus** | **EmployeeActivationStatus** | The user activation status. | (optional) defaults to undefined|
| **employeeType** | **EmployeeType** | The user type. | (optional) defaults to undefined|
| **employeeTypes** | **Array<0 &#124; 1 &#124; 2 &#124; 3 &#124; 4>** | The list of user types. | (optional) defaults to undefined|
| **isAdministrator** | [**boolean**] | Specifies if the user is an administrator or not. | (optional) defaults to undefined|
| **payments** | **Payments** | The user payment status. | (optional) defaults to undefined|
| **accountLoginType** | **AccountLoginType** | The account login type. | (optional) defaults to undefined|
| **quotaFilter** | **QuotaFilter** | The quota filter (All - 0, Default - 1, Custom - 2). | (optional) defaults to undefined|
| **withoutGroup** | [**boolean**] | Specifies whether the user should be a member of a group or not. | (optional) defaults to undefined|
| **excludeGroup** | [**boolean**] | Specifies whether the user should be a member of the group with the specified ID. | (optional) defaults to undefined|
| **invitedByMe** | [**boolean**] | Specifies whether the user is invited by the current user or not. | (optional) defaults to undefined|
| **inviterId** | [**string**] | The inviter ID. | (optional) defaults to undefined|
| **area** | **Area** | The filter area. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to be retrieved in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to be retrieved in a filtered result set. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the property or field name by which the results should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | Represents the separator used to split filter criteria in query parameters. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The search text used to filter results based on user input. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchUsersByQuery**
> EmployeeArrayWrapper searchUsersByQuery()

Returns a list of users matching the search query. This method uses the query parameters.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let query: string; //The search query. (optional) (default to undefined)

const { status, data } = await apiInstance.searchUsersByQuery(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | The search query. | (optional) defaults to undefined|


### Return type

**EmployeeArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchUsersByStatus**
> EmployeeFullArrayWrapper searchUsersByStatus()

Returns a list of users matching the status filter and search query.

### Example

```typescript
import {
    PeopleSearchApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleSearchApi(configuration);

let status: EmployeeStatus; //The user status. (default to undefined)
let query: string; //The advanced search query. (optional) (default to undefined)
let filterBy: string; //Specifies the criteria used to filter search results in advanced queries. (optional) (default to undefined)
let filterValue: string; //The value used to filter the search query. (optional) (default to undefined)

const { status, data } = await apiInstance.searchUsersByStatus(
    status,
    query,
    filterBy,
    filterValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **EmployeeStatus** | The user status. | defaults to undefined|
| **query** | [**string**] | The advanced search query. | (optional) defaults to undefined|
| **filterBy** | [**string**] | Specifies the criteria used to filter search results in advanced queries. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The value used to filter the search query. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

