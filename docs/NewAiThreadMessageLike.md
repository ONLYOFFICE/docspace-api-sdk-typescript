# NewAiThreadMessageLike


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Storage-assigned message id (absent on inbound drafts). | [optional] [default to undefined]
**role** | **string** | Message author role. | [default to undefined]
**content** | [**NewAiThreadMessageLikeContent**](NewAiThreadMessageLikeContent.md) |  | [default to undefined]
**createdAt** | **string** | Creation timestamp, ISO-8601 on the wire. | [optional] [default to undefined]
**status** | [**NewAiThreadMessageLikeStatus**](NewAiThreadMessageLikeStatus.md) |  | [optional] [default to undefined]
**metadata** | **object** | Arbitrary per-message metadata. | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments linked to the message. | [optional] [default to undefined]

## Example

```typescript
import { NewAiThreadMessageLike } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiThreadMessageLike = {
    id,
    role,
    content,
    createdAt,
    status,
    metadata,
    attachments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
