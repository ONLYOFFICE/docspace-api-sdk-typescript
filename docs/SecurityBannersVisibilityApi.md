# SecurityBannersVisibilityApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**setTenantBannerSettings**](#settenantbannersettings) | **POST** /api/2.0/settings/banner | Set the promotional banners visibility settings|

# **setTenantBannerSettings**
> TenantBannerSettingsWrapper setTenantBannerSettings()

Sets the promotional banners visibility settings settings for the portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-banner-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantBannerSettingsDto** | **TenantBannerSettingsDto**|  | |


### Return type

**TenantBannerSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityBannersVisibilityApi,
    Configuration,
    TenantBannerSettingsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityBannersVisibilityApi(configuration);

let tenantBannerSettingsDto: TenantBannerSettingsDto; // (optional)

const { status, data } = await apiInstance.setTenantBannerSettings(
    tenantBannerSettingsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Promotional banners visibility settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

