# ChatSettingsDto

The chat configuration of an AI room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **string** | The instruction put in front of every conversation held in the room, which sets the role the assistant takes  and the way it answers. Empty when the room was left on the behaviour the portal provides by default. | [optional] [default to undefined]

## Example

```typescript
import { ChatSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: ChatSettingsDto = {
    prompt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
