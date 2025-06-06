# SecurityAuditTrailDataApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAuditTrailReport**](#createaudittrailreport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report|
|[**getAuditEventsByFilter**](#getauditeventsbyfilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data|
|[**getAuditSettings**](#getauditsettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings|
|[**getAuditTrailMappers**](#getaudittrailmappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers|
|[**getAuditTrailTypes**](#getaudittrailtypes) | **GET** /api/2.0/security/audit/types | Get audit trail types|
|[**getLastAuditEvents**](#getlastauditevents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data|
|[**setAuditSettings**](#setauditsettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings|

# **createAuditTrailReport**
> StringWrapper createAuditTrailReport()

Generates the audit trail report.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.createAuditTrailReport();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StringWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | URL to the xlsx report file |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |
|**403** | You don\&#39;t have enough permission to create |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditEventsByFilter**
> AuditEventArrayWrapper getAuditEventsByFilter()

Returns a list of the audit events by the parameters specified in the request.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let userId: string; //The ID of the user who triggered the audit event. (optional) (default to undefined)
let productType: ProductType; //The type of product related to the audit event. (optional) (default to undefined)
let moduleType: ModuleType; //The module within the product where the audit event occurred. (optional) (default to undefined)
let actionType: ActionType; //The type of action performed in the audit event (e.g., Create, Update, Delete). (optional) (default to undefined)
let action: MessageAction; //The specific action that occurred within the audit event. (optional) (default to undefined)
let entryType: EntryType; //The type of audit entry (e.g., Folder, User, File). (optional) (default to undefined)
let target: string; //The target object affected by the audit event (e.g., document ID, user account). (optional) (default to undefined)
let from: ApiDateTime; //The starting date and time for filtering audit events. (optional) (default to undefined)
let to: ApiDateTime; //The ending date and time for filtering audit events. (optional) (default to undefined)
let count: number; //The maximum number of audit event records to retrieve. (optional) (default to undefined)
let startIndex: number; //The index of the first audit event record to retrieve in a paged query. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditEventsByFilter(
    userId,
    productType,
    moduleType,
    actionType,
    action,
    entryType,
    target,
    from,
    to,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The ID of the user who triggered the audit event. | (optional) defaults to undefined|
| **productType** | **ProductType** | The type of product related to the audit event. | (optional) defaults to undefined|
| **moduleType** | **ModuleType** | The module within the product where the audit event occurred. | (optional) defaults to undefined|
| **actionType** | **ActionType** | The type of action performed in the audit event (e.g., Create, Update, Delete). | (optional) defaults to undefined|
| **action** | **MessageAction** | The specific action that occurred within the audit event. | (optional) defaults to undefined|
| **entryType** | **EntryType** | The type of audit entry (e.g., Folder, User, File). | (optional) defaults to undefined|
| **target** | [**string**] | The target object affected by the audit event (e.g., document ID, user account). | (optional) defaults to undefined|
| **from** | **ApiDateTime** | The starting date and time for filtering audit events. | (optional) defaults to undefined|
| **to** | **ApiDateTime** | The ending date and time for filtering audit events. | (optional) defaults to undefined|
| **count** | [**number**] | The maximum number of audit event records to retrieve. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The index of the first audit event record to retrieve in a paged query. | (optional) defaults to undefined|


### Return type

**AuditEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of filtered audit trail data |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditSettings**
> TenantAuditSettingsWrapper getAuditSettings()

Returns the audit trail settings.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getAuditSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantAuditSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit settings |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailMappers**
> ObjectWrapper getAuditTrailMappers()

Returns the mappers for the audit trail types.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let productType: ProductType; //The type of product related to the audit trail. (optional) (default to undefined)
let moduleType: ModuleType; //The module within the product associated with the audit trail. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditTrailMappers(
    productType,
    moduleType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productType** | **ProductType** | The type of product related to the audit trail. | (optional) defaults to undefined|
| **moduleType** | **ModuleType** | The module within the product associated with the audit trail. | (optional) defaults to undefined|


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit trail mappers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailTypes**
> ObjectWrapper getAuditTrailTypes()

Returns all the available audit trail types.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getAuditTrailTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ObjectWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit trail types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLastAuditEvents**
> AuditEventArrayWrapper getLastAuditEvents()

Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getLastAuditEvents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuditEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of audit trail data |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setAuditSettings**
> TenantAuditSettingsWrapper setAuditSettings()

Sets the audit trail settings for the current portal.

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration,
    TenantAuditSettingsWrapper
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let tenantAuditSettingsWrapper: TenantAuditSettingsWrapper; // (optional)

const { status, data } = await apiInstance.setAuditSettings(
    tenantAuditSettingsWrapper
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantAuditSettingsWrapper** | **TenantAuditSettingsWrapper**|  | |


### Return type

**TenantAuditSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit trail settings |  -  |
|**400** | Exception in LoginHistoryLifeTime or AuditTrailLifeTime |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

