# SessionRequest

The session request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **string** | The file name. | [default to undefined]
**fileSize** | **number** | The file size. | [optional] [default to undefined]
**relativePath** | **string** | The relative path to the file. | [optional] [default to undefined]
**createOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**encrypted** | **boolean** | Specifies whether the file is encrypted or not. | [optional] [default to undefined]
**createNewIfExist** | **boolean** | Specifies whether to create a new file if it already exists. | [optional] [default to undefined]

## Example

```typescript
import { SessionRequest } from '@onlyoffice/docspace-api-typescript';

const instance: SessionRequest = {
    fileName,
    fileSize,
    relativePath,
    createOn,
    encrypted,
    createNewIfExist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
