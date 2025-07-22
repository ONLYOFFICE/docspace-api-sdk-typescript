# CopyAsJsonElement

The parameters for copying a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destTitle** | **string** | The copied file name. | [default to undefined]
**destFolderId** | [**CopyAsJsonElementDestFolderId**](CopyAsJsonElementDestFolderId.md) |  | [default to undefined]
**enableExternalExt** | **boolean** | Specifies whether to allow creating the copied file of an external extension or not. | [optional] [default to undefined]
**password** | **string** | The copied file password. | [optional] [default to undefined]
**toForm** | **boolean** | Specifies whether to convert the file to form or not. | [optional] [default to undefined]

## Example

```typescript
import { CopyAsJsonElement } from '@onlyoffice/docspace-api-sdk';

const instance: CopyAsJsonElement = {
    destTitle,
    destFolderId,
    enableExternalExt,
    password,
    toForm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
