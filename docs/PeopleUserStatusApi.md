# UserStatusApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByStatus**](#getbystatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status|
|[**updateUserActivationStatus**](#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set my activation status|
|[**updateUserStatus**](#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Change a user status|

# **getByStatus**
> EmployeeFullArrayWrapper getByStatus()

Returns a page of the accounts that are in one particular state - the status is taken from the route - with  the full profile of each of them.  The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403.  The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports  the number of matches in the total count of the response.  Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same  `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text  filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId`  to filter by group.  `GET api/2.0/people` is the same operation fixed to the `Active` status.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-by-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **EmployeeStatus** | The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled  ones, `Pending` for open invitations, or `All` for every state. | defaults to undefined|
| **filterBy** | [**string**] | The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of.  Any other value, and omitting the field, applies no group filter. | (optional) defaults to undefined|
| **count** | [**number**] | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is  reported in the total count of the response. | (optional) defaults to undefined|
| **sortBy** | [**string**] | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`,  `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | (optional) defaults to undefined|
| **filterSeparator** | [**string**] | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split  the value on spaces instead, in which case every term has to match. | (optional) defaults to undefined|
| **filterValue** | [**string**] | The text to match against the name and the email of the account, case-insensitively. Omit it to apply no  text filter. | (optional) defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let status: EmployeeStatus; //The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled  ones, `Pending` for open invitations, or `All` for every state. (default to undefined)
let filterBy: string; //The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of.  Any other value, and omitting the field, applies no group filter. (optional) (default to undefined)
let count: number; //The size of the page. It defaults to 100, which is also the largest value the operation accepts. (optional) (default to undefined)
let startIndex: number; //The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is  reported in the total count of the response. (optional) (default to undefined)
let sortBy: string; //What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`,  `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. (optional) (default to undefined)
let sortOrder: SortOrder; //The direction of the ordering: `Ascending`, which is the default, or `Descending`. (optional) (default to undefined)
let filterSeparator: string; //The character that splits `filterValue` into several terms, of which any one may match. Omit it to split  the value on spaces instead, in which case every term has to match. (optional) (default to undefined)
let filterValue: string; //The text to match against the name and the email of the account, case-insensitively. Omit it to apply no  text filter. (optional) (default to undefined)

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

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of accounts in the requested state, with their full profiles |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller is a member or a guest |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserActivationStatus**
> EmployeeFullArrayWrapper updateUserActivationStatus(updateMembersRequestDto)

Sets the activation state of the calling account, which is how a person finishes confirming their email  address after following the link they were sent.  The request has to carry the confirmation token from that link rather than an ordinary session, and the  account must be allowed to edit its own profile.  Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list,  more than one entry, or somebody else\'s ID is answered with 400, so it cannot be used to activate other  people.  Setting `Activated` on the portal owner sends the administrator welcome email, once per portal.  The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at  all when the account has meanwhile disappeared, which is skipped without an error.  The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-activation-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**| The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the  calling account; `resendAll` is ignored here. | |
| **activationstatus** | **EmployeeActivationStatus** | The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`,  `Pending` or `AutoGenerated`. | defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let activationstatus: EmployeeActivationStatus; //The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`,  `Pending` or `AutoGenerated`. (default to undefined)
let updateMembersRequestDto: UpdateMembersRequestDto; //The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the  calling account; `resendAll` is ignored here.

const { status, data } = await apiInstance.updateUserActivationStatus(
    activationstatus,
    updateMembersRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The profile of the caller in its new activation state |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The list is empty, holds more than one ID, or names an account other than the caller |  -  |
|**403** | The account may not edit its own profile |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserStatus**
> EmployeeFullArrayWrapper updateUserStatus(updateMembersRequestDto)

Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting  them and to bring them back later.  Only `Active` and `Terminated` are accepted in the route; any other status answers 400.  The caller needs the permission to edit users, and the whole list is checked before anything is applied: a  system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the  portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing.  Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and  can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one  by one, so a quota failure partway through leaves the earlier ones enabled.  Enabling only affects accounts that were disabled, and an account that had never filled in its name comes  back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the  answer instead of assuming it matches the request.  Each changed account raises a `UserUpdated` webhook, and disabling is what  `DELETE api/2.0/people/{userid}` requires before it will delete an account.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMembersRequestDto** | **UpdateMembersRequestDto**| The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the  invitation operations and is ignored here. | |
| **status** | **EmployeeStatus** | The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account,  and `Terminated`, which disables it, are accepted; any other value is rejected with 400. | defaults to undefined|


### Return type

**EmployeeFullArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleUserStatusApi,
    Configuration,
    UpdateMembersRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleUserStatusApi(configuration);

let status: EmployeeStatus; //The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account,  and `Terminated`, which disables it, are accepted; any other value is rejected with 400. (default to undefined)
let updateMembersRequestDto: UpdateMembersRequestDto; //The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the  invitation operations and is ignored here.

const { status, data } = await apiInstance.updateUserStatus(
    status,
    updateMembersRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The listed accounts with their statuses after the change |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The requested status is neither Active nor Terminated |  -  |
|**402** | The tariff or the user quota does not allow enabling one more account |  -  |
|**403** | No permissions to perform this action, or the list names a system, LDAP, owner, self or DocSpace admin account |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

