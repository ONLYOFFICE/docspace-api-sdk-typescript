# EntryTemplateDto

A metadata template assigned to an entry: the template with every field of it, each field carrying its value on the entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The template ID. | [optional] [default to undefined]
**name** | **string** | The template name. | [optional] [default to undefined]
**visible** | **boolean** | Specifies if the template is visible in the UI pickers. | [optional] [default to undefined]
**fields** | [**Array&lt;EntryFieldDto&gt;**](EntryFieldDto.md) | The template fields with their values on the entry. | [optional] [default to undefined]

## Example

```typescript
import { EntryTemplateDto } from '@onlyoffice/docspace-api-sdk';

const instance: EntryTemplateDto = {
    id,
    name,
    visible,
    fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
