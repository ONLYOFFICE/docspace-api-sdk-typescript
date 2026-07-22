# NewAiRoomDataLifetimeDto

The room data lifetime information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletePermanently** | **boolean** | Specifies whether to permanently delete the room data or not. | [optional] [default to undefined]
**period** | [**NewAiRoomDataLifetimePeriod**](NewAiRoomDataLifetimePeriod.md) |  | [optional] [default to undefined]
**value** | **number** | Specifies the time period value of the room data lifetime. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies whether the room data lifetime setting is enabled or not. | [optional] [default to undefined]

## Example

```typescript
import { NewAiRoomDataLifetimeDto } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiRoomDataLifetimeDto = {
    deletePermanently,
    period,
    value,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
