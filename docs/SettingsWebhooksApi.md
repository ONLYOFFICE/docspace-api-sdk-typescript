# WebhooksApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /api/2.0/settings/webhook | Create a webhook|
|[**enableWebhook**](#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook|
|[**getTenantWebhooks**](#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks|
|[**getWebhookTriggers**](#getwebhooktriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers|
|[**getWebhooksLogs**](#getwebhookslogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs|
|[**removeWebhook**](#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook|
|[**retryWebhook**](#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook|
|[**retryWebhooks**](#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks|
|[**updateWebhook**](#updatewebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook|

# **createWebhook**
> WebhooksConfigWrapper createWebhook()

Creates a new tenant webhook with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWebhooksConfigRequestsDto** | **CreateWebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    CreateWebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let createWebhooksConfigRequestsDto: CreateWebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.createWebhook(
    createWebhooksConfigRequestsDto
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWebhooksConfigRequestsDto** | **UpdateWebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    UpdateWebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let updateWebhooksConfigRequestsDto: UpdateWebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.enableWebhook(
    updateWebhooksConfigRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Enable or disable tenant webhook |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantWebhooks**
> WebhooksConfigWithStatusArrayWrapper getTenantWebhooks()

Returns a list of the tenant webhooks.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/).

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhooksConfigWithStatusArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

const { status, data } = await apiInstance.getTenantWebhooks();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tenant webhooks with their config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookTriggers**
> UnknownWrapper getWebhookTriggers()

Returns a list of triggers for a webhook.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/).

### Parameters
This endpoint does not have any parameters.


### Return type

**UnknownWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

const { status, data } = await apiInstance.getWebhookTriggers();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of triggers for a webhook |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhooksLogs**
> WebhooksLogArrayWrapper getWebhooksLogs()

Returns the logs of the webhook activities.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/).

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
| **count** | [**number**] | The maximum number of webhook log records to return in the query response. | (optional) defaults to undefined|
| **startIndex** | [**number**] | Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries. | (optional) defaults to undefined|


### Return type

**WebhooksLogArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

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
let count: number; //The maximum number of webhook log records to return in the query response. (optional) (default to undefined)
let startIndex: number; //Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries. (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhooksLogs(
    deliveryFrom,
    deliveryTo,
    hookUri,
    configId,
    eventId,
    groupStatus,
    userId,
    trigger,
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
|**200** | Logs of the webhook activities |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeWebhook**
> WebhooksConfigWrapper removeWebhook()

Removes a tenant webhook with the ID specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let id: number; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.removeWebhook(
    id
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID extracted from the route parameters. | defaults to undefined|


### Return type

**WebhooksLogWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let id: number; //The ID extracted from the route parameters. (default to undefined)

const { status, data } = await apiInstance.retryWebhook(
    id
);
```

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

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRetryRequestsDto** | **WebhookRetryRequestsDto**|  | |


### Return type

**WebhooksLogArrayWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    WebhookRetryRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let webhookRetryRequestsDto: WebhookRetryRequestsDto; // (optional)

const { status, data } = await apiInstance.retryWebhooks(
    webhookRetryRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logs of the webhook activities |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> WebhooksConfigWrapper updateWebhook()

Updates a tenant webhook with the parameters specified in the request.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWebhooksConfigRequestsDto** | **UpdateWebhooksConfigRequestsDto**|  | |


### Return type

**WebhooksConfigWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsWebhooksApi,
    Configuration,
    UpdateWebhooksConfigRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsWebhooksApi(configuration);

let updateWebhooksConfigRequestsDto: UpdateWebhooksConfigRequestsDto; // (optional)

const { status, data } = await apiInstance.updateWebhook(
    updateWebhooksConfigRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated tenant webhook with its config parameters |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

