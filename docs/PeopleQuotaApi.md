# PeopleQuotaApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**resetUsersQuota**](#resetusersquota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit|
|[**updateUserQuota**](#updateuserquota) | **PUT** /api/2.0/people/userquota | Change a user quota limit|

# **resetUsersQuota**
> EmployeeFullArrayWrapper resetUsersQuota()

Resets a quota limit of users with the IDs specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-users-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersQuotaRequestDto** | **UpdateMembersQuotaRequestDto**|  | |


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleQuotaApi,
    Configuration,
    UpdateMembersQuotaRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleQuotaApi(configuration);

let updateMembersQuotaRequestDto: UpdateMembersQuotaRequestDto; // (optional)

const { status, data } = await apiInstance.resetUsersQuota(
    updateMembersQuotaRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User detailed information |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | The invitation link is invalid or its validity has expired |  -  |
|**409** | Conflict - system user quota cannot be reset |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserQuota**
> EmployeeFullArrayWrapper updateUserQuota()

Changes a quota limit for the users with the IDs specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersQuotaRequestDto** | **UpdateMembersQuotaRequestDto**|  | |


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleQuotaApi,
    Configuration,
    UpdateMembersQuotaRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleQuotaApi(configuration);

let updateMembersQuotaRequestDto: UpdateMembersQuotaRequestDto; // (optional)

const { status, data } = await apiInstance.updateUserQuota(
    updateMembersQuotaRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with the detailed information |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The entered quota value is invalid or greater than the total storage size |  -  |
|**403** | No permissions to perform this action |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

