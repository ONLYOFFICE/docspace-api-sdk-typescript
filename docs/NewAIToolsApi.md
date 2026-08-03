# ToolsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiToolsAddCustomServer**](#newaitoolsaddcustomserver) | **POST** /api/2.0/ai/tools/add-custom-server | Add custom server|
|[**newAiToolsGetAllowAlways**](#newaitoolsgetallowalways) | **GET** /api/2.0/ai/tools/get-allow-always | Get allow always|
|[**newAiToolsGetCustomServer**](#newaitoolsgetcustomserver) | **GET** /api/2.0/ai/tools/get-custom-server | Get custom server|
|[**newAiToolsGetDisabled**](#newaitoolsgetdisabled) | **GET** /api/2.0/ai/tools/get-disabled | Get disabled|
|[**newAiToolsIsAllowAlways**](#newaitoolsisallowalways) | **GET** /api/2.0/ai/tools/is-allow-always | Is allow always|
|[**newAiToolsIsToolDisabled**](#newaitoolsistooldisabled) | **GET** /api/2.0/ai/tools/is-tool-disabled | Is tool disabled|
|[**newAiToolsListCustomServers**](#newaitoolslistcustomservers) | **GET** /api/2.0/ai/tools/list-custom-servers | List custom servers|
|[**newAiToolsListSystemTools**](#newaitoolslistsystemtools) | **GET** /api/2.0/ai/tools/list-system-tools | List system tools|
|[**newAiToolsRemoveCustomServer**](#newaitoolsremovecustomserver) | **DELETE** /api/2.0/ai/tools/remove-custom-server | Remove custom server|
|[**newAiToolsReplaceAllCustomServers**](#newaitoolsreplaceallcustomservers) | **PUT** /api/2.0/ai/tools/replace-all-custom-servers | Replace all custom servers|
|[**newAiToolsSetAllowAlways**](#newaitoolssetallowalways) | **PUT** /api/2.0/ai/tools/set-allow-always | Set allow always|
|[**newAiToolsSetDisabled**](#newaitoolssetdisabled) | **PUT** /api/2.0/ai/tools/set-disabled | Set disabled|
|[**newAiToolsUpdateCustomServer**](#newaitoolsupdatecustomserver) | **PUT** /api/2.0/ai/tools/update-custom-server | Update custom server|

# **newAiToolsAddCustomServer**
> NewAiToolsMutationResult newAiToolsAddCustomServer(newAiToolsAddCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-add-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsAddCustomServerRequest** | **NewAiToolsAddCustomServerRequest**|  | |


### Return type

**NewAiToolsMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsAddCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsAddCustomServerRequest: NewAiToolsAddCustomServerRequest; //

const { status, data } = await apiInstance.newAiToolsAddCustomServer(
    newAiToolsAddCustomServerRequest
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

# **newAiToolsGetAllowAlways**
> Array<string> newAiToolsGetAllowAlways()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-allow-always/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**Array<string>**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsGetAllowAlways(
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

# **newAiToolsGetCustomServer**
> object newAiToolsGetCustomServer()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let name: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsGetCustomServer(
    name,
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

# **newAiToolsGetDisabled**
> { [key: string]: Array<string>; } newAiToolsGetDisabled()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-get-disabled/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: Array<string>; }**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsGetDisabled(
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

# **newAiToolsIsAllowAlways**
> boolean newAiToolsIsAllowAlways()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-allow-always/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverType** | [**string**] |  | defaults to undefined|
| **toolName** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let serverType: string; // (default to undefined)
let toolName: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsIsAllowAlways(
    serverType,
    toolName,
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

# **newAiToolsIsToolDisabled**
> boolean newAiToolsIsToolDisabled()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-is-tool-disabled/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverType** | [**string**] |  | defaults to undefined|
| **toolName** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let serverType: string; // (default to undefined)
let toolName: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsIsToolDisabled(
    serverType,
    toolName,
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

# **newAiToolsListCustomServers**
> { [key: string]: object; } newAiToolsListCustomServers()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-custom-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: object; }**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsListCustomServers(
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

# **newAiToolsListSystemTools**
> { [key: string]: Array<NewAiTMCPItem>; } newAiToolsListSystemTools()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-list-system-tools/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: Array<NewAiTMCPItem>; }**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiToolsListSystemTools(
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

# **newAiToolsRemoveCustomServer**
> NewAiSuccessResponse newAiToolsRemoveCustomServer(newAiToolsRemoveCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-remove-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsRemoveCustomServerRequest** | **NewAiToolsRemoveCustomServerRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsRemoveCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsRemoveCustomServerRequest: NewAiToolsRemoveCustomServerRequest; //

const { status, data } = await apiInstance.newAiToolsRemoveCustomServer(
    newAiToolsRemoveCustomServerRequest
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

# **newAiToolsReplaceAllCustomServers**
> NewAiToolsBulkResult newAiToolsReplaceAllCustomServers(newAiToolsReplaceAllCustomServersRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-replace-all-custom-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsReplaceAllCustomServersRequest** | **NewAiToolsReplaceAllCustomServersRequest**|  | |


### Return type

**NewAiToolsBulkResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsReplaceAllCustomServersRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsReplaceAllCustomServersRequest: NewAiToolsReplaceAllCustomServersRequest; //

const { status, data } = await apiInstance.newAiToolsReplaceAllCustomServers(
    newAiToolsReplaceAllCustomServersRequest
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

# **newAiToolsSetAllowAlways**
> NewAiSuccessResponse newAiToolsSetAllowAlways(newAiToolsSetAllowAlwaysRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-allow-always/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsSetAllowAlwaysRequest** | **NewAiToolsSetAllowAlwaysRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsSetAllowAlwaysRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsSetAllowAlwaysRequest: NewAiToolsSetAllowAlwaysRequest; //

const { status, data } = await apiInstance.newAiToolsSetAllowAlways(
    newAiToolsSetAllowAlwaysRequest
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

# **newAiToolsSetDisabled**
> NewAiSuccessResponse newAiToolsSetDisabled(newAiToolsSetDisabledRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-set-disabled/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsSetDisabledRequest** | **NewAiToolsSetDisabledRequest**|  | |


### Return type

**NewAiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsSetDisabledRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsSetDisabledRequest: NewAiToolsSetDisabledRequest; //

const { status, data } = await apiInstance.newAiToolsSetDisabled(
    newAiToolsSetDisabledRequest
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

# **newAiToolsUpdateCustomServer**
> NewAiToolsMutationResult newAiToolsUpdateCustomServer(newAiToolsUpdateCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-tools-update-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiToolsUpdateCustomServerRequest** | **NewAiToolsUpdateCustomServerRequest**|  | |


### Return type

**NewAiToolsMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIToolsApi,
    Configuration,
    NewAiToolsUpdateCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIToolsApi(configuration);

let newAiToolsUpdateCustomServerRequest: NewAiToolsUpdateCustomServerRequest; //

const { status, data } = await apiInstance.newAiToolsUpdateCustomServer(
    newAiToolsUpdateCustomServerRequest
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

