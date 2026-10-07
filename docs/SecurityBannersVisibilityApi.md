# SecurityBannersVisibilityApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**setTenantBannerSettings**](#settenantbannersettings) | **POST** /api/2.0/settings/banner | Set the banners visibility|

# **setTenantBannerSettings**
> TenantBannerSettingsWrapper setTenantBannerSettings()

Sets whether the portal\'s promotional banners are hidden for every user. Available only on an Enterprise  license; every other plan is refused regardless of the caller\'s role. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The flag only takes effect on a Standalone (self-hosted) installation; on  SaaS, banners are always shown no matter what is saved here. This is a mutating, idempotent, portal-wide call:  it applies to every user on the tenant immediately. It returns the saved setting; read the current value at  any time from `GET api/2.0/settings/banner`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-banner-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantBannerSettingsRequestDto** | **TenantBannerSettingsRequestDto**|  | |


### Return type

**TenantBannerSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityBannersVisibilityApi,
    Configuration,
    TenantBannerSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityBannersVisibilityApi(configuration);

let tenantBannerSettingsRequestDto: TenantBannerSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.setTenantBannerSettings(
    tenantBannerSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved promotional banners visibility setting |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal is not an Enterprise installation |  -  |
|**403** | The caller has no portal-settings right |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

