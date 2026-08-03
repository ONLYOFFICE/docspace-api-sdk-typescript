# PreferencesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiPreferencesClearDeepMode**](#newaipreferencescleardeepmode) | **DELETE** /api/2.0/ai/preferences/clear-deep-mode | Clear deep mode|
|[**newAiPreferencesGetDeepMode**](#newaipreferencesgetdeepmode) | **GET** /api/2.0/ai/preferences/get-deep-mode | Get deep mode|
|[**newAiPreferencesIsDeepModeSet**](#newaipreferencesisdeepmodeset) | **GET** /api/2.0/ai/preferences/is-deep-mode-set | Is deep mode set|
|[**newAiPreferencesSetDeepMode**](#newaipreferencessetdeepmode) | **PUT** /api/2.0/ai/preferences/set-deep-mode | Set deep mode|

# **newAiPreferencesClearDeepMode**
> NewAiSuccessResponse newAiPreferencesClearDeepMode(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-clear-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPreferencesApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiPreferencesClearDeepMode(
    body
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiPreferencesGetDeepMode**
> boolean newAiPreferencesGetDeepMode()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-get-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPreferencesApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiPreferencesGetDeepMode(
    entityId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiPreferencesIsDeepModeSet**
> boolean newAiPreferencesIsDeepModeSet()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-is-deep-mode-set/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPreferencesApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiPreferencesIsDeepModeSet(
    entityId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newAiPreferencesSetDeepMode**
> NewAiSuccessResponse newAiPreferencesSetDeepMode(newAiPreferencesSetDeepModeRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-preferences-set-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiPreferencesSetDeepModeRequest** | **NewAiPreferencesSetDeepModeRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIPreferencesApi,
    Configuration,
    NewAiPreferencesSetDeepModeRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIPreferencesApi(configuration);

let newAiPreferencesSetDeepModeRequest: NewAiPreferencesSetDeepModeRequest; //

const { status, data } = await apiInstance.newAiPreferencesSetDeepMode(
    newAiPreferencesSetDeepModeRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

