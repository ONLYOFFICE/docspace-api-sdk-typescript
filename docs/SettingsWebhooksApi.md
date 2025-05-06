# SettingsWebhooksApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /api/2.0/settings/webhook | Create a webhook|
|[**enableWebhook**](#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook|
|[**getJournal**](#getjournal) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs|
|[**getTenantWebhooks**](#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks|
|[**removeWebhook**](#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook|
|[**retryWebhook**](#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook|
|[**retryWebhooks**](#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks|
|[**triggers**](#triggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers|
|[**updateWebhook**](#updatewebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook|

# **createWebhook**
> WebhooksConfigWrapper createWebhook()

Creates a new tenant webhook with the parameters specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    WebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let webhooksConfigRequestsDto: WebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.createWebhook(
    webhooksConfigRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksConfigRequestsDto** | **WebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tenant webhook with its config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableWebhook**
> WebhooksConfigWrapper enableWebhook()

Enables or disables a tenant webhook with the parameters specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    WebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let webhooksConfigRequestsDto: WebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.enableWebhook(
    webhooksConfigRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksConfigRequestsDto** | **WebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Enable or disable tenant webhook |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getJournal**
> WebhooksLogArrayWrapper getJournal()

Returns the logs of the webhook activities.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let deliveryFrom: string; //The delivery start time for filtering webhook logs. (optional) (default to undefined)
let deliveryTo: string; //The delivery end time for filtering webhook logs. (optional) (default to undefined)
let hookUri: string; //The destination URL where webhooks are delivered. (optional) (default to undefined)
let configId: number; //The webhook configuration identifier. (optional) (default to undefined)
let eventId: number; //The unique identifier of the event that triggered the webhook. (optional) (default to undefined)
let groupStatus: WebhookGroupStatus; //The status of the webhook delivery group. (optional) (default to undefined)
let userId: string; //The identifier of the user associated with the webhook event. (optional) (default to undefined)
let trigger: WebhookTrigger; //The type of event that triggered the webhook. (optional) (default to undefined)

const { status, data } = await apiInstance.getJournal(
    deliveryFrom,
    deliveryTo,
    hookUri,
    configId,
    eventId,
    groupStatus,
    userId,
    trigger
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deliveryFrom** | [**string**] | The delivery start time for filtering webhook logs. | (optional) defaults to undefined|
| **deliveryTo** | [**string**] | The delivery end time for filtering webhook logs. | (optional) defaults to undefined|
| **hookUri** | [**string**] | The destination URL where webhooks are delivered. | (optional) defaults to undefined|
| **configId** | [**number**] | The webhook configuration identifier. | (optional) defaults to undefined|
| **eventId** | [**number**] | The unique identifier of the event that triggered the webhook. | (optional) defaults to undefined|
| **groupStatus** | **WebhookGroupStatus** | The status of the webhook delivery group. | (optional) defaults to undefined|
| **userId** | [**string**] | The identifier of the user associated with the webhook event. | (optional) defaults to undefined|
| **trigger** | **WebhookTrigger** | The type of event that triggered the webhook. | (optional) defaults to undefined|


### Return type

**WebhooksLogArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logs of the webhook activities |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantWebhooks**
> WebhooksConfigWithStatusArrayWrapper getTenantWebhooks()

Returns a list of the tenant webhooks.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

const { status, data } = await apiInstance.getTenantWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhooksConfigWithStatusArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tenant webhooks with their config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeWebhook**
> WebhooksConfigWrapper removeWebhook()

Removes a tenant webhook with the ID specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let id: number; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.removeWebhook(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tenant webhook with its config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryWebhook**
> WebhooksLogWrapper retryWebhook()

Retries a webhook with the ID specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let id: number; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.retryWebhook(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**WebhooksLogWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logs of the webhook activities |  -  |
|**400** | Id incorrect |  -  |
|**401** | Unauthorized |  -  |
|**404** | Item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryWebhooks**
> WebhooksLogArrayWrapper retryWebhooks()

Retries all the webhooks with the IDs specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    WebhookRetryRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let webhookRetryRequestsDto: WebhookRetryRequestsDto; // (optional)

const { status, data } = await apiInstance.retryWebhooks(
    webhookRetryRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRetryRequestsDto** | **WebhookRetryRequestsDto**|  | |


### Return type

**WebhooksLogArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logs of the webhook activities |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers**
> UnknownWrapper triggers()

Returns a list of triggers for a webhook.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

const { status, data } = await apiInstance.triggers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UnknownWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of triggers for a webhook |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> WebhooksConfigWrapper updateWebhook()

Updates a tenant webhook with the parameters specified in the request.

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    WebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let webhooksConfigRequestsDto: WebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.updateWebhook(
    webhooksConfigRequestsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksConfigRequestsDto** | **WebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated tenant webhook with its config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

