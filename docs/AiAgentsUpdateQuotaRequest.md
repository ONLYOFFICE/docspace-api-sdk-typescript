# AiAgentsUpdateQuotaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomIds** | [**Array&lt;AiAgentsUpdateQuotaRequestRoomIdsInner&gt;**](AiAgentsUpdateQuotaRequestRoomIdsInner.md) | Agent (room) ids to update. | [default to undefined]
**quota** | **number** | New quota in bytes; a negative value disables the custom quota. | [default to undefined]

## Example

```typescript
import { AiAgentsUpdateQuotaRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AiAgentsUpdateQuotaRequest = {
    roomIds,
    quota,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
