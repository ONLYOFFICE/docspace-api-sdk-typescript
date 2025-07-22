# ConversationResultDto

The result of file convertion operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The conversion operation ID. | [optional] [default to undefined]
**Operation** | [**FileOperationType**](FileOperationType.md) |  | [optional] [default to undefined]
**progress** | **number** | The conversion operation progress. | [optional] [default to undefined]
**source** | **string** | The source file for the conversion. | [optional] [default to undefined]
**result** | **any** | The resulting file after the conversion. | [optional] [default to undefined]
**error** | **string** | The conversion operation error message. | [optional] [default to undefined]
**processed** | **string** | Specifies if the conversion operation is processed or not. | [optional] [default to undefined]

## Example

```typescript
import { ConversationResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: ConversationResultDto = {
    id,
    Operation,
    progress,
    source,
    result,
    error,
    processed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
