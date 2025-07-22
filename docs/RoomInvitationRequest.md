# RoomInvitationRequest

The request parameters for inviting users to the room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitations** | [**Array&lt;RoomInvitation&gt;**](RoomInvitation.md) | The collection of invitation parameters. | [optional] [default to undefined]
**notify** | **boolean** | Specifies whether to notify users about the shared room or not. | [optional] [default to undefined]
**message** | **string** | The message to send when notifying about the shared room. | [optional] [default to undefined]
**culture** | **string** | The language of the room invitation. | [optional] [default to undefined]
**force** | **boolean** | Specifies whether to forcibly delete a user with form roles from the room. | [optional] [default to undefined]

## Example

```typescript
import { RoomInvitationRequest } from '@onlyoffice/docspace-api-sdk';

const instance: RoomInvitationRequest = {
    invitations,
    notify,
    message,
    culture,
    force,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
