# RoomSecurityDto

The room security parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**Array&lt;FileShareDto&gt;**](FileShareDto.md) | The list of room members. | [optional] [default to undefined]
**warning** | **string** | The warning message. | [optional] [default to undefined]
**error** | [**RoomSecurityError**](RoomSecurityError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RoomSecurityDto } from '@onlyoffice/docspace-api-sdk';

const instance: RoomSecurityDto = {
    members,
    warning,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
