# PrivacyroomApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteKeys**](#deletekeys) | **DELETE** /api/2.0/privacyroom/keys/{id} | Deletes an encryption key and removes it from the system.|
|[**getUserKeys**](#getuserkeys) | **GET** /api/2.0/privacyroom/keys | Retrieves encryption keys associated with the current user.|
|[**getUserKeysForRoom**](#getuserkeysforroom) | **GET** /api/2.0/privacyroom/{roomId}/access | Retrieves the encryption keys associated with a specific privacy room.|
|[**replaceKey**](#replacekey) | **PUT** /api/2.0/privacyroom/keys | Replaces an existing encryption key with a new one for the user.|
|[**setKeys**](#setkeys) | **POST** /api/2.0/privacyroom/keys | Creates and sets encryption keys for the user.|

# **deleteKeys**
> EncryptionKeyArrayWrapper deleteKeys()

Deletes an encryption key and removes it from the system based on the provided key identifier.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The unique identifier of the encryption key to be deleted. | defaults to undefined|


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PrivacyroomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PrivacyroomApi(configuration);

let id: string; //The unique identifier of the encryption key to be deleted. (default to undefined)

const { status, data } = await apiInstance.deleteKeys(
    id
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserKeys**
> EncryptionKeyArrayWrapper getUserKeys()

Retrieves encryption keys associated with the current user.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/).

### Parameters
This endpoint does not have any parameters.


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PrivacyroomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PrivacyroomApi(configuration);

const { status, data } = await apiInstance.getUserKeys();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserKeysForRoom**
> EncryptionKeyArrayWrapper getUserKeysForRoom()

Retrieves the encryption keys associated with a specific privacy room.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomId** | [**number**] | The identifier of the privacy room. | defaults to undefined|


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PrivacyroomApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PrivacyroomApi(configuration);

let roomId: number; //The identifier of the privacy room. (default to undefined)

const { status, data } = await apiInstance.getUserKeysForRoom(
    roomId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceKey**
> EncryptionKeyArrayWrapper replaceKey()

Replaces an existing encryption key with a new one for the user.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encryptionKeyRequestDto** | **EncryptionKeyRequestDto**| The request object containing the public and private key information to replace the existing key. | |


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PrivacyroomApi,
    Configuration,
    EncryptionKeyRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PrivacyroomApi(configuration);

let encryptionKeyRequestDto: EncryptionKeyRequestDto; //The request object containing the public and private key information to replace the existing key. (optional)

const { status, data } = await apiInstance.replaceKey(
    encryptionKeyRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setKeys**
> EncryptionKeyArrayWrapper setKeys()

Creates and sets encryption keys for the user.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encryptionKeyRequestDto** | **EncryptionKeyRequestDto**| The request object containing public and private key information. | |


### Return type

**EncryptionKeyArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PrivacyroomApi,
    Configuration,
    EncryptionKeyRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PrivacyroomApi(configuration);

let encryptionKeyRequestDto: EncryptionKeyRequestDto; //The request object containing public and private key information. (optional)

const { status, data } = await apiInstance.setKeys(
    encryptionKeyRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * X-RateLimit-Limit - Sliding window rate limit: 1500 requests per minute per user/IP. <br>  * X-RateLimit-Remaining - Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. <br>  * X-RateLimit-Reset - Unix timestamp (seconds) when the current sliding window rate limit resets. <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After - Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). <br>  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

