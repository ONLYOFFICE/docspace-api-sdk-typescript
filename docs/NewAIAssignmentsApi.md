# AssignmentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**newAiAssignmentsAssign**](#newaiassignmentsassign) | **PUT** /api/2.0/ai/assignments/assign | Assign|
|[**newAiAssignmentsBulkAssign**](#newaiassignmentsbulkassign) | **PUT** /api/2.0/ai/assignments/bulk-assign | Bulk assign|
|[**newAiAssignmentsCascadeProfileDelete**](#newaiassignmentscascadeprofiledelete) | **DELETE** /api/2.0/ai/assignments/cascade-profile-delete | Cascade profile delete|
|[**newAiAssignmentsGetAllAssignments**](#newaiassignmentsgetallassignments) | **GET** /api/2.0/ai/assignments/get-all-assignments | Get all assignments|
|[**newAiAssignmentsGetAssignment**](#newaiassignmentsgetassignment) | **GET** /api/2.0/ai/assignments/get-assignment | Get assignment|
|[**newAiAssignmentsResolveForAction**](#newaiassignmentsresolveforaction) | **GET** /api/2.0/ai/assignments/resolve-for-action | Resolve for action|
|[**newAiAssignmentsTryResolveForAction**](#newaiassignmentstryresolveforaction) | **GET** /api/2.0/ai/assignments/try-resolve-for-action | Try resolve for action|
|[**newAiAssignmentsUnassign**](#newaiassignmentsunassign) | **DELETE** /api/2.0/ai/assignments/unassign | Unassign|

# **newAiAssignmentsAssign**
> NewAiAssignmentMutationResult newAiAssignmentsAssign(newAiAssignmentsAssignRequest)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-assign/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newAiAssignmentsAssignRequest** | **NewAiAssignmentsAssignRequest**|  | |


### Return type

**NewAiAssignmentMutationResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration,
    NewAiAssignmentsAssignRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let newAiAssignmentsAssignRequest: NewAiAssignmentsAssignRequest; //

const { status, data } = await apiInstance.newAiAssignmentsAssign(
    newAiAssignmentsAssignRequest
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

# **newAiAssignmentsBulkAssign**
> NewAiBulkAssignmentResult newAiAssignmentsBulkAssign(requestBody)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-bulk-assign/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |


### Return type

**NewAiBulkAssignmentResult**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.newAiAssignmentsBulkAssign(
    requestBody
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

# **newAiAssignmentsCascadeProfileDelete**
> NewAiSuccessResponse newAiAssignmentsCascadeProfileDelete(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-cascade-profile-delete/).

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
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiAssignmentsCascadeProfileDelete(
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

# **newAiAssignmentsGetAllAssignments**
> { [key: string]: string; } newAiAssignmentsGetAllAssignments()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-all-assignments/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiAssignmentsGetAllAssignments(
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

# **newAiAssignmentsGetAssignment**
> string newAiAssignmentsGetAssignment()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-get-assignment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let actionType: string; // (default to undefined)

const { status, data } = await apiInstance.newAiAssignmentsGetAssignment(
    actionType
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

# **newAiAssignmentsResolveForAction**
> NewAiResolvedAssignment newAiAssignmentsResolveForAction()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-resolve-for-action/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**NewAiResolvedAssignment**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let actionType: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiAssignmentsResolveForAction(
    actionType,
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

# **newAiAssignmentsTryResolveForAction**
> NewAiResolvedAssignment newAiAssignmentsTryResolveForAction()


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-try-resolve-for-action/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**NewAiResolvedAssignment**

### Authorization

No authorization required

### Example

```typescript
import {
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let actionType: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.newAiAssignmentsTryResolveForAction(
    actionType,
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

# **newAiAssignmentsUnassign**
> NewAiSuccessResponse newAiAssignmentsUnassign(body)


For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-assignments-unassign/).

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
    NewAIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new NewAIAssignmentsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.newAiAssignmentsUnassign(
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

