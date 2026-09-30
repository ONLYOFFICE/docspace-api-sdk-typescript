# OAuth2Api

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateJwtToken**](#generatejwttoken) | **GET** /api/2.0/security/oauth2/token | Generate JWT token|

# **generateJwtToken**
> StringWrapper generateJwtToken()

Issues a short-lived JWT that identifies the calling user to the identity service, the component that stores  the OAuth2 applications of this installation and their consents. Any signed-in user may call it, nothing has  to be prepared first, and the token always describes the caller - it cannot be issued on behalf of somebody  else. The token is signed with the installation\'s own key and carries the user ID, name and e-mail, the portal  ID and address, whether the caller is an administrator or a guest, and whether the portal\'s developer tools  setting leaves OAuth2 applications open to ordinary users. It expires five minutes after it was issued and is  meant to be presented to the identity service in the `x-signature` header, not to this API: requests to the  portal are authorized with the token that `POST api/2.0/authentication` returns, and this JWT is not accepted  in its place. The call is read-only and gives the token back as a plain string; ask for a fresh one per  exchange instead of storing it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-jwt-token/).

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityOAuth2Api,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityOAuth2Api(configuration);

const { status, data } = await apiInstance.generateJwtToken();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The signed JWT identifying the caller, valid for five minutes |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

