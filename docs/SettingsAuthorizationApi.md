# SettingsAuthorizationApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthServices**](#getauthservices) | **GET** /api/2.0/settings/authservice | Get the authorization services|
|[**saveAuthKeys**](#saveauthkeys) | **POST** /api/2.0/settings/authservice | Save the authorization keys|
|[**testExternalDatabaseConnection**](#testexternaldatabaseconnection) | **POST** /api/2.0/settings/authservice/externaldb/test | Test external database connection|

# **getAuthServices**
> AuthServiceRequestsArrayWrapper getAuthServices()

Returns the catalogue of third-party storage and authorization providers DocSpace can integrate with (for  example Amazon S3, Dropbox, Google, or Telegram), including whichever keys were last saved for each one that  currently has any configured. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a  read-only, idempotent call, and the list is not paginated; entries are ordered by the provider\'s configured  display order. Only providers that expose at least one manageable key are included, so a provider with nothing  to configure is omitted entirely. Save or change a provider\'s keys with `POST api/2.0/settings/authservice`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-auth-services/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AuthServiceRequestsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsAuthorizationApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsAuthorizationApi(configuration);

const { status, data } = await apiInstance.getAuthServices();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Third-party providers with a manageable key, and their last-saved key values |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveAuthKeys**
> BooleanWrapper saveAuthKeys()

Saves the authorization keys for one third-party storage or authorization provider, identified by name, or  clears them when every submitted key is left empty. Requires Owner or DocSpaceAdmin (the EditPortalSettings  permission); a provider that does not allow its keys to be changed from the API rejects the call outright. A  provider that is only available on a paid plan additionally requires the portal\'s tariff to include  third-party storage, or Standalone licensing, before the call is accepted. Keys that fail the provider\'s own  validation are cleared and the call is rejected rather than left partially applied. This is a mutating,  idempotent call: resaving identical keys succeeds and reports no change. It returns whether the keys actually  changed, not the keys themselves; connecting Telegram or an external database through this call also triggers  the matching real-time connection update.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-auth-keys/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authServiceRequestsDto** | **AuthServiceRequestsDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsAuthorizationApi,
    Configuration,
    AuthServiceRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsAuthorizationApi(configuration);

let authServiceRequestsDto: AuthServiceRequestsDto; // (optional)

const { status, data } = await apiInstance.saveAuthKeys(
    authServiceRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the provider\'s keys actually changed |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The submitted keys failed the provider\'s own validation |  -  |
|**402** | The provider is a paid option not covered by the portal\'s current pricing plan |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testExternalDatabaseConnection**
> ConnectionTestResultWrapper testExternalDatabaseConnection()

Probes connectivity to an external database using the settings supplied in the request, without saving them or  affecting the portal\'s own configuration. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission).  SQLite is only accepted as a target on a Standalone (self-hosted) installation; requesting it on SaaS is  reported as a failed connection rather than an error. This is a read-only call, safe to retry. A failed  connection is not an HTTP error: the response always comes back as a normal success with `success=false` and  an `error` message describing what went wrong.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/test-external-database-connection/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalDatabaseSettings** | **ExternalDatabaseSettings**|  | |


### Return type

**ConnectionTestResultWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsAuthorizationApi,
    Configuration,
    ExternalDatabaseSettings
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsAuthorizationApi(configuration);

let externalDatabaseSettings: ExternalDatabaseSettings; // (optional)

const { status, data } = await apiInstance.testExternalDatabaseConnection(
    externalDatabaseSettings
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Connection test result: a success flag and, on failure, an error message |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

