# SettingsCustomNavigationApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomNavigationItem**](#createcustomnavigationitem) | **POST** /api/2.0/settings/customnavigation/create | Add a custom navigation item|
|[**deleteCustomNavigationItem**](#deletecustomnavigationitem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Delete a custom navigation item|
|[**getCustomNavigationItem**](#getcustomnavigationitem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Get a custom navigation item by ID|
|[**getCustomNavigationItemSample**](#getcustomnavigationitemsample) | **GET** /api/2.0/settings/customnavigation/getsample | Get a custom navigation item sample|
|[**getCustomNavigationItems**](#getcustomnavigationitems) | **GET** /api/2.0/settings/customnavigation/getall | Get the custom navigation items|

# **createCustomNavigationItem**
> CustomNavigationItemWrapper createCustomNavigationItem()

Adds a custom navigation item with the parameters specified in the request.

### Example

```typescript
import {
    SettingsCustomNavigationApi,
    Configuration,
    CustomNavigationItem
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCustomNavigationApi(configuration);

let customNavigationItem: CustomNavigationItem; // (optional)

const { status, data } = await apiInstance.createCustomNavigationItem(
    customNavigationItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customNavigationItem** | **CustomNavigationItem**|  | |


### Return type

**CustomNavigationItemWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom navigation item |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCustomNavigationItem**
> deleteCustomNavigationItem()

Deletes a custom navigation item with the ID specified in the request.

### Example

```typescript
import {
    SettingsCustomNavigationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCustomNavigationApi(configuration);

let id: string; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.deleteCustomNavigationItem(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomNavigationItem**
> CustomNavigationItemWrapper getCustomNavigationItem()

Returns a custom navigation item by the ID specified in the request.

### Example

```typescript
import {
    SettingsCustomNavigationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCustomNavigationApi(configuration);

let id: string; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.getCustomNavigationItem(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**CustomNavigationItemWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom navigation item |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomNavigationItemSample**
> CustomNavigationItemWrapper getCustomNavigationItemSample()

Returns a sample of the custom navigation item.

### Example

```typescript
import {
    SettingsCustomNavigationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCustomNavigationApi(configuration);

const { status, data } = await apiInstance.getCustomNavigationItemSample();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomNavigationItemWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom navigation item |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomNavigationItems**
> CustomNavigationItemArrayWrapper getCustomNavigationItems()

Returns a list of the custom navigation items.

### Example

```typescript
import {
    SettingsCustomNavigationApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCustomNavigationApi(configuration);

const { status, data } = await apiInstance.getCustomNavigationItems();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomNavigationItemArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of the custom navigation items |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

