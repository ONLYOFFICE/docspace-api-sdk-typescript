# CheckDestFolderDto

The result of checking whether files can be moved or copied to the specified folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CheckDestFolderResult**](CheckDestFolderResult.md) |  | [optional] [default to undefined]
**files** | [**Array&lt;FileEntryBaseDto&gt;**](FileEntryBaseDto.md) | The list of files in the destination folder. | [optional] [default to undefined]

## Example

```typescript
import { CheckDestFolderDto } from '@onlyoffice/docspace-api-sdk';

const instance: CheckDestFolderDto = {
    result,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
