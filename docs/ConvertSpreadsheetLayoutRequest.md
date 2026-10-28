# ConvertSpreadsheetLayoutRequest

How a spreadsheet converted to PDF is laid out on the page. A field left out takes the document service default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignorePrintArea** | **boolean** | Whether the print area chosen in the spreadsheet is ignored; false converts only that area. | [optional] [default to undefined]
**orientation** | **string** | The page orientation of the output PDF file: portrait or landscape. | [optional] [default to undefined]
**fitToHeight** | **number** | The number of pages the converted area is fitted into in height; 0 does not fit it. | [optional] [default to undefined]
**scale** | **number** | The scale of the output PDF file, in percent. | [optional] [default to undefined]
**fitToWidth** | **number** | The number of pages the converted area is fitted into in width; 0 does not fit it. | [optional] [default to undefined]
**headings** | **boolean** | Whether the row and column headings are printed in the output PDF file. | [optional] [default to undefined]
**gridLines** | **boolean** | Whether the grid lines are printed in the output PDF file. | [optional] [default to undefined]
**margins** | [**ConvertSpreadsheetMarginsRequest**](ConvertSpreadsheetMarginsRequest.md) | The margins of the output PDF file. | [optional] [default to undefined]
**pageSize** | [**ConvertSpreadsheetPageSizeRequest**](ConvertSpreadsheetPageSizeRequest.md) | The page size of the output PDF file. | [optional] [default to undefined]

## Example

```typescript
import { ConvertSpreadsheetLayoutRequest } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertSpreadsheetLayoutRequest = {
    ignorePrintArea,
    orientation,
    fitToHeight,
    scale,
    fitToWidth,
    headings,
    gridLines,
    margins,
    pageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
