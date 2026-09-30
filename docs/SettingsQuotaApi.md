# SettingsQuotaApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserQuotaSettings**](#getuserquotasettings) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings|
|[**saveAiAgentQuotaSettings**](#saveaiagentquotasettings) | **POST** /api/2.0/settings/aiagentquotasettings | Save the AI Agent quota settings|
|[**saveRoomQuotaSettings**](#saveroomquotasettings) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings|
|[**setTenantQuotaSettings**](#settenantquotasettings) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings|

# **getUserQuotaSettings**
> TenantUserQuotaSettingsWrapper getUserQuotaSettings()

Returns the portal\'s per-user default storage quota: whether it is enabled and, if so, its size in bytes.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an  anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size  value is not enforced and users get unlimited personal storage regardless of what it holds. The response  supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified`  value, and an unchanged response comes back empty instead of resending the settings.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantUserQuotaSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsQuotaApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsQuotaApi(configuration);

const { status, data } = await apiInstance.getUserQuotaSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current per-user default storage quota settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveAiAgentQuotaSettings**
> TenantAiAgentQuotaSettingsWrapper saveAiAgentQuotaSettings()

Sets the portal\'s default storage quota for AI agents, applied as the starting limit for newly created agents.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not any agent\'s current usage.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ai-agent-quota-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quotaSettingsRequestsDto** | **QuotaSettingsRequestsDto**|  | |


### Return type

**TenantAiAgentQuotaSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsQuotaApi,
    Configuration,
    QuotaSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsQuotaApi(configuration);

let quotaSettingsRequestsDto: QuotaSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveAiAgentQuotaSettings(
    quotaSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved default AI agent storage quota settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan does not include the statistics feature required for AI agent quotas |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveRoomQuotaSettings**
> TenantRoomQuotaSettingsWrapper saveRoomQuotaSettings()

Sets the portal\'s default per-room storage quota, applied to newly created rooms as their starting limit.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal\'s  plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested  size cannot exceed the portal\'s own total storage quota, nor, on a Standalone install with a portal-wide quota  enabled, that quota\'s size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for  new rooms. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved settings, not the individual rooms\' current usage.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quotaSettingsRequestsDto** | **QuotaSettingsRequestsDto**|  | |


### Return type

**TenantRoomQuotaSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsQuotaApi,
    Configuration,
    QuotaSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsQuotaApi(configuration);

let quotaSettingsRequestsDto: QuotaSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.saveRoomQuotaSettings(
    quotaSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved default per-room storage quota settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan does not include the statistics feature required for room quotas |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setTenantQuotaSettings**
> TenantQuotaSettingsWrapper setTenantQuotaSettings()

Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted)  installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal\'s plan  must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative  `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove  any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It  returns the saved quota settings for that tenant, not its current usage.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantQuotaSettingsRequestsDto** | **TenantQuotaSettingsRequestsDto**|  | |


### Return type

**TenantQuotaSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsQuotaApi,
    Configuration,
    TenantQuotaSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsQuotaApi(configuration);

let tenantQuotaSettingsRequestsDto: TenantQuotaSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.setTenantQuotaSettings(
    tenantQuotaSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved tenant storage quota settings |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan does not include the statistics feature required for tenant quotas |  -  |
|**405** | The caller is not a DocSpace administrator, or the portal is not a Standalone installation |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

