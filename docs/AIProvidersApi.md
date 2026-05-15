# ProvidersApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addProvider**](#addprovider) | **POST** /api/2.0/ai/providers | Add an AI provider|
|[**deleteProviders**](#deleteproviders) | **DELETE** /api/2.0/ai/providers | Delete AI providers|
|[**getAvailableProviders**](#getavailableproviders) | **GET** /api/2.0/ai/providers/available | Get available AI provider types|
|[**getDefaultProvider**](#getdefaultprovider) | **GET** /api/2.0/ai/providers/default | Get the default AI provider|
|[**getProviderModels**](#getprovidermodels) | **GET** /api/2.0/ai/providers/{providerId}/models | Get all models for a provider with their settings|
|[**getProviders**](#getproviders) | **GET** /api/2.0/ai/providers | Get AI providers|
|[**previewProviderModels**](#previewprovidermodels) | **POST** /api/2.0/ai/providers/models/preview | Preview models for a new AI provider|
|[**setDefaultProvider**](#setdefaultprovider) | **PUT** /api/2.0/ai/providers/default | Set the default AI provider|
|[**updateProvider**](#updateprovider) | **PUT** /api/2.0/ai/providers/{id} | Update an AI provider|

# **addProvider**
> AiProviderWrapper addProvider()

Registers a new AI provider for the current tenant by specifying its type, display title, API endpoint URL, and authentication key.  The provider becomes available for AI chat conversations after creation. This action is rate-limited.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/add-provider/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProviderRequestDto** | **CreateProviderRequestDto**|  | |


### Return type

**AiProviderWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration,
    CreateProviderRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let createProviderRequestDto: CreateProviderRequestDto; // (optional)

const { status, data } = await apiInstance.addProvider(
    createProviderRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Created AI provider details |  -  |
|**400** | Invalid connection data or provider with this name already exists |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProviders**
> deleteProviders()

Permanently deletes one or more AI providers by their identifiers.  All specified providers are removed from the current tenant. This action cannot be undone.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-providers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeProviderRequestDto** | **RemoveProviderRequestDto**|  | |


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration,
    RemoveProviderRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let removeProviderRequestDto: RemoveProviderRequestDto; // (optional)

const { status, data } = await apiInstance.deleteProviders(
    removeProviderRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The providers were successfully deleted |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableProviders**
> ProviderSettingsArrayWrapper getAvailableProviders()

Returns the list of AI provider types that are available for configuration on the current instance.  Each entry includes the provider type identifier and the default API endpoint URL.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-providers/).

### Parameters
This endpoint does not have any parameters.


### Return type

**ProviderSettingsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

const { status, data } = await apiInstance.getAvailableProviders();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available AI provider types |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDefaultProvider**
> DefaultProviderWrapper getDefaultProvider()

Returns the default AI provider and model configured for the current tenant.  Returns null if the tenant does not have any registered providers.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-provider/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DefaultProviderWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

const { status, data } = await apiInstance.getDefaultProvider();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default provider information or null if not set |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProviderModels**
> ModelSettingsArrayWrapper getProviderModels()

Returns the full list of AI models available from a provider, including both recommended and additional models.  Each model includes its current settings: enabled state, display alias, and capabilities (vision, tool calling, thinking).  Recommended models are enabled by default and their alias and capabilities come from configuration.  Additional models are disabled by default and can be configured by the admin.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-provider-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**number**] | The identifier of the AI provider. | defaults to undefined|


### Return type

**ModelSettingsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let providerId: number; //The identifier of the AI provider. (default to undefined)

const { status, data } = await apiInstance.getProviderModels(
    providerId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of models with settings |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**404** | Provider not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProviders**
> AiProviderArrayWrapper getProviders()

Returns a paginated list of AI providers configured for the current tenant.  Supports pagination via the startIndex and count query parameters. The total number of providers is included in the response metadata.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-providers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startIndex** | [**number**] | The number of items to skip before returning results (zero-based offset). Defaults to 0. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of items to return per page. Defaults to 100. | (optional) defaults to undefined|


### Return type

**AiProviderArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let startIndex: number; //The number of items to skip before returning results (zero-based offset). Defaults to 0. (optional) (default to undefined)
let count: number; //The maximum number of items to return per page. Defaults to 100. (optional) (default to undefined)

const { status, data } = await apiInstance.getProviders(
    startIndex,
    count
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of AI providers |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewProviderModels**
> ModelSettingsArrayWrapper previewProviderModels()

Connects to the specified AI provider using the provided credentials and returns the available models  with their default settings. This is used to preview models before saving the provider.  Recommended models are enabled by default with configuration-defined settings.  Additional models are disabled by default with empty capabilities.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/preview-provider-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **previewProviderModelsRequestDto** | **PreviewProviderModelsRequestDto**|  | |


### Return type

**ModelSettingsArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration,
    PreviewProviderModelsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let previewProviderModelsRequestDto: PreviewProviderModelsRequestDto; // (optional)

const { status, data } = await apiInstance.previewProviderModels(
    previewProviderModelsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of models with default settings |  -  |
|**400** | Invalid connection data or unsupported provider type |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setDefaultProvider**
> DefaultProviderWrapper setDefaultProvider()

Sets the default AI provider and model for the current tenant.  The specified provider and model will be used as the default for all new AI chat sessions within the tenant.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-provider/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDefaultProviderRequestDto** | **SetDefaultProviderRequestDto**|  | |


### Return type

**DefaultProviderWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration,
    SetDefaultProviderRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let setDefaultProviderRequestDto: SetDefaultProviderRequestDto; // (optional)

const { status, data } = await apiInstance.setDefaultProvider(
    setDefaultProviderRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default provider information |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**404** | Provider not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProvider**
> AiProviderWrapper updateProvider(updateProviderBody)

Updates the configuration of an existing AI provider, including its display title, API endpoint URL, and authentication key.  Only the fields provided in the request body will be updated. This action is rate-limited.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-provider/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProviderBody** | **UpdateProviderBody**| The AI provider configuration parameters to update. | |
| **id** | [**number**] | The identifier of the AI provider to update. | defaults to undefined|


### Return type

**AiProviderWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    AIProvidersApi,
    Configuration,
    UpdateProviderBody
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProvidersApi(configuration);

let id: number; //The identifier of the AI provider to update. (default to undefined)
let updateProviderBody: UpdateProviderBody; //The AI provider configuration parameters to update.

const { status, data } = await apiInstance.updateProvider(
    id,
    updateProviderBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated AI provider details |  -  |
|**400** | Invalid connection data or provider with this name already exists |  -  |
|**403** | You don\'t have enough permission to manage providers |  -  |
|**404** | The provider with the specified ID was not found |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

