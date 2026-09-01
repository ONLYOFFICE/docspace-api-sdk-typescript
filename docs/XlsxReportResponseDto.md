# XlsxReportResponseDto

The XLSX report task response parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form** | [**FileDtoInteger**](FileDtoInteger.md) | The original form file information. | [optional] [default to undefined]
**task** | [**DocumentBuilderTaskDto**](DocumentBuilderTaskDto.md) | The Document Builder task information. | [optional] [default to undefined]
**isNewFile** | **boolean** | Specifies whether the XLSX report file is newly created or an existing file will be updated. | [optional] [default to undefined]

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
