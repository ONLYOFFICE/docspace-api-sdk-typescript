# AddMcpServerRequestBody

Parameters for creating a new custom MCP server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique display name for the server. Only letters, numbers, underscores, and hyphens are allowed. Maximum 128 characters. | [default to undefined]
**description** | **string** | Human-readable description of the server\&#39;s purpose and capabilities. Maximum 255 characters. | [default to undefined]
**endpoint** | **string** | Base URL of the MCP server endpoint. Must be a valid, reachable URL. The system will verify connectivity during registration. | [default to undefined]
**headers** | **{ [key: string]: string; }** | Optional HTTP headers to include with every request to the MCP server (e.g., authentication tokens or API keys). | [optional] [default to undefined]
**icon** | **string** | Optional Base64-encoded icon image for the server. Used as the visual identifier in the UI. | [optional] [default to undefined]

## Example

```typescript
import { AddMcpServerRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: AddMcpServerRequestBody = {
    name,
    description,
    endpoint,
    headers,
    icon,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
