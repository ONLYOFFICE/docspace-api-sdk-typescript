# SecurityInfoRequestDto

The security information request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of the shared folder IDs. | [optional] [default to undefined]
**fileIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The list of the shared file IDs. | [optional] [default to undefined]
**share** | [**Array&lt;FileShareParams&gt;**](FileShareParams.md) | The collection of sharing parameters. | [optional] [default to undefined]
**notify** | **boolean** | Specifies whether to notify users about the shared file or not. | [optional] [default to undefined]
**sharingMessage** | **string** | The message to send when notifying about the shared file. | [optional] [default to undefined]

## Example

```typescript
import { SecurityInfoRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SecurityInfoRequestDto = {
    folderIds,
    fileIds,
    share,
    notify,
    sharingMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
