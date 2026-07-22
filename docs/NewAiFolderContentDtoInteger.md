# NewAiFolderContentDtoInteger

The folder content information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**Array&lt;NewAiFileEntryBaseDto&gt;**](NewAiFileEntryBaseDto.md) | The list of files in the folder. | [optional] [default to undefined]
**folders** | [**Array&lt;NewAiFileEntryBaseDto&gt;**](NewAiFileEntryBaseDto.md) | The list of folders in the folder. | [optional] [default to undefined]
**current** | [**NewAiFolderDtoInteger**](NewAiFolderDtoInteger.md) |  | [optional] [default to undefined]
**pathParts** | **any** | The folder path. | [default to undefined]
**startIndex** | **number** | The folder start index. | [optional] [default to undefined]
**count** | **number** | The number of folder elements. | [optional] [default to undefined]
**total** | **number** | The total number of elements in the folder. | [default to undefined]
**_new** | **number** | The new element index in the folder. | [optional] [default to undefined]

## Example

```typescript
import { NewAiFolderContentDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: NewAiFolderContentDtoInteger = {
    files,
    folders,
    current,
    pathParts,
    startIndex,
    count,
    total,
    _new,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
