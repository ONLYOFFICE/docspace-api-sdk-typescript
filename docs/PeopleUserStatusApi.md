# PeopleUserStatusApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByStatus**](#getbystatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status|
|[**updateUserActivationStatus**](#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users|
|[**updateUserStatus**](#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Change a user status|

# **getByStatus**
> EmployeeFullArrayWrapper getByStatus()

Returns a list of profiles filtered by the user status.

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let status: EmployeeStatus; //The user status. (default to undefined)
let filterBy: string; //Specifies the criteria used to filter the profiles in the request. (optional) (default to undefined)
let count: number; //The maximum number of user profiles to retrieve. (optional) (default to undefined)
let startIndex: number; //The starting index for retrieving data in a paginated request. (optional) (default to undefined)
let sortBy: string; //Specifies the property or field name by which the results should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterSeparator: string; //Represents the separator used to split multiple filter criteria in a query string. (optional) (default to undefined)
let filterValue: string; //A string value representing additional filter criteria used in query parameters. (optional) (default to undefined)

const { status, data } = await apiInstance.getByStatus(
    status,
    filterBy,
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
| **status** | **EmployeeStatus** | The user status. | defaults to undefined|
| **filterBy** | [**string**] | Specifies the criteria used to filter the profiles in the request. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of user profiles to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for retrieving data in a paginated request. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the property or field name by which the results should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | Represents the separator used to split multiple filter criteria in a query string. | (optional) defaults to undefined|
| **filterValue** | [**string**] | A string value representing additional filter criteria used in query parameters. | (optional) defaults to undefined|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserActivationStatus**
> EmployeeFullArrayWrapper updateUserActivationStatus()

Sets the required activation status to the list of users with the IDs specified in the request.

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let activationstatus: EmployeeActivationStatus; //The new user activation status. (default to undefined)
let updateMembersRequestDto: UpdateMembersRequestDto; //The request parameters for updating the user information. (optional)

const { status, data } = await apiInstance.updateUserActivationStatus(
    activationstatus,
    updateMembersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**| The request parameters for updating the user information. | |
| **activationstatus** | **EmployeeActivationStatus** | The new user activation status. | defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserStatus**
> EmployeeFullArrayWrapper updateUserStatus()

Changes a status of the users with the IDs specified in the request.

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let status: EmployeeStatus; //The new user status. (default to undefined)
let updateMembersRequestDto: UpdateMembersRequestDto; //The request parameters for updating the user information. (optional)

const { status, data } = await apiInstance.updateUserStatus(
    status,
    updateMembersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**| The request parameters for updating the user information. | |
| **status** | **EmployeeStatus** | The new user status. | defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

