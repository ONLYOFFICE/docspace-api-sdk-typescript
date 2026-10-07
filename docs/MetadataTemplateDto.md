# MetadataTemplateDto

The metadata template information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The template ID. | [optional] [default to undefined]
**name** | **string** | The template name. | [optional] [default to undefined]
**visible** | **boolean** | Specifies if the template is visible in the UI pickers. | [optional] [default to undefined]
**createBy** | **string** | The user who created the template. | [optional] [default to undefined]
**createOn** | [**ApiDateTime**](ApiDateTime.md) | The template creation date. | [optional] [default to undefined]
**modifiedBy** | **string** | The user who modified the template last. | [optional] [default to undefined]
**modifiedOn** | [**ApiDateTime**](ApiDateTime.md) | The date when the template was modified last. | [optional] [default to undefined]
**fields** | [**Array&lt;MetadataFieldDto&gt;**](MetadataFieldDto.md) | The template metadata fields. | [optional] [default to undefined]

## Example

```typescript
import { MetadataTemplateDto } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataTemplateDto = {
    id,
    name,
    visible,
    createBy,
    createOn,
    modifiedBy,
    modifiedOn,
    fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
