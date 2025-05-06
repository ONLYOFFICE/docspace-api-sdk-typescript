# SecurityAccessToDevToolsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**setTenantDevToolsAccessSettings**](#settenantdevtoolsaccesssettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings|

# **setTenantDevToolsAccessSettings**
> TenantDevToolsAccessSettingsWrapper setTenantDevToolsAccessSettings()

Sets the Developer Tools access settings for the portal.

### Example

```typescript
import {
    SecurityAccessToDevToolsApi,
    Configuration,
    TenantDevToolsAccessSettingsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAccessToDevToolsApi(configuration);

let tenantDevToolsAccessSettingsDto: TenantDevToolsAccessSettingsDto; // (optional)

const { status, data } = await apiInstance.setTenantDevToolsAccessSettings(
    tenantDevToolsAccessSettingsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantDevToolsAccessSettingsDto** | **TenantDevToolsAccessSettingsDto**|  | |


### Return type

**TenantDevToolsAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Developer Tools access settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

