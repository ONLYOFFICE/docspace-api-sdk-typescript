# AiAttachment

Persistent record for a single attachment (file or image) referenced from a user message. Files carry extracted text in `content`; images carry base64 data in `base64`. Metadata (`title`, `path`, `type`) is always present for display purposes regardless of whether the heavy payload is loaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Storage-assigned UUID. | [default to undefined]
**kind** | **string** | file | image. | [default to undefined]
**source** | **string** | Where the attachment came from: `user` - attached by the user (also when unset); `tool` - produced by a tool call (for example `generate_image`). | [optional] [default to undefined]
**title** | **string** | Display label (filename or user-visible title). | [default to undefined]
**content** | **string** | Extracted text for files. | [optional] [default to undefined]
**base64** | **string** | Base64 data URL for images. | [optional] [default to undefined]
**path** | **string** | Original host file path (for files). | [optional] [default to undefined]
**type** | **number** | ONLYOFFICE file type code (for files). | [optional] [default to undefined]
**messageId** | **string** | Owning message id once linked. Unset while the attachment is a draft. | [optional] [default to undefined]
**threadId** | **string** | Owning thread id once linked. Unset while the attachment is a draft. | [optional] [default to undefined]
**entityId** | **string** | The room or folder the attachment was created in, as an opaque token; once the attachment is bound to a message it repeats the thread\'s own scope. | [optional] [default to undefined]
**createdAt** | **number** | Storage-assigned creation timestamp. | [default to undefined]
**canAnalyze** | **boolean** | Whether the attached form can be analyzed. | [optional] [default to undefined]
**formKeys** | [**Array&lt;AiAttachmentFormKeysInner&gt;**](AiAttachmentFormKeysInner.md) | Keys of the fields inside the form. `key` is the field identifier, `text` its human-readable label. | [optional] [default to undefined]

## Example

```typescript
import { AiAttachment } from '@onlyoffice/docspace-api-sdk';

const instance: AiAttachment = {
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
    canAnalyze,
    formKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
