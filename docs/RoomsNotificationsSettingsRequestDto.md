# RoomsNotificationsSettingsRequestDto

Which single room the calling user silences, and which way.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomsId** | **any** |  | [optional] [default to undefined]
**mute** | **boolean** | Which way the room goes: `true` adds it to the caller silenced list, `false` takes it off again. While a room  is silenced its activity is left out of the hourly and daily digests, the letters it would send at once are  not sent, and its new-item counters are hidden. | [optional] [default to undefined]

## Example

```typescript
import { RoomsNotificationsSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomsNotificationsSettingsRequestDto = {
    roomsId,
    mute,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
