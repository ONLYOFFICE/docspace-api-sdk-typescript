# NotificationSettingsRequestsDto

The request parameters for configuring notification settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**NotificationType**](NotificationType.md) |  | [default to undefined]
**isEnabled** | **boolean** | Specifies if the specified notification type is enabled or not. | [optional] [default to undefined]

## Example

```typescript
import { NotificationSettingsRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: NotificationSettingsRequestsDto = {
    type,
    isEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
