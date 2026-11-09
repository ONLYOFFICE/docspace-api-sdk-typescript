# FileKeysWrittenDto

The outcome of issuing file keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skippedUserIds** | **Array&lt;string&gt;** | The recipients whose key was not stored, because they can no longer read the file. Empty when every key was  stored. | [default to undefined]

## Example

```typescript
import { FileKeysWrittenDto } from '@onlyoffice/docspace-api-sdk';

const instance: FileKeysWrittenDto = {
    skippedUserIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
