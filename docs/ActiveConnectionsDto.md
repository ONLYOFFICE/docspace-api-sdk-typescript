# ActiveConnectionsDto

The active connections parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loginEvent** | **number** | The login event. | [optional] [default to undefined]
**items** | [**Array&lt;ActiveConnectionsItemDto&gt;**](ActiveConnectionsItemDto.md) | The list of active connection items. | [optional] [default to undefined]

## Example

```typescript
import { ActiveConnectionsDto } from '@onlyoffice/docspace-api-typescript';

const instance: ActiveConnectionsDto = {
    loginEvent,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
