# EntryFieldDto

A metadata template field with its value on the entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The field ID. | [optional] [default to undefined]
**name** | **string** | The field name. | [optional] [default to undefined]
**type** | [**MetadataFieldType**](MetadataFieldType.md) | The field type. | [optional] [default to undefined]
**_options** | [**Array&lt;MetadataFieldOptionDto&gt;**](MetadataFieldOptionDto.md) | The choice options of the field. | [optional] [default to undefined]
**order** | **number** | The field display order inside the template. | [optional] [default to undefined]
**value** | [**MetadataValueDto**](MetadataValueDto.md) | The value of the field on the entry, or `null` when the entry holds no value for it. | [optional] [default to undefined]

## Example

```typescript
import { EntryFieldDto } from '@onlyoffice/docspace-api-sdk';

const instance: EntryFieldDto = {
    id,
    name,
    type,
    _options,
    order,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
