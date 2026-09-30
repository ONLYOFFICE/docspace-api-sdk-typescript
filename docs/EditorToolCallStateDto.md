# EditorToolCallStateDto

A generation the editor is expected to run as soon as the document opens, left behind by an AI agent that created  the file but not its content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toolName** | **string** | Which generation to run, which also decides the shape of the parameters below. | [default to undefined]
**parameters** | [**EditorToolCallParametersDto**](EditorToolCallParametersDto.md) | The arguments of the generation named above. | [default to undefined]

## Example

```typescript
import { EditorToolCallStateDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditorToolCallStateDto = {
    toolName,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
