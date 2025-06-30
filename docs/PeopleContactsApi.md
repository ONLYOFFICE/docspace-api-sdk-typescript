# PeopleContactsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMemberContacts**](#deletemembercontacts) | **DELETE** /api/2.0/people/{userid}/contacts | Delete user contacts|
|[**setMemberContacts**](#setmembercontacts) | **POST** /api/2.0/people/{userid}/contacts | Set user contacts|
|[**updateMemberContacts**](#updatemembercontacts) | **PUT** /api/2.0/people/{userid}/contacts | Update user contacts|

# **deleteMemberContacts**
> EmployeeFullWrapper deleteMemberContacts()

Deletes the contacts of the user with the ID specified in the request from the portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-contacts/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactsRequest** | **ContactsRequest**| The contacts request. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleContactsApi,
    Configuration,
    ContactsRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleContactsApi(configuration);

let userid: string; //The user ID. (default to undefined)
let contactsRequest: ContactsRequest; //The contacts request. (optional)

const { status, data } = await apiInstance.deleteMemberContacts(
    userid,
    contactsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deleted user profile with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setMemberContacts**
> EmployeeFullWrapper setMemberContacts()

Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-member-contacts/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactsRequest** | **ContactsRequest**| The contacts request. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleContactsApi,
    Configuration,
    ContactsRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleContactsApi(configuration);

let userid: string; //The user ID. (default to undefined)
let contactsRequest: ContactsRequest; //The contacts request. (optional)

const { status, data } = await apiInstance.setMemberContacts(
    userid,
    contactsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated user profile with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMemberContacts**
> EmployeeFullWrapper updateMemberContacts()

Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-contacts/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactsRequest** | **ContactsRequest**| The contacts request. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleContactsApi,
    Configuration,
    ContactsRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleContactsApi(configuration);

let userid: string; //The user ID. (default to undefined)
let contactsRequest: ContactsRequest; //The contacts request. (optional)

const { status, data } = await apiInstance.updateMemberContacts(
    userid,
    contactsRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated user profile with the detailed information |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

