# SettingsSecurityApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnabledModules**](#getenabledmodules) | **GET** /api/2.0/settings/security/modules | Get the enabled modules|
|[**getPasswordSettings**](#getpasswordsettings) | **GET** /api/2.0/settings/security/password | Get the password settings|
|[**getProductAdministrators**](#getproductadministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Get the product administrators|
|[**getWebItemSecurityInfo**](#getwebitemsecurityinfo) | **GET** /api/2.0/settings/security/{id} | Get the module availability|
|[**getWebItemSettingsSecurityInfo**](#getwebitemsettingssecurityinfo) | **GET** /api/2.0/settings/security | Get the security settings|
|[**isProductAdministrator**](#isproductadministrator) | **GET** /api/2.0/settings/security/administrator | Check a product administrator|
|[**setAccessToWebItems**](#setaccesstowebitems) | **PUT** /api/2.0/settings/security/access | Set the security settings to modules|
|[**setProductAdministrator**](#setproductadministrator) | **PUT** /api/2.0/settings/security/administrator | Set a product administrator|
|[**setWebItemSecurity**](#setwebitemsecurity) | **PUT** /api/2.0/settings/security | Set the module security settings|
|[**updatePasswordSettings**](#updatepasswordsettings) | **PUT** /api/2.0/settings/security/password | Set the password settings|

# **getEnabledModules**
> ObjectWrapper getEnabledModules()

Returns a list of all the enabled modules.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

const { status, data } = await apiInstance.getEnabledModules();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of enabled modules |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPasswordSettings**
> PasswordSettingsWrapper getPasswordSettings()

Returns the portal password settings.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

const { status, data } = await apiInstance.getPasswordSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PasswordSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProductAdministrators**
> EmployeeArrayWrapper getProductAdministrators()

Returns a list of all the administrators of a product with the ID specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let productid: string; //The ID of the product extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.getProductAdministrators(
    productid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productid** | [**string**] | The ID of the product extracted from the route parameters. | defaults to undefined|


### Return type

**EmployeeArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of product administrators with the following parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebItemSecurityInfo**
> BooleanWrapper getWebItemSecurityInfo()

Returns the availability of the module with the ID specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let id: string; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.getWebItemSecurityInfo(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true - module is enabled, false - module is disabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebItemSettingsSecurityInfo**
> SecurityArrayWrapper getWebItemSettingsSecurityInfo()

Returns the security settings for the modules specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let ids: Array<string>; //The list of module identifiers for which to retrieve the security settings. (optional) (default to undefined)

const { status, data } = await apiInstance.getWebItemSettingsSecurityInfo(
    ids
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ids** | **Array&lt;string&gt;** | The list of module identifiers for which to retrieve the security settings. | (optional) defaults to undefined|


### Return type

**SecurityArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isProductAdministrator**
> ProductAdministratorWrapper isProductAdministrator()

Checks if the selected user is an administrator of a product with the ID specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let productid: string; //The ID of the product extracted from the query parameters. (optional) (default to undefined)
let userid: string; //The user ID extracted from the query parameters. (optional) (default to undefined)

const { status, data } = await apiInstance.isProductAdministrator(
    productid,
    userid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productid** | [**string**] | The ID of the product extracted from the query parameters. | (optional) defaults to undefined|
| **userid** | [**string**] | The user ID extracted from the query parameters. | (optional) defaults to undefined|


### Return type

**ProductAdministratorWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Object with the user security information: product ID, user ID, administrator or not |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setAccessToWebItems**
> SecurityArrayWrapper setAccessToWebItems()

Sets the security settings to the modules with the IDs specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration,
    WebItemsSecurityRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let webItemsSecurityRequestsDto: WebItemsSecurityRequestsDto; // (optional)

const { status, data } = await apiInstance.setAccessToWebItems(
    webItemsSecurityRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webItemsSecurityRequestsDto** | **WebItemsSecurityRequestsDto**|  | |


### Return type

**SecurityArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | Security settings are disabled for an open portal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setProductAdministrator**
> ProductAdministratorWrapper setProductAdministrator()

Sets the selected user as an administrator of a product with the ID specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration,
    SecurityRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let securityRequestsDto: SecurityRequestsDto; // (optional)

const { status, data } = await apiInstance.setProductAdministrator(
    securityRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **securityRequestsDto** | **SecurityRequestsDto**|  | |


### Return type

**ProductAdministratorWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Object with the user security information: product ID, user ID, administrator or not |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setWebItemSecurity**
> SecurityArrayWrapper setWebItemSecurity()

Sets the security settings to the module with the ID specified in the request.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration,
    WebItemSecurityRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let webItemSecurityRequestsDto: WebItemSecurityRequestsDto; // (optional)

const { status, data } = await apiInstance.setWebItemSecurity(
    webItemSecurityRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webItemSecurityRequestsDto** | **WebItemSecurityRequestsDto**|  | |


### Return type

**SecurityArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | Security settings are disabled for an open portal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePasswordSettings**
> PasswordSettingsWrapper updatePasswordSettings()

Sets the portal password settings.

### Example

```typescript
import {
    SettingsSecurityApi,
    Configuration,
    PasswordSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsSecurityApi(configuration);

let passwordSettingsRequestsDto: PasswordSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.updatePasswordSettings(
    passwordSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passwordSettingsRequestsDto** | **PasswordSettingsRequestsDto**|  | |


### Return type

**PasswordSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password settings |  -  |
|**400** | MinLength |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

