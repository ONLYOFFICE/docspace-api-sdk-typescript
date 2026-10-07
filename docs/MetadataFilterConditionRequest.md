# MetadataFilterConditionRequest

One metadata filter condition as the clients send it: an element of the metadataFilters JSON of the listings and of  the body of the search endpoints. All conditions are combined with AND.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldId** | **number** | The ID of the template field the condition is on. A custom field is addressed by ASC.Files.Core.MetadataFilterConditionRequest.Name instead. | [optional] [default to undefined]
**name** | **string** | The name of a custom field, for the conditions on the custom fields, which have no identifier outside. Either the  field ID or the name is given; the name is matched without regard to case. | [optional] [default to undefined]
**op** | **string** | The operator, one of ASC.Files.Core.MetadataFilterOperators. Optional: the field type alone determines how the  condition is evaluated, so an omitted operator is accepted, while a present one has to match the field type. | [optional] [default to undefined]
**value** | **string** | The exact value: string fields, and number fields given a single value. A JSON number is accepted as well as a string. | [optional] [default to undefined]
**from** | **string** | The inclusive lower bound of a range. A date given without a time (2026-06-01) is the start of that day (UTC). | [optional] [default to undefined]
**to** | **string** | The inclusive upper bound of a range. A date given without a time (2026-06-30) covers the whole day (UTC);  a value with a time is an instant and is taken as is. | [optional] [default to undefined]
**optionIds** | **Array&lt;string&gt;** | The options any of which the choice field must hold. | [optional] [default to undefined]

## Example

```typescript
import { MetadataFilterConditionRequest } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataFilterConditionRequest = {
    fieldId,
    name,
    op,
    value,
    from,
    to,
    optionIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
