# ScopeManagementApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getScopes**](#getscopes) | **GET** /api/2.0/oauth2/scopes | List available OAuth2 scopes|

# **getScopes**
> Array<ScopeResponse> getScopes()

Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the \'openid\' scope always appearing first. It is a read-only catalogue that does not depend on which clients exist: a valid portal signature is the only requirement, with no role restriction, and every caller of the portal sees the same list.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-scopes/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ScopeResponse>**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ScopeManagementApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ScopeManagementApi(configuration);

const { status, data } = await apiInstance.getScopes();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scopes successfully retrieved |  -  |
|**403** | Insufficient permissions to list scopes |  -  |
|**406** | The Accept header does not allow application/json |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

