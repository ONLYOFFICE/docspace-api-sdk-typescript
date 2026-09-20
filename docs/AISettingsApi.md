# SettingsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiSettingsGet**](#aisettingsget) | **GET** /api/2.0/ai/config | Get AI settings|
|[**aiSettingsGetUser**](#aisettingsgetuser) | **GET** /api/2.0/ai/config/user | Get user AI settings|
|[**aiSettingsGetVectorization**](#aisettingsgetvectorization) | **GET** /api/2.0/ai/config/vectorization | Get vectorization settings|
|[**aiSettingsSetUser**](#aisettingssetuser) | **PUT** /api/2.0/ai/config/user | Update user AI settings|
|[**aiSettingsSetVectorization**](#aisettingssetvectorization) | **PUT** /api/2.0/ai/config/vectorization | Update vectorization settings|

# **aiSettingsGet**
> AiAiSettingsWrapper aiSettingsGet()

Reports the portal\'s AI configuration and whether AI is usable at all, which is the first call a client makes before offering any AI feature. It takes no parameters and is proxied unchanged to the DocSpace AI service, so the answer is that service\'s settings payload. Among other things it says whether the portal runs on the central AI gateway, which decides whether provider profiles can be edited here at all. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiAiSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGet();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The portal\'s AI configuration and whether AI is usable at all. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSettingsGetUser**
> AiAiUserSettingsWrapper aiSettingsGetUser()

Returns the AI settings of the calling user, as opposed to the portal-wide ones. It takes no parameters - the user is the authenticated caller, and there is no way to read somebody else\'s settings - and is proxied unchanged to the DocSpace AI service. Use `GET api/2.0/ai/config` for the portal-wide configuration. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-user/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiAiUserSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGetUser();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The calling user\'s AI settings. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSettingsGetVectorization**
> AiVectorizationSettingsWrapper aiSettingsGetVectorization()

Returns the portal\'s vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-get-vectorization/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AiVectorizationSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

const { status, data } = await apiInstance.aiSettingsGetVectorization();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The portal\'s vectorization settings. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSettingsSetUser**
> AiAiUserSettingsWrapper aiSettingsSetUser(requestBody)

Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service\'s verdict. Only the caller\'s own settings can be written. Portal-wide configuration is not touched by this operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-user/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**| The user\'s AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed. | |


### Return type

**AiAiUserSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

let requestBody: { [key: string]: any | null; }; //The user\'s AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed.

const { status, data } = await apiInstance.aiSettingsSetUser(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The calling user\'s stored AI settings. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiSettingsSetVectorization**
> AiVectorizationSettingsWrapper aiSettingsSetVectorization(requestBody)

Replaces the portal\'s vectorization settings and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value is reported with that service\'s own verdict rather than being checked here. Changing the embedding provider does not re-index anything already indexed - start that separately with `POST api/2.0/ai/vectorization/tasks`. This is a portal-wide setting and requires the permissions the AI service demands for it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-settings-set-vectorization/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**| The portal\'s vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed. | |


### Return type

**AiVectorizationSettingsWrapper**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISettingsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISettingsApi(configuration);

let requestBody: { [key: string]: any | null; }; //The portal\'s vectorization settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/vectorization` and send it back changed.

const { status, data } = await apiInstance.aiSettingsSetVectorization(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The stored vectorization settings. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

