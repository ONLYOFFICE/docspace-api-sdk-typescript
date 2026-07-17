# McpServerStatusDto

MCP server status within a room, reflecting the current user\'s connection state for OAuth-based servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the MCP server. | [optional] [default to undefined]
**name** | **string** | Display name of the MCP server. | [default to undefined]
**serverType** | [**ServerType**](ServerType.md) |  | [optional] [default to undefined]
**connected** | **boolean** | Indicates whether the current user has an active connection to this server. For direct-connection servers this is always true; for OAuth-based servers it reflects whether the user has completed authorization. | [optional] [default to undefined]
**icon** | [**Icon**](Icon.md) |  | [optional] [default to undefined]
**needReset** | **boolean** | Indicates whether the server requires a configuration reset due to connectivity or credential issues. | [optional] [default to undefined]

## Example

```typescript
import { McpServerStatusDto } from '@onlyoffice/docspace-api-sdk';

const instance: McpServerStatusDto = {
    id,
    name,
    serverType,
    connected,
    icon,
    needReset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
