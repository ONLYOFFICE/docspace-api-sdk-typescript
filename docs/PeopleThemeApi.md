# ThemeApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePortalTheme**](#changeportaltheme) | **PUT** /api/2.0/people/theme | Change the portal theme|
|[**getPortalTheme**](#getportaltheme) | **GET** /api/2.0/people/theme | Get the portal theme|

# **changePortalTheme**
> DarkThemeSettingsWrapper changePortalTheme()

Sets the interface theme of the calling account to `Base` for the light theme, `Dark` for the dark one, or  `System` to follow whatever the operating system asks for.  The setting belongs to the account and not to the portal, despite the name of the route, so it changes  nothing for anybody else and cannot be set on another account.  It needs no permission, takes effect at once and is idempotent - sending the theme that is already in use  changes nothing.  The answer echoes the theme that was stored, which is the value the request asked for.  The same value is reported as `theme` by `GET api/2.0/people/@self`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/change-portal-theme/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **darkThemeSettingsRequestDto** | **DarkThemeSettingsRequestDto**|  | |


### Return type

**DarkThemeSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleThemeApi,
    Configuration,
    DarkThemeSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThemeApi(configuration);

let darkThemeSettingsRequestDto: DarkThemeSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changePortalTheme(
    darkThemeSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The interface theme that was stored |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalTheme**
> DarkThemeSettingsWrapper getPortalTheme()

Returns the interface theme the calling account has chosen: `Base` for the light theme, `Dark` for the dark  one, or `System` to follow whatever the operating system asks for.  The setting belongs to the account and not to the portal, despite the name of the route, so it describes the  caller alone and cannot be read for anybody else.  It needs no permission and is read-only.  A caller that has never chosen a theme gets the portal default rather than an empty answer.  The same value is also reported as `theme` by `GET api/2.0/people/@self`, so a client that reads the profile  on start-up does not need this operation as well.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-theme/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DarkThemeSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PeopleThemeApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PeopleThemeApi(configuration);

const { status, data } = await apiInstance.getPortalTheme();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The interface theme of the calling account |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

