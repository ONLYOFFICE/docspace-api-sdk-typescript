# OAuth20ClientManagementApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeActivation**](#changeactivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status|
|[**createClient**](#createclient) | **POST** /api/2.0/clients | Create a new OAuth2 client|
|[**deleteClient**](#deleteclient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client|
|[**regenerateSecret**](#regeneratesecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret|
|[**revokeUserClient**](#revokeuserclient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent|
|[**updateClient**](#updateclient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client|

# **changeActivation**
> object changeActivation(changeClientActivationRequest)

Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration,
    ChangeClientActivationRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let clientId: string; //The client identifier. (default to undefined)
let changeClientActivationRequest: ChangeClientActivationRequest; //

const { status, data } = await apiInstance.changeActivation(
    clientId,
    changeClientActivationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeClientActivationRequest** | **ChangeClientActivationRequest**|  | |
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**object**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client activation status successfully changed |  -  |
|**400** | Invalid client ID format or activation status |  -  |
|**403** | Insufficient permissions to change client activation |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createClient**
> ClientResponse createClient(createClientRequest)

Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration,
    CreateClientRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let createClientRequest: CreateClientRequest; //

const { status, data } = await apiInstance.createClient(
    createClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createClientRequest** | **CreateClientRequest**|  | |


### Return type

**ClientResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Client successfully created |  -  |
|**400** | Invalid request - missing required fields or validation failed |  -  |
|**403** | Insufficient permissions to create a client |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteClient**
> object deleteClient()

Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.deleteClient(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**object**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client successfully deleted |  -  |
|**400** | Invalid client ID format |  -  |
|**403** | Insufficient permissions to delete client |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerateSecret**
> ClientSecretResponse regenerateSecret()

Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.regenerateSecret(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**ClientSecretResponse**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client secret successfully regenerated |  -  |
|**400** | Invalid client ID format |  -  |
|**403** | Insufficient permissions to regenerate client secret |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeUserClient**
> object revokeUserClient()

Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let clientId: string; //The client identifier. (default to undefined)

const { status, data } = await apiInstance.revokeUserClient(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**object**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client consent successfully revoked |  -  |
|**400** | Invalid client ID format |  -  |
|**403** | Insufficient permissions to revoke consent |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |
|**503** | Authorization service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClient**
> object updateClient(updateClientRequest)

Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.

### Example

```typescript
import {
    OAuth20ClientManagementApi,
    Configuration,
    UpdateClientRequest
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth20ClientManagementApi(configuration);

let clientId: string; //The client identifier. (default to undefined)
let updateClientRequest: UpdateClientRequest; //

const { status, data } = await apiInstance.updateClient(
    clientId,
    updateClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClientRequest** | **UpdateClientRequest**|  | |
| **clientId** | [**string**] | The client identifier. | defaults to undefined|


### Return type

**object**

### Authorization

[x-signature](../README.md#x-signature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Client successfully updated |  -  |
|**400** | Invalid request - missing required fields or validation failed |  -  |
|**403** | Insufficient permissions to update client |  -  |
|**404** | Client not found |  -  |
|**429** | Too many requests - rate limit exceeded |  -  |
|**500** | Internal server error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

