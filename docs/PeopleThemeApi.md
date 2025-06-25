# PeopleThemeApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeTheme**](#changetheme) | **PUT** /api/2.0/people/theme | Change the portal theme|
|[**getTheme**](#gettheme) | **GET** /api/2.0/people/theme | Get the portal theme|

# **changeTheme**
> DarkThemeSettingsWrapper changeTheme()

Changes the current portal theme.

### Example

```typescript
import {
    PeopleThemeApi,
    Configuration,
    DarkThemeSettingsRequestDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThemeApi(configuration);

let darkThemeSettingsRequestDto: DarkThemeSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.changeTheme(
    darkThemeSettingsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **darkThemeSettingsRequestDto** | **DarkThemeSettingsRequestDto**|  | |


### Return type

**DarkThemeSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTheme**
> DarkThemeSettingsWrapper getTheme()

Returns a theme which is set to the current portal.

### Example

```typescript
import {
    PeopleThemeApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PeopleThemeApi(configuration);

const { status, data } = await apiInstance.getTheme();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DarkThemeSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Theme |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

