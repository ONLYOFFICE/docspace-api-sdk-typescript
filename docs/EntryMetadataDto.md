# EntryMetadataDto

The metadata of an entry: the assigned templates with their values, and the custom fields holding a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates** | [**Array&lt;EntryTemplateDto&gt;**](EntryTemplateDto.md) | The assigned metadata templates, each field carrying its value on the entry. | [optional] [default to undefined]
**customFields** | [**Array&lt;CustomFieldValueDto&gt;**](CustomFieldValueDto.md) | The custom fields with their values. | [optional] [default to undefined]
**hasMetadataFields** | **boolean** | Whether the entry has a metadata field a user can see and fill, by hand or with the AI filling: a field of a  template in `templates` whose `visible` is true, or a custom field in `customFields`. False when both lists are  empty, when every template is hidden, or when none of the visible ones has a field. It says nothing about the  values: it stays true once every field is filled. The same flag is carried by the entry in a folder listing and  in the file and folder info responses as `hasMetadataFields`, so a client that has the listing needs no call here  to decide whether to offer the filling. | [optional] [default to undefined]

## Example

```typescript
import { EntryMetadataDto } from '@onlyoffice/docspace-api-sdk';

const instance: EntryMetadataDto = {
    templates,
    customFields,
    hasMetadataFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
