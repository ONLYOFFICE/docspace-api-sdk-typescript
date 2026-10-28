# UpdateMetadataFieldRequest

The parameters of a metadata field update. Every property is optional: a property that is omitted keeps its current value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The new field name. | [optional] [default to undefined]
**type** | [**MetadataFieldType**](MetadataFieldType.md) | The new field type. The type can be changed only while the field has no values. | [optional] [default to undefined]
**_options** | [**Array&lt;MetadataFieldOptionRequest&gt;**](MetadataFieldOptionRequest.md) | The new choice options of the field. The options in use cannot be removed. | [optional] [default to undefined]
**order** | **number** | The new display position of the field inside the template: the fields are shown by it ascending. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMetadataFieldRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateMetadataFieldRequest = {
    name,
    type,
    _options,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
