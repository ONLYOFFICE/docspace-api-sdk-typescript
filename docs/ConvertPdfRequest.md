# ConvertPdfRequest

The settings of a PDF result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form** | **boolean** | Whether the result is a fillable PDF form: true keeps the form fields of the source as fields to fill in,  false saves a plain PDF. | [optional] [default to undefined]

## Example

```typescript
import { ConvertPdfRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertPdfRequest = {
    form,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
