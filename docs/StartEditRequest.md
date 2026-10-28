# StartEditRequest

The body of an editing session request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editingAlone** | **boolean** | Claims the file for this caller alone: the session is opened without asking the document service to track  co-editing, and the call is refused when anybody else already has the file open. Left off, an ordinary  co-editing session is opened and others may join it. | [optional] [default to undefined]

## Example

```typescript
import { StartEditRequest } from '@onlyoffice/docspace-api-sdk';

const instance: StartEditRequest = {
    editingAlone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
