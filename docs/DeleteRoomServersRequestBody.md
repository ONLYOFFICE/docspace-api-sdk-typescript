# DeleteRoomServersRequestBody

Parameters specifying which MCP servers to detach from the room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | **Set&lt;string&gt;** | Set of unique identifiers of MCP servers to remove from the room. Associated connections and tool configurations will also be cleaned up. | [default to undefined]

## Example

```typescript
import { DeleteRoomServersRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: DeleteRoomServersRequestBody = {
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
