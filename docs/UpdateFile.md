# UpdateFile

The changes to make to a file: a new title, an earlier version to restore, or both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The new title of the file, without an extension - the stored extension is kept whatever the title says, so a  rename cannot change the format. Left empty, the file keeps its name. | [optional] [default to undefined]
**lastVersion** | **number** | The version to restore on top of the history, as reported by `GET api/2.0/files/file/{fileId}/history`; 0 or  less leaves the versions untouched. | [optional] [default to undefined]

## Example

```typescript
import { UpdateFile } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateFile = {
    title,
    lastVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
