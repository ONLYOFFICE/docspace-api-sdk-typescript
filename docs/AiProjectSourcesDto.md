# AiProjectSourcesDto

The sources of an AI project: the Instructions and Knowledge rooms linked to it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructionsRooms** | [**Array&lt;AiProjectSourceDto&gt;**](AiProjectSourceDto.md) | Linked Instructions rooms, sorted by title. | [default to undefined]
**knowledgeRooms** | [**Array&lt;AiProjectSourceDto&gt;**](AiProjectSourceDto.md) | Linked Knowledge rooms, sorted by title. | [default to undefined]

## Example

```typescript
import { AiProjectSourcesDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiProjectSourcesDto = {
    instructionsRooms,
    knowledgeRooms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
