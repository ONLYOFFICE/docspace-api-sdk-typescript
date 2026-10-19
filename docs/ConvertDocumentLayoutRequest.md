# ConvertDocumentLayoutRequest

The layout of forms printed as pdf documents or images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drawPlaceHolders** | **boolean** | Whether an empty form field shows its placeholder text in the result; false leaves it blank. | [optional] [default to undefined]
**drawFormHighlight** | **boolean** | Whether form fields keep their highlight colour in the result; false draws them without it. | [optional] [default to undefined]
**isPrint** | **boolean** | Whether the print mode is turned on. It only applies to a docx converted into pdf: with the print mode off  the highlight flag does nothing and the placeholder flag saves the forms in the pdf. | [optional] [default to undefined]

## Example

```typescript
import { ConvertDocumentLayoutRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertDocumentLayoutRequest = {
    drawPlaceHolders,
    drawFormHighlight,
    isPrint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
