# CustomFieldValueDto

The custom text field of an entry: a free-form name with its value. Custom fields belong to no template, need no  assignment and are addressed by name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The field name. | [optional] [default to undefined]
**value** | **string** | The field value on the entry. | [optional] [default to undefined]

## Example

```typescript
import { CustomFieldValueDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomFieldValueDto = {
    name,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
