# NotificationSettingsDto

Whether one kind of notification is switched on for the calling user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**NotificationType**](NotificationType.md) | Which kind of notification the flag belongs to, echoed from the request. It is published as a number:  badges, room activity, the daily feed, and the tips. | [optional] [default to undefined]
**isEnabled** | **boolean** | Whether the caller receives that kind of notification. It describes the caller\'s own account and nobody  else\'s; a fresh account has the badges on and the other three off, because those are subscriptions that  only `POST api/2.0/settings/notification` creates. | [optional] [default to undefined]

## Example

```typescript
import { NotificationSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: NotificationSettingsDto = {
    type,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
