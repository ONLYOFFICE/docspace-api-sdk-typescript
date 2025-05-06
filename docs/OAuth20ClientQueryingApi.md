# OAuth20ClientQueryingApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getClient**](#getclient) | **GET** /api/2.0/clients/{clientId} | Get client details|
|[**getClientInfo**](#getclientinfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information|
|[**getClients**](#getclients) | **GET** /api/2.0/clients | Get clients|
|[**getClientsInfo**](#getclientsinfo) | **GET** /api/2.0/clients/info | Get detailed information of clients|
|[**getConsents**](#getconsents) | **GET** /api/2.0/clients/consents | Get user consents|
|[**getPublicClientInfo**](#getpublicclientinfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information|

# **getClient**
> ClientResponse getClient()

Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.getClient(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**ClientResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client details successfully retrieved |  -  |
|**400** | Invalid client ID format |  -  |
|**403** | Insufficient permissions to view client |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientInfo**
> ClientInfoResponse getClientInfo()

Retrieves the detailed information for a client with the ID specified in the request.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.getClientInfo(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**ClientInfoResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved client info |  -  |
|**400** | Bad request |  -  |
|**429** | Too many requests |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClients**
> PageableResponse getClients()

Retrieves a paginated list of OAuth2 clients. The results can be paginated using the \'limit\' parameter and the last seen client ID or creation date.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //The maximum number of results returned per page. (default to undefined)
let lastClientId: string; //The ID of the last retrieved client. (optional) (default to undefined)
let lastCreatedOn: string; //The creation date of the last retrieved client. (optional) (default to undefined)

const { status, data } = await apiInstance.getClients(
    limit,
    lastClientId,
    lastCreatedOn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The maximum number of results returned per page. | defaults to undefined|
| **lastClientId** | [**string**] | The ID of the last retrieved client. | (optional) defaults to undefined|
| **lastCreatedOn** | [**string**] | The creation date of the last retrieved client. | (optional) defaults to undefined|


### Return type

**PageableResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client list successfully retrieved |  -  |
|**400** | Invalid pagination parameters |  -  |
|**403** | Insufficient permissions to create a client list |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientsInfo**
> PageableResponseClientInfoResponse getClientsInfo()

Retrieves a paginated list of information for all clients.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //The maximum number of results returned per page. (default to undefined)
let lastClientId: string; //The identifier of the last retrieved client. (optional) (default to undefined)
let lastCreatedOn: string; //The creation date of the last retrieved client. (optional) (default to undefined)

const { status, data } = await apiInstance.getClientsInfo(
    limit,
    lastClientId,
    lastCreatedOn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The maximum number of results returned per page. | defaults to undefined|
| **lastClientId** | [**string**] | The identifier of the last retrieved client. | (optional) defaults to undefined|
| **lastCreatedOn** | [**string**] | The creation date of the last retrieved client. | (optional) defaults to undefined|


### Return type

**PageableResponseClientInfoResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved clients info |  -  |
|**400** | Bad request |  -  |
|**429** | Too many requests |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConsents**
> PageableModificationResponse getConsents()

Retrieves a paginated list of user consents.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //The maximum number of results returned per page. (default to undefined)
let lastModifiedOn: string; //The date when the user consent was last modified. (optional) (default to undefined)

const { status, data } = await apiInstance.getConsents(
    limit,
    lastModifiedOn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The maximum number of results returned per page. | defaults to undefined|
| **lastModifiedOn** | [**string**] | The date when the user consent was last modified. | (optional) defaults to undefined|


### Return type

**PageableModificationResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved user consents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicClientInfo**
> ClientInfoResponse getPublicClientInfo()

Returns the public information for a client with the ID secified din the request.

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.getPublicClientInfo(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**ClientInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved client public info |  -  |
|**400** | Bad request |  -  |
|**429** | Too many requests |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

