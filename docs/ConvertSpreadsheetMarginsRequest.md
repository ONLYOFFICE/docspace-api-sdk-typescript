# ConvertSpreadsheetMarginsRequest

The margins of the output PDF file, each a length with its unit: mm, cm or in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left** | **string** | The left margin of the output PDF file. | [optional] [default to undefined]
**right** | **string** | The right margin of the output PDF file. | [optional] [default to undefined]
**top** | **string** | The top margin of the output PDF file. | [optional] [default to undefined]
**bottom** | **string** | The bottom margin of the output PDF file. | [optional] [default to undefined]

## Example

```typescript
import { ConvertSpreadsheetMarginsRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertSpreadsheetMarginsRequest = {
    left,
    right,
    top,
    bottom,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
