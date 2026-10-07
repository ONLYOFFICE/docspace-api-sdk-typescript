# MetadataFieldRequest

The parameters of a metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The field name. | [optional] [default to undefined]
**type** | [**MetadataFieldType**](MetadataFieldType.md) | The field type. | [optional] [default to undefined]
**_options** | [**Array&lt;MetadataFieldOptionRequest&gt;**](MetadataFieldOptionRequest.md) | The choice options of the field. | [optional] [default to undefined]
**order** | **number** | The display position of the field inside the template: the fields are shown by it ascending, and equal positions  keep the order of creation. | [optional] [default to undefined]

## Example

```typescript
import { MetadataFieldRequest } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataFieldRequest = {
    name,
    type,
    _options,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
