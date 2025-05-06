# PortalUsersApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**geInviteLink**](#geinvitelink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link|
|[**getUser**](#getuser) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID|
|[**getUsersCount**](#getuserscount) | **GET** /api/2.0/portal/userscount | Get a number of portal users|
|[**markPresentAsReaded**](#markpresentasreaded) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read|
|[**sendCongratulations**](#sendcongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations|

# **geInviteLink**
> StringWrapper geInviteLink()

Returns an invitation link for joining the portal.

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let employeeType: EmployeeType; //The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User). (default to undefined)

const { status, data } = await apiInstance.geInviteLink(
    employeeType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeType** | **EmployeeType** | The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User). | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invitation link |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUser**
> UserInfoWrapper getUser()

Returns a user with the ID specified in the request from the current portal.

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let userID: string; //The user ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.getUser(
    userID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**string**] | The user ID extracted from the route parameters. | defaults to undefined|


### Return type

**UserInfoWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersCount**
> Int64Wrapper getUsersCount()

Returns a number of portal users.

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

const { status, data } = await apiInstance.getUsersCount();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Int64Wrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Number of portal users |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markPresentAsReaded**
> markPresentAsReaded()

Marks a gift message as read.

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

const { status, data } = await apiInstance.markPresentAsReaded();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendCongratulations**
> sendCongratulations()

Sends congratulations to the user after registering a portal.

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let userid: string; //The user ID to receive the congratulatory message. (optional) (default to undefined)
let key: string; //The template identifier or email configuration key. (optional) (default to undefined)

const { status, data } = await apiInstance.sendCongratulations(
    userid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID to receive the congratulatory message. | (optional) defaults to undefined|
| **key** | [**string**] | The template identifier or email configuration key. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

