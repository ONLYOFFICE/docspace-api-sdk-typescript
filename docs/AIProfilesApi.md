# ProfilesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiProfilesCreate**](#aiprofilescreate) | **POST** /api/2.0/ai/profiles/create | Create|
|[**aiProfilesDelete**](#aiprofilesdelete) | **DELETE** /api/2.0/ai/profiles/delete | Delete|
|[**aiProfilesGetById**](#aiprofilesgetbyid) | **GET** /api/2.0/ai/profiles/get-by-id | Get by id|
|[**aiProfilesList**](#aiprofileslist) | **GET** /api/2.0/ai/profiles/list | List|
|[**aiProfilesListModels**](#aiprofileslistmodels) | **GET** /api/2.0/ai/profiles/list-models | List models|
|[**aiProfilesListProviderModels**](#aiprofileslistprovidermodels) | **POST** /api/2.0/ai/profiles/list-provider-models | List provider models|
|[**aiProfilesTestConnection**](#aiprofilestestconnection) | **POST** /api/2.0/ai/profiles/test-connection | Test connection|
|[**aiProfilesUpdate**](#aiprofilesupdate) | **PUT** /api/2.0/ai/profiles/update | Update|

# **aiProfilesCreate**
> AiProfileMutationResult aiProfilesCreate(aiCreateProfileInput)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-create/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiCreateProfileInput** | **AiCreateProfileInput**|  | |


### Return type

**AiProfileMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration,
    AiCreateProfileInput
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let aiCreateProfileInput: AiCreateProfileInput; //

const { status, data } = await apiInstance.aiProfilesCreate(
    aiCreateProfileInput
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

# **aiProfilesDelete**
> AiSuccessResponse aiProfilesDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiProfilesDelete(
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

# **aiProfilesGetById**
> AiProfile aiProfilesGetById()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-get-by-id/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AiProfile**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.aiProfilesGetById(
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

# **aiProfilesList**
> Array<AiProfile> aiProfilesList()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list/).

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AiProfile>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

const { status, data } = await apiInstance.aiProfilesList();
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

# **aiProfilesListModels**
> Array<AiModel> aiProfilesListModels()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileId** | [**string**] |  | defaults to undefined|


### Return type

**Array<AiModel>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let profileId: string; // (default to undefined)

const { status, data } = await apiInstance.aiProfilesListModels(
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

# **aiProfilesListProviderModels**
> Array<AiModel> aiProfilesListProviderModels(aiProfilesListProviderModelsRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-list-provider-models/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiProfilesListProviderModelsRequest** | **AiProfilesListProviderModelsRequest**|  | |


### Return type

**Array<AiModel>**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration,
    AiProfilesListProviderModelsRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let aiProfilesListProviderModelsRequest: AiProfilesListProviderModelsRequest; //

const { status, data } = await apiInstance.aiProfilesListProviderModels(
    aiProfilesListProviderModelsRequest
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

# **aiProfilesTestConnection**
> AiProfilesTestConnection200Response aiProfilesTestConnection(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-test-connection/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiProfilesTestConnection200Response**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiProfilesTestConnection(
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

# **aiProfilesUpdate**
> AiProfileMutationResult aiProfilesUpdate(aiProfile)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-profiles-update/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiProfile** | **AiProfile**|  | |


### Return type

**AiProfileMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIProfilesApi,
    Configuration,
    AiProfile
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIProfilesApi(configuration);

let aiProfile: AiProfile; //

const { status, data } = await apiInstance.aiProfilesUpdate(
    aiProfile
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

