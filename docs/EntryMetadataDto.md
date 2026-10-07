# EntryMetadataDto

The metadata of an entry: the assigned templates with their values, and the custom fields holding a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates** | [**Array&lt;EntryTemplateDto&gt;**](EntryTemplateDto.md) | The assigned metadata templates, each field carrying its value on the entry. | [optional] [default to undefined]
**customFields** | [**Array&lt;CustomFieldValueDto&gt;**](CustomFieldValueDto.md) | The custom fields with their values. | [optional] [default to undefined]

## Example

```typescript
import { EntryMetadataDto } from '@onlyoffice/docspace-api-sdk';

const instance: EntryMetadataDto = {
    templates,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
