# SettingsCommonSettingsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeAdminHelper**](#closeadminhelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper|
|[**completeWizard**](#completewizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings|
|[**deleteColorTheme**](#deletecolortheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme|
|[**getColorTheme**](#getcolortheme) | **GET** /api/2.0/settings/colortheme | Get a color theme|
|[**getLogo**](#getlogo) | **GET** /api/2.0/settings/logo | Get a portal logo|
|[**getMachineName**](#getmachinename) | **GET** /api/2.0/settings/machine | Get hostname|
|[**getSettings**](#getsettings) | **GET** /api/2.0/settings | Get the portal settings|
|[**getSocketSettings**](#getsocketsettings) | **GET** /api/2.0/settings/socket | Get the socket settings|
|[**getSupportedCultures**](#getsupportedcultures) | **GET** /api/2.0/settings/cultures | Get supported languages|
|[**getTimeZonesAsync**](#gettimezonesasync) | **GET** /api/2.0/settings/timezones | Get time zones|
|[**gettDeepLinkSettings**](#gettdeeplinksettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings|
|[**paymentSettings**](#paymentsettings) | **GET** /api/2.0/settings/payment | Get the payment settings|
|[**saveColorTheme**](#savecolortheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme|
|[**saveConfigureDeepLink**](#saveconfiguredeeplink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings|
|[**saveDnsSettings**](#savednssettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings|
|[**saveMailDomainSettings**](#savemaildomainsettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings|
|[**updateEmailActivationSettings**](#updateemailactivationsettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings|

# **closeAdminHelper**
> closeAdminHelper()

Closes the administrator helper notification.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.closeAdminHelper();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |
|**405** | Not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeWizard**
> WizardSettingsWrapper completeWizard()

Completes the Wizard settings.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    WizardRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let wizardRequestsDto: WizardRequestsDto; // (optional)

const { status, data } = await apiInstance.completeWizard(
    wizardRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wizardRequestsDto** | **WizardRequestsDto**|  | |


### Return type

**WizardSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wizard settings |  -  |
|**400** | Incorrect email address/The password is empty |  -  |
|**401** | Unauthorized |  -  |
|**402** | You must enter a license key or license key is not correct or license expired or user quota does not match the license |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteColorTheme**
> CustomColorThemesSettingsWrapper deleteColorTheme()

Deletes the portal color theme with the ID specified in the request.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let id: number; //The ID of the portal theme to delete. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteColorTheme(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the portal theme to delete. | (optional) defaults to undefined|


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Portal theme settings: custom color theme settings, selected or not, limit |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getColorTheme**
> CustomColorThemesSettingsWrapper getColorTheme()

Returns the portal color theme.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getColorTheme();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Settings of the portal themes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLogo**
> StringWrapper getLogo()

Returns the portal logo image URL.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getLogo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Portal logo image URL |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMachineName**
> ObjectWrapper getMachineName()

Returns the portal hostname.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getMachineName();
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
|**200** | Portal hostname |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSettings**
> SettingsWrapper getSettings()

Returns a list of all the available portal settings with the current values for each parameter.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let withpassword: boolean; //Specifies whether to include the password hashing configuration in the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getSettings(
    withpassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withpassword** | [**boolean**] | Specifies whether to include the password hashing configuration in the response. | (optional) defaults to undefined|


### Return type

**SettingsWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocketSettings**
> ObjectWrapper getSocketSettings()

Returns the socket settings.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getSocketSettings();
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
|**200** | Socket settings: hub URL |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupportedCultures**
> STRINGArrayWrapper getSupportedCultures()

Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getSupportedCultures();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**STRINGArrayWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all the available portal languages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTimeZonesAsync**
> TimezonesRequestsArrayWrapper getTimeZonesAsync()

Returns a list of all the available portal time zones.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getTimeZonesAsync();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TimezonesRequestsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of all the available time zones with their IDs and display names |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gettDeepLinkSettings**
> TenantDeepLinkSettingsWrapper gettDeepLinkSettings()

Returns the deep link settings.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.gettDeepLinkSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantDeepLinkSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentSettings**
> PaymentSettingsWrapper paymentSettings()

Returns the portal payment settings.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.paymentSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PaymentSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment settings: sales email, feedback and support URL, link to pay for a portal, Standalone or not, current license, maximum quota quantity |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveColorTheme**
> CustomColorThemesSettingsWrapper saveColorTheme()

Saves the portal color theme specified in the request.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    CustomColorThemesSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let customColorThemesSettingsRequestsDto: CustomColorThemesSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveColorTheme(
    customColorThemesSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customColorThemesSettingsRequestsDto** | **CustomColorThemesSettingsRequestsDto**|  | |


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Portal theme settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveConfigureDeepLink**
> TenantDeepLinkSettingsWrapper saveConfigureDeepLink()

Saves the deep link configuration settings for the portal.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    DeepLinkConfigurationRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let deepLinkConfigurationRequestsDto: DeepLinkConfigurationRequestsDto; // (optional)

const { status, data } = await apiInstance.saveConfigureDeepLink(
    deepLinkConfigurationRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deepLinkConfigurationRequestsDto** | **DeepLinkConfigurationRequestsDto**|  | |


### Return type

**TenantDeepLinkSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deep link configuration updated |  -  |
|**400** | Invalid deep link configuration |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveDnsSettings**
> StringWrapper saveDnsSettings()

Saves the DNS settings specified in the request to the current portal.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    DnsSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let dnsSettingsRequestsDto: DnsSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveDnsSettings(
    dnsSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dnsSettingsRequestsDto** | **DnsSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about changing DNS |  -  |
|**400** | Invalid domain name/incorrect length of doman name |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**405** | Method not allowed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveMailDomainSettings**
> StringWrapper saveMailDomainSettings()

Saves the mail domain settings specified in the request to the portal.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    MailDomainSettingsRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let mailDomainSettingsRequestsDto: MailDomainSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveMailDomainSettings(
    mailDomainSettingsRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailDomainSettingsRequestsDto** | **MailDomainSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message about the result of saving the mail domain settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEmailActivationSettings**
> EmailActivationSettingsWrapper updateEmailActivationSettings()

Updates the email activation settings.

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    EmailActivationSettings
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let emailActivationSettings: EmailActivationSettings; // (optional)

const { status, data } = await apiInstance.updateEmailActivationSettings(
    emailActivationSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailActivationSettings** | **EmailActivationSettings**|  | |


### Return type

**EmailActivationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated email activation settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

