# AiActionArgs

Per-request options of an AI round: extra tools, the depth of reasoning, a system prompt override and the rooms and folder connected as context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | [**Array&lt;AiMCPItem&gt;**](AiMCPItem.md) | Extra tools offered to the model for this request. | [optional] [default to undefined]
**isReasoning** | **boolean** | Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set. | [optional] [default to undefined]
**reasoningLevel** | [**AiReasoningLevel**](AiReasoningLevel.md) | Depth of extended thinking for the round; providers clamp it to what the model accepts. | [optional] [default to undefined]
**prompt** | [**AiActionArgsPrompt**](AiActionArgsPrompt.md) |  | [optional] [default to undefined]
**toolInstructions** | **{ [key: string]: string; }** | Usage notes of the MCP servers the caller holds the connection to, keyed by server type; folded into the system prompt as advisory text. | [optional] [default to undefined]
**contextRooms** | [**Array&lt;AiContextRoomRef&gt;**](AiContextRoomRef.md) | Instructions rooms connected to the chat as context, each with the skills the round may use. | [optional] [default to undefined]
**knowledgeRooms** | [**Array&lt;AiKnowledgeRoomRef&gt;**](AiKnowledgeRoomRef.md) | Knowledge rooms connected to the chat; the knowledge search tool of the round is limited to them. Each `id` has to be a DocSpace room id. | [optional] [default to undefined]
**knowledgeRoom** | [**AiKnowledgeRoomRef**](AiKnowledgeRoomRef.md) | A single knowledge room, as an older client sends it. Read only when `knowledgeRooms` is absent; send `knowledgeRooms` instead. | [optional] [default to undefined]
**folderContext** | [**AiFolderContextRef**](AiFolderContextRef.md) | The folder connected to the chat as the round\'s context. It becomes the location the model is told the user works in, and the entry the round is attributed to. | [optional] [default to undefined]
**entityId** | **string** | The entry the round is attributed to. A hint, resolved against the caller\'s own access. | [optional] [default to undefined]

## Example

```typescript
import { AiActionArgs } from '@onlyoffice/docspace-api-sdk';

const instance: AiActionArgs = {
    tools,
    isReasoning,
    reasoningLevel,
    prompt,
    toolInstructions,
    contextRooms,
    knowledgeRooms,
    knowledgeRoom,
    folderContext,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
