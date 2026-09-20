# CreateFolder

The title a folder is created with or renamed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title the folder is given. It is trimmed before it is stored and may not be blank or consist of spaces  alone; it need not differ from the titles of the neighbouring folders, so the same title may appear twice in  one parent. | [default to undefined]

## Example

```typescript
import { CreateFolder } from '@onlyoffice/docspace-api-sdk';

const instance: CreateFolder = {
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
