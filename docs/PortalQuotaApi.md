# PortalQuotaApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getQuota**](#getquota) | **GET** /api/2.0/portal/quota | Get a portal quota|
|[**getRightQuota**](#getrightquota) | **GET** /api/2.0/portal/quota/right | Get the recommended quota|
|[**getTariff**](#gettariff) | **GET** /api/2.0/portal/tariff | Get a portal tariff|
|[**getUsedSpace**](#getusedspace) | **GET** /api/2.0/portal/usedspace | Get the portal used space|

# **getQuota**
> TenantQuotaWrapper getQuota()

Returns the current portal quota.

### Example

```typescript
import {
    PortalQuotaApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalQuotaApi(configuration);

const { status, data } = await apiInstance.getQuota();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantQuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current portal quota |  -  |
|**401** | Unauthorized |  -  |
|**403** | No permissions to perform this action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRightQuota**
> TenantQuotaWrapper getRightQuota()

Returns the recommended quota for the current portal.

### Example

```typescript
import {
    PortalQuotaApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalQuotaApi(configuration);

const { status, data } = await apiInstance.getRightQuota();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantQuotaWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recommended portal quota |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTariff**
> TariffWrapper getTariff()

Returns the current portal tariff.

### Example

```typescript
import {
    PortalQuotaApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalQuotaApi(configuration);

let refresh: boolean; //The value indicating whether the current portal tariff information should be refreshed. (optional) (default to undefined)

const { status, data } = await apiInstance.getTariff(
    refresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] | The value indicating whether the current portal tariff information should be refreshed. | (optional) defaults to undefined|


### Return type

**TariffWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current portal tariff |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsedSpace**
> DoubleWrapper getUsedSpace()

Returns the used space of the current portal.

### Example

```typescript
import {
    PortalQuotaApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new PortalQuotaApi(configuration);

const { status, data } = await apiInstance.getUsedSpace();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DoubleWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Used portal space |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

