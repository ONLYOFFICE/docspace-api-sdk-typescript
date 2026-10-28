# MetadataFieldDto

The metadata field information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The field ID. | [optional] [default to undefined]
**templateId** | **number** | The ID of the template the field belongs to. | [optional] [default to undefined]
**name** | **string** | The field name. | [optional] [default to undefined]
**type** | [**MetadataFieldType**](MetadataFieldType.md) | The field type. | [optional] [default to undefined]
**_options** | [**Array&lt;MetadataFieldOptionDto&gt;**](MetadataFieldOptionDto.md) | The choice options of the field. | [optional] [default to undefined]
**order** | **number** | The field display order inside the template. | [optional] [default to undefined]

## Example

```typescript
import { MetadataFieldDto } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataFieldDto = {
    id,
    templateId,
    name,
    type,
    _options,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
