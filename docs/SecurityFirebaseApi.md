# FirebaseApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**docRegisterPusnNotificationDevice**](#docregisterpusnnotificationdevice) | **POST** /api/2.0/settings/push/docregisterdevice | Register a push device|
|[**subscribeDocumentsPushNotification**](#subscribedocumentspushnotification) | **PUT** /api/2.0/settings/push/docsubscribe | Set push subscription|

# **docRegisterPusnNotificationDevice**
> FireBaseUserWrapper docRegisterPusnNotificationDevice()

Registers one mobile device of the calling user for the push notifications of the Documents application, by  storing the Firebase token that device was issued together with the initial `isSubscribed` state. The token is  handed out by Firebase to the mobile client, so obtain it there before calling: nothing here checks it, and it  is kept as an opaque string of up to 255 characters. Every signed-in member registers its own devices,  whatever its role - owner, administrator, user or guest - and a registration is bound to the caller and the  current portal, so another member\'s devices cannot be touched. The call is safe to repeat, but it is not an  update: a token already registered comes back as it stands and `isSubscribed` from the request is ignored, so  switch an existing registration on or off with `PUT api/2.0/settings/push/docsubscribe` instead. What comes  back is the stored registration, with `application` always `doc` and `isSubscribed` as stored. Only a  subscribed device is sent the room activity messages, such as an invitation to a room, a role change, an  archived room or a new document in a room, and only while the installation itself is configured with Firebase  credentials.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/doc-register-pusn-notification-device/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firebaseRequestsDto** | **FirebaseRequestsDto**|  | |


### Return type

**FireBaseUserWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityFirebaseApi,
    Configuration,
    FirebaseRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityFirebaseApi(configuration);

let firebaseRequestsDto: FirebaseRequestsDto; // (optional)

const { status, data } = await apiInstance.docRegisterPusnNotificationDevice(
    firebaseRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The stored device registration of the calling user, with the Firebase token, the `doc` application and the subscription state as they are kept |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscribeDocumentsPushNotification**
> FireBaseUserWrapper subscribeDocumentsPushNotification()

Switches the push notifications of the Documents application on or off for one already registered device of  the calling user: send that device\'s Firebase token together with `isSubscribed` true to let the messages  through or false to stop them. The device has to be registered first with  `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is  matched, never changed. Every signed-in member manages its own devices, whatever its role - owner,  administrator, user or guest - and a token that belongs to another member or to another portal is not matched  at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as  it is. What comes back is the updated registration, while an empty response means no registration of the  caller carries that token and nothing was stored - register the device and call again. A device switched off  keeps its token stored but is left out of the delivery, and the other devices of the same member are  unaffected. Which kinds of notification the account receives at all is a separate setting, read with  `GET api/2.0/settings/notification/{type}`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/subscribe-documents-push-notification/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firebaseRequestsDto** | **FirebaseRequestsDto**|  | |


### Return type

**FireBaseUserWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SecurityFirebaseApi,
    Configuration,
    FirebaseRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SecurityFirebaseApi(configuration);

let firebaseRequestsDto: FirebaseRequestsDto; // (optional)

const { status, data } = await apiInstance.subscribeDocumentsPushNotification(
    firebaseRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The device registration as it stands after the change, or an empty response when no registration of the calling user carries the token that was sent |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

