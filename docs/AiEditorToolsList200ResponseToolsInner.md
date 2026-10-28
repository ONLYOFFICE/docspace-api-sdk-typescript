# AiEditorToolsList200ResponseToolsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Tool name, as it is passed back to the call endpoint. | [default to undefined]
**description** | **string** | What the tool does, empty when the server declares nothing. | [default to undefined]
**inputSchema** | **{ [key: string]: any | null; }** | JSON Schema of the tool arguments. | [default to undefined]
**requireApproval** | **boolean** | Whether the editor has to ask the user before running the tool. Read-only operations arrive with this off. | [default to undefined]

## Example

```typescript
import { AiEditorToolsList200ResponseToolsInner } from '@onlyoffice/docspace-api-sdk';

const instance: AiEditorToolsList200ResponseToolsInner = {
    name,
    description,
    inputSchema,
    requireApproval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
