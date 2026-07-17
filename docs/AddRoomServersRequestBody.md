# AddRoomServersRequestBody

Parameters specifying which MCP servers to assign to the room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | **Set&lt;string&gt;** | Set of unique identifiers of MCP servers to associate with the room. A maximum of 5 servers can be assigned per room. | [default to undefined]

## Example

```typescript
import { AddRoomServersRequestBody } from '@onlyoffice/docspace-api-sdk';

const instance: AddRoomServersRequestBody = {
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
