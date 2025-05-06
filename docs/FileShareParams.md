# FileShareParams

The collection of file sharing parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shareTo** | **string** | The ID of the user to whom the file will be shared. | [optional] [default to undefined]
**email** | **string** | The user email address. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FileShareParams } from '@onlyoffice/docspace-api-typescript';

const instance: FileShareParams = {
    shareTo,
    email,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
