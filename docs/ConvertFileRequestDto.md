# ConvertFileRequestDto

What to convert, where to keep the result, and the parameters the document service is handed. Everything below the  first two fields is the contract of the document service itself, named and shaped exactly as it names it, so that  the portal passes the request on rather than translating it. What the portal can read off the file - its format,  its name and the key of its revision - is not asked for and cannot be overridden.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileId** | **number** | The id of the portal file to convert, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [default to undefined]
**folderId** | **number** | The id of the folder to save the converted file in, as reported by a folder listing such as  `GET api/2.0/files/{folderId}`. | [optional] [default to undefined]
**codePage** | **number** | The encoding of a csv or txt source, as a code page number: 1251 for Cyrillic, 65001 for UTF-8, and so on.  Leaving it out lets the document service guess, which garbles non-latin text. | [optional] [default to undefined]
**delimiter** | **number** | The character separating the values of a csv source: 0 - none, 1 - tab, 2 - semicolon, 3 - colon, 4 - comma,  5 - space. | [optional] [default to undefined]
**documentLayout** | [**ConvertDocumentLayoutRequest**](ConvertDocumentLayoutRequest.md) | The layout of forms printed as pdf documents or images. | [optional] [default to undefined]
**documentRenderer** | [**ConvertDocumentRendererRequest**](ConvertDocumentRendererRequest.md) | How the text of a pdf, xps or oxps source is read back. | [optional] [default to undefined]
**outputtype** | **string** | The extension of the format to convert to, without the dot. The formats a source can become are listed under  `extsConvertible` in `GET api/2.0/files/settings`, keyed by the source extension, both with a leading dot there. | [default to undefined]
**password** | **string** | The password of the source document, for a document that is protected with one. | [optional] [default to undefined]
**region** | **string** | The culture code whose currency, date and time formats a spreadsheet converted to PDF is shown in. | [optional] [default to undefined]
**thumbnail** | [**ConvertThumbnailRequest**](ConvertThumbnailRequest.md) | How a thumbnail is fitted, when the target format is an image. | [optional] [default to undefined]
**spreadsheetLayout** | [**ConvertSpreadsheetLayoutRequest**](ConvertSpreadsheetLayoutRequest.md) | How a spreadsheet is laid out on the page, when it is converted to PDF. | [optional] [default to undefined]
**pdf** | [**ConvertPdfRequest**](ConvertPdfRequest.md) | The PDF settings, used when the target format is PDF. | [optional] [default to undefined]

## Example

```typescript
import { ConvertFileRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: ConvertFileRequestDto = {
    fileId,
    folderId,
    codePage,
    delimiter,
    documentLayout,
    documentRenderer,
    outputtype,
    password,
    region,
    thumbnail,
    spreadsheetLayout,
    pdf,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
