# MetadataValueDto

The value of a metadata field on an entry. Exactly one of the value properties is set, the one matching the field type:  `stringValue` for a string field, `numberValue` for a number field, `dateValue` for a date field,  `optionIds` for a single or multiple choice field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stringValue** | **string** | The string value. | [optional] [default to undefined]
**numberValue** | **number** | The number value. | [optional] [default to undefined]
**dateValue** | [**ApiDateTime**](ApiDateTime.md) | The date value. | [optional] [default to undefined]
**optionIds** | **Array&lt;string&gt;** | The selected choice option IDs. | [optional] [default to undefined]

## Example

```typescript
import { MetadataValueDto } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataValueDto = {
    stringValue,
    numberValue,
    dateValue,
    optionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
