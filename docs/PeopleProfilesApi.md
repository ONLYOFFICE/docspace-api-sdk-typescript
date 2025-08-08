# ProfilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMember**](#addmember) | **POST** /api/2.0/people | Add a user|
|[**deleteMember**](#deletemember) | **DELETE** /api/2.0/people/{userid} | Delete a user|
|[**deleteProfile**](#deleteprofile) | **DELETE** /api/2.0/people/@self | Delete my profile|
|[**getAllProfiles**](#getallprofiles) | **GET** /api/2.0/people | Get profiles|
|[**getClaims**](#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.|
|[**getProfileByEmail**](#getprofilebyemail) | **GET** /api/2.0/people/email | Get a profile by user email|
|[**getProfileByUserId**](#getprofilebyuserid) | **GET** /api/2.0/people/{userid} | Get a profile by user name|
|[**getSelfProfile**](#getselfprofile) | **GET** /api/2.0/people/@self | Get my profile|
|[**inviteUsers**](#inviteusers) | **POST** /api/2.0/people/invite | Invite users|
|[**removeUsers**](#removeusers) | **PUT** /api/2.0/people/delete | Delete users|
|[**resendUserInvites**](#resenduserinvites) | **PUT** /api/2.0/people/invite | Resend activation emails|
|[**sendEmailChangeInstructions**](#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email|
|[**updateMember**](#updatemember) | **PUT** /api/2.0/people/{userid} | Update a user|
|[**updateMemberCulture**](#updatememberculture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code|

# **addMember**
> EmployeeFullWrapper addMember()

Adds a new portal user with the first name, last name, email address, and several optional parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-member/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberRequestDto** | **MemberRequestDto**|  | |


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    MemberRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let memberRequestDto: MemberRequestDto; // (optional)

const { status, data } = await apiInstance.addMember(
    memberRequestDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.deleteMember(
    userid
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-profile/).

### Parameters
This endpoint does not have any parameters.


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.deleteProfile();
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all-profiles/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fields** | **string**| Comma-separated list of fields to include in the response | |
| **count** | [**number**] | The maximum number of items to be retrieved in the response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The zero-based index of the first item to be retrieved in a filtered result set. | (optional) defaults to undefined|
| **filterBy** | [**string**] | Specifies the filter criteria for user-related queries. | (optional) defaults to undefined|
| **sortBy** | [**string**] | Specifies the property or field name by which the results should be sorted. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The order in which the results are sorted. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | The character or string used to separate multiple filter values in a filtering query. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text value used as an additional filter criterion for profiles retrieval. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let count: number; //The maximum number of items to be retrieved in the response. (optional) (default to undefined)
let startIndex: number; //The zero-based index of the first item to be retrieved in a filtered result set. (optional) (default to undefined)
let filterBy: string; //Specifies the filter criteria for user-related queries. (optional) (default to undefined)
let sortBy: string; //Specifies the property or field name by which the results should be sorted. (optional) (default to undefined)
let sortOrder: SortOrder; //The order in which the results are sorted. (optional) (default to undefined)
let filterSeparator: string; //The character or string used to separate multiple filter values in a filtering query. (optional) (default to undefined)
let filterValue: string; //The text value used as an additional filter criterion for profiles retrieval. (optional) (default to undefined)
let fields: string; //Comma-separated list of fields to include in the response (optional)

const { status, data } = await apiInstance.getAllProfiles(
    count,
    startIndex,
    filterBy,
    sortBy,
    sortOrder,
    filterSeparator,
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
|**200** | List of users with the detailed information |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClaims**
> ObjectWrapper getClaims()

Returns the user claims.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-claims/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.getClaims();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Claims |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProfileByEmail**
> EmployeeFullWrapper getProfileByEmail()

Returns the detailed information about a profile of the user with the email specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-email/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | The user email address. | (optional) defaults to undefined|
| **culture** | [**string**] | Culture | (optional) defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let email: string; //The user email address. (optional) (default to undefined)
let culture: string; //Culture (optional) (default to undefined)

const { status, data } = await apiInstance.getProfileByEmail(
    email,
    culture
);
```

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

# **getProfileByUserId**
> EmployeeFullWrapper getProfileByUserId()

Returns the detailed information about a profile of the user with the name specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-profile-by-user-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)

const { status, data } = await apiInstance.getProfileByUserId(
    userid
);
```

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

# **getSelfProfile**
> EmployeeFullWrapper getSelfProfile()

Returns the detailed information about the current user profile.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-self-profile/).

### Parameters
This endpoint does not have any parameters.


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

const { status, data } = await apiInstance.getSelfProfile();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed information about my profile |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteUsers**
> EmployeeArrayWrapper inviteUsers()

Invites users specified in the request to the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/invite-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteUsersRequestDto** | **InviteUsersRequestDto**|  | |


### Return type

**EmployeeArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    InviteUsersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let inviteUsersRequestDto: InviteUsersRequestDto; // (optional)

const { status, data } = await apiInstance.inviteUsers(
    inviteUsersRequestDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-users/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**|  | |


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMembersRequestDto: UpdateMembersRequestDto; // (optional)

const { status, data } = await apiInstance.removeUsers(
    updateMembersRequestDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-user-invites/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**|  | |


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMembersRequestDto: UpdateMembersRequestDto; // (optional)

const { status, data } = await apiInstance.resendUserInvites(
    updateMembersRequestDto
);
```

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

# **sendEmailChangeInstructions**
> StringWrapper sendEmailChangeInstructions()

Sends a message to the user email with the instructions to change the email address connected to the portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRequestDto** | **UpdateMemberRequestDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMemberRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let updateMemberRequestDto: UpdateMemberRequestDto; // (optional)

const { status, data } = await apiInstance.sendEmailChangeInstructions(
    updateMemberRequestDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRequestDto** | **UpdateMemberRequestDto**| The request parameters for updating the user information. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    UpdateMemberRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)
let updateMemberRequestDto: UpdateMemberRequestDto; //The request parameters for updating the user information. (optional)

const { status, data } = await apiInstance.updateMember(
    userid,
    updateMemberRequestDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-culture/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **culture** | **Culture**| The culture code parameters. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleProfilesApi,
    Configuration,
    Culture
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleProfilesApi(configuration);

let userid: string; //The user ID. (default to undefined)
let culture: Culture; //The culture code parameters. (optional)

const { status, data } = await apiInstance.updateMemberCulture(
    userid,
    culture
);
```

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

