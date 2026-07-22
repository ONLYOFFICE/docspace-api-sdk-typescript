# NewAiAttachment

Persistent record for a single attachment (file or image) referenced from a user message. Files carry extracted text in `content`; images carry base64 data in `base64`. Metadata (`title`, `path`, `type`) is always present for display purposes regardless of whether the heavy payload is loaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Storage-assigned UUID. | [default to undefined]
**kind** | **string** | file | image. | [default to undefined]
**source** | **string** | Origin of the attachment. `user` — uploaded by the user in the composer (the default when unset, for backward compatibility). `tool` — produced by a tool call (e.g. `generate_image`). Lets the integrator\'s adapter route or apply policies (separate bucket, quotas, TTL, CDN) per source. | [optional] [default to undefined]
**title** | **string** | Display label (filename or user-visible title). | [default to undefined]
**content** | **string** | Extracted text for files. | [optional] [default to undefined]
**base64** | **string** | Base64 data URL for images. | [optional] [default to undefined]
**path** | **string** | Original host file path (for files). | [optional] [default to undefined]
**type** | **number** | ONLYOFFICE file type code (for files). | [optional] [default to undefined]
**messageId** | **string** | Owning message id once linked. Unset while the attachment is a draft. | [optional] [default to undefined]
**threadId** | **string** | Owning thread id once linked. Unset while the attachment is a draft. | [optional] [default to undefined]
**entityId** | **string** | Opaque scope token (entity / room) the attachment was created in. Drafts carry it so an entity switch keeps in-flight composer state isolated; once linked to a message the field is redundant with the thread\'s own entity binding. | [optional] [default to undefined]
**createdAt** | **number** | Storage-assigned creation timestamp. | [default to undefined]

## Example

```typescript
import { NewAiAttachment } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiAttachment = {
    id,
    kind,
    source,
    title,
    content,
    base64,
    path,
    type,
    messageId,
    threadId,
    entityId,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
