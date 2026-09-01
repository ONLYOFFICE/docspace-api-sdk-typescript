# AiThreadMessageLike

A single chat message as it travels on the wire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Storage-assigned message id (absent on inbound drafts). | [optional] [default to undefined]
**role** | **string** | Message author role. | [default to undefined]
**content** | [**AiThreadMessageLikeContent**](AiThreadMessageLikeContent.md) |  | [default to undefined]
**createdAt** | **string** | Creation timestamp, ISO-8601 on the wire. | [optional] [default to undefined]
**status** | [**AiThreadMessageLikeStatus**](AiThreadMessageLikeStatus.md) |  | [optional] [default to undefined]
**metadata** | **object** | Arbitrary per-message metadata. | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments linked to the message. | [optional] [default to undefined]

## Example

```typescript
import { AiThreadMessageLike } from '@onlyoffice/docspace-api-sdk';

const instance: AiThreadMessageLike = {
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
