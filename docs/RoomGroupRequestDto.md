# RoomGroupRequestDto

The request parameters for creating a room group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Group name | [default to undefined]
**icon** | **string** | Group icon | [default to undefined]
**rooms** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of room IDs. | [default to undefined]

## Example

```typescript
import { RoomGroupRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomGroupRequestDto = {
    name,
    icon,
    rooms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
