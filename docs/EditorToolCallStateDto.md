# EditorToolCallStateDto

The editor tool call state. Used to run the agent flow in the editor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toolName** | **string** | The tool name. | [default to undefined]
**parameters** | **object** | The tool call parameters. | [default to undefined]

## Example

```typescript
import { EditorToolCallStateDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditorToolCallStateDto = {
    toolName,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
