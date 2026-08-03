# ProfilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiProfilesCreate**](#newaiprofilescreate) | **POST** /api/2.0/ai/profiles/create | Create|
|[**newAiProfilesDelete**](#newaiprofilesdelete) | **DELETE** /api/2.0/ai/profiles/delete | Delete|
|[**newAiProfilesGetById**](#newaiprofilesgetbyid) | **GET** /api/2.0/ai/profiles/get-by-id | Get by id|
|[**newAiProfilesList**](#newaiprofileslist) | **GET** /api/2.0/ai/profiles/list | List|
|[**newAiProfilesListModels**](#newaiprofileslistmodels) | **GET** /api/2.0/ai/profiles/list-models | List models|
|[**newAiProfilesListProviderModels**](#newaiprofileslistprovidermodels) | **POST** /api/2.0/ai/profiles/list-provider-models | List provider models|
|[**newAiProfilesTestConnection**](#newaiprofilestestconnection) | **POST** /api/2.0/ai/profiles/test-connection | Test connection|
|[**newAiProfilesUpdate**](#newaiprofilesupdate) | **PUT** /api/2.0/ai/profiles/update | Update|

# **newAiProfilesCreate**
> NewAiProfileMutationResult newAiProfilesCreate(newAiCreateProfileInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiCreateProfileInput** | **NewAiCreateProfileInput**|  | |


### Return type

**NewAiProfileMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration,
    NewAiCreateProfileInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let newAiCreateProfileInput: NewAiCreateProfileInput; //

const { status, data } = await apiInstance.newAiProfilesCreate(
    newAiCreateProfileInput
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

# **newAiProfilesDelete**
> NewAiSuccessResponse newAiProfilesDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-delete/).

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
    NewAIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiProfilesDelete(
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

# **newAiProfilesGetById**
> NewAiProfile newAiProfilesGetById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NewAiProfile**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.newAiProfilesGetById(
    id
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

# **newAiProfilesList**
> Array<NewAiProfile> newAiProfilesList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NewAiProfile>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

const { status, data } = await apiInstance.newAiProfilesList();
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

# **newAiProfilesListModels**
> Array<NewAiModel> newAiProfilesListModels()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileId** | [**string**] |  | defaults to undefined|


### Return type

**Array<NewAiModel>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let profileId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiProfilesListModels(
    profileId
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

# **newAiProfilesListProviderModels**
> Array<NewAiModel> newAiProfilesListProviderModels(newAiProfilesListProviderModelsRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-list-provider-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiProfilesListProviderModelsRequest** | **NewAiProfilesListProviderModelsRequest**|  | |


### Return type

**Array<NewAiModel>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration,
    NewAiProfilesListProviderModelsRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let newAiProfilesListProviderModelsRequest: NewAiProfilesListProviderModelsRequest; //

const { status, data } = await apiInstance.newAiProfilesListProviderModels(
    newAiProfilesListProviderModelsRequest
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

# **newAiProfilesTestConnection**
> NewAiProfilesTestConnection200Response newAiProfilesTestConnection(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-test-connection/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**NewAiProfilesTestConnection200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiProfilesTestConnection(
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

# **newAiProfilesUpdate**
> NewAiProfileMutationResult newAiProfilesUpdate(newAiProfile)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-profiles-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiProfile** | **NewAiProfile**|  | |


### Return type

**NewAiProfileMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIProfilesApi,
    Configuration,
    NewAiProfile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIProfilesApi(configuration);

let newAiProfile: NewAiProfile; //

const { status, data } = await apiInstance.newAiProfilesUpdate(
    newAiProfile
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

