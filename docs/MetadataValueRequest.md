# MetadataValueRequest

The parameters of a metadata field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldId** | **number** | The field ID. | [default to undefined]
**stringValue** | **string** | The string value. | [optional] [default to undefined]
**numberValue** | **number** | The number value. | [optional] [default to undefined]
**dateValue** | **string** | The date value. A value without a time zone offset is treated as UTC, the same way the metadata filters treat their date bounds. | [optional] [default to undefined]
**optionIds** | **Array&lt;string&gt;** | The selected choice option IDs. | [optional] [default to undefined]

## Example

```typescript
import { MetadataValueRequest } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataValueRequest = {
    fieldId,
    stringValue,
    numberValue,
    dateValue,
    optionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
