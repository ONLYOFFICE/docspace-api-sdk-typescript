# SecurityInfoRequestDto

The entries whose sharing rights are being changed, and the rights to apply to them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folderIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The folders and rooms whose rights are being changed, identified as a listing operation returns them - a  number on the portal, a string on a connected third-party account. | [optional] [default to undefined]
**fileIds** | [**Array&lt;DuplicateRequestDtoAllOfFileIds&gt;**](DuplicateRequestDtoAllOfFileIds.md) | The files whose rights are being changed, identified as a listing operation returns them - a number on the  portal, a string on a connected third-party account. | [optional] [default to undefined]
**share** | [**Array&lt;FileShareParams&gt;**](FileShareParams.md) | One record per account or group whose rights are being set, each naming the subject and the level it gets on  all of the listed entries; a level of `None` takes the access away. An empty collection makes the call change  nothing. | [optional] [default to undefined]
**notify** | **boolean** | Set to true to have every account named in `share` emailed about the access it just received; false changes  the rights without telling anyone. | [optional] [default to undefined]
**sharingMessage** | **string** | The text put into that email, ignored while `notify` is false. Markup is stripped before sending, so only the  plain text of the value survives. | [optional] [default to undefined]

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
