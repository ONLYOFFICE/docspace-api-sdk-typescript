# CreateMetadataTemplateRequestDto

The request parameters for creating a metadata template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The template name. | [default to undefined]
**visible** | **boolean** | Specifies if the template is visible in the UI pickers. | [optional] [default to undefined]
**fields** | [**Array&lt;MetadataFieldRequest&gt;**](MetadataFieldRequest.md) | The template metadata fields. | [optional] [default to undefined]

## Example

```typescript
import { CreateMetadataTemplateRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateMetadataTemplateRequestDto = {
    name,
    visible,
    fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
