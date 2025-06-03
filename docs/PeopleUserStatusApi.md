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

const { status, data } = await apiInstance.getByStatus(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **EmployeeStatus** | The user status. | defaults to undefined|


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

