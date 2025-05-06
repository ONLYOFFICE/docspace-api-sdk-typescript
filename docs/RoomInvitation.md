# RoomInvitation

The room invitation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email address. | [optional] [default to undefined]
**id** | **string** | The ID of the user to share a room with. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RoomInvitation } from '@onlyoffice/docspace-api-typescript';

const instance: RoomInvitation = {
    email,
    id,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
