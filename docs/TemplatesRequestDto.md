# TemplatesRequestDto

The files to put on the personal template list of the calling account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileIds** | **Array&lt;number&gt;** | The files to put on the template list, by id, as reported by a folder listing such as  `GET api/2.0/files/{folderId}`. Only a file stored in the portal itself can become a template, which is why an  id here is always numeric. | [optional] [default to undefined]

## Example

```typescript
import { TemplatesRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: TemplatesRequestDto = {
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
