# CommonSettingsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeAdminHelper**](#closeadminhelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper|
|[**completeWizard**](#completewizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings|
|[**configureDeepLink**](#configuredeeplink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings|
|[**deletePortalColorTheme**](#deleteportalcolortheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme|
|[**getDeepLinkSettings**](#getdeeplinksettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings|
|[**getPaymentSettings**](#getpaymentsettings) | **GET** /api/2.0/settings/payment | Get the payment settings|
|[**getPortalColorTheme**](#getportalcolortheme) | **GET** /api/2.0/settings/colortheme | Get a color theme|
|[**getPortalHostname**](#getportalhostname) | **GET** /api/2.0/settings/machine | Get the portal hostname|
|[**getPortalLogo**](#getportallogo) | **GET** /api/2.0/settings/logo | Get a portal logo|
|[**getPortalSettings**](#getportalsettings) | **GET** /api/2.0/settings | Get the portal settings|
|[**getSocketSettings**](#getsocketsettings) | **GET** /api/2.0/settings/socket | Get the socket settings|
|[**getSupportedCultures**](#getsupportedcultures) | **GET** /api/2.0/settings/cultures | Get supported languages|
|[**getTenantAiAccessSettings**](#gettenantaiaccesssettings) | **GET** /api/2.0/settings/ai-access | Get the AI access settings|
|[**getTenantUserInvitationSettings**](#gettenantuserinvitationsettings) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings|
|[**getTimeZones**](#gettimezones) | **GET** /api/2.0/settings/timezones | Get time zones|
|[**saveDefaultFolder**](#savedefaultfolder) | **PUT** /api/2.0/settings/defaultfolder | Set the default folder|
|[**saveDnsSettings**](#savednssettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings|
|[**saveMailDomainSettings**](#savemaildomainsettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings|
|[**savePortalColorTheme**](#saveportalcolortheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme|
|[**setTenantAiAccessSettings**](#settenantaiaccesssettings) | **POST** /api/2.0/settings/ai-access | Set the AI access settings|
|[**updateEmailActivationSettings**](#updateemailactivationsettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings|
|[**updateInvitationSettings**](#updateinvitationsettings) | **PUT** /api/2.0/settings/invitationsettings | Update the user invitation settings|

# **closeAdminHelper**
> closeAdminHelper()

Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available  only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation  running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call  scoped to the calling account only; it never affects other administrators. It returns no data on success.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.closeAdminHelper();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The admin helper tip was dismissed for the caller |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**405** | The caller is not a DocSpace administrator, or the portal is on SaaS, custom mode, or not Standalone |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeWizard**
> WizardSettingsWrapper completeWizard()

Finishes the initial portal setup wizard: sets the owner\'s password and locale, applies the supplied license  if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal  logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new  portal is created, and the link is consumed as part of authenticating the request; the caller must also hold  the EditPortalSettings permission. An empty password or a malformed email address is rejected without  completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does  not cover the portal. This call is meant to run once per portal; running it again is accepted but has no  further effect once the wizard is already completed. It returns the resulting wizard settings, including the  completed flag.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wizardRequestsDto** | **WizardRequestsDto**|  | |


### Return type

**WizardSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    WizardRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let wizardRequestsDto: WizardRequestsDto; // (optional)

const { status, data } = await apiInstance.completeWizard(
    wizardRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Resulting wizard settings, including the completed flag |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The email address is malformed, or the password is empty |  -  |
|**402** | The supplied license is missing, invalid, expired, or its user quota does not cover the portal |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configureDeepLink**
> TenantDeepLinkSettingsWrapper configureDeepLink()

Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser,  always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is  rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the  setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read  the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deepLinkConfigurationRequestsDto** | **DeepLinkConfigurationRequestsDto**|  | |


### Return type

**TenantDeepLinkSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    DeepLinkConfigurationRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let deepLinkConfigurationRequestsDto: DeepLinkConfigurationRequestsDto; // (optional)

const { status, data } = await apiInstance.configureDeepLink(
    deepLinkConfigurationRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved deep link handling settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The handling mode is not one of the supported deep link handling values |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePortalColorTheme**
> CustomColorThemesSettingsWrapper deletePortalColorTheme()

Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the  call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the  theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an  ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated  theme configuration, including the (possibly new) selected theme.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does  one that is already gone - neither is reported as an error. Removing the theme currently in use moves the  portal to the remaining theme with the lowest ID. | defaults to undefined|


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let id: number; //The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does  one that is already gone - neither is reported as an error. Removing the theme currently in use moves the  portal to the remaining theme with the lowest ID. (default to undefined)

const { status, data } = await apiInstance.deletePortalColorTheme(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated color theme configuration: saved themes, selected theme, and plan limit |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeepLinkSettings**
> TenantDeepLinkSettingsWrapper getDeepLinkSettings()

Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in  the browser, always in the native app, or asking the user to choose. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call. The response supports conditional requests:  send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response  comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`,  which requires the EditPortalSettings permission.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantDeepLinkSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getDeepLinkSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current deep link handling settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentSettings**
> PaymentSettingsWrapper getPaymentSettings()

Returns the portal\'s payment-related configuration: the sales contact email, the URL to buy or extend a  subscription, whether the portal is Standalone, the current license\'s trial status and expiration date, and  the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the  portal\'s own subscription payment is overdue, since this is how the caller finds the link to resolve it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**PaymentSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getPaymentSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment-related settings: sales contact, buy URL, Standalone flag, license, and quota cap |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalColorTheme**
> CustomColorThemesSettingsWrapper getPortalColorTheme()

Returns the portal\'s color theme configuration: every saved custom theme, which one is currently selected, and  how many custom themes the plan still allows. No permission is required; anonymous callers can read it too.  This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom  themes.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getPortalColorTheme();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current color theme configuration: saved themes, selected theme, and plan limit |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalHostname**
> StringWrapper getPortalHostname()

Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client  mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal  setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call.  The value reflects whatever the caller connected through, including a reverse proxy\'s public name, and is not  necessarily the tenant\'s configured alias or mapped domain.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/).

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getPortalHostname();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hostname the current request arrived on |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalLogo**
> StringWrapper getPortalLogo()

Returns the absolute URL of the portal\'s current logo image, already resolved against the active white-label  branding. Requires an authenticated session; every role, including Guest, can read it. This is a read-only,  idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with  the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same  URL. The URL points at whatever image is currently configured, including the default DocSpace logo when no  custom branding has been set.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/).

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getPortalLogo();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Absolute URL of the portal\'s current logo image |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPortalSettings**
> SettingsWrapper getPortalSettings()

Returns the current portal\'s general configuration: branding, culture, feature flags, and DocSpace/Standalone  mode, everything the client needs to render its shell before or after login. No permission is required, but  the response shape depends on the caller\'s identity. An anonymous caller receives only the public subset  (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once  authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation  limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet\'s low-balance flag.  This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`,  iteration count, hash size) used to hash the password client-side before it is sent to the authentication  endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the  default authenticated response.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withpassword** | [**boolean**] | Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password  before sending it to the authentication operations. They are included for an anonymous caller anyway; for a  signed-in one they are left out unless this is set. | (optional) defaults to undefined|


### Return type

**SettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let withpassword: boolean; //Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password  before sending it to the authentication operations. They are included for an anonymous caller anyway; for a  signed-in one they are left out unless this is set. (optional) (default to undefined)

const { status, data } = await apiInstance.getPortalSettings(
    withpassword
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current portal settings, tailored to the caller\'s authentication state |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSocketSettings**
> SocketSettingsWrapper getSocketSettings()

Returns the base URL of the portal\'s real-time notification hub (Socket.IO), which the client connects to for  live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role  can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot  be changed through this API; an empty `url` means the portal has no notification hub configured and the client  should not attempt to connect.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**SocketSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getSocketSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Base URL of the portal\'s real-time notification hub |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupportedCultures**
> STRINGArrayWrapper getSupportedCultures()

Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example  `en-US`), used to populate a language picker before or after login. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response  supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of  enabled cultures is a portal-wide configuration value, not a per-user preference.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/).

### Parameters
This endpoint does not have any parameters.


### Return type

**STRINGArrayWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getSupportedCultures();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Language codes of every culture currently enabled on the portal |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantAiAccessSettings**
> TenantAiAccessSettingsWrapper getTenantAiAccessSettings()

Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI  is enabled by default. Requires an authenticated session; every role can read it. This is a read-only,  idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless  of the caller\'s own permissions; this call only reports the portal-wide switch, not any per-user entitlement.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-ai-access-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantAiAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getTenantAiAccessSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether AI functionality is currently enabled for the portal |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantUserInvitationSettings**
> TenantUserInvitationSettingsWrapper getTenantUserInvitationSettings()

Returns whether the portal currently allows inviting new members and new guests at all. No permission is  required; anonymous callers can read it too, since the invitation flow itself may run before the caller has  signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantUserInvitationSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getTenantUserInvitationSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether inviting new members and new guests is currently allowed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTimeZones**
> TimezonesRequestsArrayWrapper getTimeZones()

Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display  name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated  during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating  the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values  wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TimezonesRequestsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

const { status, data } = await apiInstance.getTimeZones();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Every time zone known to the host, with its IANA ID and display name |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveDefaultFolder**
> StudioDefaultPageSettingsWrapper saveDefaultFolder()

Sets which folder the current user\'s account opens into by default, such as My Documents, the rooms list, or  favorites. Requires an authenticated session; every role may set its own default, and the change never affects  any other user. Only folder types the client actually offers as a landing page are accepted; picking My  Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating,  idempotent call. It returns the saved setting.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-default-folder/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **defaultProductRequestDto** | **DefaultProductRequestDto**|  | |


### Return type

**StudioDefaultPageSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    DefaultProductRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let defaultProductRequestDto: DefaultProductRequestDto; // (optional)

const { status, data } = await apiInstance.saveDefaultFolder(
    defaultProductRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved default folder setting for the current user |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveDnsSettings**
> StringWrapper saveDnsSettings()

Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable  under the caller\'s own DNS name instead of only its default alias. Available only on a Standalone  (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name  in the request is ignored. A domain that collides with the portal\'s reserved base domain, or otherwise fails  validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success  the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dnsSettingsRequestsDto** | **DnsSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    DnsSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let dnsSettingsRequestsDto: DnsSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveDnsSettings(
    dnsSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirmation that the DNS mapping was updated |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The domain name is invalid, or collides with the portal\'s reserved base domain |  -  |
|**402** | This option is not available under the portal\'s current pricing plan |  -  |
|**405** | The portal is not a Standalone installation, so a custom domain cannot be mapped |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveMailDomainSettings**
> StringWrapper saveMailDomainSettings()

Overwrites the portal\'s trusted mail domain configuration, which controls which email domains are treated as  already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to  lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom  list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the  request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain  are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is  a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success  it returns a confirmation message, not the saved settings themselves; read them back from  `GET api/2.0/settings`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailDomainSettingsRequestsDto** | **MailDomainSettingsRequestsDto**|  | |


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    MailDomainSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let mailDomainSettingsRequestsDto: MailDomainSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveMailDomainSettings(
    mailDomainSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirmation message that the trusted mail domain settings were saved |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **savePortalColorTheme**
> CustomColorThemesSettingsWrapper savePortalColorTheme()

Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner  or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is  matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is  treated as a request to create a new custom theme instead of overwriting the default. Once the plan\'s  custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check  the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active  theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly  idempotent once the limit has been reached. It returns the full updated theme configuration.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customColorThemesSettingsRequestsDto** | **CustomColorThemesSettingsRequestsDto**|  | |


### Return type

**CustomColorThemesSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    CustomColorThemesSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let customColorThemesSettingsRequestsDto: CustomColorThemesSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.savePortalColorTheme(
    customColorThemesSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated color theme configuration: saved themes, selected theme, and plan limit |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setTenantAiAccessSettings**
> TenantAiAccessSettingsWrapper setTenantAiAccessSettings()

Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling  it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled,  and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating,  idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time  notification hub rather than waiting for their next request. It returns the saved setting.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-ai-access-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantAiAccessSettingsDto** | **TenantAiAccessSettingsDto**|  | |


### Return type

**TenantAiAccessSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    TenantAiAccessSettingsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let tenantAiAccessSettingsDto: TenantAiAccessSettingsDto; // (optional)

const { status, data } = await apiInstance.setTenantAiAccessSettings(
    tenantAiAccessSettingsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved AI access setting for the portal |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller is not a DocSpace administrator, so the AI access setting cannot be changed |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEmailActivationSettings**
> EmailActivationSettingsWrapper updateEmailActivationSettings()

Updates the current user\'s own preference for whether the email confirmation prompt is displayed on their  account. Requires an authenticated session; every role may change its own setting, and the change never  affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted,  without validating them against the account\'s actual email confirmation state, so `show` can be set to `true`  even after the address is already confirmed.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailActivationSettings** | **EmailActivationSettings**|  | |


### Return type

**EmailActivationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    EmailActivationSettings
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let emailActivationSettings: EmailActivationSettings; // (optional)

const { status, data } = await apiInstance.updateEmailActivationSettings(
    emailActivationSettings
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email activation settings exactly as submitted |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInvitationSettings**
> TenantUserInvitationSettingsWrapper updateInvitationSettings()

Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations  going forward; it does not revoke links already issued or remove members already invited. This is a mutating,  idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including  anonymously, from `GET api/2.0/settings/invitationsettings`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantUserInvitationSettingsRequestDto** | **TenantUserInvitationSettingsRequestDto**|  | |


### Return type

**TenantUserInvitationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsCommonSettingsApi,
    Configuration,
    TenantUserInvitationSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsCommonSettingsApi(configuration);

let tenantUserInvitationSettingsRequestDto: TenantUserInvitationSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.updateInvitationSettings(
    tenantUserInvitationSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved user invitation settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

