# NotificationsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getNotificationChannels**](#getnotificationchannels) | **GET** /api/2.0/settings/notification/channels | Get notification channels|
|[**getNotificationSettings**](#getnotificationsettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability|
|[**getRoomsNotificationSettings**](#getroomsnotificationsettings) | **GET** /api/2.0/settings/notification/rooms | Get muted rooms|
|[**setNotificationSettings**](#setnotificationsettings) | **POST** /api/2.0/settings/notification | Set notification status|
|[**setRoomsNotificationStatus**](#setroomsnotificationstatus) | **POST** /api/2.0/settings/notification/rooms | Mute or unmute a room|

# **getNotificationChannels**
> NotificationChannelStatusWrapper getNotificationChannels()

Lists the ways this installation can deliver a notification, each as the internal name of the channel together  with `isEnabled`: `email.sender` for letters and `telegram.sender` for Telegram messages. The list describes  the installation and the portal rather than the calling user, so every member gets the same answer, and the  call is read-only. Any signed-in member may ask for it, whatever its role, and no permission is demanded. A  channel appears only when the notification service of the running installation is configured with a sender of  that name, so the list can be shorter than the two names above, and an empty list means that configuration  names no channel this build implements. `email.sender` is reported as enabled whenever it is listed, while  `telegram.sender` is reported as enabled only while the portal has a Telegram bot name and token stored, which  is what `POST api/2.0/settings/authservice` writes. An enabled channel says nothing about the caller: a member  also has to connect their own Telegram account, for which `GET api/2.0/settings/telegram/link` hands out the  link and `GET api/2.0/settings/telegram/check` reports the outcome. Which kinds of notification a member  receives is a separate setting, read with `GET api/2.0/settings/notification/{type}`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-channels/).

### Parameters
This endpoint does not have any parameters.


### Return type

**NotificationChannelStatusWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

const { status, data } = await apiInstance.getNotificationChannels();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The notification channels this installation can deliver through, each with the flag that says whether it is enabled |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNotificationSettings**
> NotificationSettingsWrapper getNotificationSettings()

Reports whether one kind of notification is switched on for the calling user, taking the kind as the integer  `type` in the route: 0 the new-item badges the Files responses carry, 1 the room activity letters, 2 the daily  feed digest, 3 the periodic tips letters. The answer describes the caller\'s own account only - there is no way  to read another member\'s settings - and the call is read-only and safe to repeat. Every signed-in member reads  its own settings: the portal owner, a DocSpace administrator, a room administrator, a user and a guest are all  accepted, and no permission is demanded. Badges come back switched on for an account that has not changed  them, while the kinds 1, 2 and 3 come back switched off until they are switched on with  `POST api/2.0/settings/notification`. What comes back is the kind that was asked for together with  `isEnabled`. A `type` outside 0-3 is not recognised and the call fails instead of falling back to a default.  The rooms silenced one by one are listed by `GET api/2.0/settings/notification/rooms`, and the delivery  channels of the installation by `GET api/2.0/settings/notification/channels`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **NotificationType** | The kind of notification being asked about. A value outside the defined set fails the call rather than  falling back to a default. | defaults to undefined|


### Return type

**NotificationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

let type: NotificationType; //The kind of notification being asked about. A value outside the defined set fails the call rather than  falling back to a default. (default to undefined)

const { status, data } = await apiInstance.getNotificationSettings(
    type
);
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The notification kind that was asked for together with the flag that says whether it is switched on for the calling user |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomsNotificationSettings**
> RoomsNotificationSettingsWrapper getRoomsNotificationSettings()

Returns the rooms the calling user has silenced, as the `disabledRooms` list of their identifiers. The list  describes the caller\'s own account only, the call is read-only, and an empty list means nothing is silenced.  Every signed-in member reads its own list, whatever its role - owner, administrator, user or guest - and no  permission is demanded. The identifiers come back the way `POST api/2.0/settings/notification/rooms` stored  them, in the order they were added and without paging; they are kept as opaque values, so both the numeric  identifier of a portal room and the string identifier of a room on a connected third-party account appear  here, and an identifier stays in the list after the room itself is deleted. While a room is on this list its  activity is left out of the hourly room digest and of the daily feed, the letters that room would send at once  are not sent, and its new-item counters are hidden from the Files responses. Silencing a room changes nothing  for its other members. The kinds of notification this list is applied to are switched with  `POST api/2.0/settings/notification`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-notification-settings/).

### Parameters
This endpoint does not have any parameters.


### Return type

**RoomsNotificationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

const { status, data } = await apiInstance.getRoomsNotificationSettings();
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The identifiers of the rooms the calling user has silenced |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setNotificationSettings**
> NotificationSettingsWrapper setNotificationSettings()

Switches one kind of notification on or off for the calling user: send the kind as `type` - 0 the new-item  badges, 1 the room activity letters, 2 the daily feed digest, 3 the periodic tips letters - together with  `isEnabled`. The change touches the caller\'s own account only, and repeating the call with the same pair  leaves the account as it is. Every signed-in member configures its own settings: the portal owner, a DocSpace  administrator, a room administrator, a user and a guest are all accepted, and no permission is demanded. With  0 switched off the Files responses report `new` as 0 and mark files as muted; with 1 switched off both the  hourly room digest and the letters a room sends at once, such as an editor mention, stop; with 2 switched off  the daily digest stops; with 3 switched off the tips letters stop. What comes back is an echo of the request  rather than a re-read of the stored state, and a `type` outside 0-3 is echoed as well while nothing is stored,  so confirm the result with `GET api/2.0/settings/notification/{type}`. To silence a single room instead of a  whole kind use `POST api/2.0/settings/notification/rooms`.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-notification-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationSettingsRequestsDto** | **NotificationSettingsRequestsDto**|  | |


### Return type

**NotificationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration,
    NotificationSettingsRequestsDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

let notificationSettingsRequestsDto: NotificationSettingsRequestsDto; // (optional)

const { status, data } = await apiInstance.setNotificationSettings(
    notificationSettingsRequestsDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The notification kind and state as they were sent in the request |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setRoomsNotificationStatus**
> RoomsNotificationSettingsWrapper setRoomsNotificationStatus()

Adds one room to the calling user\'s silenced list or takes it off again: `mute` true silences the room, false  lets its notifications through. One call carries one room, so several rooms take several calls, and repeating  a call with the same pair changes nothing. The room is named by `roomsId` and kept as an opaque value: the  numeric identifier of a portal room and the string identifier of a room on a connected third-party account are  both accepted, and neither the room\'s existence nor the caller\'s access to it is checked, so a mistyped  identifier is stored as sent. Every signed-in member manages its own list, whatever its role, and the list of  another member cannot be touched. While a room is silenced its activity is left out of the hourly room digest  and of the daily feed, the letters it would send at once are not sent, and its new-item counters are hidden.  The Files responses stop offering the `mute` action on a room once badges, room activity and the daily feed  are all switched off, while this call keeps working. What comes back is the whole updated list, the same shape  `GET api/2.0/settings/notification/rooms` returns.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/set-rooms-notification-status/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomsNotificationsSettingsRequestDto** | **RoomsNotificationsSettingsRequestDto**|  | |


### Return type

**RoomsNotificationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration,
    RoomsNotificationsSettingsRequestDto
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

let roomsNotificationsSettingsRequestDto: RoomsNotificationsSettingsRequestDto; // (optional)

const { status, data } = await apiInstance.setRoomsNotificationStatus(
    roomsNotificationsSettingsRequestDto
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The identifiers of the rooms the calling user has silenced, as the list stands after the change |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |
|**401** | Unauthorized |  -  |
|**429** | Too Many Requests. |  * Retry-After -  <br>  |
|**500** | Internal Server Error. |  -  |
|**400** | Bad Request. |  -  |
|**502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |
|**503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

