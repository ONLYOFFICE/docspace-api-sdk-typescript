# CustomFieldRequest

The parameters of a custom text field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The field name. The names are matched without regard to case. | [default to undefined]
**value** | **string** | The field value. Null or empty removes the field from the entry. | [optional] [default to undefined]

## Example

```typescript
import { CustomFieldRequest } from '@onlyoffice/docspace-api-sdk';

const instance: CustomFieldRequest = {
    name,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
