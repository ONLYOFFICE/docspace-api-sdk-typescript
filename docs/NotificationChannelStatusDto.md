# NotificationChannelStatusDto

The ways this installation can deliver a notification, and whether each of them is usable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**Array&lt;NotificationChannelDto&gt;**](NotificationChannelDto.md) | The channels the running installation is configured with. A channel appears only when the notification  service names a sender for it, so the list can be shorter than the channels this build implements, and an  empty list means the configuration names none of them. | [optional] [default to undefined]

## Example

```typescript
import { NotificationChannelStatusDto } from '@onlyoffice/docspace-api-sdk';

const instance: NotificationChannelStatusDto = {
    channels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
