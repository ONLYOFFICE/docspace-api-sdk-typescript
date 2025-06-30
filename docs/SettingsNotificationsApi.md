# SettingsNotificationsApi

All URIs are relative to *http://localhost:8092*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getNotificationSettings**](#getnotificationsettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability|
|[**getRoomsNotificationSettings**](#getroomsnotificationsettings) | **GET** /api/2.0/settings/notification/rooms | Get room notification settings|
|[**setNotificationSettings**](#setnotificationsettings) | **POST** /api/2.0/settings/notification | Enable notifications|
|[**setRoomsNotificationStatus**](#setroomsnotificationstatus) | **POST** /api/2.0/settings/notification/rooms | Set room notification status|

# **getNotificationSettings**
> NotificationSettingsWrapper getNotificationSettings()

Checks if the notification type specified in the request is enabled or not.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-settings/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **NotificationType** | The type of notification to query, specified in the route. | defaults to undefined|


### Return type

**NotificationSettingsWrapper**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2), [ApiKeyBearer](../README.md#ApiKeyBearer), [asc_auth_key](../README.md#asc_auth_key), [Bearer](../README.md#Bearer), [OpenId](../README.md#OpenId)

### Example

```typescript
import {
    SettingsNotificationsApi,
    Configuration
} from '@onlyoffice/docspace-api-typescript';

const configuration = new Configuration();
const apiInstance = new SettingsNotificationsApi(configuration);

let type: NotificationType; //The type of notification to query, specified in the route. (default to undefined)

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
|**200** | Notification settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoomsNotificationSettings**
> RoomsNotificationSettingsWrapper getRoomsNotificationSettings()

Returns a list of rooms with the disabled notifications.

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
} from '@onlyoffice/docspace-api-typescript';

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
|**200** | Room notification settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setNotificationSettings**
> NotificationSettingsWrapper setNotificationSettings()

Enables the notification type specified in the request.

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
} from '@onlyoffice/docspace-api-typescript';

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
|**200** | Notification settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setRoomsNotificationStatus**
> RoomsNotificationSettingsWrapper setRoomsNotificationStatus()

Sets a notification status for a room with the ID specified in the request.

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
} from '@onlyoffice/docspace-api-typescript';

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
|**200** | Room notification settings |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

