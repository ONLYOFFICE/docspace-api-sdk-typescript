# MessagesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**enableAdminMessageSettings**](#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings|
|[**sendAdminMail**](#sendadminmail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator|
|[**sendJoinInviteMail**](#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email|

# **enableAdminMessageSettings**
> StringWrapper enableAdminMessageSettings()

Displays the contact form on the Sign In page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-admin-message-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **turnOnAdminMessageSettingsRequestDto** | **TurnOnAdminMessageSettingsRequestDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    TurnOnAdminMessageSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let turnOnAdminMessageSettingsRequestDto: TurnOnAdminMessageSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.enableAdminMessageSettings(
    turnOnAdminMessageSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about the result of saving new settings |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendAdminMail**
> StringWrapper sendAdminMail()

Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-admin-mail/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminMessageSettingsRequestsDto** | **AdminMessageSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    AdminMessageSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let adminMessageSettingsRequestsDto: AdminMessageSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.sendAdminMail(
    adminMessageSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about the result of sending a message |  * X-RateLimit-Limit - Rate limit: 5 requests per 15 minutes per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Incorrect email or message text is empty |  -  |
|**429** | Request limit is exceeded |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendJoinInviteMail**
> StringWrapper sendJoinInviteMail()

Sends an invitation email with a link to the DocSpace.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-join-invite-mail/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminMessageBaseSettingsRequestsDto** | **AdminMessageBaseSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    SettingsMessagesApi,
    Configuration,
    AdminMessageBaseSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsMessagesApi(configuration);

let adminMessageBaseSettingsRequestsDto: AdminMessageBaseSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.sendJoinInviteMail(
    adminMessageBaseSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about sending a link to confirm joining the DocSpace |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Incorrect email or email already exists |  -  |
|**403** | No permissions to perform this action |  -  |
|**429** | Request limit is exceeded |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

