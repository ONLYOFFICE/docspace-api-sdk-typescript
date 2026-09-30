# ThirdPartyApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getThirdPartyCode**](#getthirdpartycode) | **GET** /api/2.0/thirdparty/{provider} | Get provider consent URL|

# **getThirdPartyCode**
> StringWrapper getThirdPartyCode()

Builds and returns, as a string, the OAuth 2.0 consent URL of one external provider - the address a client  opens in a browser so that the user can grant this portal access to their account. The provider\'s client id,  secret and redirect URI have to be saved for the portal first with `POST api/2.0/settings/authservice`;  without them the URL has no `client_id` and the provider refuses it. Any signed-in portal user may call it,  and the call is read-only and safe to repeat. The URL carries `response_type=code`, the portal\'s `client_id`,  the provider\'s `redirect_uri`, the scope the portal needs (Drive with offline access for Google, `signature`  for DocuSign) and a `state` pointing back at this portal\'s `thirdparty/{provider}/code` page, where the code  arrives in the URL fragment as `#code=...`, or `#error/...` when the user declines. Only Google `1`, Dropbox  `2`, Docusign `3`, Box `4`, OneDrive `5`, Wordpress `10` and Github `13` produce a URL; any other value is  answered with 200 and no URL instead of an error. With `desktop=true`, the whole query string is copied into  `state` and comes back on the callback. The code is not exchanged here: pass it on as `token` to  `POST api/2.0/files/thirdparty` to connect the account.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | **LoginProvider** | The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and  Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider  credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a  client identifier and the provider refuses it. | defaults to undefined|


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    ThirdPartyApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new ThirdPartyApi(configuration);

let provider: LoginProvider; //The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and  Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider  credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a  client identifier and the provider refuses it. (default to undefined)

const { status, data } = await apiInstance.getThirdPartyCode(
    provider
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The consent URL of the provider, ready to be opened in a browser; empty when the requested provider is not one of the seven this operation supports |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

