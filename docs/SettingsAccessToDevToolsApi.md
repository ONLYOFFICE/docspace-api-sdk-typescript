# AccessToDevToolsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantAccessDevToolsSettings**](#gettenantaccessdevtoolssettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings|

# **getTenantAccessDevToolsSettings**
> TenantDevToolsAccessSettingsWrapper getTenantAccessDevToolsSettings()

Returns whether the portal currently restricts the `User` role from using the developer tools (API keys, OAuth  apps, webhooks). Requires an authenticated session; every role can read the restriction, even though it only  limits what a `User` may do, not what a `RoomAdmin` or `DocSpaceAdmin` may do. This is a read-only, idempotent  call. Change the restriction with `POST api/2.0/security/devtoolsaccess`, which requires the  EditPortalSettings permission.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-access-dev-tools-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantDevToolsAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsAccessToDevToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsAccessToDevToolsApi(configuration);

const { status, data } = await apiInstance.getTenantAccessDevToolsSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the `User` role is currently restricted from using the developer tools |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

