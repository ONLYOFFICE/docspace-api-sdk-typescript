# DocsCloudApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateDevPack**](#calculatedevpack) | **POST** /api/2.0/settings/docscloud/calculatedevpack | Calculate the DocsCloud subscription switch cost|
|[**checkHealth**](#checkhealth) | **GET** /api/2.0/settings/docscloud/healthcheck | Check the DocsCloud server health|
|[**createTenantQuotaReport**](#createtenantquotareport) | **POST** /api/2.0/settings/docscloud/tenant/quota/report | Start the DocsCloud tenant quota report generation|
|[**getTenant**](#gettenant) | **GET** /api/2.0/settings/docscloud/tenant | Get the DocsCloud tenant|
|[**getTenantConfig**](#gettenantconfig) | **GET** /api/2.0/settings/docscloud/tenant/config | Get the DocsCloud tenant configuration|
|[**getTenantInfo**](#gettenantinfo) | **GET** /api/2.0/settings/docscloud/tenant/info | Get the DocsCloud tenant information|
|[**getTenantQuota**](#gettenantquota) | **GET** /api/2.0/settings/docscloud/tenant/quota | Get the DocsCloud tenant quota|
|[**getTenantQuotaReport**](#gettenantquotareport) | **GET** /api/2.0/settings/docscloud/tenant/quota/report | Get the status of the DocsCloud tenant quota report generation|
|[**getTenantUsage**](#gettenantusage) | **GET** /api/2.0/settings/docscloud/tenant/usage | Get the DocsCloud tenant usage|
|[**startDocsCloudTrial**](#startdocscloudtrial) | **POST** /api/2.0/settings/docscloud/trial | Start the DocsCloud trial|
|[**switchToDevPack**](#switchtodevpack) | **POST** /api/2.0/settings/docscloud/switchtodevpack | Switch the DocsCloud subscription to DocsCloudDevPack|
|[**terminateTenantQuotaReport**](#terminatetenantquotareport) | **DELETE** /api/2.0/settings/docscloud/tenant/quota/report | Terminate the DocsCloud tenant quota report generation|
|[**updateTenantConfig**](#updatetenantconfig) | **PUT** /api/2.0/settings/docscloud/tenant/config | Update the DocsCloud tenant configuration|

# **calculateDevPack**
> PaymentCalculationWrapper calculateDevPack()

Calculates the top-up cost of switching the current DocsCloud subscription to DocsCloudDevPack,  without making any changes. The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/calculate-dev-pack/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **docsCloudDevPackRequestDto** | **DocsCloudDevPackRequestDto**|  | |


### Return type

**PaymentCalculationWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration,
    DocsCloudDevPackRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let docsCloudDevPackRequestDto: DocsCloudDevPackRequestDto; // (optional)

const { status, data } = await apiInstance.calculateDevPack(
    docsCloudDevPackRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment calculation |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Invalid request parameters |  -  |
|**402** | Tariff is not paid |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | Customer or service could not be found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkHealth**
> checkHealth()

Checks whether the DocsCloud server is reachable.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/check-health/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

const { status, data } = await apiInstance.checkHealth();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud server is reachable |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTenantQuotaReport**
> DocumentBuilderTaskWrapper createTenantQuotaReport()

Starts generating the DocsCloud user quota report as an xlsx file and saves it in My Documents.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-tenant-quota-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

const { status, data } = await apiInstance.createTenantQuotaReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operation execution status |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | No permissions to perform this action |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenant**
> DocsCloudTenantWrapper getTenant()

Returns the DocsCloud tenant of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


### Return type

**DocsCloudTenantWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenant(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud tenant |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantConfig**
> DocsCloudConfigWrapper getTenantConfig()

Returns the DocsCloud tenant configuration of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


### Return type

**DocsCloudConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenantConfig(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud tenant configuration |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantInfo**
> DocsCloudTenantInfoWrapper getTenantInfo()

Returns the DocsCloud license and server information with usage statistics of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


### Return type

**DocsCloudTenantInfoWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenantInfo(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud tenant information |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantQuota**
> DocsCloudQuotaWrapper getTenantQuota()

Returns the DocsCloud user quota (active users) of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


### Return type

**DocsCloudQuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenantQuota(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud user quota |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantQuotaReport**
> DocumentBuilderTaskWrapper getTenantQuotaReport()

Returns the status of generating the DocsCloud user quota report.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-quota-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

const { status, data } = await apiInstance.getTenantQuotaReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operation execution status |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | No permissions to perform this action |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantUsage**
> DocsCloudUsageWrapper getTenantUsage()

Returns the DocsCloud usage statistics of the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-usage/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


### Return type

**DocsCloudUsageWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getTenantUsage(
    refresh
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocsCloud tenant usage statistics |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startDocsCloudTrial**
> BooleanWrapper startDocsCloudTrial()

Starts the DocsCloud trial.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/start-docs-cloud-trial/).

### Parameters
This endpoint does not have any parameters.


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

const { status, data } = await apiInstance.startDocsCloudTrial();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Quota is already set |  -  |
|**402** | Tariff is not paid |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | Quota could not be found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **switchToDevPack**
> BooleanWrapper switchToDevPack()

Switches the current DocsCloud subscription to DocsCloudDevPack: charges the price difference  from the wallet and transfers the subscription (with its license) to the target product.  The quantity is taken from the currently purchased DocsCloud quota.  Only the portal payer can perform this action.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/switch-to-dev-pack/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **docsCloudDevPackRequestDto** | **DocsCloudDevPackRequestDto**|  | |


### Return type

**BooleanWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration,
    DocsCloudDevPackRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let docsCloudDevPackRequestDto: DocsCloudDevPackRequestDto; // (optional)

const { status, data } = await apiInstance.switchToDevPack(
    docsCloudDevPackRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Boolean value: true if the operation is successful |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**400** | Invalid request parameters |  -  |
|**402** | Tariff is not paid |  -  |
|**403** | No permissions to perform this action |  -  |
|**404** | Customer or service could not be found |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateTenantQuotaReport**
> terminateTenantQuotaReport()

Terminates generating the DocsCloud user quota report.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-tenant-quota-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

const { status, data } = await apiInstance.terminateTenantQuotaReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**403** | No permissions to perform this action |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenantConfig**
> DocsCloudConfigWrapper updateTenantConfig()

Updates the DocsCloud tenant configuration of the current portal with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tenant-config/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **docsCloudConfig** | **DocsCloudConfig**|  | |


### Return type

**DocsCloudConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsDocsCloudApi,
    Configuration,
    DocsCloudConfig
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsDocsCloudApi(configuration);

let docsCloudConfig: DocsCloudConfig; // (optional)

const { status, data } = await apiInstance.updateTenantConfig(
    docsCloudConfig
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated DocsCloud tenant configuration |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

