# CreateFileJsonElement

The parameters of a file that the portal creates from a template or a blank document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of the new file. The extension in it decides the format, and one of a known text, spreadsheet or  presentation format is rewritten to the DOCX, XLSX or PPTX of the portal unless `enableExternalExt` says  otherwise; a title with no extension gets DOCX added. | [default to undefined]
**templateId** | [**CreateFileJsonElementTemplateId**](CreateFileJsonElementTemplateId.md) |  | [optional] [default to undefined]
**enableExternalExt** | **boolean** | Whether the extension of the title is kept as it is: `true` stores the title verbatim, `false` rewrites a  known foreign format to the format the portal edits itself. | [optional] [default to undefined]
**formId** | **number** | A ready form from the form gallery of the portal to copy instead of a template, named by the identifier the  gallery reports for it. It takes precedence over `templateId`; 0 means no form. | [optional] [default to undefined]

## Example

```typescript
import { CreateFileJsonElement } from '@onlyoffice/docspace-api-sdk';

const instance: CreateFileJsonElement = {
    title,
    templateId,
    enableExternalExt,
    formId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
