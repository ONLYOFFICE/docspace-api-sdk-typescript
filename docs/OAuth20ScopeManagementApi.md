# OAuth20ScopeManagementApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getScopes**](#getscopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes|

# **getScopes**
> ScopeResponse getScopes()

Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first.

### Example

```typescript
import {
    OAuth20ScopeManagementApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ScopeManagementApi(configuration);

const { status, data } = await apiInstance.getScopes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ScopeResponse**

### Authorization

[asc_auth_key](../README.md#asc_auth_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scopes successfully retrieved |  -  |
|**400** | Invalid request parameters |  -  |
|**403** | Insufficient permissions to get a list of scopes |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

