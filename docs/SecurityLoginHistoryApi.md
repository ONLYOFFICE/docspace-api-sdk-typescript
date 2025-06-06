# SecurityLoginHistoryApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLoginHistoryReport**](#createloginhistoryreport) | **POST** /api/2.0/security/audit/login/report | Generate the login history report|
|[**getLastLoginEvents**](#getlastloginevents) | **GET** /api/2.0/security/audit/login/last | Get login history|
|[**getLoginEventsByFilter**](#getlogineventsbyfilter) | **GET** /api/2.0/security/audit/login/filter | Get filtered login events|

# **createLoginHistoryReport**
> StringWrapper createLoginHistoryReport()

Generates the login history report.

### Example

```typescript
import {
    SecurityLoginHistoryApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityLoginHistoryApi(configuration);

const { status, data } = await apiInstance.createLoginHistoryReport();
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLastLoginEvents**
> LoginEventArrayWrapper getLastLoginEvents()

Returns all the latest user login activity, including successful logins and error logs.

### Example

```typescript
import {
    SecurityLoginHistoryApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityLoginHistoryApi(configuration);

const { status, data } = await apiInstance.getLastLoginEvents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of login events |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLoginEventsByFilter**
> LoginEventArrayWrapper getLoginEventsByFilter()

Returns a list of the login events by the parameters specified in the request.

### Example

```typescript
import {
    SecurityLoginHistoryApi,
    Configuration,
    ApiDateTime,
    ApiDateTime
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SecurityLoginHistoryApi(configuration);

let userId: string; //The ID of the user whose login events are being queried. (optional) (default to undefined)
let action: MessageAction; //The login-related action to filter events by. (optional) (default to undefined)
let from: ApiDateTime; //The starting date and time for filtering login events. (optional) (default to undefined)
let to: ApiDateTime; //The ending date and time for filtering login events. (optional) (default to undefined)
let count: number; //The number of login events to retrieve in the query. (optional) (default to undefined)
let startIndex: number; //The starting index for fetching a subset of login events from the query results. (optional) (default to undefined)

const { status, data } = await apiInstance.getLoginEventsByFilter(
    userId,
    action,
    from,
    to,
    count,
    startIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The ID of the user whose login events are being queried. | (optional) defaults to undefined|
| **action** | **MessageAction** | The login-related action to filter events by. | (optional) defaults to undefined|
| **from** | **ApiDateTime** | The starting date and time for filtering login events. | (optional) defaults to undefined|
| **to** | **ApiDateTime** | The ending date and time for filtering login events. | (optional) defaults to undefined|
| **count** | [**number**] | The number of login events to retrieve in the query. | (optional) defaults to undefined|
| **startIndex** | [**number**] | The starting index for fetching a subset of login events from the query results. | (optional) defaults to undefined|


### Return type

**LoginEventArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of filtered login events |  -  |
|**401** | Unauthorized |  -  |
|**402** | Your pricing plan does not support this option |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

