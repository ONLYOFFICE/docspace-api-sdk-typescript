# CapabilitiesApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPortalCapabilities**](#getportalcapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities|

# **getPortalCapabilities**
> CapabilitiesWrapper getPortalCapabilities()

Returns the information about portal capabilities.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-capabilities/).

### Parameters
This endpoint does not have any parameters.


### Return type

**CapabilitiesWrapper**

### Authorization

No authorization required

### Example

```typescript
import {
    CapabilitiesApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new CapabilitiesApi(configuration);

const { status, data } = await apiInstance.getPortalCapabilities();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Portal capabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

