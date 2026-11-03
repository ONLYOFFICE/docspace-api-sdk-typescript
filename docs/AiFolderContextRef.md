# AiFolderContextRef

A folder connected as the round\'s context - any folder of the portal, not only a room - named by its account and ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **string** | The account the folder belongs to; `docspace` for a folder of this portal. | [default to undefined]
**id** | **string** | The folder ID. | [default to undefined]

## Example

```typescript
import { AiFolderContextRef } from '@onlyoffice/docspace-api-sdk';

const instance: AiFolderContextRef = {
    cloud,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
