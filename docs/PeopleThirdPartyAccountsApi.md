# ThirdPartyAccountsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getThirdPartyAuthProviders**](#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party providers|
|[**linkThirdPartyAccount**](#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-party account|
|[**signupThirdPartyAccount**](#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Sign up with a provider|
|[**unlinkThirdPartyAccount**](#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-party account|

# **getThirdPartyAuthProviders**
> AccountInfoArrayWrapper getThirdPartyAuthProviders()

Returns the third-party identity providers this portal has enabled, each with the URL that starts the login  with it, so a client can render the social sign-in buttons.  It needs no authentication and is the operation to call before showing a login or an invitation page; an  empty list means the portal has no provider configured, not that the call failed.  The call is read-only, and `linked` says whether the provider is already connected to the calling profile -  for an anonymous caller there is nothing to compare against, so every entry comes back with false.  The order is fixed by the portal, except that a caller located in China gets `weixin` first.  Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an  invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of  redirecting the desktop application.  Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and  `POST api/2.0/people/thirdparty/signup` to create a profile through one.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteView** | [**boolean**] | Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an  invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled  provider. | (optional) defaults to undefined|
| **settingsView** | [**boolean**] | Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window.  With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only  for a mobile browser or for the DocSpace desktop application. | (optional) defaults to undefined|
| **clientCallback** | [**string**] | The name of the client-side function the popup calls back when the provider authorization finishes. It is  placed into the returned URLs as they are, and it is only used by the popup mode. | (optional) defaults to undefined|
| **fromOnly** | [**string**] | Keeps only the named provider, compared case-insensitively against the lowercase provider names such as  `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider. | (optional) defaults to undefined|


### Return type

**AccountInfoArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let inviteView: boolean; //Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an  invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled  provider. (optional) (default to undefined)
let settingsView: boolean; //Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window.  With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only  for a mobile browser or for the DocSpace desktop application. (optional) (default to undefined)
let clientCallback: string; //The name of the client-side function the popup calls back when the provider authorization finishes. It is  placed into the returned URLs as they are, and it is only used by the popup mode. (optional) (default to undefined)
let fromOnly: string; //Keeps only the named provider, compared case-insensitively against the lowercase provider names such as  `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider. (optional) (default to undefined)

const { status, data } = await apiInstance.getThirdPartyAuthProviders(
    inviteView,
    settingsView,
    clientCallback,
    fromOnly
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The enabled providers, each with its login URL and its link state for the caller |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkThirdPartyAccount**
> linkThirdPartyAccount()

Connects a third-party identity to the calling profile, so that the account can afterwards sign in through  that provider.  The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login  flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object.  It acts on the authenticated account only, and the portal has to be a standalone installation or have a  tariff that includes third-party authorization, otherwise the operation answers 403.  The call returns no body and is not idempotent: one third-party identity can be linked to a single portal  profile, so repeating it, or linking an identity somebody else already uses, answers 400.  A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also  answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked`  to find out whether the link exists.  Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkAccountRequestDto** | **LinkAccountRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration,
    LinkAccountRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let linkAccountRequestDto: LinkAccountRequestDto; // (optional)

const { status, data } = await apiInstance.linkThirdPartyAccount(
    linkAccountRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The third-party identity is linked to the calling profile. No content is returned |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The third-party identity is already linked to a portal profile |  -  |
|**403** | The portal tariff does not include third-party authorization |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signupThirdPartyAccount**
> EmployeeWrapper signupThirdPartyAccount()

Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is  how a person accepts an invitation by signing in with a provider instead of setting a password.  It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation  link, and `serializedProfile` has to be the profile a completed provider authorization produced.  The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the  link up as, defaulting to `RoomAdmin`.  When the identity or its email already belongs to a portal profile, that existing profile is returned and the  provider is linked to it instead of a second account being created, so the call can be repeated safely.  The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider  authorization was cancelled or when the profile could not be created, so check for an empty body instead of  relying on the status alone.  A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays  in the `AutoGenerated` activation state; every other provider has to supply an email.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupAccountRequestDto** | **SignupAccountRequestDto**|  | |


### Return type

**EmployeeWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration,
    SignupAccountRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let signupAccountRequestDto: SignupAccountRequestDto; // (optional)

const { status, data } = await apiInstance.signupThirdPartyAccount(
    signupAccountRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The profile linked to the third-party identity, or an empty body when the authorization was cancelled or the profile could not be created |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The invitation link is invalid or has expired, or the email already belongs to a profile that has not been activated yet |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkThirdPartyAccount**
> unlinkThirdPartyAccount()

Removes the link between the calling profile and the named third-party provider, so that the account can no  longer sign in through it.  It acts on the authenticated account only and takes the provider name in the query, using the same lowercase  values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`.  The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes  nothing.  The portal profile itself is kept, together with its password, so the account stays usable through the  ordinary sign-in; only the third-party route is removed.  Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns,  such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes  nothing. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleThirdPartyAccountsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThirdPartyAccountsApi(configuration);

let provider: string; //The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns,  such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes  nothing. (optional) (default to undefined)

const { status, data } = await apiInstance.unlinkThirdPartyAccount(
    provider
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The third-party identity is no longer linked to the calling profile. No content is returned |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

