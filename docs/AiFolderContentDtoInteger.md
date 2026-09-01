# AiFolderContentDtoInteger

The folder content information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The list of files in the folder. | [optional] [default to undefined]
**folders** | [**Array&lt;AiFileEntryBaseDto&gt;**](AiFileEntryBaseDto.md) | The list of folders in the folder. | [optional] [default to undefined]
**current** | [**AiFolderDtoInteger**](AiFolderDtoInteger.md) | The current folder information. | [optional] [default to undefined]
**pathParts** | **any** |  | [default to undefined]
**startIndex** | **number** | The folder start index. | [optional] [default to undefined]
**count** | **number** | The number of folder elements. | [optional] [default to undefined]
**total** | **number** | The total number of elements in the folder. | [default to undefined]
**_new** | **number** | The new element index in the folder. | [optional] [default to undefined]

## Example

```typescript
import { AiFolderContentDtoInteger } from '@onlyoffice/docspace-api-sdk';

const instance: AiFolderContentDtoInteger = {
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
