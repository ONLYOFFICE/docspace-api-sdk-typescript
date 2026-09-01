# FormResultsDto

A single filled-in form submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createOn** | **string** | The date and time when the form was created. | [optional] [default to undefined]
**formsData** | [**Array&lt;FormsItemData&gt;**](FormsItemData.md) | The list of forms data. | [optional] [default to undefined]

## Example

```typescript
import { FormResultsDto } from '@onlyoffice/docspace-api-sdk';

const instance: FormResultsDto = {
    createOn,
    formsData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
