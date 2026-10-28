# XlsxReportResponseDto

The answer to a report generation request: the queued task, the form whose answers are collected, and whether the  report file is being created or refreshed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form** | [**FileDto**](FileDto.md) | The original form the answers are collected from. It is not the produced spreadsheet - that one arrives with  the task, once the task reports completion. | [optional] [default to undefined]
**task** | [**DocumentBuilderTaskDto**](DocumentBuilderTaskDto.md) | The queued generation. Poll it with `GET api/2.0/files/file/{fileId}/xlsx` until it reports completion, and  take the produced file from it then. | [optional] [default to undefined]
**isNewFile** | **boolean** | True when this run creates the report file, false when an existing report is rewritten in place, which means  it keeps its id and the links already shared for it. | [optional] [default to undefined]

## Example

```typescript
import { XlsxReportResponseDto } from '@onlyoffice/docspace-api-sdk';

const instance: XlsxReportResponseDto = {
    form,
    task,
    isNewFile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
