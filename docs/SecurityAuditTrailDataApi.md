# AuditTrailDataApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAuditTrailReport**](#createaudittrailreport) | **POST** /api/2.0/security/audit/events/report | Start audit trail report|
|[**getAuditEventsByFilter**](#getauditeventsbyfilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit events|
|[**getAuditSettings**](#getauditsettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get audit lifetime settings|
|[**getAuditTrailMappers**](#getaudittrailmappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers|
|[**getAuditTrailReport**](#getaudittrailreport) | **GET** /api/2.0/security/audit/events/report | Get audit trail report status|
|[**getAuditTrailTypes**](#getaudittrailtypes) | **GET** /api/2.0/security/audit/types | Get audit trail types|
|[**getLastAuditEvents**](#getlastauditevents) | **GET** /api/2.0/security/audit/events/last | Get recent audit events|
|[**setAuditSettings**](#setauditsettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set audit lifetime settings|
|[**terminateAuditTrailReport**](#terminateaudittrailreport) | **DELETE** /api/2.0/security/audit/events/report | Terminate audit trail report|

# **createAuditTrailReport**
> DocumentBuilderTaskWrapper createAuditTrailReport()

Queues a report of the portal\'s audit trail and returns the state of the background job that builds it. The  report covers the period reaching from now back by the audit trail lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of  `GET api/2.0/security/audit/events/filter` do not apply here. The caller needs the portal-settings right of a  DocSpace administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with  402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/events/report` until  `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The  finished file is saved to the caller\'s My documents section, as an XLSX workbook by default or as CSV when  `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs  per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **format** | **AuditReportFormat** | The format the report file is written in. The workbook format is the default and is the only one that leaves  the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it  can only be reached through `resultFileName` and `resultFileUrl`. | (optional) defaults to undefined|


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let format: AuditReportFormat; //The format the report file is written in. The workbook format is the default and is the only one that leaves  the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it  can only be reached through `resultFileName` and `resultFileUrl`. (optional) (default to undefined)

const { status, data } = await apiInstance.createAuditTrailReport(
    format
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The state of the queued job that builds the audit trail report |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan has no audit option, or the login history and audit trail section is not enabled |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditEventsByFilter**
> AuditEventArrayWrapper getAuditEventsByFilter()

Returns the portal\'s audit events that match the filters in the query - by the user who acted, the module the  action belongs to, the action and its type, the entity type and target, and the period - and is the operation  behind the audit trail page. The caller needs the portal-settings right of a DocSpace administrator plus the  audit option of the portal\'s pricing plan; when that option is missing the filters are silently ignored and  the answer is the same twenty most recent events that `GET api/2.0/security/audit/events/last` returns, and  when the login history and audit trail section is disabled altogether the call is answered with 402. Take the  values accepted by `action`, `actionType`, `moduleType` and `entryType` from  `GET api/2.0/security/audit/types`, and the tree they belong to from `GET api/2.0/security/audit/mappers`. A  non-default `action` matches only that action and, combined with `target`, only its exact value; it also  stops `moduleType` and `actionType` from narrowing the result, so combine `target` with `entryType` instead of  `action` when filtering by target without pinning a single action. `from` and `to` are read as UTC instants  while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, and the filters  are applied before the page window, so a full page means there may be more matching events beyond it. The  operation is read-only.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The user who performed the action, given by portal user ID. Leave it at the empty GUID to keep the events of  every user. | (optional) defaults to undefined|
| **moduleType** | **LocationType** | The module the recorded action belongs to, spelled as `GET api/2.0/security/audit/types` lists it under  `moduleTypes`. `GET api/2.0/security/audit/mappers` shows which module records which action. The default  value keeps every module. | (optional) defaults to undefined|
| **actionType** | **ActionType** | The kind of change the action made, spelled as `GET api/2.0/security/audit/types` lists it under  `actionTypes`. The default value keeps every kind. | (optional) defaults to undefined|
| **action** | **MessageAction** | The exact action recorded, spelled as the `messageAction` of `GET api/2.0/security/audit/mappers`. Naming  one narrows the answer to that single action and overrides `moduleType` and `actionType`, which stop  narrowing anything once it is set. | (optional) defaults to undefined|
| **entryType** | **EntryType** | The kind of object the action was performed on, spelled as `GET api/2.0/security/audit/types` lists it under  `entryTypes`. Pair it with `target` to filter by object without pinning a single action. | (optional) defaults to undefined|
| **target** | [**string**] | The object the action was performed on, as the audit trail recorded it - a file name, a user account, a room  title. It is matched in full and exactly as stored, so it narrows the answer only when `action` or  `entryType` is set as well. | (optional) defaults to undefined|
| **from** | [**string**] | The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC. | (optional) defaults to undefined|
| **to** | [**string**] | The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`. | (optional) defaults to undefined|
| **count** | [**number**] | How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; a full page means there may be further matches beyond it. | (optional) defaults to undefined|
| **startIndex** | [**number**] | How many matching events to skip before the page begins, counting from the newest. Advance it by `count` to  walk backwards through the trail. | (optional) defaults to undefined|


### Return type

**AuditEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let userId: string; //The user who performed the action, given by portal user ID. Leave it at the empty GUID to keep the events of  every user. (optional) (default to undefined)
let moduleType: LocationType; //The module the recorded action belongs to, spelled as `GET api/2.0/security/audit/types` lists it under  `moduleTypes`. `GET api/2.0/security/audit/mappers` shows which module records which action. The default  value keeps every module. (optional) (default to undefined)
let actionType: ActionType; //The kind of change the action made, spelled as `GET api/2.0/security/audit/types` lists it under  `actionTypes`. The default value keeps every kind. (optional) (default to undefined)
let action: MessageAction; //The exact action recorded, spelled as the `messageAction` of `GET api/2.0/security/audit/mappers`. Naming  one narrows the answer to that single action and overrides `moduleType` and `actionType`, which stop  narrowing anything once it is set. (optional) (default to undefined)
let entryType: EntryType; //The kind of object the action was performed on, spelled as `GET api/2.0/security/audit/types` lists it under  `entryTypes`. Pair it with `target` to filter by object without pinning a single action. (optional) (default to undefined)
let target: string; //The object the action was performed on, as the audit trail recorded it - a file name, a user account, a room  title. It is matched in full and exactly as stored, so it narrows the answer only when `action` or  `entryType` is set as well. (optional) (default to undefined)
let from: string; //The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC. (optional) (default to undefined)
let to: string; //The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`. (optional) (default to undefined)
let count: number; //How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; a full page means there may be further matches beyond it. (optional) (default to undefined)
let startIndex: number; //How many matching events to skip before the page begins, counting from the newest. Advance it by `count` to  walk backwards through the trail. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditEventsByFilter(
    userId,
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

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit events matching the filters, newest first, or the twenty most recent events when the portal has no audit option |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The login history and audit trail section is not enabled for this portal |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditSettings**
> TenantAuditSettingsResponseWrapper getAuditSettings()

Returns how long this portal keeps its two security logs: `loginHistoryLifeTime` for login events and  `auditTrailLifeTime` for audit events, both counted in days, together with `lastModified`, the moment the pair  was last saved. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud  installation the login history and audit trail section must be enabled for the portal, otherwise the call is  answered with 402; the audit option of the pricing plan is not required to read the values. Both numbers lie  between 1 and 180 days, and a portal that never changed them reports the default of 180. They define the  window the rest of the audit operations work in: `GET api/2.0/security/audit/events/last` looks exactly this  far back, and the reports started by `POST api/2.0/security/audit/login/report` and  `POST api/2.0/security/audit/events/report` cover exactly this period. The operation is read-only; change the  values with `POST api/2.0/security/audit/settings/lifetime`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**TenantAuditSettingsResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getAuditSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The login history and audit trail lifetimes of the portal, in days |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The login history and audit trail section is not enabled for this portal |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailMappers**
> AuditTrailProductMapperArrayWrapper getAuditTrailMappers()

Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each  module the actions it can record together with the type of change and the entity each of them applies to. Pass  `productType` to keep a single product and `moduleType` to keep a single module inside the products that  remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace  administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to  repeat. Each action carries `messageAction`, the name to send as the `action` filter of  `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and  `entryType` filters accept - this is where a caller learns which action belongs to which module instead of  guessing. A filter that matches nothing yields an empty list rather than an error. Use  `GET api/2.0/security/audit/types` for the flat lists of the same names.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productType** | **ProductType** | The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting  it keeps every product; a value no product matches yields an empty list rather than an error. | (optional) defaults to undefined|
| **moduleType** | **LocationType** | The module to keep inside the products that survive `productType`, spelled as  `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those  products. | (optional) defaults to undefined|


### Return type

**AuditTrailProductMapperArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let productType: ProductType; //The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting  it keeps every product; a value no product matches yields an empty list rather than an error. (optional) (default to undefined)
let moduleType: LocationType; //The module to keep inside the products that survive `productType`, spelled as  `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those  products. (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditTrailMappers(
    productType,
    moduleType
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The products with their modules and the actions each module can record |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailReport**
> DocumentBuilderTaskWrapper getAuditTrailReport()

Returns the state of the audit trail report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/events/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402.  Jobs are kept per user and per report kind: this operation never shows another administrator\'s report, nor the  login history report, which has its own status at `GET api/2.0/security/audit/login/report`. The answer is  empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100,  `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly,  and `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section, while  `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few  seconds; a finished job is dropped as soon as the next report of this kind is started.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

**DocumentBuilderTaskWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getAuditTrailReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The state of the caller\'s audit trail report, or an empty answer when none is known |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan has no audit option, or the login history and audit trail section is not enabled |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditTrailTypes**
> AuditTrailTypesWrapper getAuditTrailTypes()

Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record,  `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes`  the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The  caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is  not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and  depends on nothing else. Every value is the name to send in the matching query parameter of  `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this  operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding  those five arrays of names, and it changes only with the portal version. Use  `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed  rather than the flat lists.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AuditTrailTypesWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getAuditTrailTypes();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The action, action type, product, module and entry type names accepted by the audit filters |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLastAuditEvents**
> AuditEventArrayWrapper getLastAuditEvents()

Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and  settings updates its members made - as the short summary a settings page shows before anyone asks for the full  trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the  login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402.  The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime  that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest  first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence  describing the event with every substituted value shortened to fifty characters here, and `target` names the  entity the action was applied to. An empty list means nothing was recorded inside that period. Use  `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/).

### Parameters
This endpoint does not have any parameters.


### Return type

**AuditEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.getLastAuditEvents();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The twenty most recent audit events of the portal, newest first |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The login history and audit trail section is not enabled for this portal |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setAuditSettings**
> TenantAuditSettingsResponseWrapper setAuditSettings()

Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was  stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the  portal\'s pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has  to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being  saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that  should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes  effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports  shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself  recorded in the audit trail.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantAuditSettingsWrapper** | **TenantAuditSettingsWrapper**|  | |


### Return type

**TenantAuditSettingsResponseWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration,
    TenantAuditSettingsWrapper
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

let tenantAuditSettingsWrapper: TenantAuditSettingsWrapper; // (optional)

const { status, data } = await apiInstance.setAuditSettings(
    tenantAuditSettingsWrapper
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The login history and audit trail lifetimes as they were stored |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | A lifetime is outside the allowed range of 1 to 180 days |  -  |
|**402** | The portal\'s pricing plan has no audit option, or the login history and audit trail section is not enabled |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **terminateAuditTrailReport**
> terminateAuditTrailReport()

Cancels the audit trail report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own audit trail report - the login history report is cancelled by  `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/events/report`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/).

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityAuditTrailDataApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityAuditTrailDataApi(configuration);

const { status, data } = await apiInstance.terminateAuditTrailReport();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cancellation of the caller\'s audit trail report has been accepted |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**402** | The portal\'s pricing plan has no audit option, or the login history and audit trail section is not enabled |  -  |
|**403** | The caller does not have the portal-settings right of a DocSpace administrator |  -  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

