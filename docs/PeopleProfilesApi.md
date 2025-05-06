# PeopleProfilesApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMember**](#addmember) | **POST** /api/2.0/people | Add a user|
|[**deleteMember**](#deletemember) | **DELETE** /api/2.0/people/{userid} | Delete a user|
|[**deleteProfile**](#deleteprofile) | **DELETE** /api/2.0/people/@self | Delete my profile|
|[**getAllProfiles**](#getallprofiles) | **GET** /api/2.0/people | Get profiles|
|[**getByEmail**](#getbyemail) | **GET** /api/2.0/people/email | Get a profile by user email|
|[**getById**](#getbyid) | **GET** /api/2.0/people/{userid} | Get a profile by user name|
|[**getClaims**](#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.|
|[**inviteUsers**](#inviteusers) | **POST** /api/2.0/people/invite | Invite users|
|[**removeUsers**](#removeusers) | **PUT** /api/2.0/people/delete | Delete users|
|[**resendUserInvites**](#resenduserinvites) | **PUT** /api/2.0/people/invite | Resend activation emails|
|[**self**](#self) | **GET** /api/2.0/people/@self | Get my profile|
|[**sendEmailChangeInstructions**](#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email|
|[**updateMember**](#updatemember) | **PUT** /api/2.0/people/{userid} | Update a user|
|[**updateMemberCulture**](#updatememberculture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code|

# **addMember**
> EmployeeFullWrapper addMember()

Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    MemberRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let memberRequestDto: MemberRequestDto; // (optional)

const { status, data } = await apiInstance.addMember(
    memberRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberRequestDto** | **MemberRequestDto**|  | |


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Newly added user with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | The invitation link is invalid or its validity has expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMember**
> EmployeeFullWrapper deleteMember()

Deletes a user with the ID specified in the request from the portal.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.deleteMember(
    userid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted user detailed information |  -  |
|**400** | The user is not suspended |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProfile**
> EmployeeFullWrapper deleteProfile()

Deletes the current user profile.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.deleteProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed information about my profile |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllProfiles**
> EmployeeFullArrayWrapper getAllProfiles()

Returns a list of profiles for all the portal users.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.getAllProfiles();
```

### Parameters
This endpoint does not have any parameters.


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

# **getByEmail**
> EmployeeFullWrapper getByEmail()

Returns the detailed information about a profile of the user with the email specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let email: string; //The user email address. (optional) (default to undefined)

const { status, data } = await apiInstance.getByEmail(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | The user email address. | (optional) defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed profile information |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getById**
> EmployeeFullWrapper getById()

Returns the detailed information about a profile of the user with the name specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getById(
    userid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed profile information |  -  |
|**400** | Incorect UserId |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClaims**
> ObjectWrapper getClaims()

Returns the user claims.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.getClaims();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Claims |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteUsers**
> EmployeeArrayWrapper inviteUsers()

Invites users specified in the request to the current portal.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    InviteUsersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let inviteUsersRequestDto: InviteUsersRequestDto; // (optional)

const { status, data } = await apiInstance.inviteUsers(
    inviteUsersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteUsersRequestDto** | **InviteUsersRequestDto**|  | |


### Return type

**EmployeeArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeUsers**
> EmployeeFullArrayWrapper removeUsers()

Deletes a list of the users with the IDs specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMembersRequestDto: UpdateMembersRequestDto; // (optional)

const { status, data } = await apiInstance.removeUsers(
    updateMembersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**|  | |


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
|**409** | Data reassign process is not complete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendUserInvites**
> EmployeeFullArrayWrapper resendUserInvites()

Resends emails to the users who have not activated their emails.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMembersRequestDto: UpdateMembersRequestDto; // (optional)

const { status, data } = await apiInstance.resendUserInvites(
    updateMembersRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**|  | |


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
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self**
> EmployeeFullWrapper self()

Returns the detailed information about the current user profile.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.self();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed information about my profile |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEmailChangeInstructions**
> StringWrapper sendEmailChangeInstructions()

Sends a message to the user email with the instructions to change the email address connected to the portal.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMemberRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMemberRequestDto: UpdateMemberRequestDto; // (optional)

const { status, data } = await apiInstance.sendEmailChangeInstructions(
    updateMemberRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRequestDto** | **UpdateMemberRequestDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message text |  -  |
|**400** | Incorrect userId or email |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMember**
> EmployeeFullWrapper updateMember()

Updates the data for the selected portal user with the first name, last name, email address, and/or optional parameters specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMemberRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)
let updateMemberRequestDto: UpdateMemberRequestDto; //The request parameters for updating the user information. (optional)

const { status, data } = await apiInstance.updateMember(
    userid,
    updateMemberRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRequestDto** | **UpdateMemberRequestDto**| The request parameters for updating the user information. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated user with the detailed information |  -  |
|**400** | Incorrect user name |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMemberCulture**
> EmployeeFullWrapper updateMemberCulture()

Updates the user culture code with the parameters specified in the request.

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    Culture
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)
let culture: Culture; //The culture code parameters. (optional)

const { status, data } = await apiInstance.updateMemberCulture(
    userid,
    culture
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **culture** | **Culture**| The culture code parameters. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed user information |  -  |
|**401** | Unauthorized |  -  |
|**403** | You don\&#39;t have enough permission to perform the operation |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

