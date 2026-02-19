# McpServerShortDto

Compact MCP server summary without sensitive details like endpoint URL or authentication headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the MCP server. | [optional] [default to undefined]
**name** | **string** | Display name of the MCP server. | [optional] [default to undefined]
**serverType** | [**ServerType**](ServerType.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Indicates whether the server is currently enabled and available for room assignment. | [optional] [default to undefined]
**icon** | [**Icon**](Icon.md) |  | [optional] [default to undefined]
**needReset** | **boolean** | Indicates whether the server requires a configuration reset due to connectivity or credential issues. | [optional] [default to undefined]

## Example

```typescript
import { McpServerShortDto } from '@onlyoffice/docspace-api-sdk';

const instance: McpServerShortDto = {
    id,
    name,
    serverType,
    enabled,
    icon,
    needReset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
