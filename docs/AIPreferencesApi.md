# PreferencesApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiPreferencesClearDeepMode**](#aipreferencescleardeepmode) | **DELETE** /api/2.0/ai/preferences/clear-deep-mode | Clear deep mode|
|[**aiPreferencesGetDeepMode**](#aipreferencesgetdeepmode) | **GET** /api/2.0/ai/preferences/get-deep-mode | Get deep mode|
|[**aiPreferencesGetReasoningLevel**](#aipreferencesgetreasoninglevel) | **GET** /api/2.0/ai/preferences/get-reasoning-level | Get reasoning level|
|[**aiPreferencesIsDeepModeSet**](#aipreferencesisdeepmodeset) | **GET** /api/2.0/ai/preferences/is-deep-mode-set | Is deep mode set|
|[**aiPreferencesSetDeepMode**](#aipreferencessetdeepmode) | **PUT** /api/2.0/ai/preferences/set-deep-mode | Set deep mode|
|[**aiPreferencesSetReasoningLevel**](#aipreferencessetreasoninglevel) | **PUT** /api/2.0/ai/preferences/set-reasoning-level | Set reasoning level|

# **aiPreferencesClearDeepMode**
> AiSuccessResponse aiPreferencesClearDeepMode(body)

Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-clear-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference. | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let body: string; //The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference.

const { status, data } = await apiInstance.aiPreferencesClearDeepMode(
    body
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the scope has no preference of its own and now inherits the default. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPreferencesGetDeepMode**
> boolean aiPreferencesGetDeepMode()

Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiPreferencesGetDeepMode(
    entityId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether deep mode is on, falling back to the configured default when the scope has no value of its own. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPreferencesGetReasoningLevel**
> AiAiReasoningLevel aiPreferencesGetReasoningLevel()

Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-reasoning-level/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**AiAiReasoningLevel**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiPreferencesGetReasoningLevel(
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
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPreferencesIsDeepModeSet**
> boolean aiPreferencesIsDeepModeSet()

Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-is-deep-mode-set/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let entityId: string; //The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. (optional) (default to undefined)

const { status, data } = await apiInstance.aiPreferencesIsDeepModeSet(
    entityId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Whether the scope has a preference of its own, whichever way that preference is set. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPreferencesSetDeepMode**
> AiSuccessResponse aiPreferencesSetDeepMode(aiPreferencesSetDeepModeRequest)

Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-deep-mode/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPreferencesSetDeepModeRequest** | **AiPreferencesSetDeepModeRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration,
    AiPreferencesSetDeepModeRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let aiPreferencesSetDeepModeRequest: AiPreferencesSetDeepModeRequest; //

const { status, data } = await apiInstance.aiPreferencesSetDeepMode(
    aiPreferencesSetDeepModeRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Confirms the preference was stored. |  -  |
|**400** | `value` is missing or is not a boolean. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aiPreferencesSetReasoningLevel**
> AiSuccessResponse aiPreferencesSetReasoningLevel(aiPreferencesSetReasoningLevelRequest)

Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-reasoning-level/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiPreferencesSetReasoningLevelRequest** | **AiPreferencesSetReasoningLevelRequest**|  | |


### Return type

**AiSuccessResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AIPreferencesApi,
    Configuration,
    AiPreferencesSetReasoningLevelRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AIPreferencesApi(configuration);

let aiPreferencesSetReasoningLevelRequest: AiPreferencesSetReasoningLevelRequest; //

const { status, data } = await apiInstance.aiPreferencesSetReasoningLevel(
    aiPreferencesSetReasoningLevelRequest
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
|**403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

