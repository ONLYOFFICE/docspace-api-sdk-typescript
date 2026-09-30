# UpdateTagRequestDto

The parameters for renaming a custom room tag in the portal catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldName** | **string** | The name of the tag to rename, matched against the catalog exactly as it is stored rather than searched for.  Read the stored spelling from `GET api/2.0/files/tags`. | [default to undefined]
**newName** | **string** | The name to store instead. It has to be free: names are unique across the portal, so a name another tag  already carries is refused, and merging two tags this way is not possible. | [default to undefined]

## Example

```typescript
import { UpdateTagRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: UpdateTagRequestDto = {
    oldName,
    newName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
