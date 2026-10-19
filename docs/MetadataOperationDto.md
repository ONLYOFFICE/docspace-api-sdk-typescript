# MetadataOperationDto

The cascade metadata assignment operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The operation ID. | [optional] [default to undefined]
**progress** | **number** | The operation progress percentage. | [optional] [default to undefined]
**isCompleted** | **boolean** | Specifies if the operation is completed. | [optional] [default to undefined]
**error** | **string** | The operation error message. | [optional] [default to undefined]
**templateIds** | **Array&lt;number&gt;** | The IDs of the metadata templates the operation propagates to the subtree. Empty when there is no operation to  report, so the answer describes nothing in progress. | [optional] [default to undefined]

## Example

```typescript
import { MetadataOperationDto } from '@onlyoffice/docspace-api-sdk';

const instance: MetadataOperationDto = {
    id,
    progress,
    isCompleted,
    error,
    templateIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
