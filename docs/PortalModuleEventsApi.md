# ModuleEventsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sendModuleEvent**](#sendmoduleevent) | **POST** /api/2.0/portal/moduleevents | Send a module event|

# **sendModuleEvent**
> sendModuleEvent()

Delivers one event from an integration module to the browsers of the portal named by the request host, over  the socket connection every open DocSpace page already keeps. No user session is needed: the caller  identifies itself with the module key in the `X-Module-Key` header, which the installation administrator  issues and allows for a list of portals. Set exactly one addressee - `user`, the e-mail of a portal user,  reaches only that user\'s open sessions without any subscription, and `room` reaches everyone in the portal  subscribed to `plugin-{module}-{room}`. Browsers receive `plugin:{module}:{event}` with `{ message }`, the  module name taken from the key, never from the body. The call only hands the event over: nothing is stored,  a user with no open session never sees it, and a repeated call delivers it again. Keep `message` a signal to  re-read, such as an unread count. The body is limited to 64 KB. A missing or unknown key fails with 401, a  portal the key is not allowed for with 403, an unknown or inactive user with 404, and invalid names or not  exactly one addressee with 400.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/send-module-event/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendModuleEventRequest** | **SendModuleEventRequest**| The event to deliver. | |
| **xModuleKey** | [**string**] | The secret key the installation administrator issued to the module. It is not a user or portal credential:  the module the event belongs to is the one this key is configured for, so the key is the module\'s identity. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    PortalModuleEventsApi,
    Configuration,
    SendModuleEventRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new PortalModuleEventsApi(configuration);

let xModuleKey: string; //The secret key the installation administrator issued to the module. It is not a user or portal credential:  the module the event belongs to is the one this key is configured for, so the key is the module\'s identity. (optional) (default to undefined)
let sendModuleEventRequest: SendModuleEventRequest; //The event to deliver. (optional)

const { status, data } = await apiInstance.sendModuleEvent(
    xModuleKey,
    sendModuleEventRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The event was handed to the socket service for delivery |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**400** | The body is missing, the event or room name is invalid, or there is not exactly one addressee |  -  |
|**401** | The X-Module-Key header is missing or matches no configured module |  -  |
|**402** | The portal\'s payment has lapsed |  -  |
|**403** | The module key is not allowed for this portal |  -  |
|**404** | No active user of this portal has the given e-mail |  -  |
|**413** | The body is larger than 64 KB |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

