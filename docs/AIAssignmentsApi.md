# AssignmentsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiAssignmentsAssign**](#aiassignmentsassign) | **PUT** /api/2.0/ai/assignments/assign | Bind a profile to an action|
|[**aiAssignmentsBulkAssign**](#aiassignmentsbulkassign) | **PUT** /api/2.0/ai/assignments/bulk-assign | Bulk assign|
|[**aiAssignmentsCascadeProfileDelete**](#aiassignmentscascadeprofiledelete) | **DELETE** /api/2.0/ai/assignments/cascade-profile-delete | Cascade profile delete|
|[**aiAssignmentsGetAllAssignments**](#aiassignmentsgetallassignments) | **GET** /api/2.0/ai/assignments/get-all-assignments | Get all assignments|
|[**aiAssignmentsGetAssignment**](#aiassignmentsgetassignment) | **GET** /api/2.0/ai/assignments/get-assignment | Get assignment|
|[**aiAssignmentsResolveForAction**](#aiassignmentsresolveforaction) | **GET** /api/2.0/ai/assignments/resolve-for-action | Resolve for action|
|[**aiAssignmentsTryResolveForAction**](#aiassignmentstryresolveforaction) | **GET** /api/2.0/ai/assignments/try-resolve-for-action | Try resolve for action|
|[**aiAssignmentsUnassign**](#aiassignmentsunassign) | **DELETE** /api/2.0/ai/assignments/unassign | Clear an action\'s profile|

# **aiAssignmentsAssign**
> AiAssignmentMutationResult aiAssignmentsAssign(aiAssignmentsAssignRequest)

Binds a profile to one AI action portal-wide, creating the assignment or replacing it in place, and returns the result. Both `actionType` and `profileId` are required. The profile\'s declared capabilities are checked against the action, so a model that cannot generate images cannot be bound to `ImageGeneration` - the `Default` slot is exempt, because it stands in for every action. There is no room-scoped form of this write: a room\'s own binding is created by the agent that owns it, while reads accept an `entityId`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-assign/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAssignmentsAssignRequest** | **AiAssignmentsAssignRequest**|  | |


### Return type

**AiAssignmentMutationResult**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration,
    AiAssignmentsAssignRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let aiAssignmentsAssignRequest: AiAssignmentsAssignRequest; //

const { status, data } = await apiInstance.aiAssignmentsAssign(
    aiAssignmentsAssignRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the binding was stored. A failure is reported in `error` rather than as a status. |  -  |
|**400** | `actionType` or `profileId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsBulkAssign**
> AiBulkAssignmentResult aiAssignmentsBulkAssign(requestBody)

Applies many action-to-profile bindings in one write, which is how a settings screen saves the whole set. The body is a plain map of action type to profile ID, and every entry is validated before anything is written: one unknown action or one non-string profile ID rejects the request whole, so the set is never left half-applied. Each entry behaves as the single assign operation does, capability checks included. The answer carries the resulting assignment set.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-bulk-assign/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**| A map of action type to profile ID. Every key has to be a known action type and every value a profile ID; one bad entry rejects the whole map. | |


### Return type

**AiBulkAssignmentResult**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let requestBody: { [key: string]: string; }; //A map of action type to profile ID. Every key has to be a known action type and every value a profile ID; one bad entry rejects the whole map.

const { status, data } = await apiInstance.aiAssignmentsBulkAssign(
    requestBody
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the set was stored, with `errors` listing the entries that were refused. |  -  |
|**400** | The body is not a map of action type to profile ID, or one of its keys is not a known action type. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsCascadeProfileDelete**
> AiSuccessResponse aiAssignmentsCascadeProfileDelete(aiAssignmentsCascadeProfileDeleteRequest)

Detaches a profile from every assignment that points at it, which is the cleanup step before the profile itself is removed. The `Default` slot is promoted to the first remaining profile, or dropped when none is left, and every other slot holding the profile is cleared. `profileId` is required and may be sent in the body or as a query parameter. `DELETE api/2.0/ai/profiles/delete` already does this, so call it directly only when the profile is being removed by some other means.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-cascade-profile-delete/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiAssignmentsCascadeProfileDeleteRequest** | **AiAssignmentsCascadeProfileDeleteRequest**| The profile to detach from every assignment. May be sent as the `profileId` query parameter instead of in the body. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration,
    AiAssignmentsCascadeProfileDeleteRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let aiAssignmentsCascadeProfileDeleteRequest: AiAssignmentsCascadeProfileDeleteRequest; //The profile to detach from every assignment. May be sent as the `profileId` query parameter instead of in the body.

const { status, data } = await apiInstance.aiAssignmentsCascadeProfileDelete(
    aiAssignmentsCascadeProfileDeleteRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms no assignment points at the profile any more. |  -  |
|**400** | `profileId` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsGetAllAssignments**
> { [key: string]: string; } aiAssignmentsGetAllAssignments()

Returns every action-to-profile binding of a scope as one map, which is what a settings screen loads. `entityId` narrows it to a room and has to name one the caller can open; a room that is not an agent room degrades to the portal-wide set rather than answering empty, and omitting the parameter reads the portal-wide set directly. Actions with no binding are simply absent from the map. The `Default` slot is reported as an entry of its own rather than being folded into the others.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-all-assignments/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**{ [key: string]: string; }**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAssignmentsGetAllAssignments(
    entityId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The scope\'s bindings as a map of action type to profile ID. An action with no binding is absent. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**404** | The referenced object does not exist, or the caller cannot access it - the two are deliberately indistinguishable, so a room the caller may not open answers 404 rather than 403. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsGetAssignment**
> string aiAssignmentsGetAssignment()

Returns the profile bound to one AI action, without applying the `Default` fallback - an empty answer means this action has no profile of its own, not that nothing is configured. `actionType` is required and is read from the query. Use `GET api/2.0/ai/assignments/resolve-for-action` to learn which profile would actually serve the action. This reads the portal-wide binding and accepts no `entityId`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-get-assignment/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. | defaults to undefined|


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let actionType: string; //The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. (default to undefined)

const { status, data } = await apiInstance.aiAssignmentsGetAssignment(
    actionType
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The profile bound to the action, or an empty result when it has none of its own. |  -  |
|**400** | `actionType` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsResolveForAction**
> AiResolvedAssignment aiAssignmentsResolveForAction()

Returns the profile that will serve one AI action, falling back to the `Default` slot when the action has no profile of its own. `actionType` is required and has to be one of the known actions - an unknown or misspelled value is rejected rather than resolved to the default. `entityId` narrows the lookup to a room, and a room with no assignment of its own degrades to the portal-wide one. This fails when neither slot is set or the bound profile is gone, so use `GET api/2.0/ai/assignments/try-resolve-for-action` when an unconfigured portal should answer empty instead.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-resolve-for-action/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. | defaults to undefined|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**AiResolvedAssignment**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let actionType: string; //The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. (default to undefined)
let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAssignmentsResolveForAction(
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
|**200** | The profile that will serve the action. |  -  |
|**400** | `actionType` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsTryResolveForAction**
> AiResolvedAssignment aiAssignmentsTryResolveForAction()

Returns the profile that will serve one AI action, exactly as `GET api/2.0/ai/assignments/resolve-for-action` does, but answers with an empty result rather than failing when nothing is configured. `actionType` is required and is validated the same way, and `entityId` narrows the lookup to a room. This is the operation to call when the absence of a profile is a normal state to render - a settings screen, or a feature that hides itself. Both operations are read-only.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-try-resolve-for-action/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionType** | [**string**] | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. | defaults to undefined|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**AiResolvedAssignment**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let actionType: string; //The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. (default to undefined)
let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiAssignmentsTryResolveForAction(
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
|**200** | The profile that will serve the action, or an empty result when none is configured. |  -  |
|**400** | `actionType` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiAssignmentsUnassign**
> AiSuccessResponse aiAssignmentsUnassign(body)

Clears the portal-wide binding of one AI action, after which the action falls back to the `Default` slot. `actionType` is required and may be sent in the body or as a query parameter. An action whose slot is already empty is not reported as an error - the call answers success either way, so it is safe to repeat. Clearing `Default` itself leaves the actions that relied on it unresolvable.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-assignments-unassign/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIAssignmentsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIAssignmentsApi(configuration);

let body: string; //

const { status, data } = await apiInstance.aiAssignmentsUnassign(
    body
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the action now has no profile of its own. |  -  |
|**400** | `actionType` is missing. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

