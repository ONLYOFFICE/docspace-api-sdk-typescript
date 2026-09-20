# DiscoveryApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleOptions**](#handleoptions) | **OPTIONS** /.well-known/oauth-authorization-server | Probe the discovery endpoint|

# **handleOptions**
> handleOptions()

Answers the CORS preflight for the OAuth 2.0 Authorization Server metadata endpoint. The endpoint needs no authentication and reads nothing from the request: it always answers 200 with an empty body, and the CORS headers are added by the surrounding filter chain rather than by this handler. It changes no state, and it does not return the authorization server metadata document - issue a GET against the same path for that.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/handle-options/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    OAuth20DiscoveryApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20DiscoveryApi(configuration);

const { status, data } = await apiInstance.handleOptions();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Preflight accepted; the response carries no body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

