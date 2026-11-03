# AiKnowledgeRoomRef

One Knowledge room a round searches: the account and room ID from `GET api/2.0/ai/context/get-knowledge-folders`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **string** | The account the room belongs to; `docspace` for a room of this portal. | [default to undefined]
**id** | **string** | The room ID; anything that is not a positive integer is ignored. | [default to undefined]

## Example

```typescript
import { AiKnowledgeRoomRef } from '@onlyoffice/docspace-api-sdk';

const instance: AiKnowledgeRoomRef = {
    cloud,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
