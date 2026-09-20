# CookiesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCookieSettings**](#getcookiesettings) | **GET** /api/2.0/settings/cookiesettings | Get the cookie lifetime settings|
|[**updateCookieSettings**](#updatecookiesettings) | **PUT** /api/2.0/settings/cookiesettings | Update the cookie lifetime settings|

# **getCookieSettings**
> CookieSettingsWrapper getCookieSettings()

Returns how long an authentication session of this portal stays valid: `lifeTime` in minutes together with the  `enabled` flag that says whether that limit is applied at all. The caller needs the portal-settings right of a  DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused -  and the call is read-only. The pair describes the whole portal rather than the calling user, and it is never  empty: a portal nobody has configured answers `lifeTime` 1440, one day, with `enabled` false. Read the two  fields together, because the number alone does not say how long a session lasts - while `enabled` is false the  stored number is ignored and an issued session is honoured for a year, and `lifeTime` 0 with `enabled` true  means a session that never expires on its own. On an installation whose configuration hides the cookie section  the built-in default pair comes back instead of the stored one. `GET api/2.0/settings` carries the same flag  as `cookieSettingsEnabled` without the number; change the pair with `PUT api/2.0/settings/cookiesettings`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-cookie-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CookieSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCookiesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCookiesApi(configuration);

const { status, data } = await apiInstance.getCookieSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The authentication session lifetime of the portal in minutes together with the flag that says whether that limit is applied |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCookieSettings**
> StringWrapper updateCookieSettings()

Stores how long an authentication session of this portal stays valid: `lifeTime` in minutes together with the  `enabled` flag that switches the limit on. The caller needs the portal-settings right of a DocSpace  administrator - the portal owner and a DocSpace administrator qualify, any other member is refused - and on an  installation whose configuration hides the cookie section nothing is stored and the call is answered with 402.  A `lifeTime` above 9999 minutes is not rejected but clamped to 9999, while 0 or less clears the number  instead, which with `enabled` true leaves sessions that never expire on their own. Any positive `lifeTime`  raises the session version of the portal: every session issued before the call stops being accepted, and with  `enabled` true the connections behind them are dropped as well. The caller is signed in again inside the same  call and gets a fresh session cookie in the response, so a client that keeps sending the token it held before  this call is the one locked out. The change is recorded in the audit trail. What comes back is a localized  confirmation message; read the stored pair with `GET api/2.0/settings/cookiesettings`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-cookie-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cookieSettingsRequestsDto** | **CookieSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCookiesApi,
    Configuration,
    CookieSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCookiesApi(configuration);

let cookieSettingsRequestsDto: CookieSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.updateCookieSettings(
    cookieSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A localized message confirming that the session lifetime has been saved |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The installation hides the cookie lifetime section, or the portal\'s payment has lapsed |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

