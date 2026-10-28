# EditHistoryUrlDto

The address, document key and format of the revision a comparison is made against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The document key of that revision. When the file has no earlier revision the portal generates a fresh key for  the template it falls back to, so the value is not always one an earlier revision ever had. | [optional] [default to undefined]
**url** | **string** | The address that revision\'s content is served from. It is meant for the editing service and carries its own  key, which is valid for a limited time. | [optional] [default to undefined]
**fileType** | **string** | The format of that revision, as an extension without the leading dot. | [optional] [default to undefined]

## Example

```typescript
import { EditHistoryUrlDto } from '@onlyoffice/docspace-api-sdk';

const instance: EditHistoryUrlDto = {
    key,
    url,
    fileType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
