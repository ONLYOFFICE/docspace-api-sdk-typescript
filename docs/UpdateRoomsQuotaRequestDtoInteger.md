# UpdateRoomsQuotaRequestDtoInteger

The request parameters for updating the room quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomIds** | [**Array&lt;BaseBatchRequestDtoFolderIdsInner&gt;**](BaseBatchRequestDtoFolderIdsInner.md) | The list of room IDs. | [optional] [default to undefined]
**quota** | **number** | The room quota. | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomsQuotaRequestDtoInteger } from '@onlyoffice/docspace-api-typescript';

const instance: UpdateRoomsQuotaRequestDtoInteger = {
    roomIds,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
