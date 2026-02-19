# McpToolDto

Represents a single tool exposed by an MCP server, along with its enabled or disabled state within a room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the tool as reported by the MCP server. | [default to undefined]
**enabled** | **boolean** | Indicates whether this tool is enabled (true) or disabled (false) for use in AI chat sessions within the room. | [optional] [default to undefined]

## Example

```typescript
import { McpToolDto } from '@onlyoffice/docspace-api-sdk';

const instance: McpToolDto = {
    name,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
