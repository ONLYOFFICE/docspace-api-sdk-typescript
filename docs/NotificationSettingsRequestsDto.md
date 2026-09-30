# NotificationSettingsRequestsDto

Which kind of notification the calling user switches, and which way.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**NotificationType**](NotificationType.md) | The kind of notification being switched. A value outside the defined set is echoed back while nothing is  stored, so confirm the result with `GET api/2.0/settings/notification/{type}` rather than trusting the  answer. | [default to undefined]
**isEnabled** | **boolean** | Whether that kind reaches the calling account. It applies to the caller own account alone and to every room  at once; a single room is silenced with `POST api/2.0/settings/notification/rooms` instead. | [optional] [default to undefined]

## Example

```typescript
import { NotificationSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: NotificationSettingsRequestsDto = {
    type,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
