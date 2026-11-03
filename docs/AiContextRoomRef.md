# AiContextRoomRef

One Instructions room a round runs with as context: the account and room ID from `GET api/2.0/ai/context/get-context-folders`, plus the skills of the room the round may use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **string** | The account the room belongs to; `docspace` for a room of this portal. | [default to undefined]
**id** | **string** | The room ID. | [default to undefined]
**skills** | [**Array&lt;AiRoomSkill&gt;**](AiRoomSkill.md) | The skills of the room the round may use, as `GET api/2.0/ai/context/get-room-skills` lists them. | [optional] [default to undefined]

## Example

```typescript
import { AiContextRoomRef } from '@onlyoffice/docspace-api-sdk';

const instance: AiContextRoomRef = {
    cloud,
    id,
    skills,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
