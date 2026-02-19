# McpServerDto

Full MCP server configuration, including connection details and authentication headers. Returned for administrator-level operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the MCP server. | [optional] [default to undefined]
**name** | **string** | Display name of the MCP server. | [optional] [default to undefined]
**description** | **string** | Human-readable description of the server\&#39;s purpose and capabilities. | [optional] [default to undefined]
**endpoint** | **string** | Base URL of the MCP server endpoint. | [optional] [default to undefined]
**serverType** | [**ServerType**](ServerType.md) |  | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | HTTP headers sent with every request to the server (e.g., authentication tokens). | [optional] [default to undefined]
**enabled** | **boolean** | Indicates whether the server is currently enabled and available for room assignment. | [optional] [default to undefined]
**icon** | [**Icon**](Icon.md) |  | [optional] [default to undefined]
**needReset** | **boolean** | Indicates whether the server requires a configuration reset due to connectivity or credential issues. | [optional] [default to undefined]

## Example

```typescript
import { McpServerDto } from '@onlyoffice/docspace-api-sdk';

const instance: McpServerDto = {
    id,
    name,
    description,
    endpoint,
    serverType,
    headers,
    enabled,
    icon,
    needReset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
