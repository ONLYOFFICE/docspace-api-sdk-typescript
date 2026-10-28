# ClientQueryingApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getClient**](#getclient) | **GET** /api/2.0/oauth2/clients/{clientId} | Get client details|
|[**getClientInfo**](#getclientinfo) | **GET** /api/2.0/oauth2/clients/{clientId}/info | Get client info|
|[**getClients**](#getclients) | **GET** /api/2.0/oauth2/clients | List clients|
|[**getClientsInfo**](#getclientsinfo) | **GET** /api/2.0/oauth2/clients/info | List client info|
|[**getConsents**](#getconsents) | **GET** /api/2.0/oauth2/clients/consents | List user consents|
|[**getPublicClientInfo**](#getpublicclientinfo) | **GET** /api/2.0/oauth2/clients/{clientId}/public/info | Get public client info|

# **getClient**
> ClientResponse getClient()

Returns the whole stored record of one client: its name and description, its secret, scopes, redirect URIs, allowed origins, logout redirect URIs and audit fields. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. Whatever the caller may not see is reported as 404 rather than 403, so absence and lack of access are deliberately indistinguishable, and an identifier that is not a valid client ID is reported the same way. The response is a single object, not a collection.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | ID of the client to retrieve | defaults to undefined|


### Return type

**ClientResponse**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //ID of the client to retrieve (default to undefined)

const { status, data } = await apiInstance.getClient(
    clientId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client details successfully retrieved |  -  |
|**400** | The client ID is blank or contains only whitespace |  -  |
|**403** | Insufficient permissions to view client |  -  |
|**404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |
|**406** | The Accept header does not allow application/json |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientInfo**
> ClientInfoResponse getClientInfo()

Retrieves the detailed information for a client with the ID specified in the request. It returns the consent-facing subset of the client - name, description, logo, the website, terms and policy URLs, authentication methods and scopes - and deliberately omits the secret, the redirect URIs and the allowed origins, which is what makes it safe to render on a consent screen. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. A client the caller may not see is reported as 404, exactly like an unknown one.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-client-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | ID of the client to retrieve | defaults to undefined|


### Return type

**ClientInfoResponse**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //ID of the client to retrieve (default to undefined)

const { status, data } = await apiInstance.getClientInfo(
    clientId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved client info |  -  |
|**400** | The client ID is blank or contains only whitespace |  -  |
|**403** | Insufficient permissions to view client information |  -  |
|**404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |
|**406** | The Accept header does not allow application/json |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClients**
> PageableClientResponse getClients()

Returns one page of the tenant\'s clients, newest first, each in the same full form as the single-client read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based rather than offset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page to ask for the next one. The limit defaults to 30 and has to lie between 1 and 50; a value outside that range, or a last_created_on that cannot be parsed as a date, is rejected with 400.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | How many entries to return, between 1 and 50. Defaults to 30 when omitted. | (optional) defaults to 30|
| **lastClientId** | [**string**] | ID of the last retrieved client | (optional) defaults to undefined|
| **lastCreatedOn** | [**string**] | Date of the last retrieved client | (optional) defaults to undefined|


### Return type

**PageableClientResponse**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //How many entries to return, between 1 and 50. Defaults to 30 when omitted. (optional) (default to 30)
let lastClientId: string; //ID of the last retrieved client (optional) (default to undefined)
let lastCreatedOn: string; //Date of the last retrieved client (optional) (default to undefined)

const { status, data } = await apiInstance.getClients(
    limit,
    lastClientId,
    lastCreatedOn
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client list successfully retrieved |  -  |
|**400** | Invalid pagination parameters, including a last_created_on that cannot be parsed as a date-time |  -  |
|**403** | Insufficient permissions to list clients |  -  |
|**406** | The Accept header does not allow application/json |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientsInfo**
> PageableClientInfoResponse getClientsInfo()

Retrieves a paginated list of information for all clients, each in the same consent-facing form as the single-client info read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page. Unlike the full client listing, limit has no default here - it has to be supplied on every call and has to lie between 1 and 50, and a missing or out-of-range value is rejected with 400.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-clients-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | defaults to undefined|
| **lastClientId** | [**string**] | ID of the last retrieved client | (optional) defaults to undefined|
| **lastCreatedOn** | [**string**] | Date of the last retrieved client | (optional) defaults to undefined|


### Return type

**PageableClientInfoResponse**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //How many entries to return, between 1 and 50. It has no default and has to be sent on every call. (default to undefined)
let lastClientId: string; //ID of the last retrieved client (optional) (default to undefined)
let lastCreatedOn: string; //Date of the last retrieved client (optional) (default to undefined)

const { status, data } = await apiInstance.getClientsInfo(
    limit,
    lastClientId,
    lastCreatedOn
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved clients info |  -  |
|**400** | The limit parameter is missing, is outside the range 1-50, or last_created_on cannot be parsed as a date-time |  -  |
|**403** | Insufficient permissions to list client information |  -  |
|**406** | The Accept header does not allow application/json |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConsents**
> PageableModificationResponse getConsents()

Retrieves a paginated list of user consents: the clients the calling user has authorized, each with the scopes granted, the moment the consent was last changed and the client\'s consent-facing details. It always reports the caller\'s own consents and nothing else - there is no role check on this endpoint, so guests may call it too, and no parameter widens it to another user. The consents are read from the authorization service over gRPC, so an authorization service that cannot be reached surfaces as 503. Paging is keyset-based on last_modified_on, and limit has no default: it has to be supplied on every call and has to lie between 1 and 50.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-consents/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | defaults to undefined|
| **lastModifiedOn** | [**string**] | Date of the last retrieved consent | (optional) defaults to undefined|


### Return type

**PageableModificationResponse**

### Authorization

[x-signature](../README.md#x-signature)

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let limit: number; //How many entries to return, between 1 and 50. It has no default and has to be sent on every call. (default to undefined)
let lastModifiedOn: string; //Date of the last retrieved consent (optional) (default to undefined)

const { status, data } = await apiInstance.getConsents(
    limit,
    lastModifiedOn
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved user consents |  -  |
|**400** | The limit parameter is missing, is outside the range 1-50, or last_modified_on cannot be parsed as a date-time |  -  |
|**403** | The request carries no valid portal signature |  -  |
|**406** | The Accept header does not allow application/json |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**503** | Authorization service unavailable |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicClientInfo**
> ClientInfoResponse getPublicClientInfo()

Returns the same consent-facing client information as the signed read, but without requiring a portal signature. It is meant for a login or consent page that has to render the client before the user is known, so it resolves the client by ID alone: there is no authentication, no tenant scoping and no creator check, and any caller who knows a client ID can read that client\'s public details. It still exposes no secret, no redirect URIs and no allowed origins. Being unauthenticated it is rate-limited on a separate, tighter budget than the signed endpoints. An unknown client ID, and an identifier that is not a client ID at all, are both reported as 404.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-client-info/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | ID of the client to retrieve | defaults to undefined|


### Return type

**ClientInfoResponse**

### Authorization

No authorization required

### Example

```typescript
import {
    OAuth20ClientQueryingApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientQueryingApi(configuration);

let clientId: string; //ID of the client to retrieve (default to undefined)

const { status, data } = await apiInstance.getPublicClientInfo(
    clientId
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved client public info |  -  |
|**400** | The client ID is blank or contains only whitespace |  -  |
|**404** | No client with this ID exists, or the ID cannot be parsed as a client ID |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**405** | The HTTP method is not allowed for this path |  -  |
|**406** | The Accept header does not allow application/json |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

