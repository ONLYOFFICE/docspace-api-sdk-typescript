# ThirdPartyApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getThirdPartyCode**](#getthirdpartycode) | **GET** /api/2.0/thirdparty/{provider} | Get the code request|

# **getThirdPartyCode**
> ObjectWrapper getThirdPartyCode()

Returns a request to get the confirmation code from URL.   **Note**: List of providers: Google, Dropbox, Docusign, Box, OneDrive, Wordpress.

### Example

```typescript
import {
    ThirdPartyApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new ThirdPartyApi(configuration);

let provider: LoginProvider; //The identity provider used for authentication. (default to undefined)

const { status, data } = await apiInstance.getThirdPartyCode(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | **LoginProvider** | The identity provider used for authentication. | defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Code request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

