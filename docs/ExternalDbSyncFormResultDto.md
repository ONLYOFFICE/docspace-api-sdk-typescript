# ExternalDbSyncFormResultDto

The result of an external DB synchronization for a single form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The form file ID. | [optional] [default to undefined]
**title** | **string** | The form file title. | [optional] [default to undefined]
**success** | **boolean** | Specifies whether the synchronization succeeded for this form. | [optional] [default to undefined]
**error** | **string** | The error message if the synchronization failed for this form. | [optional] [default to undefined]

## Example

```typescript
import { ExternalDbSyncFormResultDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalDbSyncFormResultDto = {
    id,
    title,
    success,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
