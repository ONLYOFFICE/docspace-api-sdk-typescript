# EmailApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeUserEmail**](#changeuseremail) | **PUT** /api/2.0/people/{userid}/email | Change a user email|
|[**sendEmailChangeInstructions**](#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email|

# **changeUserEmail**
> EmployeeFullWrapper changeUserEmail(changeEmailRequest)

Sets a new email to the user with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-email/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeEmailRequest** | **ChangeEmailRequest**| The request parameters for updating a user email. | |
| **userid** | [**string**] | The user ID. | defaults to undefined|


### Return type

**EmployeeFullWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleEmailApi,
    Configuration,
    ChangeEmailRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleEmailApi(configuration);

let userid: string; //The user ID. (default to undefined)
let changeEmailRequest: ChangeEmailRequest; //The request parameters for updating a user email.

const { status, data } = await apiInstance.changeUserEmail(
    userid,
    changeEmailRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Detailed user information |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | Incorrect userId or email |  -  |
|**403** | The link is invalid or no permissions to perform this action |  -  |
|**404** | The user could not be found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

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
    PeopleEmailApi,
    Configuration,
    UpdateMemberRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleEmailApi(configuration);

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
|**200** | Message text |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | Incorrect userId or email |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | User not found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

