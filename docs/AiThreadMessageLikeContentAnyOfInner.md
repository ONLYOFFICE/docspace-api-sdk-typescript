# AiThreadMessageLikeContentAnyOfInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Part kind: `text`, `reasoning`, `source`, `image`, `file`, `audio`, `data` or `tool-call`. | [default to undefined]
**text** | **string** | The text of a `text` or `reasoning` part. | [optional] [default to undefined]
**parentId** | **string** | Id of the part this one belongs to, on `text`, `reasoning`, `source` and `tool-call` parts. On a `reasoning` part the chat library keeps the provider\'s thinking signature here. | [optional] [default to undefined]
**sourceType** | **string** | A `source` part\'s source kind; always `url`. | [optional] [default to undefined]
**id** | **string** | A `source` part\'s id. | [optional] [default to undefined]
**url** | **string** | A `source` part\'s URL. | [optional] [default to undefined]
**title** | **string** | A `source` part\'s title. | [optional] [default to undefined]
**image** | **string** | An `image` part\'s picture, as a URL (usually a `data:` URL). For an image the user attached, a JSON string `{ ref, title, kind: image }` naming the stored attachment instead. | [optional] [default to undefined]
**mimeType** | **string** | A `file` part\'s media type. For a file the user attached, a JSON string `{ ref, title, kind: file, path, type }` naming the stored attachment instead - the chat library carries the reference here. | [optional] [default to undefined]
**data** | **string** | A `file` part\'s content; empty when the part references an attachment. (A `data` part would carry its payload here too, as any JSON value; neither the chat library nor this service writes one.) | [optional] [default to undefined]
**filename** | **string** | The file name of a `file` or `image` part. | [optional] [default to undefined]
**name** | **string** | An `image` part\'s display name, or a `data` part\'s name. | [optional] [default to undefined]
**audio** | [**AiThreadMessageLikeContentAnyOfInnerAudio**](AiThreadMessageLikeContentAnyOfInnerAudio.md) |  | [optional] [default to undefined]
**toolCallId** | **string** | A `tool-call` part\'s call id. | [optional] [default to undefined]
**toolName** | **string** | A `tool-call` part\'s tool name. | [optional] [default to undefined]
**args** | **object** | A `tool-call` part\'s arguments. | [optional] [default to undefined]
**argsText** | **string** | A `tool-call` part\'s arguments as the model streamed them, JSON text. | [optional] [default to undefined]
**result** | **any** |  | [optional] [default to undefined]
**isError** | **boolean** | Whether a `tool-call` part\'s result is an error. | [optional] [default to undefined]
**artifact** | **any** |  | [optional] [default to undefined]
**interrupt** | [**AiThreadMessageLikeContentAnyOfInnerInterrupt**](AiThreadMessageLikeContentAnyOfInnerInterrupt.md) |  | [optional] [default to undefined]
**messages** | **Array&lt;object&gt;** | Messages of a sub-agent run inside a `tool-call` part. | [optional] [default to undefined]
**metadata** | **object** | Provider-specific data of a `tool-call` part - for a Gemini call, `{ thoughtSignature }`, which has to be sent back with the call. | [optional] [default to undefined]

## Example

```typescript
import { AiThreadMessageLikeContentAnyOfInner } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadMessageLikeContentAnyOfInner = {
    type,
    text,
    parentId,
    sourceType,
    id,
    url,
    title,
    image,
    mimeType,
    data,
    filename,
    name,
    audio,
    toolCallId,
    toolName,
    args,
    argsText,
    result,
    isError,
    artifact,
    interrupt,
    messages,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
