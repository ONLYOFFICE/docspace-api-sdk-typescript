# CopyAsRequest

The parameters of a file copy that may change the format on the way.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destTitle** | **string** | The title of the copy, extension included. That extension decides the format: the same one as the source  copies the content as it is, a different one has it converted first. | [default to undefined]
**destFolderId** | [**CopyAsRequestDestFolderId**](CopyAsRequestDestFolderId.md) |  | [default to undefined]
**enableExternalExt** | **boolean** | Whether the extension of the new title may be one the portal does not edit itself. | [optional] [default to undefined]
**password** | **string** | The password that opens the source document, for a file that is protected by one. | [optional] [default to undefined]
**toForm** | **boolean** | Whether the copy is to become a PDF form rather than a plain document, which the conversion supports for the  text formats it can read. | [optional] [default to undefined]

## Example

```typescript
import { CopyAsRequest } from '@onlyoffice/docspace-api-sdk';

const instance: CopyAsRequest = {
    destTitle,
    destFolderId,
    enableExternalExt,
    password,
    toForm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
