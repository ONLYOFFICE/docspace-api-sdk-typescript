# DiscoveryApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleOptions**](#handleoptions) | **OPTIONS** /.well-known/oauth-authorization-server | |

# **handleOptions**
> object handleOptions()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/handle-options/).

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

No authorization required

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
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

