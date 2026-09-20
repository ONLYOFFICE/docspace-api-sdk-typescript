# BannersVisibilityApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTenantBannerSettings**](#gettenantbannersettings) | **GET** /api/2.0/settings/banner | Get the banners visibility|

# **getTenantBannerSettings**
> TenantBannerSettingsWrapper getTenantBannerSettings()

Returns whether the portal\'s promotional banners are currently hidden from every user\'s interface. Requires an  authenticated session; every role can read it, since the flag affects what they see regardless of their own  permissions. This is a read-only, idempotent call. The flag only takes effect on a Standalone (self-hosted)  installation; on SaaS, banners are always shown no matter what is saved here. Change the setting with  `POST api/2.0/settings/banner`, which additionally requires an Enterprise license.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-banner-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantBannerSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsBannersVisibilityApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsBannersVisibilityApi(configuration);

const { status, data } = await apiInstance.getTenantBannerSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the portal\'s promotional banners are currently hidden |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

