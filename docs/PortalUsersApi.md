# UsersApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInvitationLink**](#getinvitationlink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link|
|[**getPortalUsersCount**](#getportaluserscount) | **GET** /api/2.0/portal/userscount | Get a number of portal users|
|[**getUserById**](#getuserbyid) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID|
|[**markGiftMessageAsRead**](#markgiftmessageasread) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read|
|[**sendCongratulations**](#sendcongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations|

# **getInvitationLink**
> StringWrapper getInvitationLink()

Returns an invitation link for joining the portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeType** | **EmployeeType** | The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User). | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let employeeType: EmployeeType; //The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User). (default to undefined)

const { status, data } = await apiInstance.getInvitationLink(
    employeeType
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invitation link |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalUsersCount**
> Int64Wrapper getPortalUsersCount()

Returns a number of portal users.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Int64Wrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

const { status, data } = await apiInstance.getPortalUsersCount();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Number of portal users |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserById**
> UserInfoWrapper getUserById()

Returns a user with the ID specified in the request from the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**string**] | The user ID extracted from the route parameters. | defaults to undefined|


### Return type

**UserInfoWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let userID: string; //The user ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.getUserById(
    userID
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markGiftMessageAsRead**
> markGiftMessageAsRead()

Marks a gift message as read.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

const { status, data } = await apiInstance.markGiftMessageAsRead();
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID to receive the congratulatory message. | (optional) defaults to undefined|
| **key** | [**string**] | The template identifier or email configuration key. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### Example

```typescript
import {
    PortalUsersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalUsersApi(configuration);

let userid: string; //The user ID to receive the congratulatory message. (optional) (default to undefined)
let key: string; //The template identifier or email configuration key. (optional) (default to undefined)

const { status, data } = await apiInstance.sendCongratulations(
    userid,
    key
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

