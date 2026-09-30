# EmailApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeUserEmail**](#changeuseremail) | **PUT** /api/2.0/people/{userid}/email | Change a user email|
|[**sendEmailChangeInstructions**](#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email|

# **changeUserEmail**
> EmployeeFullWrapper changeUserEmail(changeEmailRequest)

Sets a new email address on an account, which is the step that completes an email change.  The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an  expired or already used token is answered with 401.  The account has to exist and be `Active`, and only the portal owner may change the owner\'s own address.  Pass the address either in plain text as `email` or, as it arrives inside the confirmation link, encrypted as  `encEmail`; an empty or malformed address answers 400.  An address equal to the current one is accepted and changes nothing, while a new one is stored in lowercase  and marks the account `Activated`, because following the link proves the address works.  The answer is the profile with its new address.  The change is requested through `POST api/2.0/people/email`, which is what sends the link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-email/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeEmailRequest** | **ChangeEmailRequest**| The new address, in plain text or in the encrypted form the confirmation link carries. | |
| **userid** | [**string**] | The ID of the account whose address is set, taken from the route. It has to match the account the  confirmation token was issued for, and the account has to be active. | defaults to undefined|


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

let userid: string; //The ID of the account whose address is set, taken from the route. It has to match the account the  confirmation token was issued for, and the account has to be active. (default to undefined)
let changeEmailRequest: ChangeEmailRequest; //The new address, in plain text or in the encrypted form the confirmation link carries.

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
|**200** | The profile with its new address |  * X-RateLimit-Limit - Rate limit: 5 requests per 15 minutes per user/IP. <br>  * X-RateLimit-Remaining - Requests remaining in the current 15-minute window. <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The user ID is empty, or the address is missing or malformed |  -  |
|**403** | The account is not active, or only its owner may change this address |  -  |
|**404** | No account has the specified ID |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying (5 req / 15 min limit per user/IP). <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEmailChangeInstructions**
> StringWrapper sendEmailChangeInstructions()

Starts changing the email address of an account, and what it actually does depends on who calls it.  A caller acting on their own account only gets a confirmation letter sent to the new address, and the address  stays unchanged until that link is followed, which lands on `PUT api/2.0/people/{userid}/email`.  A DocSpace administrator acting on somebody else changes the address immediately instead: the account is  marked as not activated, every session of it is ended, and activation instructions are sent to the new  address - and passing the address the account already has is then rejected with 400.  A caller who is not an administrator may only address their own account, nobody but the owner may change the  owner\'s address, and only the owner may change the address of another DocSpace administrator.  The target has to be an account that is neither disabled nor a pending invitation, otherwise the operation  answers 404, and an address that already belongs to somebody answers 400.  The answer is a ready-to-display message naming the address the letter was sent to.

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
|**200** | The message stating which address the letter was sent to |  * X-RateLimit-Limit - Rate limit: 5 requests per 15 minutes per user/IP. <br>  * X-RateLimit-Remaining - Requests remaining in the current 15-minute window. <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The user ID is empty, the address is missing, malformed, already taken, or equal to the current one |  -  |
|**403** | The caller may not change the address of that account |  -  |
|**404** | The account does not exist, is disabled, or is a pending invitation |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying (5 req / 15 min limit per user/IP). <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

