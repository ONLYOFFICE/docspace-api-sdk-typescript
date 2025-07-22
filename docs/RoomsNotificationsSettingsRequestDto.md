# RoomsNotificationsSettingsRequestDto

The request parameters for configuring notification settings for the chat or collaboration rooms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomsId** | **any** | The target room identifier. | [optional] [default to undefined]
**mute** | **boolean** | Specifies whether the notifications will be delivered to the specified room or not. | [optional] [default to undefined]

## Example

```typescript
import { RoomsNotificationsSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomsNotificationsSettingsRequestDto = {
    roomsId,
    mute,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
