# NewAiAgentsUpdateQuotaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomIds** | [**Array&lt;NewAiAgentsUpdateQuotaRequestRoomIdsInner&gt;**](NewAiAgentsUpdateQuotaRequestRoomIdsInner.md) | Agent (room) ids to update. | [default to undefined]
**quota** | **number** | New quota in bytes; a negative value disables the custom quota. | [default to undefined]

## Example

```typescript
import { NewAiAgentsUpdateQuotaRequest } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAgentsUpdateQuotaRequest = {
    roomIds,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
