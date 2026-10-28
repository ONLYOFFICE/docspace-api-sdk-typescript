# SecurityAccessToDevToolsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**setTenantDevToolsAccessSettings**](#settenantdevtoolsaccesssettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings|

# **setTenantDevToolsAccessSettings**
> TenantDevToolsAccessSettingsWrapper setTenantDevToolsAccessSettings()

Sets whether the portal restricts the `User` role from using the developer tools (API keys, OAuth apps,  webhooks); `RoomAdmin` and `DocSpaceAdmin` are never affected by this setting. Requires Owner or DocSpaceAdmin  (the EditPortalSettings permission). This is a mutating, idempotent, portal-wide call: it applies to every  `User` on the tenant immediately. It returns the saved setting; read the current value at any time from  `GET api/2.0/settings/devtoolsaccess`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantDevToolsAccessSettingsRequestDto** | **TenantDevToolsAccessSettingsRequestDto**|  | |


### Return type

**TenantDevToolsAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAccessToDevToolsApi,
    Configuration,
    TenantDevToolsAccessSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAccessToDevToolsApi(configuration);

let tenantDevToolsAccessSettingsRequestDto: TenantDevToolsAccessSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.setTenantDevToolsAccessSettings(
    tenantDevToolsAccessSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved developer tools access restriction for the `User` role |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller has no portal-settings right |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

