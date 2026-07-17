# DeleteServersRequestBody

Parameters specifying which MCP servers to delete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | **Set&lt;string&gt;** | Set of unique identifiers of the MCP servers to permanently remove. All room associations and connection data will also be deleted. | [default to undefined]

## Example

```typescript
import { DeleteServersRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: DeleteServersRequestBody = {
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
