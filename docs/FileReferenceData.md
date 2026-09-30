# FileReferenceData

The pair of values that names a document across portals, as it is written into a spreadsheet formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileKey** | **string** | The id of the document inside the portal named below. | [optional] [default to undefined]
**instanceId** | **string** | The portal the document lives in. A reference whose value is not this portal cannot be resolved by the file  key and falls back to the path or the link. | [optional] [default to undefined]
**roomId** | **string** | The room the document lies in. It is filled in only for a document opened in a virtual data room, and stays  empty everywhere else. | [optional] [default to undefined]
**canEditRoom** | **boolean** | Whether the caller may manage the room named above; it is only meaningful together with it. | [optional] [default to undefined]

## Example

```typescript
import { FileReferenceData } from '@onlyoffice/docspace-api-sdk';

const instance: FileReferenceData = {
    fileKey,
    instanceId,
    roomId,
    canEditRoom,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
