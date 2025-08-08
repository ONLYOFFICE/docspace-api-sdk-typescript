# RebrandingApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAdditionalWhiteLabelSettings**](#deleteadditionalwhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings|
|[**deleteCompanyWhiteLabelSettings**](#deletecompanywhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings|
|[**getAdditionalWhiteLabelSettings**](#getadditionalwhitelabelsettings) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings|
|[**getCompanyWhiteLabelSettings**](#getcompanywhitelabelsettings) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings|
|[**getEnableWhitelabel**](#getenablewhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability|
|[**getIsDefaultWhiteLabelLogoText**](#getisdefaultwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default white label logo text|
|[**getIsDefaultWhiteLabelLogos**](#getisdefaultwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos|
|[**getLicensorData**](#getlicensordata) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data|
|[**getWhiteLabelLogoText**](#getwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text|
|[**getWhiteLabelLogos**](#getwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos|
|[**restoreWhiteLabelLogoText**](#restorewhitelabellogotext) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text|
|[**restoreWhiteLabelLogos**](#restorewhitelabellogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos|
|[**saveAdditionalWhiteLabelSettings**](#saveadditionalwhitelabelsettings) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings|
|[**saveCompanyWhiteLabelSettings**](#savecompanywhitelabelsettings) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings|
|[**saveWhiteLabelLogoText**](#savewhitelabellogotext) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text settings|
|[**saveWhiteLabelSettings**](#savewhitelabelsettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos|
|[**saveWhiteLabelSettingsFromFiles**](#savewhitelabelsettingsfromfiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the white label logos from files|

# **deleteAdditionalWhiteLabelSettings**
> AdditionalWhiteLabelSettingsWrapper deleteAdditionalWhiteLabelSettings()

Deletes the additional white label settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AdditionalWhiteLabelSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.deleteAdditionalWhiteLabelSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default additional white label settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCompanyWhiteLabelSettings**
> CompanyWhiteLabelSettingsWrapper deleteCompanyWhiteLabelSettings()

Deletes the company white label settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CompanyWhiteLabelSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.deleteCompanyWhiteLabelSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default company white label settings |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdditionalWhiteLabelSettings**
> AdditionalWhiteLabelSettingsWrapper getAdditionalWhiteLabelSettings()

Returns the additional white label settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AdditionalWhiteLabelSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.getAdditionalWhiteLabelSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Additional white label settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompanyWhiteLabelSettings**
> CompanyWhiteLabelSettingsWrapper getCompanyWhiteLabelSettings()

Returns the company white label settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CompanyWhiteLabelSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.getCompanyWhiteLabelSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Company white label settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnableWhitelabel**
> BooleanWrapper getEnableWhitelabel()

Checks if the white label is enabled or not.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/).

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.getEnableWhitelabel();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the white label is enabled |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIsDefaultWhiteLabelLogoText**
> IsDefaultWhiteLabelLogosWrapper getIsDefaultWhiteLabelLogoText()

Specifies if the white label logo text are default or not.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**IsDefaultWhiteLabelLogosWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getIsDefaultWhiteLabelLogoText(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request properties of white label logos |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIsDefaultWhiteLabelLogos**
> IsDefaultWhiteLabelLogosArrayWrapper getIsDefaultWhiteLabelLogos()

Specifies if the white label logos are default or not.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**IsDefaultWhiteLabelLogosArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getIsDefaultWhiteLabelLogos(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request properties of white label logos |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLicensorData**
> CompanyWhiteLabelSettingsArrayWrapper getLicensorData()

Returns the licensor data.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CompanyWhiteLabelSettingsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

const { status, data } = await apiInstance.getLicensorData();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of company white label settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWhiteLabelLogoText**
> StringWrapper getWhiteLabelLogoText()

Returns the white label logo text.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getWhiteLabelLogoText(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logo text |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWhiteLabelLogos**
> WhiteLabelItemArrayWrapper getWhiteLabelLogos()

Returns the white label logos.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**WhiteLabelItemArrayWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.getWhiteLabelLogos(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | White label logos |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreWhiteLabelLogoText**
> BooleanWrapper restoreWhiteLabelLogoText()

Restores the white label logo text.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.restoreWhiteLabelLogoText(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreWhiteLabelLogos**
> BooleanWrapper restoreWhiteLabelLogos()

Restores the white label logos.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.restoreWhiteLabelLogos(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveAdditionalWhiteLabelSettings**
> BooleanWrapper saveAdditionalWhiteLabelSettings()

Saves the additional white label settings specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **additionalWhiteLabelSettingsWrapper** | **AdditionalWhiteLabelSettingsWrapper**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration,
    AdditionalWhiteLabelSettingsWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let additionalWhiteLabelSettingsWrapper: AdditionalWhiteLabelSettingsWrapper; // (optional)

const { status, data } = await apiInstance.saveAdditionalWhiteLabelSettings(
    additionalWhiteLabelSettingsWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**400** | Settings is empty |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveCompanyWhiteLabelSettings**
> BooleanWrapper saveCompanyWhiteLabelSettings()

Saves the company white label settings specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyWhiteLabelSettingsWrapper** | **CompanyWhiteLabelSettingsWrapper**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration,
    CompanyWhiteLabelSettingsWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let companyWhiteLabelSettingsWrapper: CompanyWhiteLabelSettingsWrapper; // (optional)

const { status, data } = await apiInstance.saveCompanyWhiteLabelSettings(
    companyWhiteLabelSettingsWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  -  |
|**400** | Argument is empty or invalid |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveWhiteLabelLogoText**
> BooleanWrapper saveWhiteLabelLogoText()

Saves the white label logo text specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **whiteLabelRequestsDto** | **WhiteLabelRequestsDto**|  | |
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration,
    WhiteLabelRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)
let whiteLabelRequestsDto: WhiteLabelRequestsDto; // (optional)

const { status, data } = await apiInstance.saveWhiteLabelLogoText(
    isDark,
    isDefault,
    whiteLabelRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is sucessful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveWhiteLabelSettings**
> BooleanWrapper saveWhiteLabelSettings()

Saves the white label logos specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **whiteLabelRequestsDto** | **WhiteLabelRequestsDto**|  | |
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration,
    WhiteLabelRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)
let whiteLabelRequestsDto: WhiteLabelRequestsDto; // (optional)

const { status, data } = await apiInstance.saveWhiteLabelSettings(
    isDark,
    isDefault,
    whiteLabelRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is sucessful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveWhiteLabelSettingsFromFiles**
> BooleanWrapper saveWhiteLabelSettingsFromFiles()

Saves the white label logos from files.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isDark** | [**boolean**] | Specifies if the white label logo is for the dark theme or not. | (optional) defaults to undefined|
| **isDefault** | [**boolean**] | Specifies if the logo is for a default tenant or not. | (optional) defaults to undefined|


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsRebrandingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsRebrandingApi(configuration);

let isDark: boolean; //Specifies if the white label logo is for the dark theme or not. (optional) (default to undefined)
let isDefault: boolean; //Specifies if the logo is for a default tenant or not. (optional) (default to undefined)

const { status, data } = await apiInstance.saveWhiteLabelSettingsFromFiles(
    isDark,
    isDefault
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is sucessful |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |
|**409** | No input files |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

