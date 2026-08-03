# ToolsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiToolsAddCustomServer**](#aitoolsaddcustomserver) | **POST** /api/2.0/ai/tools/add-custom-server | Add custom server|
|[**aiToolsGetAllowAlways**](#aitoolsgetallowalways) | **GET** /api/2.0/ai/tools/get-allow-always | Get allow always|
|[**aiToolsGetCustomServer**](#aitoolsgetcustomserver) | **GET** /api/2.0/ai/tools/get-custom-server | Get custom server|
|[**aiToolsGetDisabled**](#aitoolsgetdisabled) | **GET** /api/2.0/ai/tools/get-disabled | Get disabled|
|[**aiToolsIsAllowAlways**](#aitoolsisallowalways) | **GET** /api/2.0/ai/tools/is-allow-always | Is allow always|
|[**aiToolsIsToolDisabled**](#aitoolsistooldisabled) | **GET** /api/2.0/ai/tools/is-tool-disabled | Is tool disabled|
|[**aiToolsListCustomServers**](#aitoolslistcustomservers) | **GET** /api/2.0/ai/tools/list-custom-servers | List custom servers|
|[**aiToolsListSystemTools**](#aitoolslistsystemtools) | **GET** /api/2.0/ai/tools/list-system-tools | List system tools|
|[**aiToolsRemoveCustomServer**](#aitoolsremovecustomserver) | **DELETE** /api/2.0/ai/tools/remove-custom-server | Remove custom server|
|[**aiToolsReplaceAllCustomServers**](#aitoolsreplaceallcustomservers) | **PUT** /api/2.0/ai/tools/replace-all-custom-servers | Replace all custom servers|
|[**aiToolsSetAllowAlways**](#aitoolssetallowalways) | **PUT** /api/2.0/ai/tools/set-allow-always | Set allow always|
|[**aiToolsSetDisabled**](#aitoolssetdisabled) | **PUT** /api/2.0/ai/tools/set-disabled | Set disabled|
|[**aiToolsUpdateCustomServer**](#aitoolsupdatecustomserver) | **PUT** /api/2.0/ai/tools/update-custom-server | Update custom server|

# **aiToolsAddCustomServer**
> AiToolsMutationResult aiToolsAddCustomServer(aiToolsAddCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsAddCustomServerRequest** | **AiToolsAddCustomServerRequest**|  | |


### Return type

**AiToolsMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsAddCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest; //

const { status, data } = await apiInstance.aiToolsAddCustomServer(
    aiToolsAddCustomServerRequest
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

# **aiToolsGetAllowAlways**
> Array<string> aiToolsGetAllowAlways()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsGetAllowAlways(
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

# **aiToolsGetCustomServer**
> object aiToolsGetCustomServer()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let name: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsGetCustomServer(
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

# **aiToolsGetDisabled**
> { [key: string]: Array<string>; } aiToolsGetDisabled()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsGetDisabled(
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

# **aiToolsIsAllowAlways**
> boolean aiToolsIsAllowAlways()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let serverType: string; // (default to undefined)
let toolName: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsIsAllowAlways(
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

# **aiToolsIsToolDisabled**
> boolean aiToolsIsToolDisabled()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let serverType: string; // (default to undefined)
let toolName: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsIsToolDisabled(
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

# **aiToolsListCustomServers**
> { [key: string]: object; } aiToolsListCustomServers()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/).

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
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsListCustomServers(
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

# **aiToolsListSystemTools**
> { [key: string]: Array<AiTMCPItem>; } aiToolsListSystemTools()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: Array<AiTMCPItem>; }**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.aiToolsListSystemTools(
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

# **aiToolsRemoveCustomServer**
> AiSuccessResponse aiToolsRemoveCustomServer(aiToolsRemoveCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsRemoveCustomServerRequest** | **AiToolsRemoveCustomServerRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsRemoveCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest; //

const { status, data } = await apiInstance.aiToolsRemoveCustomServer(
    aiToolsRemoveCustomServerRequest
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

# **aiToolsReplaceAllCustomServers**
> AiToolsBulkResult aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServersRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsReplaceAllCustomServersRequest** | **AiToolsReplaceAllCustomServersRequest**|  | |


### Return type

**AiToolsBulkResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsReplaceAllCustomServersRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest; //

const { status, data } = await apiInstance.aiToolsReplaceAllCustomServers(
    aiToolsReplaceAllCustomServersRequest
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

# **aiToolsSetAllowAlways**
> AiSuccessResponse aiToolsSetAllowAlways(aiToolsSetAllowAlwaysRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsSetAllowAlwaysRequest** | **AiToolsSetAllowAlwaysRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsSetAllowAlwaysRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest; //

const { status, data } = await apiInstance.aiToolsSetAllowAlways(
    aiToolsSetAllowAlwaysRequest
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

# **aiToolsSetDisabled**
> AiSuccessResponse aiToolsSetDisabled(aiToolsSetDisabledRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsSetDisabledRequest** | **AiToolsSetDisabledRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsSetDisabledRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsSetDisabledRequest: AiToolsSetDisabledRequest; //

const { status, data } = await apiInstance.aiToolsSetDisabled(
    aiToolsSetDisabledRequest
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

# **aiToolsUpdateCustomServer**
> AiToolsMutationResult aiToolsUpdateCustomServer(aiToolsUpdateCustomServerRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiToolsUpdateCustomServerRequest** | **AiToolsUpdateCustomServerRequest**|  | |


### Return type

**AiToolsMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    AIToolsApi,
    Configuration,
    AiToolsUpdateCustomServerRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIToolsApi(configuration);

let aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest; //

const { status, data } = await apiInstance.aiToolsUpdateCustomServer(
    aiToolsUpdateCustomServerRequest
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

