# AiMetadataValue

A metadata value: exactly one member, by the field\'s type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stringValue** | **string** |  | [optional] [default to undefined]
**numberValue** | **number** |  | [optional] [default to undefined]
**dateValue** | **string** | ISO 8601 date-time, UTC midnight of the date. | [optional] [default to undefined]
**optionIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AiMetadataValue } from '@onlyoffice/docspace-api-sdk';

const instance: AiMetadataValue = {
    stringValue,
    numberValue,
    dateValue,
    optionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
