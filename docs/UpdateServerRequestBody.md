# UpdateServerRequestBody

Parameters for updating an existing MCP server. All fields are optional — only provided fields will be modified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | New display name for the server. Only letters, numbers, underscores, and hyphens are allowed. Maximum 128 characters. | [optional] [default to undefined]
**description** | **string** | New human-readable description of the server\&#39;s purpose. Maximum 255 characters. | [optional] [default to undefined]
**endpoint** | **string** | New base URL of the MCP server endpoint. If changed, the system will re-verify connectivity before saving. | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | New HTTP headers to include with every request. If changed alongside the endpoint, connectivity is re-verified. | [optional] [default to undefined]
**updateIcon** | **boolean** | Set to true to update the server icon. When true, the Icon field value (or null to remove) will be applied. | [optional] [default to undefined]
**icon** | **string** | New Base64-encoded icon image for the server, or null to remove the existing icon. Only applied when UpdateIcon is true. | [optional] [default to undefined]

## Example

```typescript
import { UpdateServerRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateServerRequestBody = {
    name,
    description,
    endpoint,
    headers,
    updateIcon,
    icon,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
