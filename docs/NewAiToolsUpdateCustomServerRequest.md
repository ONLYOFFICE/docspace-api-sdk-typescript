# NewAiToolsUpdateCustomServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**config** | **object** | One MCP server configuration. The shape is intentionally open — MCP allows per-transport fields (`command`/`args` for stdio, `url` for HTTP, plus env, headers, etc.) and the storage layer stays agnostic to which transport is in use. | [default to undefined]
**entityId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { NewAiToolsUpdateCustomServerRequest } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiToolsUpdateCustomServerRequest = {
    name,
    config,
    entityId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
