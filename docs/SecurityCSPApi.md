# SecurityCSPApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**configureCsp**](#configurecsp) | **POST** /api/2.0/security/csp | Configure CSP settings|
|[**getCspSettings**](#getcspsettings) | **GET** /api/2.0/security/csp | Get CSP settings|

# **configureCsp**
> CspWrapper configureCsp()

Configures the CSP (Content Security Policy) settings for the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-csp/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cspRequestsDto** | **CspRequestsDto**|  | |


### Return type

**CspWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityCSPApi,
    Configuration,
    CspRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityCSPApi(configuration);

let cspRequestsDto: CspRequestsDto; // (optional)

const { status, data } = await apiInstance.configureCsp(
    cspRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Exception in Domains |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCspSettings**
> CspWrapper getCspSettings()

Returns the CSP (Content Security Policy) settings for the current portal.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-csp-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CspWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    SecurityCSPApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityCSPApi(configuration);

const { status, data } = await apiInstance.getCspSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

